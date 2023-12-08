/* eslint-disable no-unused-vars */
import debounce from '@/lib/debounce';
import { IToastProps, ToastPosition, ToastType } from '@/lib/toastTypes';
import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useRef,
  useState,
} from 'react';
import Toast from '../ui/toast/toast';

interface IToastComponentProps extends IToastProps {
  onClose: () => void;
}

interface IToastContext {
  addToast: (
    id: string,
    message: string,
    type: ToastType,
    position: ToastPosition
  ) => void;
  removeToast: (id: string) => void;
}

export const ToastContext: React.Context<IToastContext | undefined> =
  createContext<IToastContext | undefined>(undefined);

interface IToastProviderProps {
  children: ReactNode;
}

/**
 * Toast provider component.
 * @component
 */
export const ToastProvider: FC<IToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<IToastComponentProps[]>([]);
  const addToastRef = useRef(
    debounce((newToast: IToastComponentProps) => {
      setToasts((toasts) => [...toasts, newToast]);
    }, 300)
  );
  const removeToastRef = useRef(
    debounce((id: string) => {
      setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
    }, 300)
  );

  const addToast = useCallback(
    (id: string, message: string, type: ToastType, position: ToastPosition) => {
      if (toasts.some((toast) => toast.id === id)) {
        return;
      }

      const newToast: IToastComponentProps = {
        id,
        type,
        message,
        position,
        onClose: () => removeToastRef.current(id),
      };
      addToastRef.current(newToast);
    },
    [toasts]
  );

  const removeToast = useCallback((id: string) => {
    removeToastRef.current(id);
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </ToastContext.Provider>
  );
};

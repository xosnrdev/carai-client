import { ToastContext } from '@/components/providers/ToastProvider';
import generateId from '@/lib/randomString';
import { ToastPosition, ToastType } from '@/lib/toastTypes';
import { useContext } from 'react';

const useToast = () => {
  const toastContext = useContext(ToastContext);

  if (!toastContext) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  const { addToast } = toastContext;

  const toast = (
    message: string,
    options: { type?: ToastType; position?: ToastPosition } = {}
  ) => {
    const { type = ToastType.Success, position = ToastPosition.TopCenter } =
      options;
    const id = generateId();
    console.log(id);
    addToast(id, message, type, position);
  };

  return toast;
};

export default useToast;

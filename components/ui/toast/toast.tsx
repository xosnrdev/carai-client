import { IToastComponentProps, ToastType } from '@/lib/toastTypes';
import { motion, useAnimation } from 'framer-motion';
import { Info, XCircle } from 'lucide-react';
import { FC, memo, useEffect } from 'react';

interface IToastProps extends IToastComponentProps {
  duration?: number;
}

const Toast: FC<IToastProps> = memo(
  ({ type, message, position, onClose, duration = 5000 }) => {
    const toastStyle = {
      [ToastType.Error]: 'border-red-500 bg-red-200 text-red-500',
      [ToastType.Success]: 'border-green-500 bg-green-200 text-green-500',
    };

    const toastPositions = {
      'top-center': 'top-0 left-1/2 transform -translate-x-1/2',
      'top-left': 'top-0 left-0',
      'top-right': 'top-0 right-0',
      'bottom-center': 'bottom-0 left-1/2 transform -translate-x-1/2',
      'bottom-left': 'bottom-0 left-0',
      'bottom-right': 'bottom-0 right-0',
    };

    const fadeEffect = useAnimation();

    useEffect(() => {
      fadeEffect
        .start({ opacity: 1 })
        .catch((error) => console.error('Fade in animation failed', error));

      const timer = setTimeout(onClose, duration);

      return () => clearTimeout(timer);
    }, [onClose, fadeEffect, duration]);

    const handleClose = async () => {
      try {
        await fadeEffect.start({ opacity: 0 });
      } catch (error) {
        console.error('Fade out animation failed', error);
      }
      onClose();
    };

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={fadeEffect}
        className={`px-3 py-4 border border-solid rounded-xl ${toastStyle[type]} fixed ${toastPositions[position]}`}
      >
        <div className="flex flex-row items-center justify-between gap-x-3">
          <button onClick={handleClose} aria-label="Information">
            <Info size={24} className={`cursor-pointer ${toastStyle[type]}`} />
          </button>
          <p className={`text-base ${toastStyle[type]}`}>{message}</p>
          <button onClick={handleClose} aria-label="Close">
            <XCircle
              size={24}
              className={`cursor-pointer ${toastStyle[type]}`}
            />
          </button>
        </div>
      </motion.div>
    );
  }
);

Toast.displayName = 'Toast';

export default Toast;

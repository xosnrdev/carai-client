/* eslint-disable no-unused-vars */
/**
 * Enum for toast types.
 * @readonly
 * @enum {string}
 */
export enum ToastType {
  Success = 'success',
  Error = 'error',
}

/**
 * Enum for toast positions.
 * @readonly
 * @enum {string}
 */
export enum ToastPosition {
  TopCenter = 'top-center',
  TopLeft = 'top-left',
  TopRight = 'top-right',
  BottomCenter = 'bottom-center',
  BottomLeft = 'bottom-left',
  BottomRight = 'bottom-right',
}

/**
 * Interface for toast properties.
 * @interface
 */
export interface IToastProps {
  id: string;
  type: ToastType;
  message: string;
  position: ToastPosition;
}

/**
 * Interface for toast component properties.
 * @interface
 */
export interface IToastComponentProps extends IToastProps {
  onClose: () => void;
}

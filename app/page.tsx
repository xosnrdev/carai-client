'use client';

import useToast from '@/hooks/useToast';
import { ToastPosition, ToastType } from '@/lib/toastTypes';

export default function Home() {
  const toast = useToast();
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="text-4xl text-primary">
        Under construction at the moment
      </h1>

      <button
        onClick={() => {
          toast('sorry we"re experiencing a server runtime error', {
            type: ToastType.Error,
            position: ToastPosition.TopCenter,
          });
        }}
      >
        click me
      </button>
      <button
        onClick={() => {
          toast('the page is not found', {
            type: ToastType.Error,
            position: ToastPosition.TopRight,
          });
        }}
      >
        click me
      </button>
      <button
        onClick={() => {
          toast('congratulations its nice to see you back', {
            type: ToastType.Success,
            position: ToastPosition.BottomCenter,
          });
        }}
      >
        click me
      </button>
    </main>
  );
}

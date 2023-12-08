/* eslint-disable no-unused-vars */
/**
 * Debounce function to prevent frequent function calls
 * @param {Function} func - The function to be debounced
 * @param {number} delay - The delay in milliseconds
 * @returns {Function} - The debounced function
 */
function debounce<F extends (...args: any[]) => any>(
  func: F,
  delay: number
): (...args: Parameters<F>) => void {
  let timeoutId: number | null = null;
  return (...args: Parameters<F>): void => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(() => func(...args), delay);
  };
}

export default debounce;

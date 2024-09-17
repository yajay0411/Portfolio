import { useNavigate } from "react-router-dom";

/**
 * Custom navigation utility hook
 * @returns {Function} navigateTo - A function to navigate to a route with custom logic
 */
export const Navigate = () => {
  const navigate = useNavigate();

  /**
   * Custom function to navigate to a route
   * @param {string} path - The path to navigate to
   * @param {boolean} [replace=false] - Whether to replace the history stack (default is false)
   * @param {unknown} [state] - Optional state to pass to the route
   */
  const navigateTo = (
    path: string,
    replace: boolean = false,
    state: unknown = null
  ) => {
    // You can add any custom logic before navigating (e.g., logging, analytics, etc.)
    console.log(`Navigating to ${path}`);

    // Call the built-in navigate function with any options provided
    navigate(path, { replace, state });
  };

  return navigateTo;
};

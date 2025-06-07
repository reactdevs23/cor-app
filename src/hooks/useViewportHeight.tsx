import { useEffect } from "react";

/**
 * Hook that sets a CSS variable '--real-vh' to 1% of the viewport height.
 * Useful to fix viewport height issues on mobile browsers.
 */
const useViewportHeight = (): void => {
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--real-vh", `${vh}px`);
    };

    setViewportHeight();
    window.addEventListener("resize", setViewportHeight);

    return () => window.removeEventListener("resize", setViewportHeight);
  }, []);
};

export default useViewportHeight;

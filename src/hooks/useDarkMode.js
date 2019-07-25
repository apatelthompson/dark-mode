import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useDarkMode() {
  const [enabledState, setEnabledState] = useLocalStorage(false);

  useEffect(() => {
    const className = "dark-mode";
    const element = window.document.body;
    if (enabledState === true) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [enabledState]);

  return [enabledState, setEnabledState];
}

export default useDarkMode;

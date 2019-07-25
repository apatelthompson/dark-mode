import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useDarkMode() {
  const [enabledState, setEnabledState] = useLocalStorage("dark-mode-enabled");

  useEffect(() => {
    const className = "dark-mode";
    const element = window.document.body;
    if (useLocalStorage === true) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, []);

  return [enabledState, setEnabledState];
}

export default useDarkMode;

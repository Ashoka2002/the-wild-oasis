import { useEffect, useRef } from "react";

export function useCloseModalWindow(close) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        console.log("hello");
        if (ref.current && !ref.current.contains(e.target)) {
          close();
        }
      }

      document.addEventListener("click", handleClick, true);
      return () => document.removeEventListener("click", handleClick, true);
    },
    [close]
  );

  return ref;
}

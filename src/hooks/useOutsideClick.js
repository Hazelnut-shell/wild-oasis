import { useEffect, useRef } from "react";

// call handler when clicking outside ref
// can specify in capturing phase or bubbling phase
export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        // might be rendering null, so we need to check if ref.current exists
        if (ref.current && !ref.current.contains(e.target)) {
          // console.log(ref.current);
          console.log("click outside");
          handler();
        }
      }

      // document.addEventListener("click", handleClick);
      document.addEventListener("click", handleClick, listenCapturing);

      return () => document.removeEventListener("click", handleClick);
    },
    [handler, listenCapturing]
  );

  return ref;
}

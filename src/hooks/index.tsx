import { useEffect, RefObject } from "react";

type Event = MouseEvent | TouchEvent;

function useOnClickOutside(
  refs: RefObject<HTMLElement> | RefObject<HTMLElement>[],
  handler: (event: Event) => void
) {
  useEffect(() => {
    const listener = (event: Event) => {
      const refArray = Array.isArray(refs) ? refs : [refs];

      // If click is inside any of the refs, do nothing
      if (
        refArray.some(
          (ref) => ref.current && ref.current.contains(event.target as Node)
        )
      ) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refs, handler]);
}

export default useOnClickOutside;

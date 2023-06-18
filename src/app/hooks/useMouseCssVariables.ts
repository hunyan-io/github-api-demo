import { useRef } from "react";
import { useEventListener } from "usehooks-ts";

/**
 * Applies css variables to an element that represent the mouse position relative to the element. The css variables are `--mouse-x` and `--mouse-y`.
 * @param ref The ref of the element to apply the mouse css variables to
 */
export default function useMouseCssVariables(
  ref: React.RefObject<HTMLElement>
) {
  const nextFrameRef = useRef<(() => void) | null>(null);
  const scheduledRef = useRef<boolean>(false);

  const schedule = (fn: () => void) => {
    nextFrameRef.current = fn;
    if (!scheduledRef.current) {
      scheduledRef.current = true;
      requestAnimationFrame(() => {
        scheduledRef.current = false;
        nextFrameRef.current && nextFrameRef.current();
      });
    }
  };

  useEventListener(
    "mousemove",
    (e) => {
      schedule(() => {
        if (ref.current) {
          const localX = e.pageX - ref.current.offsetLeft;
          const localY = e.pageY - ref.current.offsetTop;
          ref.current.style.setProperty("--mouse-x", `${localX}px`);
          ref.current.style.setProperty("--mouse-y", `${localY}px`);
        }
      });
    },
    ref
  );
}

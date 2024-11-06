import { useWindowEvent } from "@mantine/hooks";
import { useRef } from "react";

const useOnScrollProgress = (progress: number, fn: (e: Event) => void) => {
  const alreadyExecute = useRef(false);

  useWindowEvent("scroll", (e) => {
    const {
      scrollTop = 0,
      scrollHeight = 0,
      clientHeight = 0,
    } = window.document.scrollingElement ?? {};

    const percentageScroll = scrollTop / (scrollHeight - clientHeight);

    if (percentageScroll >= progress && !alreadyExecute.current) {
      alreadyExecute.current = true;
      fn(e);
    }
    if (percentageScroll < progress) alreadyExecute.current = false;
  });
};

export default useOnScrollProgress;

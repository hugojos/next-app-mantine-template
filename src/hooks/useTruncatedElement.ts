import { useLayoutEffect, useRef, useState } from "react";

export const useTruncatedElement = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useLayoutEffect(() => {
    const { offsetHeight, scrollHeight } = ref.current || {};

    if (offsetHeight && scrollHeight)
      setIsTruncated(offsetHeight < scrollHeight);
  }, [ref]);

  return {
    ref,
    isTruncated
  };
};

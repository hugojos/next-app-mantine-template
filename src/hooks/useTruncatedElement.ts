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
    isTruncated,
  };
};

// import { useLayoutEffect, useState } from "react";

// export const useTruncatedElement = () => {
//   const [ref, setRef] = useState<HTMLDivElement | null>(null);
//   const [isTruncated, setIsTruncated] = useState(false);
//   const [isReadingMore, setIsReadingMore] = useState(false);

//   console.log(ref);

//   useLayoutEffect(() => {
//     const { offsetHeight, scrollHeight } = ref || {};

//     if (offsetHeight && scrollHeight)
//       setIsTruncated(offsetHeight < scrollHeight);
//   }, [ref]);

//   return {
//     ref: setRef,
//     isTruncated,
//     isReadingMore,
//     setIsReadingMore,
//   };
// };

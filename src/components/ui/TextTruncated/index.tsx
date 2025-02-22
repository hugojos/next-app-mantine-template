import { Button, Text, TextProps } from "@mantine/core";
import clsx from "clsx";
import { useState } from "react";
import { useTruncatedElement } from "src/hooks/useTruncatedElement";

interface TextTruncatedProps extends TextProps {
  maxRows?: number;
  text: string;
}

export const TextTruncated = ({
  maxRows = 3,
  text,
  className,
}: TextTruncatedProps) => {
  const { ref, isTruncated } = useTruncatedElement();

  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <Text
        className={clsx(
          showMore ? "" : classByMaxRows[maxRows - 1],
          "whitespace-pre-line",
          className,
        )}
        ref={ref}
      >
        {text}
      </Text>
      {isTruncated && (
        <Button
          size="compact-xs"
          variant="subtle"
          color="blue"
          onClick={() => setShowMore(!showMore)}
          className="text-xs"
        >
          {showMore ? "Ver menos" : "Ver más"}
        </Button>
      )}
    </div>
  );
};

const classByMaxRows = [
  "line-clamp-1",
  "line-clamp-2",
  "line-clamp-3",
  "line-clamp-4",
  "line-clamp-5",
  "line-clamp-6",
];

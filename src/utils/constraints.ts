import type { FormEvent } from "react";

type InputEvent = FormEvent<HTMLInputElement>;

const createConstraint = (
  transform: (val: string, e: InputEvent) => string,
) => {
  return (e: InputEvent) => {
    e.currentTarget.value = transform(e.currentTarget.value, e);
  };
};

export const onlyNumbers = createConstraint((v) => v.replace(/[^0-9]/g, ""));

export const toLowerCase = createConstraint((v) => v.toLowerCase());

export const capitalizeWords = createConstraint((v) =>
  v
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" "),
);

export const toUpperCase = createConstraint((v) => v.toUpperCase());

export const sanitizePersonName = createConstraint((v) => {
  const blacklist = [
    "@",
    "#",
    "$",
    "%",
    "^",
    "*",
    "=",
    "+",
    "[",
    "]",
    "{",
    "}",
    "<",
    ">",
    "/",
    "\\",
    "|",
    "`",
    "~",
    '"',
    ";",
    ":",
    "¡",
    "!",
    "¿",
    "?",
  ];

  const blacklistRegex = new RegExp(
    `[${blacklist.map((char) => "\\" + char).join("")}]`,
    "g",
  );

  let cleaned = v.replace(blacklistRegex, "");

  cleaned = cleaned.replace(/\s+/g, " ");

  cleaned = cleaned
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return cleaned;
});

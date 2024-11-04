import React from "react";

type Props = {
  children: React.ReactNode;

  element?: React.ElementType;
  // element?: string;

  className?: string;
};

export default function MaxWidthWrapper({
  children,
  className,
  element = "div",
}: Props) {
  return React.createElement(
    element,
    { className: `container mx-auto max-w-6xl ${className}` },
    children,
  );
}

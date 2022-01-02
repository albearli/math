import React from "react";

type Props = {
  cssID?: string;
  children: React.ReactNode;
  href?: string;
};

export default function Link({
  children,
  cssID,
  href,
}: Props): React.ReactElement {
  if (href == null) {
    return <strong id={cssID}>{children}</strong>;
  }

  return (
    <a
      className="underline decoration-2 decoration-indigo-500"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <strong>{children}</strong>
    </a>
  );
}

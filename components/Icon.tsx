import * as React from "react";

type Props = React.SVGProps<SVGSVGElement> & {
  name:
    | "arrowRight"
    | "sparkle"
    | "brush"
    | "code"
    | "penTool"
    | "type"
    | "mail"
    | "link";
};

export function Icon({ name, ...props }: Props) {
  switch (name) {
    case "arrowRight":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
          <path
            d="M9 18l6-6-6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "sparkle":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
          <path
            d="M12 2l1.2 4.2L17.4 8 13.2 9.2 12 13.4 10.8 9.2 6.6 8l4.2-1.8L12 2z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M19 12l.7 2.2L22 15l-2.3.8L19 18l-.7-2.2L16 15l2.3-.8L19 12z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "brush":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
          <path
            d="M14.5 3.5l6 6L10 20H4v-6L14.5 3.5z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M10 20c0 2-1.5 3.5-4 3.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "code":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
          <path
            d="M9 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "penTool":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
          <path
            d="M12 20l7-7-3-3-7 7v3h3z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M16 10l-2-2 2-2 2 2-2 2z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M5 19h4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "type":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
          <path
            d="M5 7V5h14v2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M12 5v14"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M8 19h8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
          <path
            d="M4 7h16v10H4V7z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M4 8l8 6 8-6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "link":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
          <path
            d="M10 13a5 5 0 0 0 7.1.1l1.8-1.8a5 5 0 0 0-7.1-7.1L10.8 5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 11a5 5 0 0 0-7.1-.1L5.1 12.7a5 5 0 0 0 7.1 7.1L13.2 19"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}


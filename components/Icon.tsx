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
    | "link"
    | "download"
    | "server"
    | "check"
    | "mapPin";
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
    case "download":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
          <path
            d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 20h14"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "server":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
          <path
            d="M4 4h16v6H4V4zM4 14h16v6H4v-6z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M8 7h.01M8 17h.01"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
          <path
            d="M5 12.5l4.5 4.5L19 7.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "mapPin":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
          <path
            d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
  }
}

import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  holdAfterType?: number;
  holdAfterDelete?: number;
  className?: string;
  minWidth?: string;
}

export default function Typewriter({
  text,
  typeSpeed = 70,
  deleteSpeed = 45,
  holdAfterType = 1100,
  holdAfterDelete = 350,
  className = "",
  minWidth = "9ch",
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && index < text.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, index + 1));
        setIndex(index + 1);
      }, typeSpeed);
    } else if (!isDeleting && index === text.length) {
      // Pause after typing
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, holdAfterType);
    } else if (isDeleting && index > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, index - 1));
        setIndex(index - 1);
      }, deleteSpeed);
    } else if (isDeleting && index === 0) {
      // Pause after deleting
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, holdAfterDelete);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, typeSpeed, deleteSpeed, holdAfterType, holdAfterDelete]);

  return (
    <span
      className={`inline-block whitespace-nowrap overflow-visible ${className}`}
      style={{ minWidth: minWidth === "9ch" ? "10ch" : minWidth }}
    >
      {displayText}
    </span>
  );
}

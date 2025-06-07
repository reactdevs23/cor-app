// ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Important to return null since this component does not render anything
};

export default ScrollToTop;

// utils.ts
export const copyToClipboard = (value: string): void => {
  navigator.clipboard.writeText(value);
};

export const maskToken = (
  token: string,
  tokenLength = 5,
  maskLength = 2
): string => {
  if (!token) return "";

  const mask = "*".repeat(maskLength);

  if (token.length >= 10) {
    const firstPart = token.slice(0, tokenLength);
    const lastPart = token.slice(-tokenLength);
    return `${firstPart}${mask}${lastPart}`;
  } else {
    const middleIndex = Math.floor(token.length / 2);
    const firstPart = token.slice(0, middleIndex);
    const lastPart = token.slice(middleIndex);
    return `${firstPart}${mask}${lastPart}`;
  }
};

export const maskAddress = (address: string): string => {
  if (!address) return "";

  if (address.length >= 10) {
    const firstPart = address.slice(0, 4);
    const lastPart = address.slice(-4);
    return `${firstPart}..${lastPart}`;
  } else {
    const middleIndex = Math.floor(address.length / 2);
    const firstPart = address.slice(0, middleIndex);
    const lastPart = address.slice(middleIndex);
    return `${firstPart}..${lastPart}`;
  }
};

export const scrollToBottom = (): void => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};

export const getLocalStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const stored = localStorage.getItem(key);
    return stored !== null ? JSON.parse(stored) : defaultValue;
  } catch {
    return defaultValue;
  }
};

export const setLocalStorage = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Failed to save ${key} to localStorage`, e);
  }
};

export const handleKeyDown = (
  event: React.KeyboardEvent<HTMLInputElement>
): void => {
  const allowedKeys = [
    "Backspace",
    "ArrowUp",
    "ArrowDown",
    "ArrowRight",
    "ArrowLeft",
    "Tab",
  ];

  if (/[0-9]/.test(event.key) || allowedKeys.includes(event.key)) {
    return;
  }

  if (event.key === ".") {
    if ((event.target as HTMLInputElement).value.includes(".")) {
      event.preventDefault();
    }
    return;
  }

  event.preventDefault();
};

export const getInitials = (fullName: string): string => {
  if (!fullName) return "";

  const parts = fullName.trim().split(/\s+/);
  const firstInitial = parts[0]?.[0]?.toUpperCase() || "";
  const lastInitial =
    parts.length > 1 ? parts[parts.length - 1][0].toUpperCase() : "";

  return firstInitial + lastInitial;
};

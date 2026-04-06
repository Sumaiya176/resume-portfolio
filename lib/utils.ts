export function cn(...inputs: (string | undefined | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}

export function getResolvedTheme(
  theme: string | undefined,
  systemTheme: string | undefined
): "dark" | "light" {
  if (theme === "dark" || theme === "light") return theme;
  return systemTheme === "dark" ? "dark" : "light";
}

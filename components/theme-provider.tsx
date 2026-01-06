"use client"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps, useTheme as useNextTheme } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export function useTheme() {
  const { theme, setTheme, systemTheme } = useNextTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return {
    theme,
    setTheme,
    systemTheme,
    toggleTheme,
  }
}

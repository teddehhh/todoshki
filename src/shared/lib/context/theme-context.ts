import { createContext } from "react";
import { type ThemeContextProps } from "../../types/theme";

export const ThemeContext = createContext<ThemeContextProps | null>(null);

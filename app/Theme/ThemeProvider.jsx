"use client"
import { ThemeProvider } from "next-themes"

const ThemeProviders = ({ children }) => {
	return (
		<ThemeProvider enableSystem={true} attribute="class">
			{children}
		</ThemeProvider>
	)
}

export default ThemeProviders
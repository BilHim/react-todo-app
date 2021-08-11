import { useEffect, useState } from "react";

function useDarkMode(prop) {
	const [theme, setTheme] = useState(prop);
	useEffect(() => {
		const notTheme = theme === "light" ? "dark" : "light";
		const root = window.document.documentElement;
		root.classList.remove(notTheme);
		root.classList.add(theme);

		// Save settings in localStorage
		localStorage.setItem("theme", theme);
	}, [theme]);
	return [theme, setTheme];
}

export default useDarkMode;

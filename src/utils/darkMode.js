/* Este código se ejecuta antes que nada. En caso de no encontrar nada en localStorage, detecta la preferencia del SO y establece el tema*/
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  localStorage.theme = "dark";
} else {
  document.documentElement.classList.remove("dark");
  localStorage.theme = "light";
}

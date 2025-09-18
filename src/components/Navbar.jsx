import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import GrainImage from "../assets/images/grain.jpg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  // Initialize theme synchronously from the DOM class added in index.html (prevents initial flicker)
  const [theme, setTheme] = useState(() => {
    if (typeof document !== "undefined") {
      return document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
    }
    return "light";
  });

  const applyTheme = (next) => {
    // Keep <html> in sync with state so Tailwind's `dark:` variant works
    document.documentElement.classList.toggle("dark", next === "dark");
    // Hint to user agent for built-in components and color-scheme-aware UI
    document.documentElement.style.colorScheme = next;
    localStorage.setItem("theme", next);
  };

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    applyTheme(next);
  };

  useEffect(() => {
    // Optional: listen for changes from other tabs and (if no explicit pref) system changes
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onMedia = (e) => {
      if (!localStorage.getItem("theme")) {
        const val = e.matches ? "dark" : "light";
        setTheme(val);
        applyTheme(val);
      }
    };
    const onStorage = (e) => {
      if (e.key === "theme") {
        const val = e.newValue ?? (media.matches ? "dark" : "light");
        setTheme(val);
        applyTheme(val);
      }
    };
    media.addEventListener("change", onMedia);
    window.addEventListener("storage", onStorage);
    return () => {
      media.removeEventListener("change", onMedia);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <>
      <header className="fixed top-0 left-0 z-10 w-full px-4 py-3">
        <nav className="relative mx-auto flex max-w-lg items-center justify-end rounded-4xl border border-white/15 bg-white/10 p-2 shadow-lg backdrop-blur md:justify-between">
          {/* logo */}
          <a
            href="#home"
            className="order-1 mr-auto grid size-8 place-items-center rounded-full bg-gradient-to-r from-blue-400 to-blue-500 font-semibold text-white md:mr-0"
          >
            GP
          </a>
          {/* toggle menu */}
          <button
            className="ham-button order-3 mr-1 ml-4 cursor-pointer md:order-2 md:hidden"
            onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
          >
            {isMenuOpen ? (
              <X />

            ) : (
              <Menu />
            )}
          </button>

          {/* desktop nav items */}
          <div className="order-2 hidden items-center gap-10 md:flex">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`font-medium ${activeLink === link.href ? "text-blue-400" : "text-gray-400 hover:text-blue-400"}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* mobile menu items */}
          {isMenuOpen && (
            <ul className="absolute top-16 left-0 z-0 mx-auto w-full rounded-4xl border border-white/15 text-clr-text bg-clr-bg p-2 shadow-lg md:hidden overflow-hidden">
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${GrainImage})`,
                }}
              ></div>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    onClick={() => {
                      setActiveLink(link.href);
                      setIsMenuOpen(false);
                    }}
                    className={`block rounded-4xl p-4 font-medium transition hover:text-white hover:bg-blue-400 ${activeLink === link.href ? "text-blue-600" : "text-gray-500 hover:text-blue-600"}`}
                    key={index}
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {/* toggle btn theme */}
          <button
            type="button"
            onClick={toggleTheme}
            // Accessibility: provide an accessible name and pressed state
            aria-pressed={theme === "dark"}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            title={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className="stransition-colors order-2 grid size-8 cursor-pointer place-content-center rounded-full shadow-md ease-in-out md:order-3"
          >
            {/* Decorative icons: hide from assistive tech */}
            {theme === "light" ? (
              <Moon aria-hidden className="size-6" />
            ) : (
              <Sun aria-hidden className="size-6" />
            )}
          </button>
        </nav>
      </header>
    </>
  );
}

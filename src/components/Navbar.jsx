import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <>
      <header className="fixed top-0 left-0 z-10 w-full p-4">
        <nav className="relative mx-auto flex max-w-lg items-center justify-between rounded-4xl p-2 shadow-lg outline outline-gray-300 backdrop-blur-lg">
          {/* logo */}
          <a
            href="#home"
            className="grid size-8 place-items-center rounded-full bg-blue-600 font-semibold text-white"
          >
            GP
          </a>
          {/* toggle menu */}
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="32px"
                fill="#e3e3e3"
                className="fill-gray-600"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 -960 960 960"
                width="32px"
                fill="#e3e3e3"
                className="fill-gray-600"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            )}
          </button>

          {/* desktop nav items */}
          <div className="mr-4 hidden items-center gap-10 md:flex">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`font-medium ${activeLink === link.href ? "text-blue-600" : "text-gray-500 hover:text-blue-600"}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* mobile menu items */}
          {isMenuOpen && (
            <ul className="absolute top-16 left-0 mx-auto w-full rounded-4xl bg-white p-6 shadow-lg outline outline-gray-300 md:hidden">
              {navLinks.map((link, index) => (
                <li>
                  <a
                    onClick={() => {
                      setActiveLink(link.href);
                      setIsMenuOpen(false);
                    }}
                    className={`block py-2 font-medium ${activeLink === link.href ? "text-blue-600" : "text-gray-500 hover:text-blue-600"}`}
                    key={index}
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </header>
    </>
  );
}

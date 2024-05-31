import { useEffect, useState } from "react";

export default function NavBar() {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    });
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-primary ${
        shadow ? "shadow-md " : ""
      }z-50 flex justify-between py-7 px-5 text-custom_white`}
    >
      <div>
        <p>WhatsApp Analytics</p>
      </div>
      <ul className="flex gap-3">
        <li className="hover:text-custom_yellow cursor-pointer">Home</li>
        <li className="hover:text-custom_yellow cursor-pointer">Tutorial</li>
        <li className="hover:text-custom_yellow cursor-pointer">Demo</li>
      </ul>
      <ul className="flex gap-3">
        <li className="hover:text-custom_yellow cursor-pointer">About</li>
        <li className="hover:text-custom_yellow cursor-pointer">Security</li>
        <li className="hover:text-custom_yellow cursor-pointer">
          <button>Language</button>
        </li>
      </ul>
    </nav>
  );
}

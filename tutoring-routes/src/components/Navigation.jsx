import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  /* Array mit den Links/Seiten die wir rendern möchten */
  const navItems = [
    { name: "Home", to: "/", id: 1 } /* Als Obj mit name/to(pfad)/uniqueId */,
    { name: "About", to: "/about", id: 2 },
    { name: "Contact", to: "/contact", id: 3 },
  ];
  return (
    <nav>
      <ul className="navLinks">
        {navItems.map((item) => (
          <li>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              key={item.id}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

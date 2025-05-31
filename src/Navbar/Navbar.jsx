import React, { useState } from "react";
import {MdMenu} from "react-icons/md"
import ResponsiveMenu from "./ResponsiveMenu";

export default function Navbar() {
    
    const [open, setOpen] = useState(true);

  const navbarMenu = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "About us",
      link: "#",
    },
    {
      id: 3,
      title: "Products",
      link: "#",
    },
    {
      id: 4,
      title: "Testimonials",
      link: "#",
    },
    {
      id: 5,
      title: "Gallery",
      link: "#",
    },
    {
      id: 6,
      title: "Contact",
      link: "#",
    },
  ];

  

  return (
    <>
      <nav>
        <div className="container mx-auto flex justify-between items-center py-5 px-16">
          <div>Minana</div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              {navbarMenu.map((item) => (
                <li key={item.id}>
                  <a href={item.link} className="inline-block py-1 px-3 hover:text-red-600"> {item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* hamburgar */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl"/>
          </div>
        </div>
      </nav>
      <ResponsiveMenu open={open} setOpen=
      {setOpen} />
    </>
  );
}

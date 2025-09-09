import { Container } from "luciDe-react";

const NavBar = () => {
  return (
    <>
      <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
        <Container className="mr-2"/>
        Perfecto
        <span className="text-accent">Dev</span>
      </a>
      <ul className="hidden md:flex space-x-6 font-medium">
        <li>
          <a href="#" className="hover:text-accent transition">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-accent transition">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-accent transition">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-accent transition">
            Contact
          </a>
        </li> 
      </ul>
    </>
  );
};

export default NavBar;

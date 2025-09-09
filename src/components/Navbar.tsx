import { Container } from "luciDe-react";

const NavBar = () => {
  return (
    <div className="flex justify-center md:justify-between items-center p-4 text-3xl ">
      <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
        <Container className="mr-2"/>
        Perfecto
        <span className="text-accent">Dev</span>
      </a>
      <ul className="hidden md:flex space-x-6 font-medium">
        <li>
          <a href="#" className="btn btn-md btn-ghost hover:text-accent transition">
            Acceuil
          </a>
        </li>
        <li>
          <a href="#" className="btn btn-md btn-ghost hover:text-accent transition">
            A Propos
          </a>
        </li>
        <li>
          <a href="#" className="btn btn-md btn-ghost hover:text-accent transition">
            Mes Experiences
          </a>
        </li>
        <li>
          <a href="#" className="btn btn-md btn-ghost hover:text-accent transition">
            Mes Competences
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

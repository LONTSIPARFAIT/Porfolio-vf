import { Container } from "luciDe-react";

const NavBar = () => {
  return (
    <>
      <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
        <Container className="mr-2"/>
        Perfecto
        <span className="text-accent">Dev</span>
      </a>
    </>
  );
};

export default NavBar;

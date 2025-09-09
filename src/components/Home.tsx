import { Mail } from "luciDe-react";

const Home = () => {  
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center md:my-32 my-10">
      <div className="flex flex-col">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">Bonjour , <br /> Je suis {" "}
          <span className="text-accent">PerfectoDev</span> 
        </h1>
        <p className="my-4 text-md text-center md:text-left mt-4 text-gray-100">
          Je suis un Développeur Fulfstack <br /> Passionné par la création d'applications innovantes et performantes.<br /> Contactez moi si vous avez besoin de mes services
        </p>

        <a href="" className="btn btn-accent md:w-fit">
          <Mail className="w-5 h-5"/>
          Contactez moi
        </a>
    
      </div>

      <div className="d">x</div>

    </div>
  );
};

export default Home;

import { Mail } from "lucide-react";
import img from "../assets/img3.jpg";

const Home = () => {  
  return (
    <div id="home" className="flex flex-col-reverse md:flex-row items-center justify-center md:my-32 my-10">

      <div className="flex flex-col">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">Bonjour , <br /> Je suis {" "}
          <span className="text-accent">Lontsi Parfait</span> 
        </h1>
        <p className="my-4 text-md text-center md:text-left mt-4 text-gray-100">
          Je suis un Développeur Fulfstack <br /> Passionné par la création d'applications innovantes et performantes.<br /> Contactez moi si vous avez besoin de mes services
        </p>

        <a href="" className="btn btn-accent md:w-fit">
          <Mail className="w-5 h-5"/>
          Contactez moi
        </a>
    
      </div>

      <div className="md:ml-60">
        <img src={img} 
        alt="Lontsi Parfait" 
        className="w-96 h-96 object-cover border-8 border-accent shadow-xl" 
        style={
          {
            borderRadius :  "30% 70% 70% 30% / 67% 62% 38% 33%"
          }}/>

      </div>

    </div>
  );
};

export default Home;

import Title from "./Title";
import img from "../assets/img3.jpg";

const About = () => {
  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32">
      <Title title="A Propos" />

      <div className="md:h-screen flex justify-center">

        <div className="">
          <img
            src={img}
            alt="Lontsi Parfait"
            className="w-96 object-cover rounded-xl "
          />
        </div>

        <div className=""></div>
        
      </div>
    </div>
  );
};

export default About;

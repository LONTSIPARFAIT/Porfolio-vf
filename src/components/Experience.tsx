import Title from './Title' 
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgPRISMA from "../assets/techno/prisma.webp";


const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "TypeScript", image: imgTYPE },
    { id: 8, name: "Next.js", image: imgNEXT },
    { id: 9, name: "Prisma", image: imgPRISMA },
];

const Experience = () => {
  return (
    <div>
      <Title title="Expériences" />
      <div className="" >
        <div className="" >
          {skills.map((skill) => (
            <div key={skill.id} className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl">

              <div className="md:ml-4 text-center md:text-left">
                <img src={skill.image} 
                  alt="Lontsi Parfait" 
                  className="w-96 h-96 object-cover border-8 border-accent shadow-xl" 
                  style={
                    {
                      borderRadius :  "30% 70% 70% 30% / 67% 62% 38% 33%"
                }}/>
              </div>
              <span className="text-sm mt-2">{skill.name}</span>
              <p className="text-sm"> {skill.description} </p>

            </div>
          ))}
        </div>

        <div className="" ></div>

      </div>
    </div>
  )
}

export default Experience

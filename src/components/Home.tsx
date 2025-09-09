const Home = () => {  
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center md:my-32 my-10">
      <div className="d">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">Bonjour , <br /> Je suis {" "}
          <span className="text-accent">PerfectoDev</span> 
        </h1>
        <p className="text-lg text-center md:text-left mt-4 text-gray-600">
          Développeur web et mobile passionné par la création d'applications innovantes et performantes.
        </p>
    
      </div>

      <div className="d">x</div>

    </div>
  );
};

export default Home;

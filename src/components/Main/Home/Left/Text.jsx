import ReactTypingEffect from "react-typing-effect";

const Text = () => {
  return (
    <>
      <h1 className="text-4xl sm:text-6xl 2xl:text-7xl font-bold mb-2">
        Hi, I'am <span className="text-violet-600">Terry</span>
      </h1>
      <div className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-bold">
        <p className="mb-2 sm:mb-3">I Can Service </p>
        <ReactTypingEffect
          speed={100}
          eraseSpeed={100}
          eraseDelay={1000}
          typingDelay={1000}
          className="text-violet-600"
          text={[
            " FrontEnd Development",
            " API Development",
            " FullStack Development",
          ]}
        />
      </div>
      <button className="text-lg sm:text-2xl px-5 py-3 sm:px-7 sm:py-5 bg-violet-500 font-bold mt-10 sm:mt-20 duration-300 hover:bg-[#5a3ea8] rounded-lg text-white active:ring-4 active:ring-violet-400">
        Contact Me
      </button>
    </>
  );
};

export default Text;

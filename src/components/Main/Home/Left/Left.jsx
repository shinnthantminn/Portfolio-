import SocialMedia from "./SocialMedia";
import Text from "./Text";

const Left = () => {
  return (
    <div className="flex relative pt-10 lg:pt-0 sm:mb-20 lg:mb-0">
      <div className="absolute hidden lg:block lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-violet-600 lg:-top-[100px] xl:-top-[150px] 2xl:-top-[200px] font-[MuseoModerno]">
        Start With Me!!
      </div>
      <div className="text-xl sm:text-2xl space-y-5 absolute -bottom-[200px] lg:static duration-300 dark:text-violet-600">
        <SocialMedia />
      </div>
      <div className='font-["Ubuntu"] lg:ml-16 '>
        <Text />
      </div>
    </div>
  );
};

export default Left;

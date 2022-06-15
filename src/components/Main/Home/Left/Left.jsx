import SocialMedia from "./SocialMedia";
import Text from "./Text";

const Left = () => {
  return (
    <div className="flex relative pt-10 lg:pt-0 sm:mb-20 lg:mb-0">
      <div className="text-xl sm:text-2xl space-y-5 absolute -bottom-[200px] lg:static">
        <SocialMedia />
      </div>
      <div className='font-["Ubuntu"] lg:ml-16'>
        <Text />
      </div>
    </div>
  );
};

export default Left;

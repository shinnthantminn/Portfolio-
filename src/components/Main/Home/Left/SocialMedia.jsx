import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";

function SocialMedia(props) {
  return (
    <>
      <div>
        <a href="https://github.com/shinnthantminn">
          <FiGithub />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/profile.php?id=100059712990544">
          <FiFacebook />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/shinn-thant-minn-826b74236/">
          <FiLinkedin />
        </a>
      </div>
    </>
  );
}

export default SocialMedia;

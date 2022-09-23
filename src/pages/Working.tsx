import { FunctionComponent } from "react";
import "./Working.css";

const Working: FunctionComponent = () => {
  return (
    <div className="working-div">
      <div className="social-media-div">Social Media</div>
      <div className="frame-div21">
        <img
          className="socialtwitter-icon"
          alt=""
          src="../assets/socialtwitter.svg"
        />
        <div className="twiiter-div">Twiiter</div>
      </div>
      <div className="frame-div21">
        <img
          className="socialtwitter-icon"
          alt=""
          src="../assets/socialyoutube.svg"
        />
        <div className="twiiter-div">Youtube</div>
      </div>
      <div className="frame-div21">
        <img
          className="socialtwitter-icon"
          alt=""
          src="../assets/socialdiscord.svg"
        />
        <div className="twiiter-div">Discord</div>
      </div>
      <div className="frame-div21">
        <img
          className="socialtwitter-icon"
          alt=""
          src="../assets/socialtelegram.svg"
        />
        <div className="twiiter-div">Telegram</div>
      </div>
      <div className="frame-div21">
        <img
          className="socialtwitter-icon"
          alt=""
          src="../assets/socialmedium.svg"
        />
        <div className="twiiter-div">Medium</div>
      </div>
      <div className="frame-div21">
        <img
          className="socialtwitter-icon"
          alt=""
          src="../assets/socialgithub.svg"
        />
        <div className="twiiter-div">GitHub</div>
      </div>
    </div>
  );
};

export default Working;

import { FunctionComponent } from "react";
import "./FigmaRewardStatus.css";

const FigmaRewardStatus: FunctionComponent = () => {
  return (
    <div className="figma-reward-status1">
      <div className="frame-div14">
        <p className="rewards-status-apr-7-14-204">Last Settlememt</p>
        <div className="frame-div15">
          <p className="apr-7-apr-14-20221">Apr 7 - Apr 14, 2022</p>
        </div>
      </div>
      <div className="frame-div16">
        <p className="rewards-status-apr-7-14-205">Rewards</p>
        <div className="frame-div17">
          <div className="frame-div18">
            <img
              className="cryptoperp-icon1"
              alt=""
              src="../assets/cryptoperp2.svg"
            />
            <div className="div7">10,000,000</div>
          </div>
        </div>
        <div className="frame-div17">
          <div className="frame-div20">
            <img
              className="cryptoperp-icon1"
              alt=""
              src="../assets/cryptoperp3.svg"
            />
            <div className="div7">1,000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FigmaRewardStatus;

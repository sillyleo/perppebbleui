import { FunctionComponent, useCallback } from "react";
import "./PersonalRewards.css";

type PersonalRewardsType = {
  number?: string;
};

const PersonalRewards: FunctionComponent<PersonalRewardsType> = ({
  number = "1,000",
}) => {
  const onFrameContainer14Click = useCallback(() => {
    //TODO: show tooltip
  }, []);

  return (
    <div className="frame-div33" onClick={onFrameContainer14Click}>
      <div className="frame-div34">
        <img
          className="cryptoperp-icon3"
          alt=""
          src="../assets/cryptoperp1.svg"
        />
        <div className="div9">{number}</div>
      </div>
    </div>
  );
};

export default PersonalRewards;

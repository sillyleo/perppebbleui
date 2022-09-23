import { FunctionComponent, useEffect } from "react";
import { Textarea } from "@chakra-ui/react";
import PersonalRewards from "../components/PersonalRewards";
import "./Hel.css";

const Hel: FunctionComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="hel-div">
      <div className="figma-reward-status" data-animate-on-scroll>
        <div className="row-div">
          <div className="title-div">Last Settlememt</div>
          <div className="date-range-div">
            <div className="apr-7-apr-14-2022">Apr 7 - Apr 14, 2022</div>
          </div>
          <div className="line-div" />
        </div>
        <div className="row-div1">
          <div className="rewards-status-apr-7-14-20" />
          <img className="line-icon" alt="" src="../assets/line-80.svg" />
          <div className="frame-div">
            <div className="frame-div1">
              <img
                className="cryptoveperp-icon"
                alt=""
                src="../assets/cryptoveperp.svg"
              />
              <div className="div">Market</div>
            </div>
          </div>
          <div className="frame-div2">
            <div className="frame-div3">
              <img
                className="cryptoveperp-icon"
                alt=""
                src="../assets/cryptoveperp1.svg"
              />
              <div className="div">Mine</div>
            </div>
          </div>
          <div className="line-div1" />
          <div className="line-div2" />
        </div>
        <div className="row-div2">
          <p className="rewards-status-apr-7-14-201">Volume</p>
          <img className="line-icon" alt="" src="../assets/line-80.svg" />
          <div className="frame-div">
            <div className="frame-div1">
              <img
                className="cryptoveperp-icon"
                alt=""
                src="../assets/cryptoveperp2.svg"
              />
              <div className="div2">$100,000,000</div>
            </div>
          </div>
          <div className="frame-div2">
            <div className="frame-div3">
              <img
                className="cryptoveperp-icon"
                alt=""
                src="../assets/cryptoveperp3.svg"
              />
              <div className="div2">$10,000</div>
            </div>
          </div>
          <div className="line-div1" />
          <div className="line-div2" />
        </div>
        <div className="row-div2">
          <p className="rewards-status-apr-7-14-201">vePERP</p>
          <img className="line-icon" alt="" src="../assets/line-80.svg" />
          <div className="frame-div">
            <div className="frame-div1">
              <img
                className="cryptoperp-icon"
                alt=""
                src="../assets/cryptoveperp4.svg"
              />
              <div className="div2">10,000,000</div>
            </div>
          </div>
          <div className="frame-div2">
            <div className="frame-div3">
              <img
                className="cryptoperp-icon"
                alt=""
                src="../assets/cryptoveperp5.svg"
              />
              <div className="div2">1,000 (0.1%)</div>
            </div>
          </div>
          <div className="line-div1" />
          <div className="line-div2" />
        </div>
        <div className="row-div1">
          <p className="rewards-status-apr-7-14-203">Rewards</p>
          <img className="line-icon" alt="" src="../assets/line-80.svg" />
          <div className="frame-div12">
            <div className="frame-div1">
              <img
                className="cryptoperp-icon"
                alt=""
                src="../assets/cryptoperp.svg"
              />
              <div className="div2">10,000,000</div>
            </div>
          </div>
          <PersonalRewards />
          <div className="line-div7" />
          <div className="line-div2" />
        </div>
      </div>
      <Textarea variant="outline" w="297px" placeholder="Text Area" />
    </div>
  );
};

export default Hel;

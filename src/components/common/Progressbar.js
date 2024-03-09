import React from "react";
import CountUp from "react-countup";
const ProgressBar = ({ percentage }) => {
  console.log("percentage ", percentage);
  const ref = React.useRef(null);
  const percent = percentage / 100;
  const currentWidth = ref.current ? ref.current.offsetWidth : 0;
  const animatedValue = percent * currentWidth;
  console.log("animatedValue ", animatedValue);
  console.log("currentWidth ", currentWidth);

  const progressColor =
    percent >= 0.8 ? "bg-success" : percent < 0.4 ? "bg-danger" : "bg-warning";

  return (
    <>
      {/* <div className="progressbar-item">
        <div>
          <div className="progress-number">
            <div
              style={{ left: `${animatedValue}px` }}
              className={"progress-number-mark progress-bar-color"}
            >
              <span className="percent">
                <CountUp end={percent * 100} duration={1.5} delay={7} />%
              </span>
              <div className={"down-arrow progress-bar-color" }></div>
            </div>
          </div>
          <div className="progress-div" ref={ref}>
            <div
              style={{ width: `${animatedValue}px`,"backgroundColor":"#ff8000" }}
              className={"progress progress-bar-color" }
              
            ></div>
          </div>
        </div>
      </div> */}
      {/* OLD PROGRESS */}
      <div className="progressbar-item">
        <div>
          <div className="progress-number">
            <div
              style={{ left: `${animatedValue}px` }}
              className={"progress-number-mark " + progressColor}
            >
              <span className="percent">
                <CountUp end={percent * 100} duration={2} delay={7} />%
              </span>
              <div className={"down-arrow " + progressColor}></div>
            </div>
          </div>
          <div className="progress-div" ref={ref}>
            <div
              style={{ width: `${animatedValue}px` }}
              className={"progress " + progressColor}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;

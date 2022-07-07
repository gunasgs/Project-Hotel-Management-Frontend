import "./Featured.css";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured ">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          {/* <CircularProgressbar value={70} text={"70%"} strokeWidth={5} /> */}
          <CircularProgressbar value={0} text={"0%"} strokeWidth={1} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount"> ₹ 0</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <div className="resultAmount"> ₹ 0</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <div className="resultAmount">₹ 0</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <div className="resultAmount">₹ 0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

import { Skeleton } from "antd";
import { useEffect, useState } from "react";

// -------------------------------------- Countup function ------------------------------------------
const useCounter = (minimum = 0, maximum, speed) => {
  const [count, setCount] = useState(minimum);

  useEffect(() => {
    // setCount(maximum)
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < maximum) {
          return prevCount + 1;
        } else {
          clearInterval(timer);
          return prevCount;
        }
      });
    }, speed);

    return () => clearInterval(timer);
  }, [minimum, maximum]);

  return count;
};

const Counter = ({ minimum = 0, maximum, speed = 50 }) => {
  let speedy =
    speed > 100
      ? 40
      : speed > 400
      ? 35
      : speed > 800
      ? 30
      : speed > 1500
      ? 20
      : 10;
  const count = useCounter(minimum, maximum, speedy);

  return <>{count}</>;
};

export default Counter;

// -------------------------------------- BarChartSkeleton function ------------------------------------------

export const BarChartSkeleton = ({ barsCount }) => {
  // Determine the number of bars and their dimensions
  const bars = Array.from({ length: barsCount }, (_, index) => (
    <Skeleton
      key={index}
      active
      avatar
      paragraph={{ rows: 1 }}
      style={{ marginBottom: 4, width: "100%" }}
    />
  ));

  return <div>{bars}</div>;
};

// -------------------------------------- format Time With AM/PM function ------------------------------------------

export const formatTimeWithAMPM = (timeString) => {
  if (!timeString) return ""; // Handle empty input gracefully

  const date = new Date(timeString);
  if (isNaN(date.getTime())) return ""; // Handle invalid date string

  return date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

import React from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (
  timestampStart: number,
  timestampEnd: number
): TimeLeft => {
  const difference = timestampEnd - timestampStart;

  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export const useCountdownTimer = ({
  timestampStart,
  timestampEnd,
}: {
  timestampStart: number;
  timestampEnd: number;
}) => {
  const [timeLeft, setTimeLeft] = React.useState<TimeLeft>(
    calculateTimeLeft(timestampStart, timestampEnd * 1000)
  );

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(timestampStart, timestampEnd * 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, [timestampStart, timestampEnd]);

  return {
    timeLeft,
  };
};

/*export const useCountdownTimer = ({
  timestampStart,
  timestampEnd,
}: {
  timestampStart: number;
  timestampEnd: number;
}) => {
  const [timeLeft, setTimeLeft] = React.useState<TimeLeft>(
    calculateTimeLeft(timestampStart, timestampEnd)
  );

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(timestampStart, timestampEnd));
    }, 1000);

    return () => clearTimeout(timer);
  }, [timestampStart, timestampEnd]);

  return {
    timeLeft,
  };
};*/

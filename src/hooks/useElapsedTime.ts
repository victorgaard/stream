import { useEffect, useState } from "react";
import type { Metadata } from "../data/members";

const parseTimeToSeconds = (time?: string) => {
  if (!time) return 0;
  const [minutes, seconds] = time.split(":").map(Number);
  return minutes * 60 + seconds;
};

const formatSecondsToTime = (totalSeconds: number) => {
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

type useElapsedTimeArgs = {
  currentTime?: Metadata["current"];
  max?: Metadata["length"];
  isPlaying?: boolean;
};

export const useElapsedTime = ({
  currentTime,
  max,
  isPlaying = true,
}: useElapsedTimeArgs) => {
  const startSeconds = parseTimeToSeconds(currentTime);
  const maxSeconds = max ? parseTimeToSeconds(max) : Infinity;
  const [elapsed, setElapsed] = useState(startSeconds);

  const progressPercent = Math.min((elapsed / maxSeconds) * 100, 100);

  useEffect(() => {
    if (!isPlaying || elapsed >= maxSeconds) return;

    const interval = setInterval(() => {
      setElapsed((prev) => {
        const next = prev + 1;
        return next >= maxSeconds ? maxSeconds : next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, elapsed, maxSeconds]);

  return {
    time: formatSecondsToTime(elapsed),
    progressPercent,
  };
};

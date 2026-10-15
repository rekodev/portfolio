"use client";

import { useSyncExternalStore } from "react";

const formatTime = (date: Date) =>
  date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

const subscribe = (onTick: () => void) => {
  const interval = setInterval(onTick, 1000);
  return () => clearInterval(interval);
};

const getServerTime = () => null;
const getClientTime = () => formatTime(new Date());

export default function Clock() {
  const time = useSyncExternalStore(subscribe, getClientTime, getServerTime);

  return (
    <p className="text-foreground md:text-muted-foreground min-w-[9ch] font-mono text-sm">
      {time}
    </p>
  );
}

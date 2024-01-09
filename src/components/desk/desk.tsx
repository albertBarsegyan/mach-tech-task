import { PropsWithChildren } from "react";

interface DeskProps extends PropsWithChildren {
  width: number,
  height: number
}

export function Desk({width, height, children}: DeskProps) {
  return (
    <div style={{
      width,
      height,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      background: 'gray',
      gap: '10px'
    }}>{children}</div>
  );
}



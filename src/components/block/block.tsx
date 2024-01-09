interface BlockProps {
  width: number
  height: number
}

export function Block({width, height}: BlockProps) {
  return <div style={{width, height, background: 'green'}}></div>;
}


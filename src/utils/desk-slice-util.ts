interface DeskSliceUtilProps {
  deskWidth: number,
  deskHeight: number,
  partWidth: number,
  partHeight: number,
  partCount: number
}

export const deskSliceUtil = ({
                                deskWidth,
                                deskHeight,
                                partWidth,
                                partHeight,
                                partCount
                              }: DeskSliceUtilProps) => {
  const desks = [];
  const maxParts = Math.floor((deskWidth * deskHeight) / (partWidth * partHeight));
  const totalDesks = Math.ceil(partCount / maxParts);

  for (let i = 0; i < totalDesks; i++) {
    const currentDesk = [];
    const remainingParts = Math.min(partCount - i * maxParts, maxParts);


    for (let j = 0; j < remainingParts; j++) {
      const part = {width: partWidth, height: partHeight};
      currentDesk.push(part);
    }

    desks.push(currentDesk);
  }

  return desks;
};





import { deskSliceUtil } from "../utils/desk-slice-util.ts";
import { DeskConstants } from "../constants/desk-constants.ts";
import { Desk } from "../components/desk/desk.tsx";
import { Block } from "../components/block/block.tsx";

const inputs = {
  partHeight: 900,
  partWidth: 1000,
  partCount: 6
}


export function MainPage() {
  const result = deskSliceUtil({
    deskWidth: DeskConstants.DESK_WIDTH,
    deskHeight: DeskConstants.DESK_HEIGHT,
    ...inputs
  })

  console.log({result})


  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '50px'}}>
      {result.map((deskData, index) =>
        <Desk width={DeskConstants.DESK_WIDTH}
              height={DeskConstants.DESK_HEIGHT}
              key={index}>
          {deskData.map(({width, height}) => <Block width={width} height={height}/>)}
        </Desk>)}
    </div>
  );
}

function init(base, increment) {
  let stone = 0;
  let marble = 0;
  let lapis = 0;
  let gold = 0;
  let height = 0;

  for (let i = 0; i < base; i += 2) {
    let stepWidth = base - i;
    let stepLength = base - i;
    let stoneArea = (stepWidth - 2) * (stepLength - 2);
    let marblePerimeter = (stepWidth - 4) + (stepLength - 4);
    let currentStepHeight = height + increment;
    stone += stoneArea * currentStepHeight;
    if ((base - i) / 5 === parseInt((base - i) / 5)) {
      lapis += marblePerimeter * currentStepHeight;
    } else {
      marble += marblePerimeter * currentStepHeight;
    }
    height += increment;
  }
  gold += increment;
  
  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(height)}`);
}
  init(11,1);
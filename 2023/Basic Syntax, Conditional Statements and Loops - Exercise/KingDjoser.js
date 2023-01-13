function pyramidResources(base, increment) {
    let height = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
  
    while (base < 2) {
      height += increment;
      let area = (base*base) * increment;
      stone += area;
  
      let perimeter = (base*2);
      if (height % (5 * increment) === 0) {
        lapis += perimeter * increment;
      } else {
        marble += perimeter * increment;
      }
      base += 2;
    }
    gold += increment;
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
  }
  
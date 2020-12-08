import { FileUtilities } from '../services/fileUtilities';

const data = FileUtilities.returnTextAsString('day07.txt');

const dataArray: string[] = [];
data.forEach( item => {
  dataArray.push(item);
});
export class day07 {
  public static functionA(): void {
    
    const bagArray: string[] = [];

    function getTopLevelBag(subBagName: string) {

      const bagsArray = dataArray.filter( x => x.includes(subBagName));
      
      bagsArray.forEach( bag => {
        let isTopLevel = bag.split('contain')[0].trim();
        isTopLevel = isTopLevel.substr(0, isTopLevel.length - 1);
        // console.log(`aaasdf  ${isTopLevel}`);
        if(subBagName !== isTopLevel) {
          (getTopLevelBag(isTopLevel));
        } else {
          bagArray.push(isTopLevel);
          return;
        }
      //   const containsLocation = bag.search(/\bcontain\b/);
      //   const topBag = bag.substr(0, containsLocation - 2);// remove the space and the trailing 's'
      //   console.log(`topBag: ${topBag}`);
      //   do {
      //     getTopLevelBag(topBag);
      //     bagCount++;
      //   } while (topBag !== subBagName);
      });
      // console.log(`evaluating ${subBagName}`);
      //console.log(count);
      // const topBag = subBagName.search(/\bcontain\b/);
      // console.log(topBag);
      // const bags = dataArray.filter( x => x.includes(subBagName));
      // console.log(`bags: ${bags}`);
      // return bags
    }
    getTopLevelBag('shiny gold bag');
    // console.log(dataArray);
    // get initial bags
    //const y = item.indexOf('shiny gold bag');
    // if(y !== -1) {
    //const container = item.search(/\bcontain\b/);
    // const bagsArray = dataArray.filter(x => x.includes('shiny gold bag'));
    // bagCount = bagsArray.length;
    // bagsArray.forEach( x => {
    //   const container = x.search(/\bcontain\b/);
    //   const topBag = x.substr(0, container - 2); // remove the space and the trailing 's'
    //   getTopLevelBag(topBag);
    // });
    // //console.log(item);
    // console.log(bagsArray.length);
    //const bag = item.substr(0, container);
    //console.log(`bag ${bag.trim()}`);
    //b++;
    //}
    const uniqueBagsArray = [...new Set(bagArray)];
    // console.log(uniqueBagsArray);
    // uniqueBagsArray.sort();
    // uniqueBagsArray.forEach(bag => {
    //   console.log(bag);
    // });
    console.log(data.length, uniqueBagsArray.length - 1);
  }

  public static functionB(): void {
    const bigArray: any[] = [];
    let bagCount = 1;
    function digIn(bagName: string) {
      const shinyGold = dataArray.filter( x => x.startsWith(bagName));
      
      const contains = shinyGold[0].split('contain');
      const containsUnits = contains[1].split(',');
     
      // console.log(containsUnits);
      containsUnits.forEach(unit => {
        if(unit !== ' no other bags.') {
          const num = unit.split(/(d+)/);
          const colorArray = unit.split(/\d+/g);
          let color: string = colorArray[1].trim();
          if(color.charAt(color.length -1) === '.') {
            color = color.substr(0, color.length - 1);
          }
          if(color.charAt(color.length -1) === 's') {
            color = color.substr(0, color.length - 1);
          }
          // console.log(`colorz: ${color}`);

          bagCount += parseInt(num[0], 10);
          bigArray.push(unit);
          digIn(color);
        }

      });
      // const num = containsUnits[0].split(/(d+)/);
      // const color = containsUnits[0].split(/\d+/g);
      // let trimmedColor = color[1].replace('bags', '');
      // trimmedColor = trimmedColor.trim();
      // console.log(`num: ${num}`);
      // console.log(`num[0]: ${num[0]}`);
      // console.log(`num[1]: ${trimmedColor}`);
    }
    // const shinyGoldBag = 
    digIn('shiny gold');
    console.log(`bigArray ${JSON.stringify(bigArray, undefined, 4)}`);
    console.log(bagCount);
    
    
    //console.log(containsUnits);
    
  }
}
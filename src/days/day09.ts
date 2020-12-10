import { FileUtilities } from '../services/fileUtilities';

const data = FileUtilities.returnTextAsNumber('day09.txt');

const dataArray: number[] = [];
data.forEach( item => {
  dataArray.push(item);
});

export class day09 {
  public static functionA():void {
    let counter = 0;
    let matched = false;
    const rollingArray: number[] = [];
    for (counter =0; counter < 26; counter++) {
      rollingArray.push(dataArray[counter]);
    }
    counter++;
    function lookForMatch(count: number): boolean {
      let adds = false;
      for (let i = 0; i < rollingArray.length; i++) {
        rollingArray.forEach(item => {
          if(item + rollingArray[i] === dataArray[count]) {
            adds = true;
            return adds;     
          }
        });
      }
      return adds;
    }
    do {
      matched = lookForMatch(counter);
      console.log(`matched: ${matched} at ${counter}`);
      if(matched) {
        counter++;
        rollingArray.push(data[counter]);
        rollingArray.shift();
      } else {
        console.log(dataArray[counter]);
      }
    } while (matched === true);
  }

  public static functionB(): void {
    const numberToMatch = 373803594; // Output from puzzle 1
    let index = 0;
    let total = 0;
    let tempIndex = 0;
    let itemArray: number[] = [];
    do {
    //  console.log(total);
      if(total < numberToMatch) {
        itemArray.push(dataArray[tempIndex]);
        total += dataArray[tempIndex];
        tempIndex++;
      }
      else if(total > numberToMatch) {
        index++;
        tempIndex = index;
        itemArray = [];
        total = 0;
      //  itemArray.push(dataArray[index]);
      } else if( total === numberToMatch) {
        itemArray.sort((a, b) => a - b);
        console.log('FOUND IT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
      }
    } while (total !== numberToMatch);
    console.log(itemArray.length);
    itemArray.sort();
    let tv = 0;
    for (let i=0; i < itemArray.length; i++) {
      console.log(`Adding  to ${itemArray[i]} for a total of ${tv + itemArray[i]}`);
      tv += itemArray[i];
      
    }
    console.log(itemArray);
    console.log(total, itemArray[0], itemArray[itemArray.length -1], itemArray[0] + itemArray[itemArray.length - 1]);
  }
}

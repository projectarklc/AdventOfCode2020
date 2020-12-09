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

  public static functionB() {
    const numberToMatch = 373803594; // Output from puzzle 1
    let index = 0;
    let total = 0;
    let tempIndex= index;
    let itemArray: number[] = [];
    function addToTotal(sum: number): number {
      const tempIndex = index;
      return sum + dataArray[tempIndex];
    }
    do {
      
      do {
        
        total += addToTotal(tempIndex);
        if(total === numberToMatch) {
          console.log('FOUND IT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
          break;
        }
        if(total > numberToMatch) {
          index++;
          tempIndex = index;
          itemArray = [];
          total = 0;
        } else {
          tempIndex++;
          itemArray.push(dataArray[tempIndex]);
        }
        console.log(total, index);
      } while (total < numberToMatch);

      //total = addToTotal(index);

      console.log(total);
      // if(total > numberToMatch) {
      //   index++;
      // } else{
      //   tempIndex++;
      // }
      
    } while (total !== numberToMatch);
    console.log(total, itemArray[0], itemArray[itemArray.length]);
  }
}

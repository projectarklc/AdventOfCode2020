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
          if(item + rollingArray[i] === count) {
            console.log(`found ${item}  and ${rollingArray[i]} = ${item + rollingArray[i]}.  Looking for ${count}`);
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
        console.log(rollingArray, counter);
      }
    } while (matched === true);
  }

}

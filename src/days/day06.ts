import { FileUtilities } from '../services/fileUtilities';

const data = FileUtilities.returnTextAsString('day06.txt');

export class day06 {
  public static functionA(): void {
    let uniqueArray: string[] = [];
    let score = 0;
    data.forEach(item => {
      if(item.length) { 
        for(let i = 0; i < item.length; i++) {
          if( uniqueArray.indexOf(item[i]) === -1) {
            uniqueArray.push(item[i]);
          }
        }
      } else {
        score += uniqueArray.length;
        uniqueArray = [];
      }
    });
    console.log(score);
  }

  public static functionB(): void {
    let groupCounter = 0; 
    let groupArray: string[] = []; 
    const countArray: number[] = [];
    let overAllScore = 0;
    data.forEach(item => {
      if(item.length) {
        for(let i=0; i < item.length; i++) {
          groupArray.push(item[i]);
        }
        groupCounter++;
      } else {
        const miniScore = 0;
        const uniqueArray = [...new Set(groupArray)];
        uniqueArray.forEach(uniqueItem => {
          let charCount = 0;
          for(let i=0; i < groupArray.length; i++) {
            if(groupArray[i] === uniqueItem) {
              charCount++;
            }
          }
          if(charCount === groupCounter) {
            overAllScore++;
          }
        });
        countArray.push(miniScore);
        groupCounter = 0;
        groupArray = [];
      }
    });
    console.log(overAllScore);
  }
}
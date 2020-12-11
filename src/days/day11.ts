import { FileUtilities } from '../services/fileUtilities';

const data = FileUtilities.returnTextAsString('day11.txt');

// eslint-disable-next-line prefer-const
let dataArray: any[] = [];
data.forEach( item => {
  dataArray.push(item);
});

export class day11 {
  
  private static initializeArray() {
    const seatingArray = [];
    for (let i = 0; i < dataArray.length; ++i) {
      const horizontalArray: string[] = [];
      let horizontalPosition = 0;
      do {
        const value = dataArray[i][horizontalPosition];
        //   if(value === 'L') {
        //     value = '#';
        //   } else {
        //     value = '.';
        //   }
        horizontalArray.push(value);
        horizontalPosition++;
      } while (horizontalPosition < dataArray[i].length);
      seatingArray.push(horizontalArray);
    }
    return new Array(seatingArray);
  }

  public static functionA(): void {
    // eslint-disable-next-line prefer-const
    let seatingArray = day11.initializeArray;


    
    console.log(seatingArray[0]);
  }
  
}
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
    //let changed = false;
    for (let column = 0; column < dataArray.length; ++column) {
      const horizontalArray: string[] = [];
      let horizontalPosition = 0;
      do {
        let value = dataArray[column][horizontalPosition];
  
        horizontalArray.push(value);
        horizontalPosition++;
      } while (horizontalPosition < dataArray[column].length);
      seatingArray.push(horizontalArray);
    }
    return seatingArray;
  }

  public static functionA(): void {
    // eslint-disable-next-line prefer-const
    let changed = false
    let seatingArray = day11.initializeArray();
    let tempArray: string[][] = []
    do {
      for(let row = 0; row < seatingArray.length; row++) {
        let rowArray = []
        for(let column = 0; column < seatingArray[row].length; column++) {
          let value = seatingArray[row][column]
         // console.log(value, column, row)
         if(value !== '.') {
          if(value === 'L') {
            // console.log(value)
            if(row > 0 && row < (seatingArray.length -1 ) && column > 0 && column < (seatingArray[row].length -1) ) {
              if(seatingArray[row - 1][column -1] !== '#' && seatingArray[row - 1][column] !== '#' &&
               seatingArray[ row - 1][column + 1] !== '#' && seatingArray[ row ][column - 1] !== '#' &&
               seatingArray[row][column + 1] !== '#' && seatingArray[row + 1][column - 1] !== '#' &&
               seatingArray[row + 1][column] !== '#' && seatingArray[row + 1][column] + 1 !== '#') {
               rowArray[column] = '#'; 
               } else if(row === 0 && column === 0) {
                 if(seatingArray[row][column] + 1 !== '')  {}
              } else {
                rowArray[column] = 'L'
              }
            } else{
              rowArray[column] = 'L'
            }
           //  seatingArray[row][column] = '#';
             changed = true
           } else   if(value = '.') {
               rowArray[column] = '.'
             } else {
               rowArray[column] = 'L'
             }
         }
          
            
          
        }
        tempArray.push(rowArray)
      }
      seatingArray = tempArray
      
    } while (!changed);

    
    console.log(seatingArray);
  }
  
}
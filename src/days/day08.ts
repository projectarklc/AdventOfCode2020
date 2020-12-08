import { FileUtilities } from '../services/fileUtilities';

const data = FileUtilities.returnTextAsString('day08.txt');

const dataArray: string[] = [];
data.forEach( item => {
  dataArray.push(item);
});

export class day08 {

  public static functionA(): void {
    //console.log(dataArray);
    let position = 0;
    let acc = 0;
    const doubleRun = false;
    const runSequence: number[] = [];
    //console.log(dataArray[position]);
    //acc++;
    function getPosition(pos: number): number[] {
      runSequence.push(position);
      console.log(`Running get position: ${pos}`);
      const item = dataArray[pos].split(' ');
      // console.log(item);
      const instruction = item[0].trim();
      const qtyString = item[1].trim();
      const positive = item[1].charAt(0) === '+';
      const qty = parseInt(qtyString.substring(1, qtyString.length));
      // console.log(`qty: ${qtyString.substring(1, qtyString.length)}`);
      if(instruction === 'nop') {
        pos++;
      } else if (instruction === 'acc') {
        pos++;
        if(positive) {
          acc = acc + qty;
        } else {
          acc = acc - qty;
        }
      } else if (instruction === 'jmp') {
        // console.log(qty);
        if(positive) {
          pos = pos + qty;
        } else {
          pos = pos - qty;
        }
      }
      console.log(`acc: ${acc}`);
      return [pos, acc];
    }
    

 


    do {
      position = getPosition(position)[0];  
      console.log(position);
    } while (runSequence.indexOf(position) === -1);
    
  }
}
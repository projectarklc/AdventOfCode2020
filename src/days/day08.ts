import { sign } from 'crypto';
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
    const runSequence: number[] = [];
    //console.log(dataArray[position]);
    //acc++;
    function getPosition(pos: number): number[] {
      runSequence.push(position);
      const item = dataArray[pos].split(' ');
      console.log(item);
      const instruction = item[0].trim();
      const qtyString = item[1].trim();
      const positive = item[1].charAt(0) === '+';
      const qty = parseInt(qtyString.substring(1, qtyString.length));
      // console.log(`qty: ${qtyString.substring(1, qtyString.length)}`);
      if(instruction === 'nop') {
        if(pos + qty > dataArray.length && positive) {
          console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        }
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
        if(pos + qty > dataArray.length && positive) {
          console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        }
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

  public static functionB(): void {
    // console.log(dataArray.length);
    let stepCount = 0;
    let position = 0;
    let acc = 0;
    const runSequence: number[] = [];
    const instructionChanged = false;
    // for(let i = 0; i < dataArray.length; i++) {
    //   const operations = dataArray[i].split(' ');
    //   const instruction = operations[0];
    //   const sign = (operations[1].trim().charAt(0) === '+');
    //   const num = parseInt(operations[1].trim().substr(1, operations[1].length), 10);
    //   console.log(instruction, num, i);
    //   if(instruction === 'jmp') {
    //     if(sign) {
          
    //       if(i + num > dataArray.length) {
    //         console.log('!!!!!!!!!!!!!!!!!!!!!!!!');
    //       }
    //       i = i + num;
    //     } else {
    //       i = i - num;
    //     }
    //   } else if (instruction === 'acc') {
    //     if(sign) {
    //       acc = acc + num;
    //     } else {
    //       acc= acc - num;
    //     }
    //   } else {
    //     if(i + num > dataArray.length) {
    //       console.log('!!!!!!!!!!!!!!!!!!!!!!!!');
    //     }
    //     i++;
    //   }
    // }
      
    //});
    function getPosition(pos: number): number {
      // runSequence.push(position);
      //     console.log(`Running get position: ${pos}`);
      const item = dataArray[pos].split(' ');
      console.log(item);
          
      const instruction = item[0].trim();
      const qtyString = item[1].trim();
      const positive = item[1].charAt(0) === '+';
      const qty = parseInt(qtyString, 10);
      // console.log(`qty: ${qtyString.substring(1, qtyString.length)}`);
      if(instruction === 'nop') {
        if( pos + qty > dataArray.length) {
          console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
         
          return dataArray.length + 100;
        }
        pos++;
        //  } 
        
      } else if (instruction === 'acc') {
        pos++;
        // if(positive) {
        acc = acc + qty;
        // } else {
        //   acc = acc - qty;
        // }
      } else if (instruction === 'jmp') {
        // console.log(qty);
        // if(positive) {
        if(pos + qty > dataArray.length) {
          console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
          return dataArray.length + 100;
          //pos = dataArray.length;
        } 
        pos = pos + qty;
          
        // } else {
        //   pos = pos - qty;          
        //}
      }
      console.log(`instruction: ${instruction}`);
      console.log(`acc: ${acc}`);
      console.log(`position: ${pos}`);
      return pos;
    }
    do {
      position = getPosition(position);  
      stepCount++;
    //  console.log(`step: ${stepCount}`);
    } while ( dataArray.length > position);
    //console.log('figgy pudding', acc);
  }
  
}
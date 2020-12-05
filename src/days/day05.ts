import { FileUtilities } from '../services/fileUtilities';

const data = FileUtilities.returnTextAsString('day05.txt');

export class day05 {
  public static functionA(): void {
    let highestSeat = 0;
    data.forEach( item => {
      const rowSelector = this.getSeatData(item.substring(0,7), 127, 'F');
      const seatSelector = this.getSeatData(item.substring(7,10), 7, 'L'); 
      if(rowSelector * 8 + seatSelector > highestSeat) {
        highestSeat = rowSelector * 8 + seatSelector;
      } 
    });
    console.log(highestSeat);
  }

  public static functionB(): void {
    const highestSeat = 998; // from functionA
    const outputData: number[] = [];
    data.forEach((item) => {
      const rowSelector = this.getSeatData(item.substring(0,7), 127, 'F');
      const seatSelector = this.getSeatData(item.substring(7,10), 7, 'L'); 
      outputData.push(rowSelector * 8 + seatSelector);
    } );
    outputData.sort();
    for(let i = 100; i < highestSeat; i += 1) { // outputData shows starting at 100 with the given data
      const seatId = outputData.filter(x => x === i)[0];
      if(!seatId) {
        console.log(i);
      }
    }
  }

  private static getSeatData(inputString: string, maxValue: number, indicator: string): number {
    let currentMax = maxValue;
    let currentMin = 0;
    let currentRange = currentMax - currentMin;
    for(let i = 0; i < inputString.length; i += 1) {
      if(inputString.charAt(i) === indicator) {
        currentMax = Math.floor(currentRange / 2) + currentMin;
      } else {
        currentMin = Math.floor(currentRange / 2) + currentMin + 1;
      }
      currentRange = currentMax - currentMin;
    }
    if(inputString.charAt(inputString.length -1) === indicator) {
      return currentMax;
    } else {
      return currentMin;
    }
  }
}
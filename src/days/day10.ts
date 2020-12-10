import { FileUtilities } from '../services/fileUtilities';

const data = FileUtilities.returnTextAsString('day10.txt');

const dataArray: string[] = [];
data.forEach( item => {
  dataArray.push(item);
});

export class day10 {

  public static functionA(): void {
    // dataArray.sort();
    const adapterArray: number[] = [];
    let oneJolt = 0;
    let threeJolt = 0;
    adapterArray.push(0); //charging port
    data.forEach( (item => {
      adapterArray.push(parseInt(item, 10));
    }));
    adapterArray.sort((a, b) => a - b);
    for(let i=0; i < adapterArray.length -1; i++) {
      const diff = adapterArray[i+1] - adapterArray[i];
      console.log(`Using ${adapterArray[i+1]} and ${adapterArray[i]} for a difference of ${diff}`);
      if(diff === 1) {
        oneJolt++;
      } else if(diff === 3) {
        threeJolt++;
      }
    }
    console.log(oneJolt, threeJolt, oneJolt * threeJolt); // Add a 3Jolt to this count for the device
  }
}
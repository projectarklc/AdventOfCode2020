import { FileUtilities } from '../services/fileUtilities';

const data = FileUtilities.returnTextAsString('day03.txt');

export class day03 {

  private static treeCalculator(xIncrement: number, yIncrement: number): number {
    let treeCount = 0;
    let xPos = 0;
    for(let i = 0; i < data.length; i++) {
      if( xPos !== 0) {
        if( i % yIncrement === 0) {
          while( xPos > data[i].length ) {
            data[i] += data[i];
          }
          if(data[i].charAt(xPos) === '#') {
            treeCount++;
          }
          xPos = xPos + xIncrement;
        }
      } else {
        xPos = xPos + xIncrement;
      }
    }
    return treeCount;
  }
 
  public static functionA(): void {
    console.log(`Puzzle 1: ${this.treeCalculator(3,1)}`);
  }

  public static functionB(): void {
    const runs = [{x: 1, y: 1},{x: 3, y: 1},{x: 5, y: 1},{x: 7, y: 1},{x: 1, y: 2}];
    let brokenSkulls = 1;
    runs.forEach(run => {
      brokenSkulls = brokenSkulls * this.treeCalculator(run.x, run.y);
    });
    console.log(`Puzzle 2: ${brokenSkulls}`);
  }
}
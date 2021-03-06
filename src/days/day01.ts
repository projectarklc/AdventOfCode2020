import { FileUtilities } from '../services/fileUtilities';

const data = FileUtilities.returnTextAsNumber('day01.txt');
export class day01 {
  public static async functionA(): Promise<void> {    
    data.forEach(item => {
      const value = data.filter( x => x + item === 2020 && x !== item);
      if(value[0]) {
        console.log( item * value[0]);
      }
    });
  }

  public static async functionB(): Promise<void> {
    data.forEach(item => {
      data.forEach(item2 => {
        data.forEach(item3 =>{
          if(item + item2 + item3 === 2020 && item !== item2 && item !== item3 && item2 !== item3) {
            console.log(item * item2 * item3);
          }
        } );
      } );
    });
  }
}
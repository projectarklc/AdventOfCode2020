import { FileUtilities } from '../services/fileUtilities';

const data = FileUtilities.returnTextAsString('day07.txt');

export class day07 {
  public static functionA() {
    const a =0;
    let b=0;
    data.forEach( item => {
      
      const y = item.indexOf('shiny gold bag');
      if(y !== -1) {
        const container = item.search(/\bcontain\b/);
        console.log(item);
        console.log(container);
        const bag = item.substr(0, container);
        console.log(`bag ${bag.trim()}`);
        b++;
      }
    });
    console.log(data.length, b);
  }

  public static functionB() {
    data.forEach( item => {
        
    });
  }
}
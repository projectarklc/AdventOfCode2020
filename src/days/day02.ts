import { FileUtilities } from '../services/fileUtilities';

const data = FileUtilities.returnTextAsString('day02.txt');
export class day02 {
  public static async functionA(): Promise<void> {    
    let validCount = 0;
    data.forEach( item => {
      const fullEntry = item.split(':');
      const itemKey = fullEntry[0].split(' ');
      const occurrences = (fullEntry[1].split(itemKey[1]).length - 1);
      const allowedOccurrences = itemKey[0].split('-');
      const minAllowed = parseInt(allowedOccurrences[0], 10);
      const maxAllowed = parseInt(allowedOccurrences[1], 10);
      // eslint-disable-next-line no-constant-condition
      if(occurrences >= minAllowed && occurrences <= maxAllowed) {
        validCount++;
      }
    });
    console.log(validCount);
  }

  public static async functionB(): Promise<void> {
    let validCount = 0;
    data.forEach(item => {
      const fullEntry = item.split(':');
      const password = fullEntry[1].trim();
      const itemKey = fullEntry[0].split(' ');
      const letterToFind = itemKey[1];
      const startPosition = (parseInt(itemKey[0].split('-')[0], 10) ) ; 
      const endPosition = (parseInt(itemKey[0].split('-')[1], 10) ) ;

      if(
        (password.charAt(startPosition -1) === letterToFind ||
        password.charAt(endPosition -1) === letterToFind) && 
        (password.charAt(startPosition -1) !== password.charAt(endPosition -1))
      ) {
        validCount++;
      }
    });
    console.log(validCount);
  }
}
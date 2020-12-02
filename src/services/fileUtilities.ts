import fs from 'fs';

const dataDir = 'src/data/';

export class FileUtilities {

  public static returnTextAsNumber(filename: string): number[] {
    const data = fs.readFileSync(`${dataDir}${filename}`, 'utf8');
    return data.split('\n').map( x => parseInt(x));
  }

  public static returnTextAsString(filename: string): string[] {
    const data = fs.readFileSync(`${dataDir}${filename}`, 'utf8');
    return data.split('\n').map( x => (x));
  }
}

    

import fs from 'fs';

const dataDir = 'src/data/';

export class FileUtilities {

  public static returnText(filename: string): number[] {
    const data = fs.readFileSync(`${dataDir}${filename}`, 'utf8');
    return data.split('\n').map( x => parseInt(x));
  }
}

    

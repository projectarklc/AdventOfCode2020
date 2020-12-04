import { FileUtilities } from '../services/fileUtilities';

const data = FileUtilities.returnTextAsString('day04.txt');

export class day04 {
  public static functionA(): void {
    let validCount = 0;
    let totalCount = 0;
    let isValid = false;
    let byr = false;
    let ecl = false;
    let eyr = false;
    let hcl = false;
    let hgt = false;
    let iyr = false;
    let pid = false;
    data.forEach(item => {
      // console.log(item.length);
      if(item.length !== 0) { // not an empty line
        const line = item.split(' ');
        console.log(line);
        line.forEach(lineItem => {
          if(lineItem.includes('byr')) { byr = true;}
          if(lineItem.includes('ecl')) { ecl = true;}
          if(lineItem.includes('eyr')) { eyr = true;}
          if(lineItem.includes('hcl')) { hcl = true;}
          if(lineItem.includes('hgt')) { hgt = true;}
          if(lineItem.includes('iyr')) { iyr = true;}
          if(lineItem.includes('pid')) { pid = true;}
        });
        // console.log(byr, eyr, hgt, hcl, iyr, ecl, pid);
        if(byr && eyr && hgt && hcl && iyr && ecl && pid && !isValid) {
          validCount++;
          console.log('match', validCount);
          isValid = true;
        } 
      } else {
        console.log('New passport');
        byr = false;
        ecl = false;
        eyr = false;
        hcl = false;
        hgt = false;
        iyr = false;
        pid = false;
        isValid = false;
        totalCount++;
      }
    });

    console.log(`${validCount} of ${totalCount}`);
  }

  public static functionB(): void {
    let validCount = 0;
    let totalCount = 0;
    let isValid = false;
    let byr = false;
    let ecl = false;
    let eyr = false;
    let hcl = false;
    let hgt = false;
    let iyr = false;
    let pid = false;
    data.forEach(item => {
      // console.log(item.length);
      if(item.length !== 0) { // not an empty line
        const line = item.split(' ');
        line.forEach(lineItem => {
          const kvPair = lineItem.split(':');
          // console.log(`Matching: ${lineItem}`);
          let value;
          let hexValue;
          let unit;
          let measure = 0;
          
          switch(kvPair[0]) {
          case 'byr':
            value = parseInt(kvPair[1] ,10);
            if(value > 1919 && value < 2003) {
              byr = true;
            }
            break;
          case 'ecl':
            value = kvPair[1].trim();
            if(value === 'amb' || value === 'blu' || value === 'brn' || value === 'gry' || value === 'grn' ||
             value === 'hzl' || value === 'oth') {
              ecl = true;
            }
            break;
          case 'eyr':
            value = parseInt(kvPair[1], 10);
            if (value > 2019 && value < 2031 ) {
              eyr = true;
            }
            break;
          case 'hcl':
            value = kvPair[1].trim();
            hexValue = value.match(/^#[0-9a-fA-F]{6}/);
            if( hexValue) {
              hcl = true;
            }
            break;
          case 'hgt':
            value = kvPair[1].trim();
            unit = value.substring(value.length -2);
            measure = parseInt(value.substring(0, value.length - 2), 10);
            if((unit === 'cm' && measure > 149 && measure < 194) ||
            ( unit === 'in' && measure > 58 && measure < 77) ) {
              hgt = true;
            }
            break;
          case 'iyr':
            value = parseInt(kvPair[1], 10);
            if(value > 2009 && value < 2021) {
              iyr= true;
            }
            break;
          case 'pid':
            if(kvPair[1].match(/^\d{9}$/)) {
              pid = true;
            }  
          }
        });
        if(byr === true && ecl === true && eyr === true && hcl === true && hgt === true && 
          iyr === true && pid===true && !isValid) {
          isValid = true;
          validCount++;
        }
        console.log(`byr: ${byr}, ecl: ${ecl}, eyr: ${eyr}, hcl: ${hcl}, hgt: ${hgt}, iyr: ${iyr}, 
        pid: ${pid}, isValid: ${isValid}, ${validCount}`);
      } else {
        console.log('New passport');
        byr = false;
        ecl = false;
        eyr = false;
        hcl = false;
        hgt = false;
        iyr = false;
        pid = false;
        isValid = false;
        totalCount++;
      }
    });

    console.log(`${validCount} of ${totalCount}`);
  }
}
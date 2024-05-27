import { toNamespacedPath } from 'node:path';
import { exit } from 'node:process';
import * as fs from 'node:fs';

// *** File Path Enums ***
const CONFIG_PATH = toNamespacedPath('../config/');
const DATA_PATH = toNamespacedPath('../data/');
const IMAGES_PATH = toNamespacedPath('../images/');
const STYLE_PATH = toNamespacedPath('./style/');
const TEST_PATH = toNamespacedPath('../test/');

// #region Testing

let e = < string | number> 'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | 
  string => {
    if (c === 'add') return a+b;
    return '' + a + b;
  }
  
let myVal: string = addOrConcat(2,2,'concat') as string;
let nextVal: number = addOrConcat(2,2,'add') as number;

console.log(myVal);
console.log(nextVal);


// #endregion Testing

try {
  if(!fs.existsSync(CONFIG_PATH)) {
    throw new Error('Config file not found!');
  }
}
catch(e) {
  console.log(e);
  exit(1);
}

const dataDir = fs.readdirSync(DATA_PATH);
const configDir = fs.readdirSync(CONFIG_PATH);


const fileHandle = import(DATA_PATH)
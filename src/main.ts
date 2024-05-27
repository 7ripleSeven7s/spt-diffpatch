import * as process from 'node:process';
import * as fs from 'node:fs';
import * as path from 'node:path/posix';


interface App {
  settings: {
    configPath: string;
/*     _load(cfgPath: string): Function; 
    save(settings: string[] | Object, cfgPath: string): Function; */
    [propName: string]: any;  // Allows setting ANY property at runtime
  }
}

// *** File Path Enums ***
const ENV_PATH = process.cwd();
const CONFIG_PATH = path.join(ENV_PATH ,'/config/app.json');
const DATA_PATH = path.join(ENV_PATH ,'data/');
const IMAGES_PATH = path.join(ENV_PATH ,'images/');
const STYLE_PATH = path.join(ENV_PATH ,'style/');
const TEST_PATH = path.join(ENV_PATH ,'test/');

// #region Testing

let e = < string | number> 'world';

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | 
  string => {
    if (c === 'add') return a+b;
    return '' + a + b;
  };
  
let myVal: string = addOrConcat(2,2,'concat') as string;
let nextVal: number = addOrConcat(2,2,'add') as number;

console.log(CONFIG_PATH);
console.log(DATA_PATH);
console.log(IMAGES_PATH);
console.log(STYLE_PATH);
console.log(TEST_PATH);


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
  process.exit(1);
}

const app: App = {
  settings: {
    configPath: '',

  }
};

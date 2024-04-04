import { fs } from "node:fs";
import { argv } from "node:process";


//  Constant String Definitions:
const SRC_DIR_BASE_DEFAULT = "./data/bots/types/";
const TGT_DIR_BASE_DEFAULT = "./target/db/bots/types/";
const OUT_DIR_BASE = "./out/";

const patchOps = [];

const src =
  "D:/TarkovSP/SPT-AKI 13.6.26535/Aki_Data/Server/database/bots/types/usec.json";
const tgt =
  "D:/TarkovSP/SPT-AKI 14.0.1.28476/Aki_Data/Server/database/bots/types/usec.json";

// Check for 2 console string arguments
if (process.argv.length < 3) {
  // (linux) patch [options] [originalfile [patchfile]]
  console.log(
    `Usage: node jdiff.js targetFile sourceFile [(optional) --backup]`
  );
  process.exit(1);
}

// Debug
const tgtFile = argv[2];
const srcFile = argv[3];

// Live
//const tgtFile = TGT_DIR_BASE_DEFAULT + argv[2];
//const srcFile = SRC_DIR_BASE_DEFAULT + argv[3];

try {
  // Read files
  const source = JSON.parse(fs.readFileSync(srcFile, "utf-8"));
  const target = JSON.parse(fs.readFileSync(tgtFile, "utf-8"));
  console.log(srcInput);
  console.log(tgtInput);

  // Execute comparison method
  /* 
      Function names:

        deepCompare()
        depthCompare()
        downwardCompare()
        sharpCompare()
        richCompare()
        compareSimilar()
        breadthCompare()
        isEqualOf()
        isEqualTo()


        compare concepts - similar, compare, equate, contrast, resemble
        patch concepts - mark, spot, stitch, strip, spot, rectify, resolve, 


  */
  patchOps = compareJSON(source, target);
  updateJSON(source, target);
} catch (error) {
  console.error(error);
  process.exit(1);
}

// If the two objects are NOT deeply equal
if (!areEqual(target, source)) {
  // TODO: Save Changes
  //fs.writeFileSync(tgtFile, changes);
} else {
  console.log("File contents are equal! No changes necessary.");
}

function areEqual(a, b) {
  for (let prop in a) {
  }
}

/**
 * Compare an object to a similar object and create an array of differences
 *
 * @param {object} origin - base object from which comparisons are made.
 * @param {object} target - similar object, containing potential differences
 *
 * @return { JSON[] } - An array of update strings, similar to HTTP JSON Patch
 */
function compareJSON(origin, target) {
  ops = [];

  // Iterate over original object
  for (let key in origin) {
    if (target.hasOwnProperty(key)) {
      // Check if the type of the properties is object.
      if (typeof origin[key] === "object" && typeof target[key] === "object") {
        if (!areObjectsEqual(origin[key], target[key])) {
        }
      } else if (origin[key] !== target[key]) {
        console.log("true");
      }
    }
  }

  return [];
}

// Function to recursively update object properties
function updateJSON(target, source) {
  for (const key in source) {
    if (typeof source[key] === "object" && source[key] !== null) {
      if (!target[key]) {
        target[key] = {};
      }
      updateObject(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
}

function parsePatchHttp(str) {
  ax = [];

}

/* 
  PSEUDOCODE:

  1. Read commmand line arguments -> source file, target file 
  2. If missing source or target -> exit code 1.
  3. try -> Open->Read source && target files, catch 'file not found' errors -> exit(1).
  4. JSON.parse() source && target
  5. Compare source -> target  (jsondiffpatch library?)
  6. If !SameContent -> backup target file && output change file

*/

/* const person = {
  "name": "Spongebob",
  "age": 30,
  "isEmployed": true,
  "hobbies": ["Jellyfishing", "karate", "Cooking"]
}; */

/* 
// Fetch one person
fetch("person.json")
  .then(response => response.json())
  .then(value => console.log(value));

// Fetch lots of people
fetch("people.json")
  .then(response => response.json())
  .then(values => values.forEach(value => console.log(value)));
   */

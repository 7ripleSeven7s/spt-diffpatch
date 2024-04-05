"use strict";

/* import fs from "node:fs"; */
import { argv } from "node:process";

//const originFile = '/data/bot_presets.json';
//const patchFile = '/target/db/bot_presets2.json';
const outFile = "/out/";

// READ COMMAND LINE ARGUMENTS
// Usage: node app.js sourceFile.json targetFile.json
const [, , originFile, patchFile] = argv;

if (!originFile || !patchFile || originFile === patchFile) {
  console.error("Usage: node app.js originFile.json patchFile.json");
  process.exit(1);
}
console.log("Command Line Args:");
console.log(originFile);
console.log(patchFile);

// Import JSON from files
const o = importJSON(originFile);
const p = importJSON(patchFile);

//console.log(patchData);

//const testObj = {...patchData};
//Object.assign(testObj, patchData);
//const blah = { hello: "goodbye" };
console.log(Object.keys(p));
console.log(Object.keys(o));
const keys = Object.keys(p);

let nums = [1,2,3];
console.log(nums);


// Compare JSON files

for (let val of p) {
  if (o.hasOwnProperty(val)) {
    console.log("o hasOwnProperty, ", val);
  }
}

for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
  }
}

// Output data changes

function importJSON(src) {
  try {
    // NOTE: fs.readFileSync() auto closes its file handle.
    const data = JSON.parse(fs.readFileSync(src, "utf8"));
    return data;
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
}

function writeJSON(data, destination) {
  try {
    //fs.writeFileSync(tgt, JSON.stringify(data2, null, 2));
    fs.writeFileSync(destination, JSON.stringify(data));
  } catch (error) {}
}

// Function to recursively update object properties
function updateObject(target, source) {
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

function areObjectsEqual(firstObject, secondObject) {
  // Check if the objects have the same number of properties
  if (Object.keys(firstObject).length !== Object.keys(secondObject).length) {
    return false;
  }

  // Check if the properties and values of the objects are equal
  for (let key in firstObject) {
    if (firstObject.hasOwnProperty(key)) {
      if (!secondObject.hasOwnProperty(key)) {
        return false;
      }
      // Check if the type of the properties is object.
      if (typeof firstObject[key] === "object" && typeof secondObject[key] === "object") {
        if (!areObjectsEqual(firstObject[key], secondObject[key])) {
          return false;
        }
      } else if (firstObject[key] !== secondObject[key]) {
        console.log("true");
        return false;
      }
    }
  }

  return true;
}

function isSameObj(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  return false;
}

function isSameProperty(val1, val2) {
  if (val1 === val2) {
    return true;
  }
  return false;
}
/* 
const obj1 = {
  bot_presets: [
    {
      BotDifficulty: "easy",
      COEF_IF_MOVE: 1.3,
      FIRST_CONTACT_ADD_SEC: 0.35,
      HearingSense: 0.75,
      MAX_AIMING_UPGRADE_BY_TIME: 0.85,
      Role: "assault",
      SCATTERING_DIST_MODIF: 0.8,
      ScatteringPerMeter: 0.095,
      UseThis: true,
      VisibleAngle: 140,
      VisibleDistance: 125,
    },
    {
      BotDifficulty: "normal",
      COEF_IF_MOVE: 1.3,
      FIRST_CONTACT_ADD_SEC: 0.3,
      HearingSense: 0.8,
      MAX_AIMING_UPGRADE_BY_TIME: 0.85,
      Role: "assault",
      SCATTERING_DIST_MODIF: 0.8,
      ScatteringPerMeter: 0.085,
      UseThis: true,
      VisibleAngle: 145,
      VisibleDistance: 129,
    },
  ],
};

const obj2 = {
  bot_presets: [
    {
      BotDifficulty: "easy",
      COEF_IF_MOVE: 1.3,
      FIRST_CONTACT_ADD_SEC: 0.35,
      HearingSense: 0.75,
      MAX_AIMING_UPGRADE_BY_TIME: 0.85,
      Role: "assault",
      SCATTERING_DIST_MODIF: 0.8,
      ScatteringPerMeter: 0.095,
      UseThis: true,
      VisibleAngle: 140,
      VisibleDistance: 125,
    },
    {
      BotDifficulty: "normal",
      COEF_IF_MOVE: 1.3,
      FIRST_CONTACT_ADD_SEC: 0.3,
      HearingSense: 0.8,
      MAX_AIMING_UPGRADE_BY_TIME: 0.85,
      Role: "assault",
      SCATTERING_DIST_MODIF: 0.8,
      ScatteringPerMeter: 0.085,
      UseThis: true,
      VisibleAngle: 145,
      VisibleDistance: 129,
    },
  ],
};
 */

/*  linux patch command usage:

    patch   -   apply a diff file to an original

      patch [options] [originalFile [patchFile]]
        
      patch -p123 <patchfile

    patch takes a patch file patchfile containing a difference
    listing produced by the diff program and applies those
    differences to one or more original files, producing patched
    versions.  Normally the patched versions are put in place of the
    originals.  Backups can be made; see the -b or --backup option.
    The names of the files to be patched are usually taken from the
    patch file, but if there's just one file to be patched it can be
    specified on the command line as originalfile.

    Options:

      -b, --backup

*/

/*  linux diff command usage:

    diff  -   compare files line by line

      diff [OPTIONS] ... FILES


    Options:

      -i, --ignore-case           -   ignore case differences
      -b, --ignore-space-changes  -   ignore changes in amount of white space
      -B, --ignore-blank-lines    -   ignore changes where lines are all blank
      -q, --brief                 -   report only when files differ
      -y, --side-by-side          -   output in two columns
      -W, --width=NUM             -   output at most NUM (default 130) print columns
      --left-column               -   output only the left column of common lines
      --suppress-common-lines     -   do not output common lines
      --suppress-blank-empty      -   suppress space or tab before empty output lines  

    sdiff

      -l                          -   left column
      -s                          -   suppress common lines
      -o, --output=FILE           -   operate interactively, sending output to FILE
*/

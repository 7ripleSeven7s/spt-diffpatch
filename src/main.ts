
import fs from 'node:fs'

// *** File Path Enums ***
const configPath = './config/settings.ini';

try {

  if(!fs.existsSync(configPath)) {
    throw new Error('Config file not found!');
  }

}
catch(err) {
  
}

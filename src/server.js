//test
import { Server380Repo } from "../tests/server380.js";

const srvr = Server380Repo.baseURL;
const branch = Server380Repo.branch;
const path = Server380Repo.path;
const source = Server380Repo.source;

const botConfig = "this.configServer.getConfig(ConfigTypes.BOT)";
const pmcConfig = "this.configServer.getConfig(ConfigTypes.PMC)";

// CLI api example - tarkov.dev/api/
// curl -X POST -H "Content-Type: application/json" -d '{"query": "{ items(name: \"m855a1\") {id name shortName } }"}' https://api.tarkov.dev/graphql

/* 
export class DatabaseServer
{
  protected tableData: IDatabaseTables = {
    bots: undefined,
    hideout: undefined,
    locales: undefined,
    locations: undefined,
    loot: undefined,
    match: undefined,
    templates: undefined,
    traders: undefined,
    globals: undefined,
    server: undefined,
    settings: undefined,

  }

      public getTables(): IDatabaseTables
  {
      return this.tableData;
  }

  public setTables(tableData: IDatabaseTables): void
  {
      this.tableData = tableData;
  }
} 
*/

// srvr/src/branch/3.8.1-DEV/project/src/controllers/BotControllers.ts
/* from -
    export class BotController
    {
      protected botConfig: IBotConfig;
      protected pmcConfig: IPmcConfig;

      constructor(
        // bunch of injects from @spt-diffpatch
          ProfileHelper
          ConfigServer
          ApplicationContext
          BotHelper
          BotGenerator
          DatabaseServer  from @spt-diffpatch/servers/DatabaseServer
      )
    }
    {
      // setters
      this.botConfig = ...
      this.pmcConfig = ...
    }

    // FUNCTIONS
    public getBotPresetGenerationLimit(type: string): number {}

    public getBotCoreDifficulty(): IBotCore
    {
      return this.databaseServer.getTables().bots.core;
    }

    public getBotDifficulty(type: string, diffLevel: string, ignoreRaidSettings = false): Difficulty
    {
      // sets difficulty based on 
          this.applicationContext.getLatestValue(ContextVariableType.RAID_CONFIGURATION).getValue
            <IGetRaidConfigurationRequestData>();

      // References
        @spt-diffpatch/context/ApplicationContext
        @spt-diffpatch/helpers/BotDifficultyHelper

    }



*/


//import * as Server380Repo from "./server380.js";
//import { Item } from './models/eft/common/tables/IItem'

/* const srvr = Server380Repo.baseURL;
const branch = Server380Repo.branch;
const path = Server380Repo.path;
const source = Server380Repo.source; */
/* 
[
    "bots",
    "hideout",
    "locales",
    "locations",
    "loot",
    "match",
    "templates",
    "traders",
  ]; */
interface Database {
  dirs: string[],
  files: string[],
};

export interface Item
{
    _id: string;
    _tpl: string;
    parentId?: string;
    slotId?: string;
    location?: Location | number;
    upd?: Upd;
}

export interface Upd
{
    Buff?: Buff;
    OriginalStackObjectsCount?: number;
    Togglable?: Togglable;
    Map?: Map;
    Tag?: Tag;
    /** SPT specific property, not made by BSG */
    sptPresetId?: string;
    FaceShield?: FaceShield;
    StackObjectsCount?: number;
    UnlimitedCount?: boolean;
    Repairable?: Repairable;
    RecodableComponent?: RecodableComponent;
    FireMode?: FireMode;
    SpawnedInSession?: boolean;
    Light?: {
      IsActive: boolean;
      SelectedMode: number;
    };
    Key?: Key;
    Resource?: Resource;
    Sight?: Sight;
    MedKit?: MedKit;
    FoodDrink?: FoodDrink;
    Dogtag?: Dogtag;
    BuyRestrictionMax?: number;
    BuyRestrictionCurrent?: number;
    Foldable?: Foldable;
    SideEffect?:  number;
    RepairKit?: {
      Resource: number;
    };
    CultistAmulet?: {
      NumberOfUsages: number;
    };
}
export interface Dogtag
{
    AccountId: string;
    ProfileId: string;
    Nickname: string;
    Side: string;
    Level: number;
    Time: string;
    Status: string;
    KillerAccountId: string;
    KillerProfileId: string;
    KillerName: string;
    WeaponName: string;
}

export interface Buff
{
    rarity: string;
    buffType: string;
    value: number;
    thresholdDurability?: number;
}

export interface Togglable
{
    On: boolean;
}

export interface Map
{
    Markers: MapMarker[];
}

export interface MapMarker
{
    X: number;
    Y: number;
}

export interface Tag
{
    Color: number;
    Name: string;
}

export interface FaceShield
{
    Hits: number;
}

export interface Repairable
{
    Durability: number;
    MaxDurability: number;
}

export interface RecodableComponent
{
    IsEncoded: boolean;
}

export interface MedKit
{
    HpResource: number;
}

export interface Sight
{
    ScopesCurrentCalibPointIndexes: number[];
    ScopesSelectedModes: number[];
    SelectedScope: number;
}

export interface Foldable
{
    Folded: boolean;
}

export interface FireMode
{
    FireMode: string;
}

export interface FoodDrink
{
    HpPercent: number;
}

export interface Key
{
    NumberOfUsages: number;
}

export interface Resource
{
    Value: number;
    UnitsConsumed: number;
}

export interface Light
{
    IsActive: boolean;
    SelectedMode: number;
}
export interface Location
{
    x: number;
    y: number;
    r: string | number;
    isSearched?: boolean;
    /** SPT property? */
    rotation?: string | boolean;
}

const db: Database = {
 dirs: [
  "bots",
  "hideout",
  "locales",
  "locations",
  "loot",
  "match",
  "templates",
  "traders",
 ],
  files : [
    "globals.json",
    "server.json",
    "settings.json"
  ]
}
console.log(db.dirs, db.files);

interface srvr {
  images: object;
  database: object;
  configs: object;
};


type ConfigFiles = [
  "airdrop.json",
  "bot.json",
  "btr.json",
  "core.json",
  "item.json",
  "gifts.json",
  "health.json",
  "hideout.json",
  "http.json",
  "inraid.json",
  "insurance.json",
  "inventory.json",
  "item.json",
  "locale.json",
  "location.json",
  "loot.json",
  "lostondeath.json",
  "match.json",
  "playerscav.json",
  "pmc.json",
  "pmcchatresponse.json",
  "quest.json",
  "ragfair.json",
  "repair.json",
  "scavcase.json",
  "seasonalevents.json",
  "trader.json",
  "weather.json",
];

type Bots = [    
  "bosskilla.json",
  "bossknight.json",
  "bosskojaniy.json","arenafighter.json",
  "arenafighterevent.json",
  "assault.json",
  "bear.json",
  "bossboar.json",
  "bossboarsniper.json",
  "bossbully.json",
  "bossgluhar.json",
  "bosskolontay.json",
  "bosssanitar.json",
  "bosstest.json",
  "bosszryachiy.json",
  "crazyassaultevent.json",
  "cursedassault.json",
  "exusec.json",
  "followerbigpipe.json",
  "followerbirdeye.json",
  "followerboar.json",
  "followerboarclose1.json",
  "followerboarclose2.json",
  "followerbully.json",
  "followergluharassault.json",
  "followergluharscout.json",
  "followersecurity.json",
  "followersnipe.json",
  "followerkojaniy.json",
  "followerkolontayassault.json",
  "followerkolontaysecurity.json",
  "followersanitar.json",
  "followertagilla.json",
  "followertest.json",
  "followerzryachiy.json",
  "gifter.json",
  "marksman.json",
  "peacefullzryachiyevent.json",
  "pmcbot.json",
  "ravangezryachiyevent.json",
  "sectactpriestevent.json",
  "sectantpriest.json",
  "sectantwarrior.json",
  "shooterbtr.json",
  "test.json",
  "usec.json",
  "base.json",
  "core.json",
  ];
type Locations = {};
type Hideout = {};
type locales = {};
type Loot = {};
type match = {};
type templates = {};
type Traders = {};

export type Server = {
  baseURL : "https://dev.sp-tarkov.com/SPT-AKI/Server";
  branch: "";
  path: "/project/assets/";
  configs:{};
  images:{};
  database:{
    bots: Bots;
    templates: [
      "ArchivedQuests.json",
      "achievements.json",
      "character.json",
      "customization.json",
      "defaultEquipmentPresets.json",
      "handbook.json",
      "items.json",
      "prices.json",
      "profiles.json",
      "quests.json",
      "repeatableQuests.json",
    ];
    locations: {
      bigmap: [
        "base.json", 
        "looseLoot.json", 
        "statics.json"
      ];
      develop: ["base.json"];
      factory4_day: [
        "base.json", 
        "looseLoot.json", 
        "statics.json"
      ],
      factory4_night: [
        "base.json",
        "looseLoot.json",
        "statics.json"
      ];
      hideout: ["base.json"],
      interchange: ["base.json", "looseLoot.json", "statics.json"],
      laboratory: ["base.json", "looseLoot.json", "statics.json"];
      lighthouse: ["base.json", "looseLoot.json", "statics.json"];
      privatearea: ["base.json"];
      rezervbase: ["base.json", "looseLoot.json", "statics.json"];
      sandbox: ["base.json", "looseLoot.json", "statics.json"];
      shoreline: ["base.json", "looseLoot.json", "statics.json"];
      suburbs: ["base.json"];
      tarkovstreets: ["base.json", "looseLoot.json", "statics.json"];
      terminal: ["base.json"];
      towns: ["base.json"];
      woods: ["base.json", "looseLoot.json", "statics.json"];
      loot: ["staticAmmo.json", "staticContainers.json", "staticLoot.json"];
      match: ["metrics.json"];
      base: "base.json"
      files: [
        "globals.json",
        "server.json",
        "settings.json"
      ]
    }
  };
}
let j = `src
 └── views
      └── view1.ts (can import "./template1", "./view2
      └── view2.ts (can import "./template1", "./view1"
`;
console.log(j);

      
type tradersObjectArray = [
    {
      "5a7c2eca46aef81a7ca2145d": [
        "assort.json",
        "base.json",
        "questassort.json",
      ],
    },
    {
      "5ac3b934156ae1Oc4430e83c": [
        "assort.json",
        "base.json",
        "questassort.json",
      ],
    },
    {
      "5c0647fdd443bc2504c2d371": [
        "assort.json",
        "base.json",
        "questassort.json",
      ],
    },
    {
      "54cb50c76803fa8b248b4571": [
        "assort.json",
        "base.json",
        "questassort.json",
      ],
    },
    {
      "54cb57776803fa99248b456e": [
        "assort.json",
        "base.json",
        "questassort.json",
      ],
    },
    {
      "579dc571d53a0658a154fbec": [
        "assort.json",
        "base.json",
        "dialogue.json",
        "questassort.json",
      ],
    },
    {
      "638f541a29ffd1183d187f57": ["base.json", "services.json"],
    },
    {
      "656fOf98d80a697f855d34b1": [
        "assort.json",
        "base.json",
        "dialogue.json",
        "questassort.json",
        "services.json",
      ],
    },
    {
      "5935c25fb3acc3127c3d8cd9": [
        "assort.json",
        "base.json",
        "questassort.json",
      ],
    },
    {
      "58330581ace78e27b8b10cee": [
        "assort.json",
        "base.json",
        "questassort.json",
      ],
    },
    {
      ragfair: ["base.json"],
    },
  ];


const botConfig = "this.configServer.getConfig(ConfigTypes.BOT)";
const pmcConfig = "this.configServer.getConfig(ConfigTypes.PMC)";

// CLI api example - tarkov.dev/api/
// curl -X POST -H "Content-Type: application/json" -d '{"query": "{ items(name: \"m855a1\") {id name shortName } }"}' https://api.tarkov.dev/graphql


/* export class DatabaseServer
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
}  */

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
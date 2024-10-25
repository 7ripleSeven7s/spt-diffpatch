// bot.ts

interface Bot {
  presetBatch: Batch;
  bosses: BotWeight;
  durability: Durability;
  lootItemResourceRandomization: LootItemResourceRandomization;
  chanceAssaultScavHasPlayerScavName: number;
  secureContainerAmmoStackCount: number;
  botRolesWithDogTags: BotRolesWithDogTags;
  revenge: Revenge;
  itemSpawnLimits: ItemSpawnLimits;
  equipment: Equipment;
  showTypeInNickname: ShowTypeInNickname;
  assaultBrainType: AssaultBrainType;
  playerScavBrainType: PlayerScavBrainType;
  maxBotCap: MaxBotCap;
  walletLoot: WalletLoot;
  currencyStackSize: CurrencyStackSize;
}


interface Batch {
  assault: BotWeight;
  bossBully: BotWeight;
  bossGluhar: BotWeight;
  bossKilla: BotWeight;
  bossKojaniy: BotWeight;
  bossSanitar: BotWeight;
  bossTagilla: BotWeight;
  bossKnight: BotWeight;
  bossZryachiy: BotWeight;
  bossTest: BotWeight;
  bossKolontay: BotWeight;
  cursedAssault: BotWeight;
  followerBully: BotWeight;
  followerGluharAssault: BotWeight;
  followerGluharScout: BotWeight;
  followerGluharSecurity: BotWeight;
  followerGluharSnipe: BotWeight;
  followerKojaniy: BotWeight;
  followerSanitar: BotWeight;
  followerTagilla: BotWeight;
  followerBirdEye: BotWeight;
  followerBigPipe: BotWeight;
  followerZryachiy: BotWeight;
  followerTest: BotWeight;
  followerBoar: BotWeight;
  marksman: BotWeight;
  pmcBot: BotWeight;
  sectantPriest: BotWeight;
  sectantWarrior: BotWeight;
  gifter: BotWeight;
  test: BotWeight;
  exUsec: BotWeight;
  arenaFighterEvent: BotWeight;
  arenaFighter: BotWeight;
  crazyAssaultEvent: BotWeight;
  bossBoar: BotWeight;
  bossBoarSniper: BotWeight;
  followerBoarClose1: BotWeight;
  followerBoarClose2: BotWeight;
  followerKolontayAssault: BotWeight;
  followerKolontaySecurity: BotWeight;
  shooterBTR: BotWeight;
  peacefullZryachiyEvent: BotWeight;
  ravangeZryachiyEvent: BotWeight;
  sectactPriestEvent: BotWeight;
}


type BotWeight = number;


interface BotRolesWithDogTags {
  sptUsec: Number;
  sptBear: Number;
}


interface Weapon {
  lowestMax: number;
  highestMax: number;
  maxDelta: number;
  minDelta: number;
  minLimitPercent: number;
}


interface Armor {
  maxDelta: number;
  minDelta: number;
  minLimitPercent: number;
}

interface DurabilityBase {
  armor: Armor;
  weapon: Weapon;
}

interface Durability {
  default: DurabilityBase;
  pmc: DurabilityBase;
  boss: DurabilityBase;
  follower: DurabilityBase;
  assault: DurabilityBase;
  cursedassault: DurabilityBase;
  marksman: DurabilityBase;
  pmcbot: DurabilityBase;
  arenafighterevent: DurabilityBase;
  arenafighter: DurabilityBase;
  crazyassaultevent: DurabilityBase;
  exusec: DurabilityBase;
  sectantpriest: DurabilityBase;
  sectantwarrior: DurabilityBase;
}


interface Difficulty {
  Aiming: Number;
  Boss: Number;
  Change: Number;
  Core: Number;
  Cover: Number;
  Grenade: Number;
  Hearing: Number;
  Lay: Number;
  Look: Number;
  Mind: Number;
  Move: Number;
  Patrol: Number;
  Scattering: Number;
  Shoot: Number;
}


interface LootItemResourceRandomization {
  assault: {
    food: {
      resourcePercent: number;
      chanceMaxResourcePercent: number;
    }
    meds: {
      resourcePercent: number;
      chanceMaxResourcePercent: number;
    }
  }
}


interface Revenge {
  assault: [
    assault: string,
    marksman: string,
    gifter: string,
  ],
  marksman: [
    assault: string,
    marksman: string,
    gifter: string,
  ]
  pmcBot: [
    pmcBot: string,
    gifter: string,
  ]
}

interface ItemSpawnLimits {

}

interface Equipment {

}

type ShowTypeInNickname = number;

interface PlayerScavBrainType {}

interface PlayerScavBrainType {

}

interface AssaultBrainType {

}

interface MaxBotCap {

}

interface WalletLoot {
  chancePercent: number;
  itemCount: object;
  stackSizeWeight: object;
  currencyWeight: object;
  walletTplPool: string[];
}

interface CurrencyStackSize {

}

/*
 * @typedef {Bosses} bosses 
 * @property {String} bossbully,
 * @property {String} bossgluhar,
 * @property {String} bosskilla,
 * @property {String} bosskojaniy,
 * @property {String} bosssanitar,
 * @property {String} bosstagilla,
 * @property {String} bossknight,
 * @property {String} bosszryachiy,
 * @property {String} bossboar,
 * @property {String} bossboarSniper,
 * @property {String} bosskolontay
    ],
 */

interface BodyPartSettings {
  Head: BodyPart;
  Chest: BodyPart;
  LeftArm: BodyPart;
  LeftLeg: BodyPart;
  RightArm: BodyPart;
  RightLeg: BodyPart;
  Stomach: BodyPart;
}

interface BodyPart {
  Default: Number;
  Maximum: Number;
  Minimum: Number;
  EnvironmentDamageMultiplier: Number;
  OverDamageReceivedMultiplier: Number;
}

/*
 * @typedef {Object} BodyPart
 * @property {number} Default
 * @property {number} Maximum
 * @property {number} Minimum
 * @property {number} EnvironmentDamageMultiplier
 * @property {number} OverDamageReceivedMultiplier
 * 
 */


interface BotDifficulty {
  easy: Difficulty;
  normal: Difficulty;
  hard: Difficulty;
  insane: Difficulty;
}

interface Shoot {
  AUTOMATIC_FIRE_SCATTERING_COEF: number;
  BASE_AUTOMATIC_TIME: number;
  CAN_SHOOTS_TIME_TO_AMBUSH: number;
  CHANCE_TO_CHANGE_TO_AUTOMATIC_FIRE_100: number;
  FINGER_HOLD_SINGLE_SHOT: number;
  HORIZONT_RECOIL_COEF: number;
  MAX_RECOIL_PER_METER: number;
  NOT_TO_SEE_ENEMY_TO_WANT_RELOAD_PERCENT: number;
  RECOIL_DELTA_PRESS: number;
  RECOIL_PER_METER: number;
  SUPPRESS_BY_SHOOT_TIME: number;
  WAIT_NEXT_SINGLE_SHOT: number;
  WAIT_NEXT_SINGLE_SHOT_LONG_MAX: number;
  WAIT_NEXT_SINGLE_SHOT_LONG_MIN: number;
  WAIT_NEXT_STATIONARY_GRENADE: number;
}

 

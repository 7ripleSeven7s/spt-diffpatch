// bot.ts

/**
 * @typedef  {Number} t} presetBatch ": {
 * @property {Number} er} assault ": 50,
 * @property {Number} bossBully": 5,
 * @property {Number} bossGluhar": 5,
 * @property {Number} bossKilla": 5,
 * @property {Number} bossKojaniy": 5,
 * @property {Number} bossSanitar": 5,
 * @property {Number} bossTagilla": 5,
 * @property {Number} bossKnight": 5,
 * @property {Number} bossZryachiy": 5,
 * @property {Number} bossTest": 10,
 * @property {Number} bossKolontay": 5,
 * @property {Number} cursedAssault": 50,
 * @property {Number} followerBully": 5,
 * @property {Number} followerGluharAssault": 5,
 * @property {Number} followerGluharScout": 5,
 * @property {Number} followerGluharSecurity": 5,
 * @property {Number} followerGluharSnipe": 5,
 * @property {Number} followerKojaniy": 5,
 * @property {Number} followerSanitar": 5,
 * @property {Number} followerTagilla": 5,
 * @property {Number} followerBirdEye": 5,
 * @property {Number} followerBigPipe": 5,
 * @property {Number} followerZryachiy": 10,
 * @property {Number} followerTest": 10,
 * @property {Number} followerBoar": 15,
 * @property {Number} marksman": 30,
 * @property {Number} pmcBot": 40,
 * @property {Number} sectantPriest": 10,
 * @property {Number} sectantWarrior": 10,
 * @property {Number} gifter": 5,
 * @property {Number} test": 30,
 * @property {Number} exUsec": 15,
 * @property {Number} arenaFighterEvent": 15,
 * @property {Number} arenaFighter": 15,
 * @property {Number} crazyAssaultEvent": 15,
 * @property {Number} bossBoar": 5,
 * @property {Number} bossBoarSniper": 5,
 * @property {Number} followerBoarClose1": 10,
 * @property {Number} followerBoarClose2": 10,
 * @property {Number} followerKolontayAssault": 10,
 * @property {Number} followerKolontaySecurity": 10,
 * @property {Number} shooterBTR": 1,
 * @property {Number} peacefullZryachiyEvent": 5,
 * @property {Number} ravangeZryachiyEvent": 5,
 * @property {Number} sectactPriestEvent": 10,
 */


/**  
 * @typedef {Object} botRolesWithDogTags
 * @property {Number} sptUsec  15,
 * @property {Number} sptBear  15 
 *
 */


/**
 * @typedef {Object} durability": {
 * @property {Number} default": {
 * @property {Number}    "armor": {
 * @property {Number}        "maxDelta": 10,
 * @property             "minDelta": 0,
 * @property             "minLimitPercent": 15
 * @property         },
 * @property         "weapon": {
 * @property             "lowestMax": 60,
 * @property             "highestMax": 100,
 * @property             "maxDelta": 10,
 * @property             "minDelta": 0,
 * @property             "minLimitPercent": 15
 * @property         }
 * @property     },
 * @property     "pmc": {
 * @property         "armor": {
 * @property             "lowestMaxPercent": 90,
 * @property             "highestMaxPercent": 100,
 * @property             "maxDelta": 10,
 * @property             "minDelta": 0,
 * @property             "minLimitPercent": 15
 * @property         },
 * @property         "weapon": {
 * @property             "lowestMax": 95,
 * @property             "highestMax": 100,
 * @property             "maxDelta": 5,
 * @property             "minDelta": 0,
 * @property             "minLimitPercent": 15
 * @property         }
 * @property     },
 * @property     "boss": {
 * @property         "armor": {
 * @property             "maxDelta": 0,
 * @property             "minDelta": 0,
 * @property             "minLimitPercent": 100
 * @property         },
 * @property         "weapon": {
 * @property             "lowestMax": 80,
 * @property             "highestMax": 100,
 * @property             "maxDelta": 10,
 * @property             "minDelta": 0,
 * @property             "minLimitPercent": 15
 * @property         }
 * @property     },
 * @property     "follower": {
 * @property         "armor": {
 * @property             "maxDelta": 10,
 * @property             "minDelta": 0,
 * @property             "minLimitPercent": 15
 * @property         },
 * @property         "weapon": {
 * @property             "lowestMax": 80,
 * @property             "highestMax": 100,
 * @property             "maxDelta": 40,
 * @property             "minDelta": 20,
 * @property             "minLimitPercent": 15
 * @property         }
 * @property     },
 * @property     "assault": {
 * @property         "armor": {
 * @property             "maxDelta": 50,
 * @property             "minDelta": 0,
 * @property             "minLimitPercent": 15
 * @property         },
 * @property         "weapon": {
 * @property             "lowestMax": 85,
 * @property             "highestMax": 100,
 * @property             "maxDelta": 45,
 * @property             "minDelta": 30,
 * @property             "minLimitPercent": 15
 * @property         }
 * @property     },
 * @property     "cursedassault": {
 * @property         "armor": {
 * @property             "maxDelta": 10,
 * @property             "minDelta": 0,
 * @property             "minLimitPercent": 15
 * @property         },
 * @property         "weapon": {
 * @property             "lowestMax": 80,
 * @property             "highestMax": 100,
 * @property             "maxDelta": 25,
 * @property             "minDelta": 0,
 * @property             "minLimitPercent": 15
 * @property         }
 * @property     },
 * @property     "marksman": {
 * @property         "armor": {
 * @property             "maxDelta": 10,
 * @property             "minDelta": 0,
 * @property             "minLimitPercent": 15
 * @property         },
 * @property         "weapon": {
 * @property             "lowestMax": 60,
 * @property             "highestMax": 100,
 * @property             "maxDelta": 25,
 * @property             "minDelta": 0,
 * @property             "minLimitPercent": 15
 * @property         }
 * @property     },
 * @property     "pmcbot": {
 * @property         "armor": {
 * @property             "maxDelta": 10,
 * @property             "minDelta": 0,
 * @property             "minLimitPercent": 15
 * @property         },
 * @property         "weapon": {
 * @property             "lowestMax": 80,
 * @property             "highestMax": 100,
 * @property             "maxDelta": 40,
 * @property             "minDelta": 20,
 * @property             "minLimitPercent": 15
 * @property         }
 * @property     },
 * @property     "arenafighterevent": {
 * @property         "armor": {
 * @property             "maxDelta": 10,
 * @property             "minDelta": 0,
 * @property             "minLimitPercent": 15
 * @property         },
 * @property         "weapon": {
 * @property             "lowestMax": 80,
 * @property             "highestMax": 100,
 * @property             "maxDelta": 10,
 * @property             "minDelta": 0,
 * @property             "minLimitPercent": 15
 * @property         }
 * @property     },
 * @property     "arenafighter": {
 * @property         "armor": {
 * @property             "maxDelta": 10,
 * @property             "minDelta": 0,
 * @property             "minLimitPercent": 15
 * @property         },
 * @property         "weapon": {
 * @property             "lowestMax": 80,
 * @property             "highestMax": 100,
 * @property             "maxDelta": 10,
 * @property             "minDelta": 0,
 * @property             "minLimitPercent": 15
 * @property         }
 * @property     },
 * @property     "crazyassaultevent": {
 * @property         "armor": {
 * @property             "maxDelta": 50,
 * @property             "minDelta": 0,
 * @property             "minLimitPercent": 15
 * @property         },
 * @property         "weapon": {
 * @property             "lowestMax": 85,
 * @property             "highestMax": 100,
 * @property             "maxDelta": 45,
 * @property             "minDelta": 30,
 * @property             "minLimitPercent": 15
 * @property         }
 * @property     },
 * @property     "exusec": {
 * @property         "armor": {
 * @property             "maxDelta": 10,
 * @property             "minDelta": 0,
 * @property             "minLimitPercent": 15
 * @property         },
 * @property         "weapon": {
 * @property             "lowestMax": 80,
 * @property             "highestMax": 100,
 * @property             "maxDelta": 40,
 * @property             "minDelta": 20,
 * @property             "minLimitPercent": 15
 * @property         }
 * @property     },
 * @property     "sectantpriest": {
 * @property         "armor": {
 * @property             "maxDelta": 10,
 * @property             "minDelta": 0,
 * @property             "minLimitPercent": 15
 * @property         },
 * @property         "weapon": {
 * @property             "lowestMax": 90,
 * @property             "highestMax": 100,
 * @property             "maxDelta": 10,
 * @property             "minDelta": 0,
 * @property             "minLimitPercent": 15
 * @property         }
 * @property     },
 * @property     "sectantwarrior": {
 * @property         "armor": {
 * @property             "maxDelta": 10,
 * @property             "minDelta": 0,
 * @property             "minLimitPercent": 15
 * @property         },
 * @property         "weapon": {
 * @property             "lowestMax": 90,
 * @property             "highestMax": 100,
 * @property             "maxDelta": 10,
 * @property             "minDelta": 0,
 * @property             "minLimitPercent": 15
 * @property         }
 * @property     }
 * @property },
 * @property "lootItemResourceRandomization": {
 * @property     "assault": {
 * @property         "food": {
 * @property             "resourcePercent": 65,
 * @property             "chanceMaxResourcePercent": 30
 * @property         },
 * @property         "meds": {
 * @property             "resourcePercent": 50,
 * @property             "chanceMaxResourcePercent": 40
 * @property         }
 * @property     }
 * @property },
 * @property "chanceAssaultScavHasPlayerScavName": 10,
 * @property "secureContainerAmmoStackCount": 20,
 * @property "botRolesWithDogTags": [
 * @property     "sptbear",
 * @property     "sptusec"
 * @property ],
 * @property "revenge": {
 * @property     "assault": [
 * @property         "assault",
 * @property         "marksman",
 * @property         "gifter"
 * @property     ],
 * @property     "marksman": [
 * @property         "assault",
 * @property         "marksman",
 * @property         "gifter"
 * @property     ],
 * @property     "pmcBot": [
 * @property         "pmcBot",
 * @property         "gifter"
 * @property     ]
 * @property },
 * @property "itemSpawnLimits": {
 * @property     "default": {},
 * @property     "assault": {
 * @property         "5a0c27731526d80618476ac4": 1,
 * @property         "5c99f98d86f7745c314214b3": 1,
 * @property         "5448f3ac4bdc2dce718b4569": 4,
 * @property         "62a09d3bcf4a99369e262447": 1,
 * @property         "5448e8d64bdc2dce718b4568": 2,
 * @property         "5448e8d04bdc2ddf718b4569": 2,
 * @property         "5449016a4bdc2d6f028b456f": 2,
 * @property         "5783c43d2459774bbe137486": 1,
 * @property         "60b0f6c058e0b0481a09ad11": 1
 * @property     },
 * @property     "marksman": {
 * @property         "60b0f6c058e0b0481a09ad11": 1,
 * @property         "5783c43d2459774bbe137486": 1,
 * @property         "62a09d3bcf4a99369e262447": 1
 * @property     },
 * @property     "cursedassault": {},
 * @property     "exusec": {
 * @property         "60098ad7c2240c0fe85c570a": 2
 * @property     },
 * @property     "bossbully": {
 * @property         "5448ba0b4bdc2d02308b456c": 1
 * @property     },
 * @property     "bossgluhar": {
 * @property         "5c94bbff86f7747ee735c08f": 1
 * @property     },
 * @property     "bosskilla": {},
 * @property     "bosskojaniy": {
 * @property         "5d08d21286f774736e7c94c3": 1,
 * @property         "5c94bbff86f7747ee735c08f": 1
 * @property     },
 * @property     "bosssanitar": {
 * @property         "5efde6b4f5448336730dbd61": 1,
 * @property         "5eff09cd30a7dc22fd1ddfed": 1
 * @property     },
 * @property     "bosstagilla": {},
 * @property     "bossknight": {},
 * @property     "bosszryachiy": {},
 * @property     "bosskolontay": {},
 * @property     "bosstest": {},
 * @property     "followerbully": {
 * @property         "5448e8d64bdc2dce718b4568": 1,
 * @property         "5448ba0b4bdc2d02308b456c": 1
 * @property     },
 * @property     "followergluharassault": {
 * @property         "5c0fa877d174af02a012e1cf": 1,
 * @property         "5c94bbff86f7747ee735c08f": 0
 * @property     },
 * @property     "followergluharscout": {
 * @property         "5c0fa877d174af02a012e1cf": 1,
 * @property         "5c94bbff86f7747ee735c08f": 0
 * @property     },
 * @property     "followergluharsecurity": {
 * @property         "5c0fa877d174af02a012e1cf": 1,
 * @property         "5c94bbff86f7747ee735c08f": 0
 * @property     },
 * @property     "followergluharsnipe": {
 * @property         "5c0fa877d174af02a012e1cf": 1,
 * @property         "5c94bbff86f7747ee735c08f": 0
 * @property     },
 * @property     "followerkojaniy": {
 * @property         "5448e8d64bdc2dce718b4568": 2
 * @property     },
 * @property     "followersanitar": {},
 * @property     "followertagilla": {},
 * @property     "followerbirdeye": {},
 * @property     "followerbigpipe": {},
 * @property     "followerzryachiy": {},
 * @property     "followertest": {},
 * @property     "followerboar": {
 * @property         "5448e8d04bdc2ddf718b4569": 1,
 * @property         "544fb37f4bdc2dee738b4567": 1,
 * @property         "5448e8d64bdc2dce718b4568": 1,
 * @property         "5c94bbff86f7747ee735c08f": 1
 * @property     },
 * @property     "followerboarclose1": {
 * @property         "5448e8d04bdc2ddf718b4569": 1,
 * @property         "5448e8d64bdc2dce718b4568": 1,
 * @property         "5c94bbff86f7747ee735c08f": 1
 * @property     },
 * @property     "followerboarclose2": {
 * @property         "5448e8d04bdc2ddf718b4569": 1,
 * @property         "5448e8d64bdc2dce718b4568": 1,
 * @property         "5c94bbff86f7747ee735c08f": 1
 * @property     },
 * @property     "followerkolontayassault": {
 * @property         "5448e8d04bdc2ddf718b4569": 2,
 * @property         "5c94bbff86f7747ee735c08f": 1,
 * @property         "5448e8d64bdc2dce718b4568": 2
 * @property     },
 * @property     "followerkolontaysecurity": {
 * @property         "5448e8d04bdc2ddf718b4569": 2,
 * @property         "5c94bbff86f7747ee735c08f": 1,
 * @property         "5448e8d64bdc2dce718b4568": 2
 * @property     },
 * @property     "sectantpriest": {},
 * @property     "sectantwarrior": {},
 * @property     "test": {},
 * @property     "pmcbot": {
 * @property         "60098ad7c2240c0fe85c570a": 2
 * @property     },
 * @property     "arenafighterevent": {
 * @property         "5734758f24597738025ee253": 1
 * @property     },
 * @property     "arenafighter": {
 * @property         "5734758f24597738025ee253": 1
 * @property     },
 * @property     "crazyassaultevent": {},
 * @property     "assaultgroup": {},
 * @property     "gifter": {},
 * @property     "bossboar": {},
 * @property     "bossboarsniper": {},
 * @property     "ravangezryachiyevent": {},
 * @property     "pmc": {
 * @property         "5c99f98d86f7745c314214b3": 1,
 * @property         "5c164d2286f774194c5e69fa": 1,
 * @property         "550aa4cd4bdc2dd8348b456c": 2,
 * @property         "55818add4bdc2d5b648b456f": 1,
 * @property         "55818ad54bdc2ddc698b4569": 1,
 * @property         "55818aeb4bdc2ddc698b456a": 1,
 * @property         "55818ae44bdc2dde698b456c": 1,
 * @property         "55818af64bdc2d5b648b4570": 1,
 * @property         "5448e54d4bdc2dcc718b4568": 1,
 * @property         "5448f3a64bdc2d60728b456a": 2,
 * @property         "5447e1d04bdc2dff2f8b4567": 1,
 * @property         "5a341c4686f77469e155819e": 1,
 * @property         "55818b164bdc2ddc698b456c": 2,
 * @property         "5448bc234bdc2d3c308b4569": 2,
 * @property         "543be5dd4bdc2deb348b4569": 1,
 * @property         "543be5cb4bdc2deb348b4568": 2,
 * @property         "5485a8684bdc2da71d8b4567": 2,
 * @property         "5d650c3e815116009f6201d2": 2,
 * @property         "5448f39d4bdc2d0a728b4568": 2,
 * @property         "543be6564bdc2df4348b4568": 1,
 * @property         "5751a25924597722c463c472": 2,
 * @property         "544fb37f4bdc2dee738b4567": 2
 * @property     },
 * @property     "shooterbtr": {}
 * @property },
 * @property "equipment": {
 * @property     "assault": {
 * @property         "weaponModLimits": {
 * @property             "scopeLimit": 1,
 * @property             "lightLaserLimit": 2
 * @property         },
 * @property         "faceShieldIsActiveChancePercent": 85,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 85,
 * @property         "laserIsActiveChancePercent": 75,
 * @property         "nvgIsActiveChanceDayPercent": 20,
 * @property         "nvgIsActiveChanceNightPercent": 90,
 * @property         "weightingAdjustmentsByPlayerLevel": [
 * @property             {
 * @property                 "levelRange": {
 * @property                     "min": 1,
 * @property                     "max": 6
 * @property                 },
 * @property                 "equipment": {
 * @property                     "add": {},
 * @property                     "edit": {
 * @property                         "FaceCover": {
 * @property                             "572b7fa524597762b747ce82": 30
 * @property                         },
 * @property                         "FirstPrimaryWeapon": {
 * @property                             "54491c4f4bdc2db1078b4568": 90,
 * @property                             "5a38e6bac4a2826c6e06d79b": 90
 * @property                         }
 * @property                     }
 * @property                 }
 * @property             }
 * @property         ]
 * @property     },
 * @property     "marksman": {
 * @property         "nvgIsActiveChanceDayPercent": 20,
 * @property         "nvgIsActiveChanceNightPercent": 90,
 * @property         "faceShieldIsActiveChancePercent": 100,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 85,
 * @property         "laserIsActiveChancePercent": 85,
 * @property         "weaponModLimits": {
 * @property             "scopeLimit": 1,
 * @property             "lightLaserLimit": 1
 * @property         },
 * @property         "forceStock": true
 * @property     },
 * @property     "cursedassault": {
 * @property         "nvgIsActiveChanceDayPercent": 20,
 * @property         "nvgIsActiveChanceNightPercent": 60,
 * @property         "faceShieldIsActiveChancePercent": 90,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 75,
 * @property         "laserIsActiveChancePercent": 75
 * @property     },
 * @property     "exusec": {
 * @property         "nvgIsActiveChanceDayPercent": 10,
 * @property         "nvgIsActiveChanceNightPercent": 90,
 * @property         "faceShieldIsActiveChancePercent": 100,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 90,
 * @property         "laserIsActiveChancePercent": 85,
 * @property         "forceStock": true,
 * @property         "weaponSlotIdsToMakeRequired": [
 * @property             "mod_reciever"
 * @property         ]
 * @property     },
 * @property     "bossbully": {
 * @property         "nvgIsActiveChanceDayPercent": 10,
 * @property         "nvgIsActiveChanceNightPercent": 90,
 * @property         "faceShieldIsActiveChancePercent": 100,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 75,
 * @property         "laserIsActiveChancePercent": 75,
 * @property         "forceStock": true
 * @property     },
 * @property     "bossgluhar": {
 * @property         "nvgIsActiveChanceDayPercent": 10,
 * @property         "nvgIsActiveChanceNightPercent": 90,
 * @property         "faceShieldIsActiveChancePercent": 100,
 * @property         "lightIsActiveDayChancePercent": 45,
 * @property         "lightIsActiveNightChancePercent": 95,
 * @property         "laserIsActiveChancePercent": 95,
 * @property         "forceStock": true
 * @property     },
 * @property     "bosskilla": {
 * @property         "faceShieldIsActiveChancePercent": 100,
 * @property         "lightIsActiveDayChancePercent": 75,
 * @property         "lightIsActiveNightChancePercent": 85,
 * @property         "laserIsActiveChancePercent": 85,
 * @property         "forceStock": true
 * @property     },
 * @property     "bosskojaniy": {
 * @property         "faceShieldIsActiveChancePercent": 100,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 75,
 * @property         "laserIsActiveChancePercent": 75,
 * @property         "weaponModLimits": {
 * @property             "scopeLimit": 1,
 * @property             "lightLaserLimit": 1
 * @property         },
 * @property         "forceStock": true
 * @property     },
 * @property     "bosssanitar": {
 * @property         "faceShieldIsActiveChancePercent": 100,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 75,
 * @property         "laserIsActiveChancePercent": 85,
 * @property         "forceStock": true
 * @property     },
 * @property     "bosstagilla": {
 * @property         "faceShieldIsActiveChancePercent": 100,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 75,
 * @property         "laserIsActiveChancePercent": 75,
 * @property         "forceStock": true
 * @property     },
 * @property     "bossknight": {
 * @property         "nvgIsActiveChanceDayPercent": 10,
 * @property         "nvgIsActiveChanceNightPercent": 90,
 * @property         "faceShieldIsActiveChancePercent": 100,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 75,
 * @property         "laserIsActiveChancePercent": 75,
 * @property         "forceStock": true
 * @property     },
 * @property     "bosszryachiy": {
 * @property         "nvgIsActiveChanceDayPercent": 10,
 * @property         "nvgIsActiveChanceNightPercent": 90,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 85,
 * @property         "laserIsActiveChancePercent": 85,
 * @property         "forceStock": true
 * @property     },
 * @property     "bossboar": {
 * @property         "nvgIsActiveChanceDayPercent": 10,
 * @property         "nvgIsActiveChanceNightPercent": 90,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 85,
 * @property         "laserIsActiveChancePercent": 85,
 * @property         "weaponModLimits": {
 * @property             "scopeLimit": 1,
 * @property             "lightLaserLimit": 1
 * @property         },
 * @property         "forceStock": true
 * @property     },
 * @property     "ravangezryachiyevent": {
 * @property         "nvgIsActiveChanceDayPercent": 10,
 * @property         "nvgIsActiveChanceNightPercent": 90,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 85,
 * @property         "laserIsActiveChancePercent": 85,
 * @property         "forceStock": true
 * @property     },
 * @property     "bosstest": {},
 * @property     "shooterbtr": {},
 * @property     "followerkolontayassault": {
 * @property         "faceShieldIsActiveChancePercent": 100,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 75,
 * @property         "laserIsActiveChancePercent": 75,
 * @property         "forceStock": true
 * @property     },
 * @property     "followerkolontaysecurity": {
 * @property         "faceShieldIsActiveChancePercent": 100,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 75,
 * @property         "laserIsActiveChancePercent": 75,
 * @property         "forceStock": true
 * @property     },
 * @property     "followerbully": {
 * @property         "faceShieldIsActiveChancePercent": 100,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 75,
 * @property         "laserIsActiveChancePercent": 75,
 * @property         "forceStock": true
 * @property     },
 * @property     "followergluharassault": {
 * @property         "nvgIsActiveChanceDayPercent": 10,
 * @property         "nvgIsActiveChanceNightPercent": 85,
 * @property         "faceShieldIsActiveChancePercent": 100,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 75,
 * @property         "laserIsActiveChancePercent": 75,
 * @property         "forceStock": true
 * @property     },
 * @property     "followergluharscout": {
 * @property         "faceShieldIsActiveChancePercent": 100,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 75,
 * @property         "laserIsActiveChancePercent": 75
 * @property     },
 * @property     "followergluharsecurity": {
 * @property         "faceShieldIsActiveChancePercent": 100,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 75,
 * @property         "laserIsActiveChancePercent": 75
 * @property     },
 * @property     "followergluharsnipe": {
 * @property         "faceShieldIsActiveChancePercent": 100,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 75,
 * @property         "laserIsActiveChancePercent": 75
 * @property     },
 * @property     "followerkojaniy": {
 * @property         "nvgIsActiveChanceDayPercent": 10,
 * @property         "nvgIsActiveChanceNightPercent": 85,
 * @property         "faceShieldIsActiveChancePercent": 100,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 75,
 * @property         "laserIsActiveChancePercent": 75
 * @property     },
 * @property     "followersanitar": {
 * @property         "faceShieldIsActiveChancePercent": 100,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 75,
 * @property         "laserIsActiveChancePercent": 75
 * @property     },
 * @property     "followertagilla": {},
 * @property     "followerbirdeye": {
 * @property         "nvgIsActiveChanceDayPercent": 10,
 * @property         "nvgIsActiveChanceNightPercent": 90,
 * @property         "faceShieldIsActiveChancePercent": 100,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 75,
 * @property         "laserIsActiveChancePercent": 75,
 * @property         "forceStock": true,
 * @property         "weaponModLimits": {
 * @property             "scopeLimit": 1,
 * @property             "lightLaserLimit": 1
 * @property         }
 * @property     },
 * @property     "followerbigpipe": {
 * @property         "nvgIsActiveChanceDayPercent": 10,
 * @property         "nvgIsActiveChanceNightPercent": 90,
 * @property         "faceShieldIsActiveChancePercent": 100,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 75,
 * @property         "laserIsActiveChancePercent": 75,
 * @property         "forceStock": true
 * @property     },
 * @property     "followerzryachiy": {
 * @property         "nvgIsActiveChanceDayPercent": 10,
 * @property         "nvgIsActiveChanceNightPercent": 90,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 85,
 * @property         "laserIsActiveChancePercent": 85,
 * @property         "forceStock": true
 * @property     },
 * @property     "followerboar": {
 * @property         "nvgIsActiveChanceDayPercent": 20,
 * @property         "nvgIsActiveChanceNightPercent": 85,
 * @property         "faceShieldIsActiveChancePercent": 80,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 75,
 * @property         "laserIsActiveChancePercent": 75,
 * @property         "weaponModLimits": {
 * @property             "scopeLimit": 2,
 * @property             "lightLaserLimit": 1
 * @property         },
 * @property         "forceStock": true
 * @property     },
 * @property     "followerboarclose1": {
 * @property         "nvgIsActiveChanceDayPercent": 20,
 * @property         "nvgIsActiveChanceNightPercent": 85,
 * @property         "faceShieldIsActiveChancePercent": 80,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 75,
 * @property         "laserIsActiveChancePercent": 75,
 * @property         "weaponModLimits": {
 * @property             "scopeLimit": 2,
 * @property             "lightLaserLimit": 1
 * @property         },
 * @property         "forceStock": true
 * @property     },
 * @property     "followerboarclose2": {
 * @property         "nvgIsActiveChanceDayPercent": 20,
 * @property         "nvgIsActiveChanceNightPercent": 85,
 * @property         "faceShieldIsActiveChancePercent": 80,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 75,
 * @property         "laserIsActiveChancePercent": 75,
 * @property         "weaponModLimits": {
 * @property             "scopeLimit": 2,
 * @property             "lightLaserLimit": 1
 * @property         },
 * @property         "forceStock": true
 * @property     },
 * @property     "bossboarsniper": {
 * @property         "nvgIsActiveChanceDayPercent": 20,
 * @property         "nvgIsActiveChanceNightPercent": 85,
 * @property         "faceShieldIsActiveChancePercent": 80,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 75,
 * @property         "laserIsActiveChancePercent": 75,
 * @property         "forceStock": true,
 * @property         "weaponModLimits": {
 * @property             "scopeLimit": 2,
 * @property             "lightLaserLimit": 1
 * @property         }
 * @property     },
 * @property     "bosskolontay": {
 * @property         "nvgIsActiveChanceDayPercent": 20,
 * @property         "nvgIsActiveChanceNightPercent": 85,
 * @property         "faceShieldIsActiveChancePercent": 80,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 75,
 * @property         "laserIsActiveChancePercent": 75,
 * @property         "forceStock": true,
 * @property         "weaponModLimits": {
 * @property             "scopeLimit": 2,
 * @property             "lightLaserLimit": 1
 * @property         }
 * @property     },
 * @property     "followertest": {},
 * @property     "sectantpriest": {
 * @property         "nvgIsActiveChanceDayPercent": 10,
 * @property         "nvgIsActiveChanceNightPercent": 100,
 * @property         "faceShieldIsActiveChancePercent": 100,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 85,
 * @property         "laserIsActiveChancePercent": 95
 * @property     },
 * @property     "sectantwarrior": {
 * @property         "nvgIsActiveChanceDayPercent": 10,
 * @property         "nvgIsActiveChanceNightPercent": 100,
 * @property         "faceShieldIsActiveChancePercent": 100,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 75,
 * @property         "laserIsActiveChancePercent": 95
 * @property     },
 * @property     "test": {},
 * @property     "pmcbot": {
 * @property         "nvgIsActiveChanceDayPercent": 20,
 * @property         "nvgIsActiveChanceNightPercent": 95,
 * @property         "faceShieldIsActiveChancePercent": 100,
 * @property         "lightIsActiveDayChancePercent": 35,
 * @property         "lightIsActiveNightChancePercent": 95,
 * @property         "laserIsActiveChancePercent": 95,
 * @property         "forceStock": true,
 * @property         "weaponModLimits": {
 * @property             "scopeLimit": 1,
 * @property             "lightLaserLimit": 1
 * @property         },
 * @property         "weaponSlotIdsToMakeRequired": [
 * @property             "mod_reciever"
 * @property         ]
 * @property     },
 * @property     "arenafighterevent": {
 * @property         "nvgIsActiveChanceDayPercent": 10,
 * @property         "nvgIsActiveChanceNightPercent": 95,
 * @property         "faceShieldIsActiveChancePercent": 100,
 * @property         "lightIsActiveDayChancePercent": 35,
 * @property         "lightIsActiveNightChancePercent": 95,
 * @property         "laserIsActiveChancePercent": 95,
 * @property         "forceStock": true,
 * @property         "weaponModLimits": {
 * @property             "scopeLimit": 1,
 * @property             "lightLaserLimit": 1
 * @property         }
 * @property     },
 * @property     "arenafighter": {
 * @property         "nvgIsActiveChanceDayPercent": 10,
 * @property         "nvgIsActiveChanceNightPercent": 95,
 * @property         "faceShieldIsActiveChancePercent": 100,
 * @property         "lightIsActiveDayChancePercent": 35,
 * @property         "lightIsActiveNightChancePercent": 95,
 * @property         "laserIsActiveChancePercent": 95,
 * @property         "forceStock": true,
 * @property         "weaponModLimits": {
 * @property             "scopeLimit": 1,
 * @property             "lightLaserLimit": 1
 * @property         }
 * @property     },
 * @property     "crazyassaultevent": {
 * @property         "nvgIsActiveChanceDayPercent": 20,
 * @property         "nvgIsActiveChanceNightPercent": 85,
 * @property         "faceShieldIsActiveChancePercent": 80,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 75,
 * @property         "laserIsActiveChancePercent": 75,
 * @property         "weaponModLimits": {
 * @property             "scopeLimit": 1,
 * @property             "lightLaserLimit": 1
 * @property         },
 * @property         "forceStock": true
 * @property     },
 * @property     "assaultgroup": {},
 * @property     "gifter": {
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 75,
 * @property         "laserIsActiveChancePercent": 75
 * @property     },
 * @property     "pmc": {
 * @property         "weaponModLimits": {
 * @property             "scopeLimit": 1,
 * @property             "lightLaserLimit": 1
 * @property         },
 * @property         "weaponSightWhitelist": {
 * @property             "5447b5fc4bdc2d87278b4567": [
 * @property                 "55818ad54bdc2ddc698b4569",
 * @property                 "55818acf4bdc2dde698b456b",
 * @property                 "55818ac54bdc2d5b648b456e",
 * @property                 "55818add4bdc2d5b648b456f",
 * @property                 "55818aeb4bdc2ddc698b456a"
 * @property             ],
 * @property             "5447b5f14bdc2d61278b4567": [
 * @property                 "55818ad54bdc2ddc698b4569",
 * @property                 "55818acf4bdc2dde698b456b",
 * @property                 "55818ac54bdc2d5b648b456e",
 * @property                 "55818add4bdc2d5b648b456f",
 * @property                 "55818aeb4bdc2ddc698b456a"
 * @property             ],
 * @property             "5447bedf4bdc2d87278b4568": [
 * @property                 "55818ad54bdc2ddc698b4569",
 * @property                 "55818add4bdc2d5b648b456f",
 * @property                 "55818aeb4bdc2ddc698b456a"
 * @property             ],
 * @property             "5447bed64bdc2d97278b4568": [
 * @property                 "55818ad54bdc2ddc698b4569",
 * @property                 "55818acf4bdc2dde698b456b",
 * @property                 "55818ac54bdc2d5b648b456e",
 * @property                 "55818add4bdc2d5b648b456f",
 * @property                 "55818aeb4bdc2ddc698b456a"
 * @property             ],
 * @property             "5447b6194bdc2d67278b4567": [
 * @property                 "55818ad54bdc2ddc698b4569",
 * @property                 "55818ae44bdc2dde698b456c",
 * @property                 "55818ac54bdc2d5b648b456e",
 * @property                 "55818aeb4bdc2ddc698b456a",
 * @property                 "55818add4bdc2d5b648b456f"
 * @property             ],
 * @property             "5447b5cf4bdc2d65278b4567": [
 * @property                 "55818ad54bdc2ddc698b4569",
 * @property                 "55818acf4bdc2dde698b456b",
 * @property                 "55818ac54bdc2d5b648b456e"
 * @property             ],
 * @property             "617f1ef5e8b54b0998387733": [
 * @property                 "55818ad54bdc2ddc698b4569",
 * @property                 "55818acf4bdc2dde698b456b",
 * @property                 "55818ac54bdc2d5b648b456e"
 * @property             ],
 * @property             "5447b6094bdc2dc3278b4567": [
 * @property                 "55818ad54bdc2ddc698b4569",
 * @property                 "55818acf4bdc2dde698b456b",
 * @property                 "55818ac54bdc2d5b648b456e"
 * @property             ],
 * @property             "5447b5e04bdc2d62278b4567": [
 * @property                 "55818ad54bdc2ddc698b4569",
 * @property                 "55818acf4bdc2dde698b456b",
 * @property                 "55818ac54bdc2d5b648b456e"
 * @property             ],
 * @property             "5447b6254bdc2dc3278b4568": [
 * @property                 "55818ae44bdc2dde698b456c",
 * @property                 "55818ac54bdc2d5b648b456e",
 * @property                 "55818aeb4bdc2ddc698b456a",
 * @property                 "55818add4bdc2d5b648b456f"
 * @property             ]
 * @property         },
 * @property         "nvgIsActiveChanceDayPercent": 10,
 * @property         "nvgIsActiveChanceNightPercent": 95,
 * @property         "faceShieldIsActiveChancePercent": 85,
 * @property         "lightIsActiveDayChancePercent": 25,
 * @property         "lightIsActiveNightChancePercent": 95,
 * @property         "laserIsActiveChancePercent": 85,
 * @property         "forceOnlyArmoredRigWhenNoArmor": true,
 * @property         "filterPlatesByLevel": true,
 * @property         "weaponSlotIdsToMakeRequired": [
 * @property             "mod_reciever",
 * @property             "mod_stock",
 * @property             "mod_muzzle"
 * @property         ],
 * @property         "randomisation": [
 * @property             {
 * @property                 "levelRange": {
 * @property                     "min": 1,
 * @property                     "max": 14
 * @property                 },
 * @property                 "generation": {
 * @property                     "drugs": {
 * @property                         "weights": {
 * @property                             "0": 1,
 * @property                             "1": 1
 * @property                         },
 * @property                         "whitelist": {}
 * @property                     },
 * @property                     "grenades": {
 * @property                         "weights": {
 * @property                             "0": 25,
 * @property                             "1": 11
 * @property                         },
 * @property                         "whitelist": {
 * @property                             "5710c24ad2720bc3458b45a3": 1,
 * @property                             "58d3db5386f77426186285a0": 1,
 * @property                             "5448be9a4bdc2dfd2f8b456a": 1
 * @property                         }
 * @property                     },
 * @property                     "healing": {
 * @property                         "weights": {
 * @property                             "0": 1,
 * @property                             "1": 6,
 * @property                             "2": 3
 * @property                         },
 * @property                         "whitelist": {
 * @property                             "5e831507ea0a7c419c2f9bd9": 1,
 * @property                             "5755356824597772cb798962": 1,
 * @property                             "590c661e86f7741e566b646a": 1,
 * @property                             "590c657e86f77412b013051d": 1,
 * @property                             "544fb37f4bdc2dee738b4567": 1,
 * @property                             "544fb3364bdc2d34748b456a": 1,
 * @property                             "544fb25a4bdc2dfb738b4567": 1
 * @property                         }
 * @property                     },
 * @property                     "backpackLoot": {
 * @property                         "weights": {
 * @property                             "0": 4,
 * @property                             "1": 15,
 * @property                             "2": 40,
 * @property                             "3": 10,
 * @property                             "4": 8,
 * @property                             "5": 2,
 * @property                             "10": 1
 * @property                         },
 * @property                         "whitelist": {}
 * @property                     },
 * @property                     "pocketLoot": {
 * @property                         "weights": {
 * @property                             "0": 4,
 * @property                             "1": 9,
 * @property                             "2": 1,
 * @property                             "3": 1
 * @property                         },
 * @property                         "whitelist": {}
 * @property                     },
 * @property                     "vestLoot": {
 * @property                         "weights": {
 * @property                             "0": 2,
 * @property                             "1": 12,
 * @property                             "2": 1,
 * @property                             "3": 1,
 * @property                             "4": 1
 * @property                         },
 * @property                         "whitelist": {}
 * @property                     },
 * @property                     "magazines": {
 * @property                         "weights": {
 * @property                             "0": 0,
 * @property                             "1": 2,
 * @property                             "2": 1
 * @property                         },
 * @property                         "whitelist": {}
 * @property                     },
 * @property                     "stims": {
 * @property                         "weights": {
 * @property                             "0": 1
 * @property                         },
 * @property                         "whitelist": {}
 * @property                     }
 * @property                 },
 * @property                 "equipment": {
 * @property                     "ArmBand": 90,
 * @property                     "FirstPrimaryWeapon": 85,
 * @property                     "SecondPrimaryWeapon": 3,
 * @property                     "Holster": 5,
 * @property                     "Earpiece": 35,
 * @property                     "Eyewear": 5,
 * @property                     "Backpack": 65,
 * @property                     "FaceCover": 5
 * @property                 },
 * @property                 "randomisedWeaponModSlots": [],
 * @property                 "equipmentMods": {
 * @property                     "back_plate": 60,
 * @property                     "left_side_plate": 0,
 * @property                     "right_side_plate": 0,
 * @property                     "mod_equipment": 3,
 * @property                     "mod_equipment_000": 3,
 * @property                     "mod_equipment_001": 3,
 * @property                     "mod_equipment_002": 3,
 * @property                     "mod_nvg": 3,
 * @property                     "mod_mount": 1
 * @property                 },
 * @property                 "weaponMods": {
 * @property                     "mod_barrel": 5,
 * @property                     "mod_bipod": 10,
 * @property                     "mod_flashlight": 10,
 * @property                     "mod_foregrip": 10,
 * @property                     "mod_handguard": 10,
 * @property                     "mod_launcher": 0,
 * @property                     "mod_reciever": 10,
 * @property                     "mod_magazine": 10,
 * @property                     "mod_mount": 15,
 * @property                     "mod_mount_000": 10,
 * @property                     "mod_mount_001": 10,
 * @property                     "mod_mount_002": 10,
 * @property                     "mod_mount_003": 10,
 * @property                     "mod_mount_004": 10,
 * @property                     "mod_mount_005": 10,
 * @property                     "mod_mount_006": 10,
 * @property                     "mod_muzzle": 10,
 * @property                     "mod_muzzle_000": 10,
 * @property                     "mod_muzzle_001": 10,
 * @property                     "mod_equipment": 5,
 * @property                     "mod_equipment_000": 10,
 * @property                     "mod_equipment_001": 5,
 * @property                     "mod_equipment_002": 0,
 * @property                     "mod_nvg": 0,
 * @property                     "mod_pistol_grip_akms": 10,
 * @property                     "mod_pistol_grip": 10,
 * @property                     "mod_scope": 10,
 * @property                     "mod_scope_000": 15,
 * @property                     "mod_scope_001": 15,
 * @property                     "mod_scope_002": 15,
 * @property                     "mod_scope_003": 15,
 * @property                     "mod_tactical": 10,
 * @property                     "mod_tactical001": 10,
 * @property                     "mod_tactical002": 10,
 * @property                     "mod_tactical_000": 10,
 * @property                     "mod_tactical_001": 10,
 * @property                     "mod_tactical_002": 10,
 * @property                     "mod_tactical_003": 10,
 * @property                     "mod_tactical_2": 10
 * @property                 }
 * @property             },
 * @property             {
 * @property                 "levelRange": {
 * @property                     "min": 15,
 * @property                     "max": 22
 * @property                 },
 * @property                 "generation": {
 * @property                     "backpackLoot": {
 * @property                         "weights": {
 * @property                             "0": 3,
 * @property                             "1": 5,
 * @property                             "2": 12,
 * @property                             "3": 20,
 * @property                             "4": 8,
 * @property                             "5": 3,
 * @property                             "10": 1
 * @property                         },
 * @property                         "whitelist": []
 * @property                     },
 * @property                     "pocketLoot": {
 * @property                         "weights": {
 * @property                             "0": 2,
 * @property                             "1": 3,
 * @property                             "2": 2,
 * @property                             "3": 1
 * @property                         },
 * @property                         "whitelist": []
 * @property                     },
 * @property                     "vestLoot": {
 * @property                         "weights": {
 * @property                             "0": 1,
 * @property                             "1": 4,
 * @property                             "2": 2,
 * @property                             "3": 1,
 * @property                             "4": 1
 * @property                         },
 * @property                         "whitelist": []
 * @property                     },
 * @property                     "magazines": {
 * @property                         "weights": {
 * @property                             "0": 0,
 * @property                             "1": 1,
 * @property                             "2": 4,
 * @property                             "3": 3
 * @property                         },
 * @property                         "whitelist": []
 * @property                     },
 * @property                     "stims": {
 * @property                         "weights": {
 * @property                             "0": 10,
 * @property                             "1": 1
 * @property                         },
 * @property                         "whitelist": []
 * @property                     }
 * @property                 },
 * @property                 "equipment": {
 * @property                     "ArmBand": 90,
 * @property                     "FirstPrimaryWeapon": 90,
 * @property                     "SecondPrimaryWeapon": 0,
 * @property                     "Holster": 10,
 * @property                     "Earpiece": 35,
 * @property                     "Eyewear": 15,
 * @property                     "FaceCover": 20,
 * @property                     "Backpack": 80,
 * @property                     "Scabbard": 100,
 * @property                     "TacticalVest": 90
 * @property                 },
 * @property                 "randomisedArmorSlots": [
 * @property                     "Headwear",
 * @property                     "ArmorVest",
 * @property                     "TacticalVest"
 * @property                 ],
 * @property                 "randomisedWeaponModSlots": [
 * @property                     "mod_scope",
 * @property                     "mod_scope_000",
 * @property                     "mod_scope_001",
 * @property                     "mod_scope_002",
 * @property                     "mod_scope_003",
 * @property                     "mod_handguard",
 * @property                     "mod_magazine",
 * @property                     "mod_muzzle",
 * @property                     "mod_bipod",
 * @property                     "mod_muzzle_000",
 * @property                     "mod_muzzle_001",
 * @property                     "mod_charge",
 * @property                     "mod_gas_block",
 * @property                     "mod_pistol_grip",
 * @property                     "mod_pistolgrip",
 * @property                     "mod_pistol_grip_akms",
 * @property                     "mod_pistolgrip_000",
 * @property                     "mod_foregrip",
 * @property                     "mod_trigger",
 * @property                     "mod_reciever",
 * @property                     "mod_hammer",
 * @property                     "mod_stock",
 * @property                     "mod_stock_000",
 * @property                     "mod_stock_001",
 * @property                     "mod_stock_akms",
 * @property                     "mod_stock_axis",
 * @property                     "mod_mount_000",
 * @property                     "mod_mount_001",
 * @property                     "mod_mount_002",
 * @property                     "mod_mount_003",
 * @property                     "mod_mount_004",
 * @property                     "mod_mount_005",
 * @property                     "mod_mount_006",
 * @property                     "mod_tactical",
 * @property                     "mod_tactical_2",
 * @property                     "mod_tactical_000",
 * @property                     "mod_tactical_001",
 * @property                     "mod_tactical_002",
 * @property                     "mod_tactical_003"
 * @property                 ],
 * @property                 "equipmentMods": {
 * @property                     "back_plate": 75,
 * @property                     "left_side_plate": 25,
 * @property                     "right_side_plate": 25,
 * @property                     "mod_equipment": 10,
 * @property                     "mod_equipment_000": 10,
 * @property                     "mod_equipment_001": 10,
 * @property                     "mod_equipment_002": 5,
 * @property                     "mod_nvg": 15
 * @property                 },
 * @property                 "weaponMods": {
 * @property                     "mod_barrel": 50,
 * @property                     "mod_bipod": 15,
 * @property                     "mod_flashlight": 35,
 * @property                     "mod_foregrip": 45,
 * @property                     "mod_handguard": 25,
 * @property                     "mod_launcher": 5,
 * @property                     "mod_magazine": 50,
 * @property                     "mod_mount": 45,
 * @property                     "mod_mount_000": 35,
 * @property                     "mod_mount_001": 35,
 * @property                     "mod_mount_002": 35,
 * @property                     "mod_mount_003": 35,
 * @property                     "mod_mount_004": 35,
 * @property                     "mod_mount_005": 35,
 * @property                     "mod_mount_006": 35,
 * @property                     "mod_muzzle": 20,
 * @property                     "mod_muzzle_000": 20,
 * @property                     "mod_muzzle_001": 20,
 * @property                     "mod_pistol_grip_akms": 35,
 * @property                     "mod_pistol_grip": 40,
 * @property                     "mod_reciever": 20,
 * @property                     "mod_scope": 15,
 * @property                     "mod_scope_000": 45,
 * @property                     "mod_scope_001": 35,
 * @property                     "mod_scope_002": 35,
 * @property                     "mod_scope_003": 25,
 * @property                     "mod_tactical": 15,
 * @property                     "mod_tactical001": 40,
 * @property                     "mod_tactical002": 30,
 * @property                     "mod_tactical_000": 40,
 * @property                     "mod_tactical_001": 30,
 * @property                     "mod_tactical_002": 30,
 * @property                     "mod_tactical_003": 30,
 * @property                     "mod_tactical_2": 15
 * @property                 }
 * @property             },
 * @property             {
 * @property                 "levelRange": {
 * @property                     "min": 23,
 * @property                     "max": 45
 * @property                 },
 * @property                 "equipment": {
 * @property                     "SecondPrimaryWeapon": 10,
 * @property                     "FaceCover": 50
 * @property                 },
 * @property                 "randomisedArmorSlots": [
 * @property                     "Headwear",
 * @property                     "TacticalVest",
 * @property                     "ArmorVest"
 * @property                 ],
 * @property                 "randomisedWeaponModSlots": [
 * @property                     "mod_scope",
 * @property                     "mod_scope_000",
 * @property                     "mod_scope_001",
 * @property                     "mod_scope_002",
 * @property                     "mod_scope_003",
 * @property                     "mod_handguard",
 * @property                     "mod_magazine",
 * @property                     "mod_muzzle",
 * @property                     "mod_bipod",
 * @property                     "mod_muzzle_000",
 * @property                     "mod_muzzle_001",
 * @property                     "mod_charge",
 * @property                     "mod_gas_block",
 * @property                     "mod_pistol_grip",
 * @property                     "mod_pistolgrip",
 * @property                     "mod_pistol_grip_akms",
 * @property                     "mod_pistolgrip_000",
 * @property                     "mod_foregrip",
 * @property                     "mod_trigger",
 * @property                     "mod_reciever",
 * @property                     "mod_hammer",
 * @property                     "mod_stock",
 * @property                     "mod_stock_000",
 * @property                     "mod_stock_001",
 * @property                     "mod_stock_akms",
 * @property                     "mod_stock_axis",
 * @property                     "mod_mount_000",
 * @property                     "mod_mount_001",
 * @property                     "mod_mount_002",
 * @property                     "mod_mount_003",
 * @property                     "mod_mount_004",
 * @property                     "mod_mount_005",
 * @property                     "mod_mount_006",
 * @property                     "mod_tactical",
 * @property                     "mod_tactical_2",
 * @property                     "mod_tactical_000",
 * @property                     "mod_tactical_001",
 * @property                     "mod_tactical_002",
 * @property                     "mod_tactical_003"
 * @property                 ]
 * @property             },
 * @property             {
 * @property                 "levelRange": {
 * @property                     "min": 46,
 * @property                     "max": 100
 * @property                 },
 * @property                 "equipment": {
 * @property                     "SecondPrimaryWeapon": 10,
 * @property                     "FaceCover": 75
 * @property                 },
 * @property                 "equipmentMods": {
 * @property                     "left_side_plate": 95,
 * @property                     "right_side_plate": 95,
 * @property                     "mod_equipment": 85,
 * @property                     "mod_equipment_000": 80,
 * @property                     "mod_equipment_001": 75,
 * @property                     "mod_equipment_002": 90,
 * @property                     "mod_nvg": 60
 * @property                 },
 * @property                 "weaponMods": {
 * @property                     "mod_scope": 95,
 * @property                     "mod_muzzle": 85,
 * @property                     "mod_muzzle_000": 95,
 * @property                     "mod_muzzle_001": 95
 * @property                 },
 * @property                 "randomisedArmorSlots": [
 * @property                     "Headwear",
 * @property                     "TacticalVest",
 * @property                     "ArmorVest"
 * @property                 ],
 * @property                 "randomisedWeaponModSlots": [
 * @property                     "mod_scope",
 * @property                     "mod_scope_000",
 * @property                     "mod_scope_001",
 * @property                     "mod_scope_002",
 * @property                     "mod_scope_003",
 * @property                     "mod_handguard",
 * @property                     "mod_magazine",
 * @property                     "mod_muzzle",
 * @property                     "mod_bipod",
 * @property                     "mod_muzzle_000",
 * @property                     "mod_muzzle_001",
 * @property                     "mod_charge",
 * @property                     "mod_gas_block",
 * @property                     "mod_pistol_grip",
 * @property                     "mod_pistolgrip",
 * @property                     "mod_pistol_grip_akms",
 * @property                     "mod_pistolgrip_000",
 * @property                     "mod_foregrip",
 * @property                     "mod_trigger",
 * @property                     "mod_reciever",
 * @property                     "mod_hammer",
 * @property                     "mod_stock",
 * @property                     "mod_stock_000",
 * @property                     "mod_stock_001",
 * @property                     "mod_stock_akms",
 * @property                     "mod_stock_axis",
 * @property                     "mod_mount_000",
 * @property                     "mod_mount_001",
 * @property                     "mod_mount_002",
 * @property                     "mod_mount_003",
 * @property                     "mod_mount_004",
 * @property                     "mod_mount_005",
 * @property                     "mod_mount_006",
 * @property                     "mod_tactical",
 * @property                     "mod_tactical_2",
 * @property                     "mod_tactical_000",
 * @property                     "mod_tactical_001",
 * @property                     "mod_tactical_002",
 * @property                     "mod_tactical_003"
 * @property                 ]
 * @property             }
 * @property         ],
 * @property         "blacklist": [
 * @property             {
 * @property                 "levelRange": {
 * @property                     "min": 1,
 * @property                     "max": 100
 * @property                 },
 * @property                 "equipment": {
 * @property                     "mod_magazine": [
 * @property                         "57838f0b2459774a256959b2",
 * @property                         "5aaa5e60e5b5b000140293d6",
 * @property                         "5b1fd4e35acfc40018633c39",
 * @property                         "59e5d83b86f7745aed03d262",
 * @property                         "5b7bef1e5acfc43d82528402",
 * @property                         "617130016c780c1e710c9a24",
 * @property                         "55d4837c4bdc2d1d4e8b456c",
 * @property                         "5c503ac82e221602b21d6e9a",
 * @property                         "6241c2c2117ad530666a5108"
 * @property                     ],
 * @property                     "mod_scope": [
 * @property                         "5a1ead28fcdbcb001912fa9f",
 * @property                         "5a1eaa87fcdbcb001865f75e",
 * @property                         "5d1b5e94d7ad1a2b865a96b0",
 * @property                         "5a7c74b3e899ef0014332c29",
 * @property                         "618b9643526131765025ab35",
 * @property                         "618bab21526131765025ab3f",
 * @property                         "65392f611406374f82152ba5",
 * @property                         "653931da5db71d30ab1d6296"
 * @property                     ],
 * @property                     "mod_nvg": [
 * @property                         "5c11046cd174af02a012e42b"
 * @property                     ],
 * @property                     "mod_reciever": [
 * @property                         "5d4405aaa4b9361e6a4e6bd3"
 * @property                     ],
 * @property                     "mod_stock": [
 * @property                         "5cde739cd7f00c0010373bd3"
 * @property                     ],
 * @property                     "mod_rear_sight": [
 * @property                         "5a0ed824fcdbcb0176308b0d"
 * @property                     ],
 * @property                     "mod_front_sight": [
 * @property                         "5a0f096dfcdbcb0176308b15"
 * @property                     ]
 * @property                 },
 * @property                 "cartridge": {
 * @property                     "Caliber23x75": [
 * @property                         "5e85a9f4add9fe03027d9bf1"
 * @property                     ],
 * @property                     "Caliber127x55": [
 * @property                         "5cadf6e5ae921500113bb973",
 * @property                         "5cadf6ddae9215051e1c23b2"
 * @property                     ]
 * @property                 }
 * @property             }
 * @property         ],
 * @property         "weightingAdjustmentsByBotLevel": [
 * @property             {
 * @property                 "levelRange": {
 * @property                     "min": 1,
 * @property                     "max": 14
 * @property                 },
 * @property                 "ammo": {
 * @property                     "add": {},
 * @property                     "edit": {
 * @property                         "Caliber1143x23ACP": {
 * @property                             "5e81f423763d9f754677bf2e": 36,
 * @property                             "5ea2a8e200685063ec28c05a": 1,
 * @property                             "5efb0cabfb3e451d70735af5": 1,
 * @property                             "5efb0d4f4bc50b58e81710f3": 72,
 * @property                             "5efb0fc6aeb21837e749c801": 1
 * @property                         },
 * @property                         "Caliber556x45NATO": {
 * @property                             "59e6920f86f77411d82aa167": 300,
 * @property                             "59e6927d86f77411da468256": 300,
 * @property                             "54527a984bdc2d4e668b4567": 250,
 * @property                             "59e6918f86f7746c9f75e849": 200,
 * @property                             "5c0d5ae286f7741e46554302": 200
 * @property                         },
 * @property                         "Caliber545x39": {
 * @property                             "56dff3afd2720bba668b4567": 20,
 * @property                             "56dff421d2720b5f5a8b4567": 200,
 * @property                             "56dff4ecd2720b5f5a8b4568": 200,
 * @property                             "56dff4a2d2720bbd668b456a": 200,
 * @property                             "56dfef82d2720bbd668b4567": 0,
 * @property                             "56dff026d2720bb8668b4567": 0,
 * @property                             "5c0d5e4486f77478390952fe": 0
 * @property                         },
 * @property                         "Caliber762x39": {
 * @property                             "5656d7c34bdc2d9d198b4587": 20,
 * @property                             "64b7af734b75259c590fa895": 300,
 * @property                             "59e4d3d286f774176a36250a": 100,
 * @property                             "64b7af5a8532cf95ee0a0dbd": 100
 * @property                         },
 * @property                         "Caliber762x35": {
 * @property                             "5fd20ff893a8961fc660a954": 2,
 * @property                             "6196364158ef8c428c287d9f": 30,
 * @property                             "6196365d58ef8c428c287da1": 300
 * @property                         },
 * @property                         "Caliber366TKM": {
 * @property                             "59e6542b86f77411dc52a77a": 70,
 * @property                             "59e655cb86f77411dc52a77b": 5,
 * @property                             "59e6658b86f77411d949b250": 100,
 * @property                             "5f0596629e22f464da6bbdd9": 0
 * @property                         },
 * @property                         "Caliber762x51": {
 * @property                             "58dd3ad986f77403051cba8f": 1,
 * @property                             "5a608bf24f39f98ffc77720e": 0,
 * @property                             "5a6086ea4f39f99cd479502f": 0,
 * @property                             "5efb0c1bd79ff02a1f5e68d9": 0,
 * @property                             "5e023e6e34d52a55c3304f71": 200,
 * @property                             "5e023e88277cce2b522ff2b1": 300
 * @property                         },
 * @property                         "Caliber762x54R": {
 * @property                             "5e023cf8186a883be655e54f": 5,
 * @property                             "5887431f2459777e1612938f": 10,
 * @property                             "64b8f7c241772715af0f9c3d": 400,
 * @property                             "64b8f7b5389d7ffd620ccba2": 100
 * @property                         },
 * @property                         "Caliber9x19PARA": {
 * @property                             "58864a4f2459770fcc257101": 80,
 * @property                             "5c3df7d588a4501f290594e5": 80,
 * @property                             "5efb0da7a29a85116f6ea05f": 0,
 * @property                             "5c925fa22e221601da359b7b": 1
 * @property                         },
 * @property                         "Caliber9x39": {
 * @property                             "57a0dfb82459774d3078b56c": 10,
 * @property                             "6576f96220d53a5b8f3e395e": 200
 * @property                         },
 * @property                         "Caliber12g": {
 * @property                             "5d6e68a8a4b9360b6c0d54e2": 1,
 * @property                             "5d6e6911a4b9361bd5780d52": 1,
 * @property                             "5d6e6806a4b936088465b17e": 20,
 * @property                             "58820d1224597753c90aeb13": 200,
 * @property                             "5d6e67fba4b9361bc73bc779": 200,
 * @property                             "560d5e524bdc2d25448b4571": 200,
 * @property                             "64b8ee384b75259c590fa89b": 60
 * @property                         },
 * @property                         "Caliber20g": {
 * @property                             "5a38ebd9c4a282000d722a5b": 10
 * @property                         },
 * @property                         "Caliber23x75": {
 * @property                             "5e85a9a6eacf8c039e4e2ac1": 50
 * @property                         },
 * @property                         "Caliber9x18PM": {
 * @property                             "573719df2459775a626ccbc2": 0,
 * @property                             "57371aab2459775a77142f22": 0
 * @property                         },
 * @property                         "Caliber9x21": {
 * @property                             "6576f4708ca9c4381d16cd9d": 0,
 * @property                             "5a26ac0ec4a28200741e1e18": 0
 * @property                         },
 * @property                         "Caliber46x30": {
 * @property                             "5ba26835d4351e0035628ff5": 0
 * @property                         }
 * @property                     }
 * @property                 },
 * @property                 "equipment": {
 * @property                     "add": {
 * @property                         "ArmorVest": {
 * @property                             "59e7635f86f7742cbf2c1095": 120
 * @property                         },
 * @property                         "TacticalVest": {
 * @property                             "6034d0230ca681766b6a0fb5": 120,
 * @property                             "6034cf5fffd42c541047f72e": 150
 * @property                         },
 * @property                         "Backpack": {},
 * @property                         "Headwear": {
 * @property                             "59e7711e86f7746cae05fbe1": 90
 * @property                         }
 * @property                     },
 * @property                     "edit": {
 * @property                         "ArmorVest": {
 * @property                             "5648a7494bdc2d9d488b4583": 320,
 * @property                             "5b44d22286f774172b0c9de8": 290,
 * @property                             "5c0e5bab86f77461f55ed1f3": 260,
 * @property                             "5c0e5edb86f77461f55ed1f7": 280,
 * @property                             "5ab8e4ed86f7742d8e50c7fa": 260,
 * @property                             "5df8a2ca86f7740bfe6df777": 220,
 * @property                             "64be79c487d1510151095552": 280,
 * @property                             "64be79e2bf8412471d0d9bcc": 310,
 * @property                             "5c0e655586f774045612eeb2": 120,
 * @property                             "62a09d79de7ac81993580530": 240,
 * @property                             "5e4abb5086f77406975c9342": 1,
 * @property                             "6038b4ca92ec1c3103795a0d": 1,
 * @property                             "6038b4b292ec1c3103795a0b": 1,
 * @property                             "5b44cd8b86f774503d30cba2": 1,
 * @property                             "5ca21c6986f77479963115a7": 1,
 * @property                             "5b44d0de86f774503d30cba8": 4,
 * @property                             "5b44cf1486f77431723e3d05": 4,
 * @property                             "60a283193cb70855c43a381d": 4,
 * @property                             "5c0e541586f7747fa54205c9": 1,
 * @property                             "545cdb794bdc2d3a198b456a": 1,
 * @property                             "5ca2151486f774244a3b8d30": 1
 * @property                         },
 * @property                         "TacticalVest": {
 * @property                             "5c0e446786f7742013381639": 210,
 * @property                             "5e4abfed86f77406a2713cf7": 200,
 * @property                             "5d5d8ca986f7742798716522": 200,
 * @property                             "5d5d646386f7742797261fd9": 230,
 * @property                             "64be7095047e826eae02b0c1": 230,
 * @property                             "5e4abc1f86f774069619fbaa": 230,
 * @property                             "628d0618d1ba6e4fa07ce5a4": 1,
 * @property                             "628b9c7d45122232a872358f": 1,
 * @property                             "628b9784bcf6e2659e09b8a2": 1,
 * @property                             "628cd624459354321c4b7fa2": 1,
 * @property                             "609e860ebd219504d8507525": 1,
 * @property                             "60a3c68c37ea821725773ef5": 1,
 * @property                             "5e4ac41886f77406a511c9a8": 1,
 * @property                             "5b44cad286f77402a54ae7e5": 1,
 * @property                             "628dc750b910320f4c27a732": 1,
 * @property                             "5c0e3eb886f7742015526062": 230,
 * @property                             "572b7adb24597762ae139821": 250,
 * @property                             "544a5caa4bdc2d1a388b4568": 50,
 * @property                             "5929a2a086f7744f4b234d43": 150,
 * @property                             "64be7110bf597ba84a0a41ea": 220,
 * @property                             "5fd4c4fa16cac650092f6771": 210,
 * @property                             "63611865ba5b90db0c0399d1": 100
 * @property                         },
 * @property                         "Headwear": {
 * @property                             "5c17a7ed2e2216152142459c": 1,
 * @property                             "61bca7cda0eae612383adf57": 1,
 * @property                             "5e00c1ad86f774747333222c": 1,
 * @property                             "5e01ef6886f77445f643baa4": 1,
 * @property                             "5ea17ca01412a1425304d1c0": 1,
 * @property                             "5ea05cf85ad9772e6624305d": 330,
 * @property                             "5c0d2727d174af02a012cf58": 250,
 * @property                             "59e7711e86f7746cae05fbe1": 250,
 * @property                             "5a7c4850e899ef00150be885": 350,
 * @property                             "5645bc214bdc2d363b8b4571": 230,
 * @property                             "5aa7cfc0e5b5b00015693143": 310,
 * @property                             "5c06c6a80db834001b735491": 350,
 * @property                             "5aa7d193e5b5b000171d063f": 350,
 * @property                             "5aa7d03ae5b5b00016327db5": 230
 * @property                         },
 * @property                         "FirstPrimaryWeapon": {
 * @property                             "59e6152586f77473dc057aa1": 170,
 * @property                             "57d14d2524597714373db789": 180,
 * @property                             "5c07c60e0db834002330051f": 120,
 * @property                             "5ac4cd105acfc40016339859": 110,
 * @property                             "56dee2bdd2720bc8328b4567": 140,
 * @property                             "574d967124597745970e7c94": 190,
 * @property                             "587e02ff24597743df3deaeb": 140,
 * @property                             "583990e32459771419544dd2": 140,
 * @property                             "59d6088586f774275f37482f": 130,
 * @property                             "5ae08f0a5acfc408fb1398a1": 110,
 * @property                             "5bfd297f0db834001a669119": 110,
 * @property                             "5447a9cd4bdc2dbd208b4567": 70,
 * @property                             "5926bb2186f7744b1c6c6e60": 130,
 * @property                             "58948c8e86f77409493f7266": 80,
 * @property                             "5fc3e272f8b6a877a729eac5": 80,
 * @property                             "5644bd2b4bdc2d3b4c8b4572": 100,
 * @property                             "59e6687d86f77411d949b251": 130,
 * @property                             "54491c4f4bdc2db1078b4568": 120,
 * @property                             "5ba26383d4351e00334c93d9": 20,
 * @property                             "5c501a4d2e221602b412b540": 120,
 * @property                             "60db29ce99594040e04c4a27": 130,
 * @property                             "5580223e4bdc2d1c128b457f": 120,
 * @property                             "5e870397991fd70db46995c8": 90,
 * @property                             "61f7c9e189e6fb1a5e3ea78d": 40,
 * @property                             "5a38e6bac4a2826c6e06d79b": 110,
 * @property                             "5ea03f7400685063ec28bfa8": 65,
 * @property                             "627e14b21713922ded6f2c15": 0,
 * @property                             "5bb2475ed4351e00853264e3": 1,
 * @property                             "5d43021ca4b9362eab4b5e25": 1,
 * @property                             "6275303a9f372d6ea97f9ec7": 0,
 * @property                             "5fb64bc92b1b027b1f50bcf2": 1,
 * @property                             "6499849fc93611967b034949": 140,
 * @property                             "59984ab886f7743e98271174": 170,
 * @property                             "57dc2fa62459775949412633": 170,
 * @property                             "606dae0ab0e443224b421bb7": 110,
 * @property                             "64637076203536ad5600c990": 0,
 * @property                             "6513ef33e06849f06c0957ca": 0,
 * @property                             "64ca3d3954fc657e230529cc": 0
 * @property                         },
 * @property                         "SecondPrimaryWeapon": {
 * @property                             "5e81ebcd8e146c7080625e15": 0
 * @property                         },
 * @property                         "Backpack": {
 * @property                             "544a5cde4bdc2d39388b456b": 145,
 * @property                             "5ca20d5986f774331e7c9602": 90,
 * @property                             "5ab8ee7786f7742d8f33f0b9": 130,
 * @property                             "5ab8f04f86f774585f4237d8": 100,
 * @property                             "56e33680d2720be2748b4576": 150,
 * @property                             "56e33634d2720bd8058b456b": 150,
 * @property                             "5f5e45cc5021ce62144be7aa": 150,
 * @property                             "56e335e4d2720b6c058b456d": 100,
 * @property                             "59e763f286f7742ee57895da": 80,
 * @property                             "5e9dcf5986f7746c417435b3": 120
 * @property                         },
 * @property                         "Holster": {
 * @property                             "576a581d2459771e7b1bc4f1": 100,
 * @property                             "5cadc190ae921500103bb3b6": 100,
 * @property                             "56d59856d2720bd8418b456a": 100,
 * @property                             "5a17f98cfcdbcb0980087290": 95
 * @property                         },
 * @property                         "Earpiece": {
 * @property                             "5b432b965acfc47a8774094e": 200
 * @property                         },
 * @property                         "ArmBand": {
 * @property                             "5b3f16c486f7747c327f55f7": 200,
 * @property                             "5b3f3ade86f7746b6b790d8e": 200,
 * @property                             "5b3f3af486f774679e752c1f": 200,
 * @property                             "5b3f3b0186f774021a2afef7": 200,
 * @property                             "5b3f3b0e86f7746752107cda": 200
 * @property                         },
 * @property                         "Scabbard": {
 * @property                             "57cd379a24597778e7682ecf": 70,
 * @property                             "5bffdc370db834001d23eca8": 100,
 * @property                             "54491bb74bdc2d09088b4567": 100
 * @property                         }
 * @property                     }
 * @property                 },
 * @property                 "clothing": {
 * @property                     "add": {},
 * @property                     "edit": {
 * @property                         "body": {
 * @property                             "5cc0858d14c02e000c6bea66": 20,
 * @property                             "5cde95d97d6c8b647a3769b0": 20
 * @property                         },
 * @property                         "feet": {
 * @property                             "5cc085bb14c02e000e67a5c5": 20,
 * @property                             "5cde95ef7d6c8b04713c4f2d": 20
 * @property                         }
 * @property                     }
 * @property                 }
 * @property             },
 * @property             {
 * @property                 "levelRange": {
 * @property                     "min": 15,
 * @property                     "max": 22
 * @property                 },
 * @property                 "ammo": {
 * @property                     "add": {},
 * @property                     "edit": {
 * @property                         "Caliber1143x23ACP": {
 * @property                             "5e81f423763d9f754677bf2e": 26,
 * @property                             "5ea2a8e200685063ec28c05a": 1,
 * @property                             "5efb0cabfb3e451d70735af5": 1,
 * @property                             "5efb0d4f4bc50b58e81710f3": 62,
 * @property                             "5efb0fc6aeb21837e749c801": 1
 * @property                         },
 * @property                         "Caliber556x45NATO": {
 * @property                             "59e6920f86f77411d82aa167": 250,
 * @property                             "59e6927d86f77411da468256": 250,
 * @property                             "54527a984bdc2d4e668b4567": 250,
 * @property                             "59e6918f86f7746c9f75e849": 150,
 * @property                             "5c0d5ae286f7741e46554302": 150
 * @property                         },
 * @property                         "Caliber545x39": {
 * @property                             "56dff3afd2720bba668b4567": 40,
 * @property                             "56dff421d2720b5f5a8b4567": 180,
 * @property                             "56dff4ecd2720b5f5a8b4568": 180,
 * @property                             "56dff4a2d2720bbd668b456a": 180,
 * @property                             "56dfef82d2720bbd668b4567": 1,
 * @property                             "56dff026d2720bb8668b4567": 1,
 * @property                             "5c0d5e4486f77478390952fe": 1
 * @property                         },
 * @property                         "Caliber762x39": {
 * @property                             "5656d7c34bdc2d9d198b4587": 20,
 * @property                             "64b7af734b75259c590fa895": 300,
 * @property                             "59e4d3d286f774176a36250a": 100,
 * @property                             "64b7af5a8532cf95ee0a0dbd": 100
 * @property                         },
 * @property                         "Caliber762x35": {
 * @property                             "5fd20ff893a8961fc660a954": 2,
 * @property                             "6196364158ef8c428c287d9f": 30,
 * @property                             "6196365d58ef8c428c287da1": 300
 * @property                         },
 * @property                         "Caliber366TKM": {
 * @property                             "59e6542b86f77411dc52a77a": 40,
 * @property                             "59e655cb86f77411dc52a77b": 4,
 * @property                             "59e6658b86f77411d949b250": 80,
 * @property                             "5f0596629e22f464da6bbdd9": 1
 * @property                         },
 * @property                         "Caliber762x51": {
 * @property                             "58dd3ad986f77403051cba8f": 1,
 * @property                             "5a608bf24f39f98ffc77720e": 0,
 * @property                             "5a6086ea4f39f99cd479502f": 0,
 * @property                             "5efb0c1bd79ff02a1f5e68d9": 0,
 * @property                             "5e023e6e34d52a55c3304f71": 100,
 * @property                             "5e023e88277cce2b522ff2b1": 150
 * @property                         },
 * @property                         "Caliber762x54R": {
 * @property                             "5e023cf8186a883be655e54f": 5,
 * @property                             "5887431f2459777e1612938f": 30,
 * @property                             "64b8f7c241772715af0f9c3d": 400,
 * @property                             "64b8f7b5389d7ffd620ccba2": 600
 * @property                         },
 * @property                         "Caliber9x19PARA": {
 * @property                             "58864a4f2459770fcc257101": 80,
 * @property                             "5c3df7d588a4501f290594e5": 80,
 * @property                             "5efb0da7a29a85116f6ea05f": 0,
 * @property                             "5c925fa22e221601da359b7b": 1
 * @property                         },
 * @property                         "Caliber9x39": {
 * @property                             "57a0dfb82459774d3078b56c": 100,
 * @property                             "6576f96220d53a5b8f3e395e": 150
 * @property                         },
 * @property                         "Caliber12g": {
 * @property                             "5d6e68a8a4b9360b6c0d54e2": 1,
 * @property                             "5d6e6911a4b9361bd5780d52": 1,
 * @property                             "5d6e6806a4b936088465b17e": 20,
 * @property                             "58820d1224597753c90aeb13": 200,
 * @property                             "5d6e67fba4b9361bc73bc779": 200,
 * @property                             "560d5e524bdc2d25448b4571": 200,
 * @property                             "64b8ee384b75259c590fa89b": 60
 * @property                         },
 * @property                         "Caliber20g": {
 * @property                             "5a38ebd9c4a282000d722a5b": 10
 * @property                         },
 * @property                         "Caliber23x75": {
 * @property                             "5e85a9a6eacf8c039e4e2ac1": 50
 * @property                         },
 * @property                         "Caliber9x18PM": {
 * @property                             "573719df2459775a626ccbc2": 0,
 * @property                             "57371aab2459775a77142f22": 0
 * @property                         },
 * @property                         "Caliber9x21": {
 * @property                             "6576f4708ca9c4381d16cd9d": 0,
 * @property                             "5a26ac0ec4a28200741e1e18": 0
 * @property                         },
 * @property                         "Caliber57x28": {
 * @property                             "5cc80f38e4a949001152b560": 0
 * @property                         },
 * @property                         "Caliber46x30": {
 * @property                             "5ba26835d4351e0035628ff5": 0
 * @property                         }
 * @property                     }
 * @property                 },
 * @property                 "equipment": {
 * @property                     "add": {},
 * @property                     "edit": {
 * @property                         "ArmorVest": {
 * @property                             "5c0e5bab86f77461f55ed1f3": 135,
 * @property                             "5c0e5edb86f77461f55ed1f7": 135,
 * @property                             "5648a7494bdc2d9d488b4583": 90,
 * @property                             "5ab8e4ed86f7742d8e50c7fa": 135,
 * @property                             "62a09d79de7ac81993580530": 25
 * @property                         },
 * @property                         "TacticalVest": {
 * @property                             "5c0e3eb886f7742015526062": 40,
 * @property                             "64a536392d2c4e6e970f4121": 40,
 * @property                             "64a5366719bab53bd203bf33": 40,
 * @property                             "64be7110bf597ba84a0a41ea": 50,
 * @property                             "63611865ba5b90db0c0399d1": 50
 * @property                         },
 * @property                         "Backpack": {
 * @property                             "544a5cde4bdc2d39388b456b": 10,
 * @property                             "5ca20d5986f774331e7c9602": 10,
 * @property                             "60a272cc93ef783291411d8e": 7,
 * @property                             "6034d103ca006d2dca39b3f0": 7,
 * @property                             "618bb76513f5097c8d5aa2d5": 10,
 * @property                             "619cf0335771dd3c390269ae": 7,
 * @property                             "628e1ffc83ec92260c0f437f": 7,
 * @property                             "62a1b7fbc30cfa1d366af586": 7,
 * @property                             "5f5e467b0bc58666c37e7821": 6,
 * @property                             "5c0e805e86f774683f3dd637": 6,
 * @property                             "56e335e4d2720b6c058b456d": 10,
 * @property                             "5e9dcf5986f7746c417435b3": 10
 * @property                         },
 * @property                         "Headwear": {
 * @property                             "5aa7cfc0e5b5b00015693143": 80,
 * @property                             "5a7c4850e899ef00150be885": 80,
 * @property                             "5e00c1ad86f774747333222c": 50,
 * @property                             "5c06c6a80db834001b735491": 80,
 * @property                             "5aa7d03ae5b5b00016327db5": 70,
 * @property                             "5d5e7d28a4b936645d161203": 50,
 * @property                             "5b432d215acfc4771e1c6624": 60,
 * @property                             "5b40e3f35acfc40016388218": 40,
 * @property                             "5b40e4035acfc47a87740943": 40,
 * @property                             "5a154d5cfcdbcb001a3b00da": 40,
 * @property                             "5ac8d6885acfc400180ae7b0": 40
 * @property                         },
 * @property                         "Earpiece": {
 * @property                             "5645bcc04bdc2d363b8b4572": 7
 * @property                         },
 * @property                         "FirstPrimaryWeapon": {
 * @property                             "627e14b21713922ded6f2c15": 0,
 * @property                             "6275303a9f372d6ea97f9ec7": 0,
 * @property                             "64ca3d3954fc657e230529cc": 0,
 * @property                             "64637076203536ad5600c990": 0,
 * @property                             "6513ef33e06849f06c0957ca": 0
 * @property                         },
 * @property                         "Scabbard": {
 * @property                             "57cd379a24597778e7682ecf": 70,
 * @property                             "5bffdc370db834001d23eca8": 100,
 * @property                             "54491bb74bdc2d09088b4567": 100
 * @property                         }
 * @property                     }
 * @property                 }
 * @property             },
 * @property             {
 * @property                 "levelRange": {
 * @property                     "min": 30,
 * @property                     "max": 50
 * @property                 },
 * @property                 "equipment": {
 * @property                     "add": {},
 * @property                     "edit": {
 * @property                         "FirstPrimaryWeapon": {
 * @property                             "5c501a4d2e221602b412b540": 2
 * @property                         },
 * @property                         "ArmorVest": {
 * @property                             "5ab8e79e86f7742d8b372e78": 40,
 * @property                             "5c0e541586f7747fa54205c9": 40,
 * @property                             "5ca2151486f774244a3b8d30": 40,
 * @property                             "5ca21c6986f77479963115a7": 40,
 * @property                             "5e9dacf986f774054d6b89f4": 40,
 * @property                             "5f5f41476bdad616ad46d631": 40,
 * @property                             "5e4abb5086f77406975c9342": 30,
 * @property                             "5fd4c474dd870108a754b241": 30,
 * @property                             "6038b4b292ec1c3103795a0b": 30,
 * @property                             "6038b4ca92ec1c3103795a0d": 30,
 * @property                             "60a283193cb70855c43a381d": 30,
 * @property                             "545cdb794bdc2d3a198b456a": 30,
 * @property                             "64be79c487d1510151095552": 1,
 * @property                             "64be79e2bf8412471d0d9bcc": 1,
 * @property                             "5648a7494bdc2d9d488b4583": 1,
 * @property                             "62a09d79de7ac81993580530": 1
 * @property                         },
 * @property                         "TacticalVest": {
 * @property                             "5b44cad286f77402a54ae7e5": 70,
 * @property                             "5e4ac41886f77406a511c9a8": 70,
 * @property                             "60a3c68c37ea821725773ef5": 45,
 * @property                             "628b9784bcf6e2659e09b8a2": 45,
 * @property                             "628b9c7d45122232a872358f": 45,
 * @property                             "609e860ebd219504d8507525": 25,
 * @property                             "628cd624459354321c4b7fa2": 35,
 * @property                             "572b7adb24597762ae139821": 15,
 * @property                             "5e4abc1f86f774069619fbaa": 1,
 * @property                             "6034d0230ca681766b6a0fb5": 1
 * @property                         },
 * @property                         "Headwear": {
 * @property                             "5aa7e4a4e5b5b000137b76f2": 40,
 * @property                             "5b40e1525acfc4771e1c6611": 40,
 * @property                             "5b40e2bc5acfc40016388216": 40,
 * @property                             "5b40e3f35acfc40016388218": 40,
 * @property                             "5b40e4035acfc47a87740943": 40,
 * @property                             "5d6d3716a4b9361bc8618872": 40,
 * @property                             "5ea17ca01412a1425304d1c0": 40,
 * @property                             "5c17a7ed2e2216152142459c": 45,
 * @property                             "5f60c74e3b85f6263c145586": 15
 * @property                         }
 * @property                     }
 * @property                 }
 * @property             },
 * @property             {
 * @property                 "levelRange": {
 * @property                     "min": 51,
 * @property                     "max": 100
 * @property                 },
 * @property                 "ammo": {
 * @property                     "add": {},
 * @property                     "edit": {
 * @property                         "Caliber545x39": {
 * @property                             "56dff061d2720bb5668b4567": 110,
 * @property                             "61962b617c6c7b169525f168": 60,
 * @property                             "56dff026d2720bb8668b4567": 90,
 * @property                             "5c0d5e4486f77478390952fe": 50
 * @property                         },
 * @property                         "Caliber556x45NATO": {
 * @property                             "601949593ae8f707c4608daa": 40,
 * @property                             "59e690b686f7746c9f75e848": 40
 * @property                         },
 * @property                         "Caliber762x51": {
 * @property                             "5efb0c1bd79ff02a1f5e68d9": 12,
 * @property                             "5a6086ea4f39f99cd479502f": 12,
 * @property                             "5a608bf24f39f98ffc77720e": 12
 * @property                         },
 * @property                         "Caliber762x39": {
 * @property                             "601aa3d2b2bcb34913271e6d": 40,
 * @property                             "59e0d99486f7744a32234762": 50
 * @property                         },
 * @property                         "Caliber1143x23ACP": {
 * @property                             "5efb0cabfb3e451d70735af5": 12
 * @property                         },
 * @property                         "Caliber762x35": {
 * @property                             "5fd20ff893a8961fc660a954": 11
 * @property                         },
 * @property                         "Caliber366TKM": {
 * @property                             "5f0596629e22f464da6bbdd9": 11
 * @property                         },
 * @property                         "Caliber46x30": {
 * @property                             "5ba26835d4351e0035628ff5": 11
 * @property                         },
 * @property                         "Caliber12g": {
 * @property                             "5d6e6911a4b9361bd5780d52": 12,
 * @property                             "5d6e68a8a4b9360b6c0d54e2": 12
 * @property                         },
 * @property                         "Caliber9x18PM": {
 * @property                             "573719df2459775a626ccbc2": 3,
 * @property                             "57371aab2459775a77142f22": 2
 * @property                         },
 * @property                         "Caliber9x19PARA": {
 * @property                             "5efb0da7a29a85116f6ea05f": 11
 * @property                         },
 * @property                         "Caliber127x55": {
 * @property                             "5cadf6eeae921500134b2799": 11
 * @property                         },
 * @property                         "Caliber23x75": {
 * @property                             "5e85aa1a988a8701445df1f5": 3
 * @property                         }
 * @property                     }
 * @property                 },
 * @property                 "equipment": {
 * @property                     "add": {},
 * @property                     "edit": {
 * @property                         "FirstPrimaryWeapon": {
 * @property                             "65290f395ae2ae97b80fdf2d": 8,
 * @property                             "5bb2475ed4351e00853264e3": 8,
 * @property                             "5c501a4d2e221602b412b540": 1,
 * @property                             "5d2f0d8048f0356c925bc3b0": 0,
 * @property                             "59984ab886f7743e98271174": 0,
 * @property                             "5ea03f7400685063ec28bfa8": 0,
 * @property                             "59f9cabd86f7743a10721f46": 0,
 * @property                             "60db29ce99594040e04c4a27": 0,
 * @property                             "61f7c9e189e6fb1a5e3ea78d": 0,
 * @property                             "5bfd297f0db834001a669119": 0,
 * @property                             "5ae08f0a5acfc408fb1398a1": 0,
 * @property                             "5de652c31b7e3716273428be": 0
 * @property                         },
 * @property                         "Holster": {
 * @property                             "5d3eb3b0a4b93615055e84d2": 25
 * @property                         },
 * @property                         "ArmorVest": {
 * @property                             "5ab8e79e86f7742d8b372e78": 60,
 * @property                             "5c0e541586f7747fa54205c9": 60,
 * @property                             "5ca2151486f774244a3b8d30": 60,
 * @property                             "5ca21c6986f77479963115a7": 60,
 * @property                             "5e9dacf986f774054d6b89f4": 60,
 * @property                             "5f5f41476bdad616ad46d631": 60,
 * @property                             "5e4abb5086f77406975c9342": 80,
 * @property                             "5fd4c474dd870108a754b241": 80,
 * @property                             "6038b4b292ec1c3103795a0b": 80,
 * @property                             "6038b4ca92ec1c3103795a0d": 80,
 * @property                             "60a283193cb70855c43a381d": 80,
 * @property                             "545cdb794bdc2d3a198b456a": 80,
 * @property                             "5c0e625a86f7742d77340f62": 80,
 * @property                             "5b44cf1486f77431723e3d05": 80,
 * @property                             "5c0e655586f774045612eeb2": 25,
 * @property                             "5c0e53c886f7747fa54205c7": 10,
 * @property                             "5c0e51be86f774598e797894": 10,
 * @property                             "5c0e57ba86f7747fa141986d": 10,
 * @property                             "609e8540d5c319764c2bc2e9": 10,
 * @property                             "64abd93857958b4249003418": 10,
 * @property                             "64be79c487d1510151095552": 1,
 * @property                             "5648a7494bdc2d9d488b4583": 1,
 * @property                             "64be79e2bf8412471d0d9bcc": 1,
 * @property                             "62a09d79de7ac81993580530": 1
 * @property                         },
 * @property                         "TacticalVest": {
 * @property                             "5b44cad286f77402a54ae7e5": 90,
 * @property                             "5e4ac41886f77406a511c9a8": 90,
 * @property                             "60a3c68c37ea821725773ef5": 90,
 * @property                             "628b9784bcf6e2659e09b8a2": 90,
 * @property                             "628b9c7d45122232a872358f": 90,
 * @property                             "609e860ebd219504d8507525": 55,
 * @property                             "628cd624459354321c4b7fa2": 85,
 * @property                             "628d0618d1ba6e4fa07ce5a4": 85,
 * @property                             "5df8a42886f77412640e2e75": 60,
 * @property                             "5648a69d4bdc2ded0b8b457b": 55,
 * @property                             "5e4abc1f86f774069619fbaa": 1,
 * @property                             "572b7adb24597762ae139821": 1,
 * @property                             "6034d0230ca681766b6a0fb5": 1
 * @property                         },
 * @property                         "Headwear": {
 * @property                             "5aa7e4a4e5b5b000137b76f2": 60,
 * @property                             "5aa7e454e5b5b0214e506fa2": 60,
 * @property                             "5b40e1525acfc4771e1c6611": 60,
 * @property                             "5b40e2bc5acfc40016388216": 60,
 * @property                             "5b40e3f35acfc40016388218": 60,
 * @property                             "5b40e4035acfc47a87740943": 60,
 * @property                             "5d6d3716a4b9361bc8618872": 60,
 * @property                             "5ea17ca01412a1425304d1c0": 60,
 * @property                             "5c17a7ed2e2216152142459c": 65,
 * @property                             "5f60c74e3b85f6263c145586": 50,
 * @property                             "5aa7e276e5b5b000171d0647": 50
 * @property                         },
 * @property                         "Backpack": {
 * @property                             "5df8a4d786f77412672a1e3b": 15,
 * @property                             "5f5e46b96bdad616ad46d613": 15,
 * @property                             "5ab8ebf186f7742d8b372e80": 15,
 * @property                             "639346cc1c8f182ad90c8972": 15,
 * @property                             "59e763f286f7742ee57895da": 11
 * @property                         },
 * @property                         "FaceCover": {
 * @property                             "657089638db3adca1009f4ca": 22
 * @property                         }
 * @property                     }
 * @property                 }
 * @property             }
 * @property         ],
 * @property         "armorPlateWeighting": [
 * @property             {
 * @property                 "levelRange": {
 * @property                     "min": 1,
 * @property                     "max": 10
 * @property                 },
 * @property                 "front_plate": {
 * @property                     "2": 25,
 * @property                     "3": 20,
 * @property                     "4": 5,
 * @property                     "5": 1,
 * @property                     "6": 1
 * @property                 },
 * @property                 "back_plate": {
 * @property                     "2": 25,
 * @property                     "3": 20,
 * @property                     "4": 5,
 * @property                     "5": 1,
 * @property                     "6": 1
 * @property                 },
 * @property                 "side_plate": {
 * @property                     "2": 25,
 * @property                     "3": 20,
 * @property                     "4": 5,
 * @property                     "5": 1,
 * @property                     "6": 1
 * @property                 },
 * @property                 "left_side_plate": {
 * @property                     "2": 25,
 * @property                     "3": 20,
 * @property                     "4": 5,
 * @property                     "5": 1,
 * @property                     "6": 1
 * @property                 },
 * @property                 "right_side_plate": {
 * @property                     "2": 25,
 * @property                     "3": 20,
 * @property                     "4": 5,
 * @property                     "5": 1,
 * @property                     "6": 1
 * @property                 }
 * @property             },
 * @property             {
 * @property                 "levelRange": {
 * @property                     "min": 11,
 * @property                     "max": 14
 * @property                 },
 * @property                 "front_plate": {
 * @property                     "2": 30,
 * @property                     "3": 20,
 * @property                     "4": 5,
 * @property                     "5": 1,
 * @property                     "6": 1
 * @property                 },
 * @property                 "back_plate": {
 * @property                     "2": 30,
 * @property                     "3": 20,
 * @property                     "4": 5,
 * @property                     "5": 1,
 * @property                     "6": 1
 * @property                 },
 * @property                 "side_plate": {
 * @property                     "2": 30,
 * @property                     "3": 20,
 * @property                     "4": 5,
 * @property                     "5": 1,
 * @property                     "6": 1
 * @property                 },
 * @property                 "left_side_plate": {
 * @property                     "2": 30,
 * @property                     "3": 20,
 * @property                     "4": 5,
 * @property                     "5": 1,
 * @property                     "6": 1
 * @property                 },
 * @property                 "right_side_plate": {
 * @property                     "2": 30,
 * @property                     "3": 20,
 * @property                     "4": 5,
 * @property                     "5": 1,
 * @property                     "6": 1
 * @property                 }
 * @property             },
 * @property             {
 * @property                 "levelRange": {
 * @property                     "min": 15,
 * @property                     "max": 24
 * @property                 },
 * @property                 "front_plate": {
 * @property                     "2": 10,
 * @property                     "3": 15,
 * @property                     "4": 20,
 * @property                     "5": 5,
 * @property                     "6": 4
 * @property                 },
 * @property                 "back_plate": {
 * @property                     "2": 10,
 * @property                     "3": 15,
 * @property                     "4": 20,
 * @property                     "5": 5,
 * @property                     "6": 4
 * @property                 },
 * @property                 "side_plate": {
 * @property                     "2": 10,
 * @property                     "3": 15,
 * @property                     "4": 20,
 * @property                     "5": 5,
 * @property                     "6": 4
 * @property                 },
 * @property                 "left_side_plate": {
 * @property                     "2": 10,
 * @property                     "3": 15,
 * @property                     "4": 20,
 * @property                     "5": 5,
 * @property                     "6": 4
 * @property                 },
 * @property                 "right_side_plate": {
 * @property                     "2": 10,
 * @property                     "3": 15,
 * @property                     "4": 20,
 * @property                     "5": 5,
 * @property                     "6": 4
 * @property                 }
 * @property             },
 * @property             {
 * @property                 "levelRange": {
 * @property                     "min": 25,
 * @property                     "max": 35
 * @property                 },
 * @property                 "front_plate": {
 * @property                     "2": 3,
 * @property                     "3": 15,
 * @property                     "4": 35,
 * @property                     "5": 15,
 * @property                     "6": 5
 * @property                 },
 * @property                 "back_plate": {
 * @property                     "2": 3,
 * @property                     "3": 15,
 * @property                     "4": 35,
 * @property                     "5": 15,
 * @property                     "6": 5
 * @property                 },
 * @property                 "side_plate": {
 * @property                     "2": 3,
 * @property                     "3": 15,
 * @property                     "4": 35,
 * @property                     "5": 15,
 * @property                     "6": 5
 * @property                 },
 * @property                 "left_side_plate": {
 * @property                     "2": 3,
 * @property                     "3": 15,
 * @property                     "4": 35,
 * @property                     "5": 15,
 * @property                     "6": 5
 * @property                 },
 * @property                 "right_side_plate": {
 * @property                     "2": 3,
 * @property                     "3": 15,
 * @property                     "4": 35,
 * @property                     "5": 15,
 * @property                     "6": 5
 * @property                 }
 * @property             },
 * @property             {
 * @property                 "levelRange": {
 * @property                     "min": 36,
 * @property                     "max": 55
 * @property                 },
 * @property                 "front_plate": {
 * @property                     "2": 1,
 * @property                     "3": 5,
 * @property                     "4": 30,
 * @property                     "5": 45,
 * @property                     "6": 20
 * @property                 },
 * @property                 "back_plate": {
 * @property                     "2": 1,
 * @property                     "3": 5,
 * @property                     "4": 30,
 * @property                     "5": 45,
 * @property                     "6": 20
 * @property                 },
 * @property                 "side_plate": {
 * @property                     "2": 1,
 * @property                     "3": 5,
 * @property                     "4": 30,
 * @property                     "5": 45,
 * @property                     "6": 20
 * @property                 },
 * @property                 "left_side_plate": {
 * @property                     "2": 1,
 * @property                     "3": 5,
 * @property                     "4": 30,
 * @property                     "5": 45,
 * @property                     "6": 20
 * @property                 },
 * @property                 "right_side_plate": {
 * @property                     "2": 1,
 * @property                     "3": 5,
 * @property                     "4": 30,
 * @property                     "5": 45,
 * @property                     "6": 20
 * @property                 }
 * @property             },
 * @property             {
 * @property                 "levelRange": {
 * @property                     "min": 56,
 * @property                     "max": 90
 * @property                 },
 * @property                 "front_plate": {
 * @property                     "2": 0,
 * @property                     "3": 0,
 * @property                     "4": 10,
 * @property                     "5": 50,
 * @property                     "6": 50
 * @property                 },
 * @property                 "back_plate": {
 * @property                     "2": 0,
 * @property                     "3": 0,
 * @property                     "4": 10,
 * @property                     "5": 40,
 * @property                     "6": 50
 * @property                 },
 * @property                 "side_plate": {
 * @property                     "2": 0,
 * @property                     "3": 0,
 * @property                     "4": 10,
 * @property                     "5": 40,
 * @property                     "6": 50
 * @property                 },
 * @property                 "left_side_plate": {
 * @property                     "2": 0,
 * @property                     "3": 0,
 * @property                     "4": 10,
 * @property                     "5": 40,
 * @property                     "6": 50
 * @property                 },
 * @property                 "right_side_plate": {
 * @property                     "2": 0,
 * @property                     "3": 0,
 * @property                     "4": 10,
 * @property                     "5": 40,
 * @property                     "6": 50
 * @property                 }
 * @property             }
 * @property         ],
 * @property         "whitelist": [
 * @property             {
 * @property                 "levelRange": {
 * @property                     "min": 101,
 * @property                     "max": 101
 * @property                 },
 * @property                 "equipment": {},
 * @property                 "cartridge": {}
 * @property             }
 * @property         ]
 * @property     }
 * @property },
 * @property "showTypeInNickname": false,
 * @property "assaultBrainType": {
 * @property     "factory4_day": {
 * @property         "bossKilla": 0,
 * @property         "bossKnight": 0,
 * @property         "bossGluhar": 0,
 * @property         "bossSanitar": 0,
 * @property         "bossTagilla": 0,
 * @property         "bossZryachiy": 0,
 * @property         "bossBoar": 0,
 * @property         "followerGluharAssault": 0,
 * @property         "followerBully": 0,
 * @property         "followerBigPipe": 0,
 * @property         "followerSanitar": 0,
 * @property         "assault": 1,
 * @property         "cursedAssault": 0,
 * @property         "exUsec": 0,
 * @property         "arenaFighter": 0,
 * @property         "arenaFighterEvent": 0,
 * @property         "crazyAssaultEvent": 0,
 * @property         "pmcBot": 0
 * @property     },
 * @property     "factory4_night": {
 * @property         "bossKilla": 0,
 * @property         "bossKnight": 0,
 * @property         "bossGluhar": 0,
 * @property         "bossSanitar": 0,
 * @property         "bossTagilla": 0,
 * @property         "bossZryachiy": 0,
 * @property         "bossBoar": 0,
 * @property         "followerGluharAssault": 0,
 * @property         "followerBully": 0,
 * @property         "followerBigPipe": 0,
 * @property         "followerSanitar": 0,
 * @property         "assault": 1,
 * @property         "cursedAssault": 0,
 * @property         "exUsec": 0,
 * @property         "arenaFighter": 0,
 * @property         "arenaFighterEvent": 0,
 * @property         "crazyAssaultEvent": 0,
 * @property         "pmcBot": 0
 * @property     },
 * @property     "bigmap": {
 * @property         "bossKilla": 0,
 * @property         "bossKnight": 0,
 * @property         "bossGluhar": 0,
 * @property         "bossSanitar": 0,
 * @property         "bossTagilla": 0,
 * @property         "bossZryachiy": 0,
 * @property         "bossBoar": 0,
 * @property         "followerGluharAssault": 0,
 * @property         "followerBully": 0,
 * @property         "followerBigPipe": 0,
 * @property         "followerSanitar": 0,
 * @property         "assault": 1,
 * @property         "cursedAssault": 0,
 * @property         "exUsec": 0,
 * @property         "arenaFighter": 0,
 * @property         "arenaFighterEvent": 0,
 * @property         "crazyAssaultEvent": 0,
 * @property         "pmcBot": 0
 * @property     },
 * @property     "laboratory": {
 * @property         "bossKilla": 0,
 * @property         "bossKnight": 0,
 * @property         "bossGluhar": 0,
 * @property         "bossSanitar": 0,
 * @property         "bossTagilla": 0,
 * @property         "bossZryachiy": 0,
 * @property         "bossBoar": 0,
 * @property         "followerGluharAssault": 0,
 * @property         "followerBully": 0,
 * @property         "followerBigPipe": 0,
 * @property         "followerSanitar": 0,
 * @property         "assault": 1,
 * @property         "cursedAssault": 0,
 * @property         "exUsec": 0,
 * @property         "arenaFighter": 0,
 * @property         "arenaFighterEvent": 0,
 * @property         "crazyAssaultEvent": 0,
 * @property         "pmcBot": 0
 * @property     },
 * @property     "woods": {
 * @property         "bossKilla": 0,
 * @property         "bossKnight": 0,
 * @property         "bossGluhar": 0,
 * @property         "bossSanitar": 0,
 * @property         "bossTagilla": 0,
 * @property         "bossZryachiy": 0,
 * @property         "bossBoar": 0,
 * @property         "followerGluharAssault": 0,
 * @property         "followerBully": 0,
 * @property         "followerBigPipe": 0,
 * @property         "followerSanitar": 0,
 * @property         "assault": 1,
 * @property         "cursedAssault": 0,
 * @property         "exUsec": 0,
 * @property         "arenaFighter": 0,
 * @property         "arenaFighterEvent": 0,
 * @property         "crazyAssaultEvent": 0,
 * @property         "pmcBot": 0
 * @property     },
 * @property     "interchange": {
 * @property         "bossKilla": 0,
 * @property         "bossKnight": 0,
 * @property         "bossGluhar": 0,
 * @property         "bossSanitar": 0,
 * @property         "bossTagilla": 0,
 * @property         "bossZryachiy": 0,
 * @property         "bossBoar": 0,
 * @property         "followerGluharAssault": 0,
 * @property         "followerBully": 0,
 * @property         "followerBigPipe": 0,
 * @property         "followerSanitar": 0,
 * @property         "assault": 1,
 * @property         "cursedAssault": 0,
 * @property         "exUsec": 0,
 * @property         "arenaFighter": 0,
 * @property         "arenaFighterEvent": 0,
 * @property         "crazyAssaultEvent": 0,
 * @property         "pmcBot": 0
 * @property     },
 * @property     "lighthouse": {
 * @property         "bossKilla": 0,
 * @property         "bossKnight": 0,
 * @property         "bossGluhar": 0,
 * @property         "bossSanitar": 0,
 * @property         "bossTagilla": 0,
 * @property         "bossZryachiy": 0,
 * @property         "bossBoar": 0,
 * @property         "followerGluharAssault": 0,
 * @property         "followerBully": 0,
 * @property         "followerBigPipe": 0,
 * @property         "followerSanitar": 0,
 * @property         "assault": 1,
 * @property         "cursedAssault": 0,
 * @property         "exUsec": 0,
 * @property         "arenaFighter": 0,
 * @property         "arenaFighterEvent": 0,
 * @property         "crazyAssaultEvent": 0,
 * @property         "pmcBot": 0
 * @property     },
 * @property     "rezervbase": {
 * @property         "bossKilla": 0,
 * @property         "bossKnight": 0,
 * @property         "bossGluhar": 0,
 * @property         "bossSanitar": 0,
 * @property         "bossTagilla": 0,
 * @property         "bossZryachiy": 0,
 * @property         "bossBoar": 0,
 * @property         "followerGluharAssault": 0,
 * @property         "followerBully": 0,
 * @property         "followerBigPipe": 0,
 * @property         "followerSanitar": 0,
 * @property         "assault": 1,
 * @property         "cursedAssault": 0,
 * @property         "exUsec": 0,
 * @property         "arenaFighter": 0,
 * @property         "arenaFighterEvent": 0,
 * @property         "crazyAssaultEvent": 0,
 * @property         "pmcBot": 0
 * @property     },
 * @property     "shoreline": {
 * @property         "bossKilla": 0,
 * @property         "bossKnight": 0,
 * @property         "bossGluhar": 0,
 * @property         "bossSanitar": 0,
 * @property         "bossTagilla": 0,
 * @property         "bossZryachiy": 0,
 * @property         "bossBoar": 0,
 * @property         "followerGluharAssault": 0,
 * @property         "followerBully": 0,
 * @property         "followerBigPipe": 0,
 * @property         "followerSanitar": 0,
 * @property         "assault": 1,
 * @property         "cursedAssault": 0,
 * @property         "exUsec": 0,
 * @property         "arenaFighter": 0,
 * @property         "arenaFighterEvent": 0,
 * @property         "crazyAssaultEvent": 0,
 * @property         "pmcBot": 0
 * @property     },
 * @property     "tarkovstreets": {
 * @property         "bossKilla": 0,
 * @property         "bossKnight": 0,
 * @property         "bossGluhar": 0,
 * @property         "bossSanitar": 0,
 * @property         "bossTagilla": 0,
 * @property         "bossZryachiy": 0,
 * @property         "bossBoar": 0,
 * @property         "followerGluharAssault": 0,
 * @property         "followerBully": 0,
 * @property         "followerBigPipe": 0,
 * @property         "followerSanitar": 0,
 * @property         "assault": 1,
 * @property         "cursedAssault": 0,
 * @property         "exUsec": 0,
 * @property         "arenaFighter": 0,
 * @property         "arenaFighterEvent": 0,
 * @property         "crazyAssaultEvent": 0,
 * @property         "pmcBot": 0
 * @property     },
 * @property     "sandbox": {
 * @property         "bossKilla": 0,
 * @property         "bossKnight": 0,
 * @property         "bossGluhar": 0,
 * @property         "bossSanitar": 0,
 * @property         "bossTagilla": 0,
 * @property         "bossZryachiy": 0,
 * @property         "bossBoar": 0,
 * @property         "followerGluharAssault": 0,
 * @property         "followerBully": 0,
 * @property         "followerBigPipe": 0,
 * @property         "followerSanitar": 0,
 * @property         "assault": 1,
 * @property         "cursedAssault": 0,
 * @property         "exUsec": 0,
 * @property         "arenaFighter": 0,
 * @property         "arenaFighterEvent": 0,
 * @property         "crazyAssaultEvent": 0,
 * @property         "pmcBot": 0
 * @property     }
 * @property },
 * @property "playerScavBrainType": {
 * @property     "factory4_day": {
 * @property         "bossKilla": 1,
 * @property         "assault": 1,
 * @property         "pmcBot": 1
 * @property     },
 * @property     "factory4_night": {
 * @property         "bossKilla": 1,
 * @property         "assault": 1,
 * @property         "pmcBot": 1
 * @property     },
 * @property     "bigmap": {
 * @property         "bossKilla": 1,
 * @property         "assault": 1,
 * @property         "pmcBot": 1
 * @property     },
 * @property     "laboratory": {
 * @property         "bossKilla": 1,
 * @property         "assault": 1,
 * @property         "pmcBot": 1
 * @property     },
 * @property     "woods": {
 * @property         "bossKilla": 1,
 * @property         "assault": 1,
 * @property         "pmcBot": 1
 * @property     },
 * @property     "interchange": {
 * @property         "bossKilla": 1,
 * @property         "assault": 1,
 * @property         "pmcBot": 1
 * @property     },
 * @property     "lighthouse": {
 * @property         "bossKilla": 1,
 * @property         "assault": 1,
 * @property         "pmcBot": 1
 * @property     },
 * @property     "rezervbase": {
 * @property         "bossKilla": 1,
 * @property         "assault": 1,
 * @property         "pmcBot": 1
 * @property     },
 * @property     "shoreline": {
 * @property         "bossKilla": 1,
 * @property         "assault": 1,
 * @property         "pmcBot": 1
 * @property     },
 * @property     "tarkovstreets": {
 * @property         "bossKilla": 1,
 * @property         "assault": 1,
 * @property         "pmcBot": 1
 * @property     },
 * @property     "sandbox": {
 * @property         "assault": 2,
 * @property         "pmcBot": 1
 * @property     }
 * @property },
 * @property "maxBotCap": {
 * @property     "factory4_day": 13,
 * @property     "factory4_night": 13,
 * @property     "bigmap": 20,
 * @property     "woods": 20,
 * @property     "shoreline": 22,
 * @property     "lighthouse": 22,
 * @property     "rezervbase": 20,
 * @property     "interchange": 20,
 * @property     "laboratory": 20,
 * @property     "tarkovstreets": 26,
 * @property     "sandbox": 16,
 * @property     "default": 16
 * @property },
 * @property "walletLoot": {
 * @property     "chancePercent": 35,
 * @property     "itemCount": {
 * @property         "min": 1,
 * @property         "max": 3
 * @property     },
 * @property     "stackSizeWeight": {
 * @property         "25000": 1,
 * @property         "20000": 2,
 * @property         "15000": 4,
 * @property         "10000": 7,
 * @property         "5000": 50
 * @property     },
 * @property     "currencyWeight": {
 * @property         "5449016a4bdc2d6f028b456f": 1,
 * @property         "569668774bdc2da2298b4568": 0,
 * @property         "5696686a4bdc2da3298b456a": 0
 * @property     },
 * @property     "walletTplPool": [
 * @property         "5783c43d2459774bbe137486",
 * @property         "60b0f6c058e0b0481a09ad11"
 * @property     ]
 * @property },
 * @property "currencyStackSize": {
 * @property     "default": {
 * @property         "5449016a4bdc2d6f028b456f": {
 * @property             "25000": 2,
 * @property             "20000": 4,
 * @property             "15000": 8,
 * @property             "10000": 14,
 * @property             "5000": 70
 * @property         },
 * @property         "5696686a4bdc2da3298b456a": {
 * @property             "50": 10,
 * @property             "100": 5,
 * @property             "250": 1
 * @property         },
 * @property         "569668774bdc2da2298b4568": {
 * @property             "50": 10,
 * @property             "100": 5,
 * @property             "250": 1
 * @property         }
 * @property     },
 * @property     "assault": {
 * @property         "5449016a4bdc2d6f028b456f": {
 * @property             "350000": 1,
 * @property             "30000": 3,
 * @property             "25000": 8,
 * @property             "20000": 13,
 * @property             "15000": 28,
 * @property             "10000": 51,
 * @property             "5000": 200
 * @property         },
 * @property         "5696686a4bdc2da3298b456a": {
 * @property             "50": 20,
 * @property             "100": 5,
 * @property             "250": 1
 * @property         },
 * @property         "569668774bdc2da2298b4568": {
 * @property             "50": 20,
 * @property             "100": 5,
 * @property             "250": 1
 * @property         }
 * @property     }
 * @property }
 */

/**
 * @typedef {Object} bot
 * @property {Difficulty} easy
 * @property {Difficulty} normal 
 * @property {Difficulty} hard 
 * @property {Difficulty} insane 
 */

/**
 * @typedef {Bot} bosses 
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

/**
 * @typedef {Object} Difficulty
 * @property {Number} Aiming - Settings related to bot aim
 * @property {Number} Boss - configuration used by 'boss' class bots
 * @property {Number} Change - defines how bot is affected by flashbang/smoke
 * @property {Number} Core - Core settings
 * @property {Number} Cover - Bot cover preferences
 * @property {Number} Grenade - Grenade throwing configuration
 * @property {Number} Hearing - Sound detection settings
 * @property {Number} Lay - Settings affecting when the bot will lay down
 * @property {Number} Look - Bot secret wall hacks :)
 * @property {Number} Mind - Inner workings of the bot mind?
 * @property {Number} Move - Pathfinding/Movement decision making parameters
 * @property {Number} Patrol - Settings for patrolling a map?
 * @property {Number} Scattering - Weapon recoil, spray pattern, etc.
 * @property {Number} Shoot - Single and Automatic fire configuration
 *
 */


/**
 * @typedef {Object} BodyPartSettings
 * @property {BodyPart} Head
 * @property {BodyPart} Chest
 * @property {BodyPart} LeftArm
 * @property {BodyPart} LeftLeg
 * @property {BodyPart} RightArm
 * @property {BodyPart} RightLeg
 * @property {BodyPart} Stomach
 * 
 */


/**
 * @typedef {Object} BodyPart
 * @property {number} Default
 * @property {number} Maximum
 * @property {number} Minimum
 * @property {number} EnvironmentDamageMultiplier
 * @property {number} OverDamageReceivedMultiplier
 * 
 */


/**
 * @typedef {Object} Shoot
 * @property {number} AUTOMATIC_FIRE_SCATTERING_COEF
 * @property {number} BASE_AUTOMATIC_TIME
 * @property {number} CAN_SHOOTS_TIME_TO_AMBUSH
 * @property {number} CHANCE_TO_CHANGE_TO_AUTOMATIC_FIRE_100
 * @property {number} FINGER_HOLD_SINGLE_SHOT
 * @property {number} HORIZONT_RECOIL_COEF
 * @property {number} MAX_RECOIL_PER_METER
 * @property {number} NOT_TO_SEE_ENEMY_TO_WANT_RELOAD_PERCENT
 * @property {number} RECOIL_DELTA_PRESS
 * @property {number} RECOIL_PER_METER
 * @property {number} SUPPRESS_BY_SHOOT_TIME
 * @property {number} BASE_AUTOMATIC_TIME
 * @property {number} WAIT_NEXT_SINGLE_SHOT
 * @property {number} WAIT_NEXT_SINGLE_SHOT_LONG_MAX
 * @property {number} WAIT_NEXT_SINGLE_SHOT_LONG_MIN
 * @property {number} WAIT_NEXT_STATIONARY_GRENADE
 */


// code for bot class? type info.
export const botKeys = ["normal", "experience", "health"];

export const normalKeys = [""];

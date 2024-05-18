// bot.js

/**
 * @typedef {Object} bot
 * @property {Difficulty} normal - Normal difficulty settings
 * @property {Difficulty} hard - Hard difficulty settings
 */

/**
 * @typedef {Object} Difficulty
 * @property {Aiming} Aiming - Settings related to bot aim
 * @property {Boss} Boss - configuration used by 'boss' class bots
 * @property {Change} Change - defines how bot is affected by flashbang/smoke
 * @property {Core} Core - Core settings
 * @property {Cover} Cover - Bot cover preferences
 * @property {Grenade} Grenade - Grenade throwing configuration
 * @property {Hearing} Hearing - Sound detection settings
 * @property {Lay} Lay - Settings affecting when the bot will lay down
 * @property {Look} Look - Bot secret wall hacks :)
 * @property {Mind} Mind - Inner workings of the bot mind?
 * @property {Move} Move - Pathfinding/Movement decision making parameters
 * @property {Patrol} Patrol - Settings for patrolling a map?
 * @property {Scattering} Scattering - Weapon recoil, spray pattern, etc.
 * @property {Shoot} Shoot - Single and Automatic fire configuration
 *
 */

/**
 * @typedef {Object} Chest
 * @property {number} max
 * @property {number} min
 */

/**
 * @typedef [Object] BodyParts
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

# Tarkov API [api.tarkov.dev](https|//api.tarkov.dev)

- [Tarkov API api.tarkov.dev](#tarkov-api-apitarkovdev)
  - [Base Classes](#base-classes)
  - [Base Class Types](#base-class-types)
  - [Items](#items)
    - [Item Category](#item-category)
    - [Item Types](#item-types)
    - [Item Properties](#item-properties)
    - [Deprecated Fields](#deprecated-fields)
    - [Item Properties](#item-properties-1)
  - [Ammo](#ammo)
  - [Traders IDs](#traders-ids)

## Base Classes

[BaseClasses](#base-classes)

```JSON
{
  "BaseClasses": {
    "WEAPON"  :    "5422acb9af1c889c16000029",
    "UBGL"    :    "55818b014bdc2ddc698b456b",
    "ARMOR"   :    "5448e54d4bdc2dcc718b4568",
    ...
  }
}
```

## Base Class Types

```json
{
  "WEAPON"                 :   "5422acb9af1c889c16000029",
  "UBGL"                   :   "55818b014bdc2ddc698b456b",
  "ARMOR"                  :   "5448e54d4bdc2dcc718b4568",
  "ARMOREDEQUIPMENT"       :   "57bef4c42459772e8d35a53b",
  "REPAIR_KITS"            :   "616eb7aea207f41933308f46",
  "HEADWEAR"               :   "5a341c4086f77401f2541505",
  "FACECOVER"              :   "5a341c4686f77469e155819e",
  "VEST"                   :   "5448e5284bdc2dcb718b4567",
  "BACKPACK"               :   "5448e53e4bdc2d60728b4567",
  "COMPOUND"               :   "566162e44bdc2d3f298b4573",
  "VISORS"                 :   "5448e5724bdc2ddf718b4568",
  "FOOD"                   :   "5448e8d04bdc2ddf718b4569",
  "GAS_BLOCK"              :   "56ea9461d2720b67698b456f",
  "RAIL_COVER"             :   "55818b1d4bdc2d5b648b4572",
  "DRINK"                  :   "5448e8d64bdc2dce718b4568",
  "BARTER_ITEM"            :   "5448eb774bdc2d0a728b4567",
  "INFO"                   :   "5448ecbe4bdc2d60728b4568",
  "MEDKIT"                 :   "5448f39d4bdc2d0a728b4568",
  "DRUGS"                  :   "5448f3a14bdc2d27728b4569",
  "STIMULATOR"             :   "5448f3a64bdc2d60728b456a",
  "MEDICAL"                :   "5448f3ac4bdc2dce718b4569",
  "MEDICAL_SUPPLIES"       :   "57864c8c245977548867e7f1",
  "MOD"                    :   "5448fe124bdc2da5018b4567",
  "FUNCTIONAL_MOD"         :   "550aa4154bdc2dd8348b456b",
  "FUEL"                   :   "5d650c3e815116009f6201d2",
  "GEAR_MOD"               :   "55802f3e4bdc2de7118b4584",
  "STOCK"                  :   "55818a594bdc2db9688b456a",
  "FOREGRIP"               :   "55818af64bdc2d5b648b4570",
  "MASTER_MOD"             :   "55802f4a4bdc2ddb688b4569",
  "MOUNT"                  :   "55818b224bdc2dde698b456f",
  "MUZZLE"                 :   "5448fe394bdc2d0d028b456c",
  "SIGHTS"                 :   "5448fe7a4bdc2d6f028b456b",
  "MEDS"                   :   "543be5664bdc2dd4348b4569",
  "MAP"                    :   "567849dd4bdc2d150f8b456e",
  "MONEY"                  :   "543be5dd4bdc2deb348b4569",
  "NIGHTVISION"            :   "5a2c3a9486f774688b05e574",
  "THERMAL_VISION"         :   "5d21f59b6dbe99052b54ef83",
  "KEY"                    :   "543be5e94bdc2df1348b4568",
  "KEY_MECHANICAL"         :   "5c99f98d86f7745c314214b3",
  "KEYCARD"                :   "5c164d2286f774194c5e69fa",
  "EQUIPMENT"              :   "543be5f84bdc2dd4348b456a",
  "THROW_WEAPON"           :   "543be6564bdc2df4348b4568",
  "FOOD_DRINK"             :   "543be6674bdc2df1348b4569",
  "PISTOL"                 :   "5447b5cf4bdc2d65278b4567",
  "REVOLVER"               :   "617f1ef5e8b54b0998387733",
  "SMG"                    :   "5447b5e04bdc2d62278b4567",
  "ASSAULT_RIFLE"          :   "5447b5f14bdc2d61278b4567",
  "ASSAULT_CARBINE"        :   "5447b5fc4bdc2d87278b4567",
  "SHOTGUN"                :   "5447b6094bdc2dc3278b4567",
  "MARKSMAN_RIFLE"         :   "5447b6194bdc2d67278b4567",
  "SNIPER_RIFLE"           :   "5447b6254bdc2dc3278b4568",
  "MACHINE_GUN"            :   "5447bed64bdc2d97278b4568",
  "GRENADE_LAUNCHER"       :   "5447bedf4bdc2d87278b4568",
  "SPECIAL_WEAPON"         :   "5447bee84bdc2dc3278b4569",
  "SPEC_ITEM"              :   "5447e0e74bdc2d3c308b4567",
  "SPRING_DRIVEN_CYLINDER" :   "627a137bf21bc425b06ab944",
  "KNIFE"                  :   "5447e1d04bdc2dff2f8b4567",
  "AMMO"                   :   "5485a8684bdc2da71d8b4567",
  "AMMO_BOX"               :   "543be5cb4bdc2deb348b4568",
  "LOOT_CONTAINER"         :   "566965d44bdc2d814c8b4571",
  "MOB_CONTAINER"          :   "5448bf274bdc2dfc2f8b456a",
  "SEARCHABLE_ITEM"        :   "566168634bdc2d144c8b456c",
  "STASH"                  :   "566abbb64bdc2d144c8b457d",
  "SORTING_TABLE"          :   "6050cac987d3f925bf016837",
  "LOCKABLE_CONTAINER"     :   "5671435f4bdc2d96058b4569",
  "SIMPLE_CONTAINER"       :   "5795f317245977243854e041",
  "INVENTORY"              :   "55d720f24bdc2d88028b456d",
  "STATIONARY_CONTAINER"   :   "567583764bdc2d98058b456e",
  "POCKETS"                :   "557596e64bdc2dc2118b4571",
  "ARMBAND"                :   "5b3f15d486f77432d0509248",
  "DOG_TAG_USEC"           :   "59f32c3b86f77472a31742f0",
  "DOG_TAG_BEAR"           :   "59f32bb586f774757e1e8442",
  "JEWELRY"                :   "57864a3d24597754843f8721",
  "ELECTRONICS"            :   "57864a66245977548f04a81f",
  "BUILDING_MATERIAL"      :   "57864ada245977548638de91",
  "TOOL"                   :   "57864bb7245977548b3b66c2",
  "HOUSEHOLD_GOODS"        :   "57864c322459775490116fbf",
  "LUBRICANT"              :   "57864e4c24597754843f8723",
  "BATTERY"                :   "57864ee62459775490116fc1",
  "ASSAULT_SCOPE"          :   "55818add4bdc2d5b648b456f",
  "TACTICAL_COMBO"         :   "55818b164bdc2ddc698b456c",
  "FLASHLIGHT"             :   "55818b084bdc2d5b648b4571",
  "MAGAZINE"               :   "5448bc234bdc2d3c308b4569",
  "LIGHT_LASER_DESIGNATOR" :   "55818b0e4bdc2dde698b456e",
  "FLASH_HIDER"            :   "550aa4bf4bdc2dd6348b456b",
  "COLLIMATOR"             :   "55818ad54bdc2ddc698b4569",
  "IRON_SIGHT"             :   "55818ac54bdc2d5b648b456e",
  "COMPACT_COLLIMATOR"     :   "55818acf4bdc2dde698b456b",
  "COMPENSATOR"            :   "550aa4af4bdc2dd4348b456e",
  "OPTIC_SCOPE"            :   "55818ae44bdc2dde698b456c",
  "SPECIAL_SCOPE"          :   "55818aeb4bdc2ddc698b456a",
  "OTHER"                  :   "590c745b86f7743cc433c5f2",
  "SILENCER"               :   "550aa4cd4bdc2dd8348b456c",
  "PORTABLE_RANGE_FINDER"  :   "61605ddea09d851a0a0c1bbc",
  "ITEM"                   :   "54009119af1c881c07000029",
  "CYLINDER_MAGAZINE"      :   "610720f290b75a49ff2e5e25",
  "AUXILARY_MOD"           :   "5a74651486f7744e73386dd1",
  "BIPOD"                  :   "55818afb4bdc2dde698b456d",
  "HEADPHONES"             :   "5645bcb74bdc2ded0b8b4578",
  "RANDOM_LOOT_CONTAINER"  :   "62f109593b54472778797866",
  "STACKABLE_ITEM"         :   "5661632d4bdc2d903d8b456b",
}
```

## Items

[Items](#items)

### Item Category

```Properties
id: ID!
name: String!
normalizedName: String!
parent: ItemCategory
children: [ItemCategory]
```

&diams; The <em>ID</em> scalar type represents a unique identifier, often used to refetch an object or as key for a cache.
&diams; The <em>ID</em> type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as "4") or integer (such as 4) input value will be accepted as an ID.

### Item Types

```less
ammo
ammoBox
any
armor
armorPlate
backpack
barter
container
glasses
grenade
gun
headphones
helmet
injectors
keys
markedOnly
meds
mods
noFlea
pistolGrip
preset
provisions
rig
suppressor
wearable
```

### Item Properties

```haskell
id                        ID!
name                      String
normalizedName            String
shortName                 String
description               String
basePrice                 Int!
updated                   String
width                     Int!
height                    Int!
backgroundColor           String!
iconLink                  String
gridImageLink             String
baseImageLink             String
inspectImageLink          String
image512pxLink            String
image8xLink               String
wikiLink                  String
types                     [ItemType]!
avg24hPrice               Int
properties                ItemProperties
conflictingItems          [Item]
conflictingSlotIds        [String]
accuracyModifier          Float
recoilModifier            Float
ergonomicsModifier        Float
hasGrid                   Boolean
blocksHeadphones          Boolean
link                      String
lastLowPrice              Int
changeLast48h             Float
changeLast48hPercent      Float
low24hPrice               Int
high24hPrice              Int
lastOfferCount            Int
sellFor                   [ItemPrice!]
buyFor                    [ItemPrice!]
containsItems             [ContainedItem]
category                  ItemCategory
categories                [ItemCategory]!
bsgCategoryId             String
handbookCategories        [ItemCategory]!
weight                    Float
velocity                  Float
loudness                  Int
usedInTasks               [Task]!
receivedFromTasks         [Task]!
bartersFor                [Barter]!
bartersUsing              [Barter]!
craftsFor                 [Craft]!
craftsUsing               [Craft]!
historicalPrices          [historicalPricePoint]
```

&diams; historicalPrices is only available via the item and items queries.

```js
fleaMarketFee(
  price: Int
  intelCenterLevel: Int
  hideoutManagementLevel: Int
  count: Int
  requireAll: Boolean
): Int
```

### Deprecated Fields

```js
categoryTop; // Not meaningful because of Item category
traderPrices; // Use sellFor instead
bsgCategory; // Use category instead
imageLink; // Use inspectImageLink instead.
imageLinkFallback; // (auto)Fallback -> inspectImageLink.
iconLinkFallback; // (auto)Fallback -> iconLink.
gridImageLinkFallback; // Fallback -> gridImageLink.
```

### Item Properties

[Item Properties](#item-properties)

```java
ItemPropertiesAmmo
ItemPropertiesArmor
ItemPropertiesArmorAttachment
ItemPropertiesBackpack
ItemPropertiesBarrel
ItemPropertiesChestRig
ItemPropertiesContainer
ItemPropertiesFoodDrink
ItemPropertiesGlasses
ItemPropertiesGrenade
ItemPropertiesHeadwear
ItemPropertiesHeadphone
ItemPropertiesHelmet
ItemPropertiesKey
- uses. => .int
  ItemPropertiesMagazine
  ItemPropertiesMedicalItem
  ItemPropertiesMelee
  ItemPropertiesMedKit
  ItemPropertiesNightVision
  ItemPropertiesPainkiller
  ItemPropertiesPreset
  ItemPropertiesResource
  ItemPropertiesScope
  ItemPropertiesSurgicalKit
  ItemPropertiesWeapon
  ItemPropertiesWeaponMod
  ItemPropertiesStim
```

## Ammo

[Ammo](#ammo)

```haskell
item                      | Item!     |
weight                    | Float!    |
caliber                   | String    |
stackMaxSize              | Int!      |
tracer                    | Boolean!  |
tracerColor               | String    |
ammoType                  | String!   |
projectileCount           | Int       |
damage                    | Int!      |
armorDamage               | Int!      |
fragmentationChance       | Float!    |
ricochetChance            | Float!    |
penetrationChance         | Float!    |
penetrationPower          | Int!      |
penetrationPowerDeviation | Float     |
accuracyModifier          | Float     |
recoilModifier            | Float     |
initialSpeed              | Float     |
lightBleedModifier        | Float!    |
heavyBleedModifier        | Float!    |
staminaBurnPerDamage      | Float     |
```

## Traders IDs

```js
Prapor            : '54cb50c76803fa8b248b4571',
Therapist         : '54cb57776803fa99248b456e',
Fence             : '579dc571d53a0658a154fbec',
Skier             : '58330581ace78e27b8b10cee',
Peacekeeper       : '5935c25fb3acc3127c3d8cd9',
Mechanic          : '5a7c2eca46aef81a7ca2145d',
Ragman            : '5ac3b934156ae10c4430e83c',
Jaeger            : '5c0647fdd443bc2504c2d371',
Lighthouse Keeper : '638f541a29ffd1183d187f57'
```

&#x2684;
&#9996;
&#10004;
&#10004;
&#10070;
&#10070;
&#58095;
&#9760;
&#9757;
&#xf12b;
&#xf2dd;
&Hopf;
&#8283;
&#8284;

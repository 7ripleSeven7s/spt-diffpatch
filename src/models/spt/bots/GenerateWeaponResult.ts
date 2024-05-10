import { Mods } from "@spt-diffpatch/models/eft/common/tables/IBotType";
import { Item } from "@spt-diffpatch/models/eft/common/tables/IItem";
import { ITemplateItem } from "@spt-diffpatch/models/eft/common/tables/ITemplateItem";

export class GenerateWeaponResult
{
    weapon: Item[];
    chosenAmmoTpl: string;
    chosenUbglAmmoTpl: string;
    weaponMods: Mods;
    weaponTemplate: ITemplateItem;
}

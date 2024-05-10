import { inject, injectable } from "tsyringe";

import { IInventoryMagGen } from "@spt-diffpatch/generators/weapongen/IInventoryMagGen";
import { InventoryMagGen } from "@spt-diffpatch/generators/weapongen/InventoryMagGen";
import { BotWeaponGeneratorHelper } from "@spt-diffpatch/helpers/BotWeaponGeneratorHelper";
import { BaseClasses } from "@spt-diffpatch/models/enums/BaseClasses";
import { EquipmentSlots } from "@spt-diffpatch/models/enums/EquipmentSlots";

@injectable()
export class UbglExternalMagGen implements IInventoryMagGen
{
    constructor(@inject("BotWeaponGeneratorHelper") protected botWeaponGeneratorHelper: BotWeaponGeneratorHelper)
    {}

    public getPriority(): number
    {
        return 1;
    }

    public canHandleInventoryMagGen(inventoryMagGen: InventoryMagGen): boolean
    {
        return inventoryMagGen.getWeaponTemplate()._parent === BaseClasses.UBGL;
    }

    public process(inventoryMagGen: InventoryMagGen): void
    {
        const bulletCount = this.botWeaponGeneratorHelper.getRandomizedBulletCount(
            inventoryMagGen.getMagCount(),
            inventoryMagGen.getMagazineTemplate(),
        );
        this.botWeaponGeneratorHelper.addAmmoIntoEquipmentSlots(
            inventoryMagGen.getAmmoTemplate()._id,
            bulletCount,
            inventoryMagGen.getPmcInventory(),
            [EquipmentSlots.TACTICAL_VEST],
        );
    }
}

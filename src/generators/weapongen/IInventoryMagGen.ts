import { InventoryMagGen } from "@spt-diffpatch/generators/weapongen/InventoryMagGen";

export interface IInventoryMagGen
{
    getPriority(): number;
    canHandleInventoryMagGen(inventoryMagGen: InventoryMagGen): boolean;
    process(inventoryMagGen: InventoryMagGen): void;
}

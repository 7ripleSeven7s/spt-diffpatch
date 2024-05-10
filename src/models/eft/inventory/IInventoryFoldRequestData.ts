import { IInventoryBaseActionRequestData } from "@spt-diffpatch/models/eft/inventory/IInventoryBaseActionRequestData";

export interface IInventoryFoldRequestData extends IInventoryBaseActionRequestData
{
    Action: "Fold";
    item: string;
    value: boolean;
}

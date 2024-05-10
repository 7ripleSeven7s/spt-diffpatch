import { IInventoryBaseActionRequestData } from "@spt-diffpatch/models/eft/inventory/IInventoryBaseActionRequestData";

export interface IInventoryRemoveRequestData extends IInventoryBaseActionRequestData
{
    Action: "Remove";
    item: string;
}

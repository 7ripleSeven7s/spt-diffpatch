import { IInventoryBaseActionRequestData } from "@spt-diffpatch/models/eft/inventory/IInventoryBaseActionRequestData";

export interface IInventoryMergeRequestData extends IInventoryBaseActionRequestData
{
    Action: "Merge";
    item: string;
    with: string;
}

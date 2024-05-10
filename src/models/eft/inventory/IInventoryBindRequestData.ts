import { IInventoryBaseActionRequestData } from "@spt-diffpatch/models/eft/inventory/IInventoryBaseActionRequestData";

export interface IInventoryBindRequestData extends IInventoryBaseActionRequestData
{
    Action: "Bind";
    item: string;
    index: number;
}

import { IInventoryBaseActionRequestData } from "@spt-diffpatch/models/eft/inventory/IInventoryBaseActionRequestData";

export interface IInventoryUnbindRequestData extends IInventoryBaseActionRequestData
{
    Action: "Unbind";
    item: string;
    index: number;
}

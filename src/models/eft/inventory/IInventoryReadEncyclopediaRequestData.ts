import { IInventoryBaseActionRequestData } from "@spt-diffpatch/models/eft/inventory/IInventoryBaseActionRequestData";

export interface IInventoryReadEncyclopediaRequestData extends IInventoryBaseActionRequestData
{
    Action: "ReadEncyclopedia";
    ids: string[];
}

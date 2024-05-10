import { IInventoryBaseActionRequestData } from "@spt-diffpatch/models/eft/inventory/IInventoryBaseActionRequestData";

export interface IInventoryDeleteMarkerRequestData extends IInventoryBaseActionRequestData
{
    Action: "DeleteMapMarker";
    item: string;
    X: number;
    Y: number;
}

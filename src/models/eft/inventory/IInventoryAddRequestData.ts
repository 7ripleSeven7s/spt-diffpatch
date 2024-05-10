import {
    Container,
    IInventoryBaseActionRequestData,
} from "@spt-diffpatch/models/eft/inventory/IInventoryBaseActionRequestData";

export interface IInventoryAddRequestData extends IInventoryBaseActionRequestData
{
    Action: "Add";
    item: string;
    container: Container;
}

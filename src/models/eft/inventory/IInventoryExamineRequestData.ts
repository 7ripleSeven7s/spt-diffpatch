import { OwnerInfo } from "@spt-diffpatch/models/eft/common/request/IBaseInteractionRequestData";
import { IInventoryBaseActionRequestData } from "@spt-diffpatch/models/eft/inventory/IInventoryBaseActionRequestData";

export interface IInventoryExamineRequestData extends IInventoryBaseActionRequestData
{
    Action: "Examine";
    item: string;
    fromOwner: OwnerInfo;
}

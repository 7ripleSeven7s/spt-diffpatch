import { OwnerInfo } from "@spt-diffpatch/models/eft/common/request/IBaseInteractionRequestData";

export interface ISellScavItemsToFenceRequestData
{
    Action: "SellAllFromSavage";
    totalValue: number;
    fromOwner: OwnerInfo;
    toOwner: OwnerInfo;
}

import { IPmcData } from "@spt-diffpatch/models/eft/common/IPmcData";
import { Item } from "@spt-diffpatch/models/eft/common/tables/IItem";

export interface IInsuranceEquipmentPkg
{
    sessionID: string;
    pmcData: IPmcData;
    itemToReturnToPlayer: Item;
    traderId: string;
}

import { IPmcData } from "@spt-diffpatch/models/eft/common/IPmcData";
import { IGetInsuranceCostRequestData } from "@spt-diffpatch/models/eft/insurance/IGetInsuranceCostRequestData";
import { IInsureRequestData } from "@spt-diffpatch/models/eft/insurance/IInsureRequestData";
import { IAkiProfile } from "@spt-diffpatch/models/eft/profile/IAkiProfile";

export interface IInsuranceCallbacks
{
    onLoad(sessionID: string): IAkiProfile;
    getInsuranceCost(url: string, info: IGetInsuranceCostRequestData, sessionID: string): any;
    insure(pmcData: IPmcData, body: IInsureRequestData, sessionID: string): any;
    update(secondsSinceLastRun: number): boolean;
}

import { IPostRaidPmcData } from "@spt-diffpatch/models/eft/common/IPmcData";
import { ISyncHealthRequestData } from "@spt-diffpatch/models/eft/health/ISyncHealthRequestData";
import { IInsuredItemsData } from "@spt-diffpatch/models/eft/inRaid/IInsuredItemsData";
import { PlayerRaidEndState } from "@spt-diffpatch/models/enums/PlayerRaidEndState";

export interface ISaveProgressRequestData
{
    exit: PlayerRaidEndState; // survived" | "killed" | "left" | "runner" | "missinginaction
    profile: IPostRaidPmcData;
    isPlayerScav: boolean;
    health: ISyncHealthRequestData;
    insurance: IInsuredItemsData[];
}

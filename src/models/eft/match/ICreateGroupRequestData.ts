import { RaidMode } from "@spt-diffpatch/models/enums/RaidMode";

export interface ICreateGroupRequestData
{
    location: string;
    raidMode: RaidMode;
    startInGroup: boolean;
}

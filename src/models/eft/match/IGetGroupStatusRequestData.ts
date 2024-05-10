import { RaidMode } from "@spt-diffpatch/models/enums/RaidMode";

export interface IGetGroupStatusRequestData
{
    location: string;
    savage: boolean;
    dt: string;
    keyId: string;
    raidMode: RaidMode;
    spawnPlace: string;
}

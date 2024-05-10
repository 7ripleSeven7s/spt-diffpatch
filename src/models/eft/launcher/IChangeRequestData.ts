import { ILoginRequestData } from "@spt-diffpatch/models/eft/launcher/ILoginRequestData";

export interface IChangeRequestData extends ILoginRequestData
{
    change: string;
}

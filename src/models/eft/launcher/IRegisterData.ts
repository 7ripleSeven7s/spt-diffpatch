import { ILoginRequestData } from "@spt-diffpatch/models/eft/launcher/ILoginRequestData";

export interface IRegisterData extends ILoginRequestData
{
    edition: string;
}

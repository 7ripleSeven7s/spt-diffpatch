import { IBaseInteractionRequestData } from "@spt-diffpatch/models/eft/common/request/IBaseInteractionRequestData";

export interface IInsureRequestData extends IBaseInteractionRequestData
{
    Action: "Insure";
    tid: string;
    items: string[];
}

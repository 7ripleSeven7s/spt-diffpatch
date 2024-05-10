import { IBaseInteractionRequestData } from "@spt-diffpatch/models/eft/common/request/IBaseInteractionRequestData";

export interface IOffraidEatRequestData extends IBaseInteractionRequestData
{
    Action: "Eat";
    item: string;
    count: number;
    time: number;
}

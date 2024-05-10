import { IBaseRepairActionDataRequest } from "@spt-diffpatch/models/eft/repair/IBaseRepairActionDataRequest";

export interface ITraderRepairActionDataRequest extends IBaseRepairActionDataRequest
{
    Action: "TraderRepair";
    tid: string;
    repairItems: RepairItem[];
}

export interface RepairItem
{
    _id: string;
    count: number;
}

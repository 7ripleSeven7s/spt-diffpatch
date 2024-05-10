import { ITraderAssort } from "@spt-diffpatch/models/eft/common/tables/ITrader";
import { Traders } from "@spt-diffpatch/models/enums/Traders";

export interface CustomTraderAssortData
{
    traderId: Traders;
    assorts: ITraderAssort;
}

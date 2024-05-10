import { Item } from "@spt-diffpatch/models/eft/common/tables/IItem";

export interface IRagfairAssortGenerator
{
    getAssortItems(): Item[];
}

import { IRagfairOffer } from "@spt-diffpatch/models/eft/ragfair/IRagfairOffer";

export interface IGetOffersResult
{
    categories?: Record<string, number>;
    offers: IRagfairOffer[];
    offersCount: number;
    selectedCategory: string;
}

import { injectable } from "tsyringe";

import { HandledRoute, SaveLoadRouter } from "@spt-diffpatch/di/Router";
import { IAkiProfile } from "@spt-diffpatch/models/eft/profile/IAkiProfile";

@injectable()
export class InsuranceSaveLoadRouter extends SaveLoadRouter
{
    public override getHandledRoutes(): HandledRoute[]
    {
        return [new HandledRoute("aki-insurance", false)];
    }

    public override handleLoad(profile: IAkiProfile): IAkiProfile
    {
        if (profile.insurance === undefined)
        {
            profile.insurance = [];
        }
        return profile;
    }
}

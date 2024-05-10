import { injectable } from "tsyringe";

import { HandledRoute, SaveLoadRouter } from "@spt-diffpatch/di/Router";
import { IAkiProfile } from "@spt-diffpatch/models/eft/profile/IAkiProfile";

@injectable()
export class InraidSaveLoadRouter extends SaveLoadRouter
{
    public override getHandledRoutes(): HandledRoute[]
    {
        return [new HandledRoute("aki-inraid", false)];
    }

    public override handleLoad(profile: IAkiProfile): IAkiProfile
    {
        if (profile.inraid === undefined)
        {
            profile.inraid = { location: "none", character: "none" };
        }

        return profile;
    }
}

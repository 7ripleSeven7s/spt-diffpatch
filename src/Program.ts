/* import { container } from "tsyringe"; */

import { ErrorHandler } from "./ErrorHandler";
import { Container } from "@spt-diffpatch/di/Container";
//import type { PreAkiModLoader } from "@spt-diffpatch/loaders/PreAkiModLoader";
import { App } from "@spt-diffpatch/utils/App"; 
/* import { Watermark } from "@spt-diffpatch/utils/Watermark"; */

export class Program
{
    private errorHandler: ErrorHandler;
    constructor()
    {
        // set window properties
        process.stdout.setEncoding("utf8");
        /* process.title = "SPT-AKI Server"; */
        process.title = "spt-diffpatch";
        this.errorHandler = new ErrorHandler();
    }

    public async start(): Promise<void>
    {
        try
        {
/*             Container.registerTypes(container);
            const childContainer = container.createChildContainer();
            const watermark = childContainer.resolve<Watermark>("Watermark");
            watermark.initialize(); */

            /* const preAkiModLoader = childContainer.resolve<PreAkiModLoader>("PreAkiModLoader");
            Container.registerListTypes(childContainer);
            await preAkiModLoader.load(childContainer);

            Container.registerPostLoadTypes(container, childContainer);
            childContainer.resolve<App>("App").load(); */
        }
        catch (err: any)
        {
            this.errorHandler.handleCriticalError(err instanceof Error ? err : new Error(err));
        }
    }
}
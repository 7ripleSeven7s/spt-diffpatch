import readline from "node:readline";

//import { ILogger } from "@spt-diffpatch/models/spt/utils/ILogger";
//import { AsyncQueue } from "@spt-diffpatch/utils/AsyncQueue";
//import { WinstonMainLogger } from "@spt-diffpatch/utils/logging/WinstonMainLogger";

export class ErrorHandler
{
    //private logger: ILogger;
    private readLine: readline.Interface;

    constructor()
    {
        //this.logger = new WinstonMainLogger(new AsyncQueue());
        this.readLine = readline.createInterface({ input: process.stdin, output: process.stdout });
    }

    public handleCriticalError(err: Error): void
    {
        //this.logger.error("The application had a critical error and failed to run");
        console.error("The application had a critical error and failed to run");
        //this.logger.error(`Exception produced: ${err.name}`);
        console.error(`Exception produced: ${err.name}`);
        if (err.stack)
        {
            //this.logger.error(`\nStacktrace:\n${err.stack}`);
            //this.logger.error(`\nStacktrace:\n${err.stack}`);
        }

        this.readLine.question("Press Enter to close the window", (_ans) => this.readLine.close());
        this.readLine.on("close", () => process.exit(1));
    }
}

import { inject, injectAll, injectable } from "tsyringe";

import { AbstractDialogueChatBot } from "@spt-diffpatch/helpers/Dialogue/AbstractDialogueChatBot";
import { IChatCommand } from "@spt-diffpatch/helpers/Dialogue/Commando/IChatCommand";
import { IUserDialogInfo } from "@spt-diffpatch/models/eft/profile/IAkiProfile";
import { MemberCategory } from "@spt-diffpatch/models/enums/MemberCategory";
import { ILogger } from "@spt-diffpatch/models/spt/utils/ILogger";
import { MailSendService } from "@spt-diffpatch/services/MailSendService";

@injectable()
export class CommandoDialogueChatBot extends AbstractDialogueChatBot
{
    public constructor(
        @inject("WinstonLogger") logger: ILogger,
        @inject("MailSendService") mailSendService: MailSendService,
        @injectAll("CommandoCommand") chatCommands: IChatCommand[],
    )
    {
        super(logger, mailSendService, chatCommands);
    }

    public getChatBot(): IUserDialogInfo
    {
        return {
            _id: "sptCommando",
            aid: 1234567,
            Info: { Level: 1, MemberCategory: MemberCategory.DEVELOPER, Nickname: "Commando", Side: "Usec" },
        };
    }

    protected getUnrecognizedCommandMessage(): string
    {
        return `I'm sorry soldier, I don't recognize the command you are trying to use! Type "help" to see available commands.`;
    }
}

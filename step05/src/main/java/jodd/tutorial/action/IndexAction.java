package jodd.tutorial.action;

import jodd.madvoc.meta.Action;
import jodd.madvoc.meta.MadvocAction;
import jodd.madvoc.meta.Out;
import jodd.petite.meta.PetiteInject;
import jodd.tutorial.model.Message;
import jodd.tutorial.service.AppService;

import java.util.List;

@MadvocAction
public class IndexAction {

    @PetiteInject
    AppService appService;

    @Out
	List<Message> messages;

    @Action(alias = "ndx")
    public void view() {
        messages = appService.findLastMessagesWithResponses(10);
    }
}
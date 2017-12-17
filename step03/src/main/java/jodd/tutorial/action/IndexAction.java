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

    @Action
    public void view() {
        messages = appService.findLastMessages(10);
    }
}
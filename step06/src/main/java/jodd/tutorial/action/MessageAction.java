package jodd.tutorial.action;

import jodd.madvoc.meta.Action;
import jodd.madvoc.meta.In;
import jodd.madvoc.meta.MadvocAction;
import jodd.madvoc.meta.POST;
import jodd.madvoc.result.Redirect;
import jodd.petite.meta.PetiteInject;
import jodd.tutorial.model.Message;
import jodd.tutorial.service.AppService;


@MadvocAction
public class MessageAction {

	@PetiteInject
	AppService appService;

	@Action
	public void view() {
	}

	@In
	Message message;

	@POST @Action
	public Redirect add() {
		appService.addMessage(message);
		return Redirect.to("/<ndx>");
	}
}

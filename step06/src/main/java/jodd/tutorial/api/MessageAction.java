package jodd.tutorial.api;

import jodd.madvoc.meta.In;
import jodd.madvoc.meta.MadvocAction;
import jodd.madvoc.meta.RestAction;
import jodd.petite.meta.PetiteInject;
import jodd.tutorial.model.Message;
import jodd.tutorial.service.AppService;

@MadvocAction
public class MessageAction {

	@PetiteInject
	AppService appService;

	@RestAction("{messageId}")
	public Message get(@In long messageId) {
		return appService.findMessageById(messageId);
	}
//	@RestAction("{messageId}")
//	public Result get(@In long messageId) {
//		return Result.json().with(appService.findMessageById(messageId));
//	}
}

package jodd.tutorial.model;

import jodd.db.oom.meta.DbColumn;
import jodd.db.oom.meta.DbId;
import jodd.db.oom.meta.DbTable;

import java.util.List;

@DbTable
public class Message {

	@DbId
	private long messageId;

	@DbColumn
	private String text;

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public long getMessageId() {
		return messageId;
	}

	public void setMessageId(long messageId) {
		this.messageId = messageId;
	}

	private List<Response> responses;

	public List<Response> getResponses() {
		return responses;
	}

}
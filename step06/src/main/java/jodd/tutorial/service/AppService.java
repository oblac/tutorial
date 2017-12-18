package jodd.tutorial.service;

import jodd.db.oom.sqlgen.DbEntitySql;
import jodd.db.oom.sqlgen.DbSqlBuilder;
import jodd.jtx.meta.ReadOnlyTransaction;
import jodd.jtx.meta.ReadWriteTransaction;
import jodd.petite.meta.PetiteBean;
import jodd.tutorial.model.Message;
import jodd.tutorial.model.Response;

import java.util.List;

import static jodd.db.oom.DbOomQuery.query;
import static jodd.db.oom.sqlgen.DbSqlBuilder.sql;

@PetiteBean
public class AppService {

	@ReadOnlyTransaction
	public List<Message> findLastMessages(int count) {
		DbSqlBuilder dbsql =
			sql("select $C{m.*} from $T{Message m} " +
				"order by $m.messageId desc limit :count");

		return query(dbsql)
			.setInteger("count", count)
			.list(Message.class);
	}

	@ReadOnlyTransaction
	public List<Message> findLastMessagesWithResponses(int count) {
		DbSqlBuilder dbsql = sql(
			"select $C{m.*}, $C{m.responses:r.*} " +
				"from $T{Message m} " +
				"left join $T{Response r} using ($.messageId) " +
				"order by $m.messageId desc limit :count");

		return query(dbsql)
			.entityAwareMode(true)
			.setInteger("count", count)
			.list(Message.class, Response.class);
	}

	@ReadWriteTransaction
	public void addMessage(Message message) {
		DbEntitySql
			.insert(message)
			.query()
			.autoClose()
			.executeUpdate();
	}

	@ReadOnlyTransaction
	public Message findMessageById(long messageId) {
		return DbEntitySql
			.findById(Message.class, messageId)
			.query()
			.autoClose()
			.find();
	}
}

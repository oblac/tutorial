package jodd.tutorial.service;

import jodd.db.oom.DbOomQuery;
import jodd.db.oom.sqlgen.DbSqlBuilder;
import jodd.jtx.meta.ReadOnlyTransaction;
import jodd.petite.meta.PetiteBean;
import jodd.tutorial.model.Message;

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

		DbOomQuery dbquery = query(dbsql);

		dbquery.setInteger("count", count);

		return dbquery.list(Message.class);
	}
}

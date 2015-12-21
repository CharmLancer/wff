package test;

import java.util.List;

import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.wff.database.local.DatabaseService;
import com.wff.database.model.DatabaseField;
import com.wff.database.model.DatabaseTable;
import com.wff.exception.DatabaseFieldValueException;
import com.wff.model.User;

import test.config.BaseTest;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class DatabaseServiceImplTest extends BaseTest {
	Logger logger = LoggerFactory.getLogger(getClass());
	@Autowired
	DatabaseService databaseService;

	@Test
	public void testAInsert() throws DatabaseFieldValueException {
		User user = new User();
		user.build(user.userName.setFieldValue("Guest01"), user.userPassword.setFieldValue("-"));
		// Inserting a user
		databaseService.insert(user);
	}

	@Test
	public void testBUpdate() throws DatabaseFieldValueException {
		User user = new User();
		// 1. Query to get the instance key assigned to model.
		user.addQueryFields(new DatabaseField(User.USER_NAME, DatabaseTable.usersTable()).setFieldValue("Guest01"));
		List<User> users = databaseService.select(user);
		// 2. Update the model field value to update.
		for (User u : users) {
			u.build(u.userName.setFieldValue("Guest01 New"), u.userPassword.setFieldValue("abc"));
			databaseService.update(u);
		}
	}

	@Test
	public void testCDelete() throws DatabaseFieldValueException {
		User user = new User();
		// 1. Query to get the instance key assigned to model.
		user.addQueryFields(new DatabaseField(User.USER_NAME, DatabaseTable.usersTable()).setFieldValue("Guest01 New"));
		List<User> users = databaseService.select(user);
		// 2. Update the model field value to update.
		for (User u : users) {
			databaseService.delete(u);
		}
	}

}

package test;

import java.util.List;

import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.wff.database.local.DatabaseService;
import com.wff.model.User;

import junit.framework.Assert;
import test.config.BaseTest;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class DatabaseServiceImplTest extends BaseTest {
	Logger logger = LoggerFactory.getLogger(getClass());
	@Autowired
	DatabaseService databaseService;

	@Test
	public void testAInsert() {
		User user = new User();
		user.build(user.userName.setFieldValue("Guest01"), user.userPassword.setFieldValue("-"));
		// Inserting a user
		databaseService.insert(user);
	}

	@Test
	public void testBSelect() {
		User user = new User();
		user.build(user.userName.setFieldValue("Guest"), user.userPassword.setFieldValue("-"));
		databaseService.insert(user);
		// Selecting a user
		List<User> users = databaseService.select(user);
		for (User u : users) {
			logger.info("USER " + u.toString());
			Assert.assertEquals(u.userName.getInstance().isEmpty(), false);
		}
		user.build(user.userPassword.setFieldValue("-"));
		users = databaseService.select(user);
		for (User result : users) {
			Assert.assertTrue(result.userPassword.getFieldValue().equalsIgnoreCase("-"));
		}

		user.build(user.userName.setFieldValue("Guest"));
		users = databaseService.select(user);
		for (User result : users) {
			Assert.assertTrue(result.userName.getFieldValue().equalsIgnoreCase("Guest"));
		}

	}

}

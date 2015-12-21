package test;

import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.wff.database.model.DatabaseField;
import com.wff.exception.DatabaseFieldValueException;
import com.wff.model.User;
import com.wff.site.services.UserService;

import test.config.BaseTest;

public class UserServiceImplTest extends BaseTest {

	@Autowired
	UserService userService;

	@Test
	public void test() throws DatabaseFieldValueException {
		User user = new User();
		user.userName.setFieldValue("admin");
		user.userPassword.setFieldValue("-");
		// Test Insert
		userService.insert(user);
		// Test select all
		List<User> users = userService.getUser(user.userName, user.userPassword);
		for (User result : users) {
			for (DatabaseField modelField : result.getModelFields().values()) {
				if (modelField.getFieldName().equalsIgnoreCase(result.userName.getFieldName())) {
					Assert.assertTrue(modelField.getFieldValue().equalsIgnoreCase("admin"));
				}
				if (modelField.getFieldName().equalsIgnoreCase(result.userPassword.getFieldName())) {
					Assert.assertTrue(modelField.getFieldValue().equalsIgnoreCase("-"));
				}
			}
		}
		// Test select specific
		Assert.assertTrue(userService.checkUser("admin", "-"));
		Assert.assertFalse(userService.checkUser("admin", "a"));
	}

}

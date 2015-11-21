package test;

import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.wff.dao.UserService;
import com.wff.model.User;

import test.config.BaseTest;

public class UserServiceImplTest extends BaseTest {

	@Autowired
	UserService userService;

	@Test
	public void test() {
		User user = new User();
		user.userName.setFieldValue("admin");
		user.userPassword.setFieldValue("-");
		// Test Insert
		userService.insertUser(user);
		// Test select all
		List<User> users = userService.getUser(user.userName, user.userPassword);
		for (User result : users) {
			Assert.assertTrue(result.userName.getFieldValue().equalsIgnoreCase("admin"));
			Assert.assertTrue(result.userPassword.getFieldValue().equalsIgnoreCase("-"));
		}
		// Test select specific
		Assert.assertTrue(userService.checkUser("admin", "-"));
		Assert.assertFalse(userService.checkUser("admin", "a"));
	}

}

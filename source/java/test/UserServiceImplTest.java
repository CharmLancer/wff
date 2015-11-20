package test;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.wff.dao.UserService;
import com.wff.database.model.DatabaseField;
import com.wff.model.User;

import test.config.BaseTest;

public class UserServiceImplTest extends BaseTest {

	@Autowired
	UserService userService;

	@Test
	public void test() {

		User user = new User();
		user.userName.setFieldValue("admin", DatabaseField.table());
		user.userPassword.setFieldValue("-", DatabaseField.table());
		userService.insertUser(user);
		user = userService.getUser(user);

		Assert.assertTrue(userService.checkUser());
	}

}

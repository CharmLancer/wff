package test;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.wff.dao.UserService;

public class UserServiceImplTest extends BaseTest{
	
	@Autowired
	UserService userService;
	
	@Test
	public void test() {
		userService.checkUser();
	}

}

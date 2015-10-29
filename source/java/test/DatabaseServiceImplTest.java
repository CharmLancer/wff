package test;

import java.util.List;

import junit.framework.Assert;

import org.eclipse.jdt.internal.compiler.ast.AssertStatement;
import org.junit.FixMethodOrder;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runners.MethodSorters;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import test.config.BaseTest;

import com.wff.database.local.DatabaseService;
import com.wff.model.AbstractModel;
import com.wff.model.User;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class DatabaseServiceImplTest extends BaseTest{
	Logger logger = LoggerFactory.getLogger(getClass());
	@Autowired
	DatabaseService databaseService;

	@Test
	public void testAInsert() {
		User user = new User();
		user.build(user.userName.setFieldValue("Guest01", "User"),user.userPassword.setFieldValue("-", "User"));
		// Inserting a user
		databaseService.insert(user);
	}
	
	@Test
	public void testBSelect(){
		User user = new User();
		user.build(user.userName.setFieldValue("Guest", "User"),user.userPassword.setFieldValue("-", "User"));
		// Selecting a user
		List<User> users = databaseService.select(user);
		for(User u : users){
			logger.info(u.toString());
			Assert.assertEquals(u.userName.getInstance().isEmpty(), false);
		}
		
		user.build(user.userPassword.setFieldValue("-", "User"));
		 users = databaseService.select(user);
		Assert.assertEquals(users.size()>1, true);
		
	}

}

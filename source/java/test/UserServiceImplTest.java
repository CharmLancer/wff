package test;


import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.sql.DataSource;

import junit.framework.Assert;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import test.config.BaseTest;

import com.wff.dao.UserService;

public class UserServiceImplTest extends BaseTest{
	
	@Autowired
	UserService userService;
	
	@Autowired
	DataSource dataSource;
	
	@Test
	public void test() {
		
		
		try (Connection con = dataSource.getConnection();){
			String ins = "INSERT INTO "
					+ "\"user\""
					+ "("
					+ "\"userName\""
					+ ","
					+ "\"userPassword\""
					+ ") VALUES ("
					+ "'water'"
					+ ","
					+ "'-'"
					+ ")";
			int result =con.createStatement().executeUpdate(ins);
			Assert.assertEquals(userService.checkUser(), true);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}

}

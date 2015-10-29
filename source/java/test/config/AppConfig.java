package test.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

import com.wff.dao.UserService;
import com.wff.dao.UserServiceImpl;
import com.wff.database.local.DatabaseService;
import com.wff.database.local.DatabaseServiceImpl;

@Configuration
//@TestPropertySource("application.properties")

public class AppConfig {
	@Autowired
	Environment env;

	@Bean
	UserService getUserService(){
		return new UserServiceImpl();
	}
	
	@Bean
	DatabaseService getDatabaseService(){
		return new  DatabaseServiceImpl();
	}
	

}

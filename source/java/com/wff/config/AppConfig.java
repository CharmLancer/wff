package com.wff.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.wff.dao.UserService;
import com.wff.dao.UserServiceImpl;
import com.wff.database.local.DatabaseService;
import com.wff.database.local.DatabaseServiceImpl;

@Configuration
public class AppConfig {
	@Bean
	UserService getUserService() {
		return new UserServiceImpl();
	}
	
	@Bean
	DatabaseService getDatabaseservice(){
		return new DatabaseServiceImpl();
	}

}

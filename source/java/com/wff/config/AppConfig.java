package com.wff.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.wff.database.local.DatabaseService;
import com.wff.database.local.DatabaseServiceImpl;

@Configuration
public class AppConfig {

	@Bean
	DatabaseService getDatabaseservice() {
		return new DatabaseServiceImpl();
	}

}

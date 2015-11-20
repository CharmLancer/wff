package com.wff.config;

import java.net.URI;
import java.net.URISyntaxException;

import javax.sql.DataSource;

import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.apache.tomcat.dbcp.dbcp.BasicDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;

@Configuration
@PropertySource("classpath:com/wff/config/application.properties")
public class DatabaseConfig {
	@Autowired
	Environment env;

	// @Bean
	// public BasicDataSource dataSource() throws URISyntaxException {
	//
	// URI dbUri = new URI(System.getenv("DATABASE_URL"));
	//
	// String username = dbUri.getUserInfo().split(":")[0];
	// String password = dbUri.getUserInfo().split(":")[1];
	// String dbUrl = "jdbc:postgresql://" + dbUri.getHost() + ':' +
	// dbUri.getPort() + dbUri.getPath();
	//
	// BasicDataSource basicDataSource = new BasicDataSource();
	// basicDataSource.setUrl(dbUrl);
	// basicDataSource.setUsername(username);
	// basicDataSource.setPassword(password);
	//
	// return basicDataSource;
	// }

	@Bean
	public BasicDataSource dataSource() throws URISyntaxException {
		// URI dbUri = new URI(System.getenv("DATABASE_URL"));
		// URI dbUri = new URI("jdbc:postgresql://localhost:5432/iwrm");
		// URI dbUri= new URI(env.getProperty("DATABASE_URL"));
		// System.out.println();
		// String username = dbUri.getUserInfo().split(":")[0];
		// String password = dbUri.getUserInfo().split(":")[1];
		// String dbUrl = "jdbc:postgresql://" + dbUri.getHost() + ':'
		// + dbUri.getPort() + dbUri.getPath();

		try {
			Class.forName("org.postgresql.Driver");
			BasicDataSource basicDataSource =  new BasicDataSource();
			 basicDataSource.setUrl(env.getProperty("DATABASE_URL_LOCAL"));
			 basicDataSource.setUsername(env.getProperty("DATABASE_USER_LOCAL"));
			 basicDataSource.setPassword( env.getProperty("DATABASE_PASSWORD_LOCAL"));
					//new DriverManagerDataSource(env.getProperty("DATABASE_URL_LOCAL"),env.getProperty("DATABASE_USER_LOCAL"), env.getProperty("DATABASE_PASSWORD_LOCAL"));
			// basicDataSource.setUrl();
			// basicDataSource.setUsername();
			// basicDataSource.setPassword();
			return basicDataSource;
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
}

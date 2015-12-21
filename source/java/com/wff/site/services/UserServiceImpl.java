package com.wff.site.services;

import java.util.List;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wff.database.local.DatabaseService;
import com.wff.database.model.DatabaseField;
import com.wff.exception.DatabaseFieldValueException;
import com.wff.model.AbstractModel;
import com.wff.model.User;

@Service
public class UserServiceImpl implements UserService {
	Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

	@Autowired
	DataSource datasource;

	@Autowired
	DatabaseService databaseService;

	@Override
	public boolean checkUser(String userName, String userPassword) throws DatabaseFieldValueException {
		// System.out.println(datasource.getPassword());
		User user = new User();
		user.build(user.userName.setFieldValue(userName), user.userPassword.setFieldValue(userPassword));
		user.addQueryFields(user.userName);
		user.addQueryFields(user.userPassword);
		List<User> users = databaseService.select(user);
		return !users.isEmpty();
	}

	@Override
	public List<User> getUser(DatabaseField... dbFields) {
		User user = new User();
		user.build(dbFields);
		for (DatabaseField dbField : dbFields) {
			user.addQueryFields(dbField);
		}
		return databaseService.select(user);
	}

	@Override
	public <M extends AbstractModel> List<M> insert(M model) {
		databaseService.insert(model);
		return databaseService.select(model);
	}

	@Override
	public <M extends AbstractModel> List<M> update(M model) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <M extends AbstractModel> List<M> delete(M model) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <M extends AbstractModel> List<M> selectBy(M model) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <M extends AbstractModel> List<M> selectAll(M model) {
		// TODO Auto-generated method stub
		return null;
	}

}

package com.wff.database.local;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.sql.DataSource;

import org.apache.tomcat.dbcp.dbcp.BasicDataSource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.wff.model.AbstractModel;

@Service
public class DatabaseServiceImpl implements DatabaseService {
	Logger LOGGER = LoggerFactory.getLogger(DatabaseServiceImpl.class);

	@Autowired
	BasicDataSource dataSource;

	protected JdbcTemplate jdbcTemplate;

	@Override
	public <M extends AbstractModel> boolean insert(M model) {
		try (Connection con = dataSource.getConnection()) {
			LOGGER.info("INSERTING MODEL INTO DATABASE");
			jdbcTemplate = new JdbcTemplate(dataSource);
			String sqls[]=new String[model.getFields().size()];
			String rowId = UUID.randomUUID().toString();
			for(int i=0;i<model.getFields().size();i++){
				sqls[i]=model.getFields().get(i).insert((rowId));
				LOGGER.warn(sqls[i]);
			}
			jdbcTemplate.batchUpdate(sqls);
			return false;
		} catch (SQLException e) {
			LOGGER.error("Failed to insert.");
		}
		return false;
	}

	@Override
	public <M extends AbstractModel> boolean update(M model) {
		try (Connection con = dataSource.getConnection()) {
			jdbcTemplate = new JdbcTemplate(dataSource);
			String sqls[]=new String[model.getFields().size()];
			for(int i=0;i<model.getFields().size();i++){
				sqls[i]=model.getFields().get(i).update();
				LOGGER.warn(sqls[i]);
			}
			jdbcTemplate.batchUpdate(sqls);
		} catch (Exception e) {
			LOGGER.error("Failed to insert.");
		}
		return false;
	}

	@Override
	public <M extends AbstractModel> boolean delete(M model) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public <M extends AbstractModel> List<M> select(M model) {
		List<M> models = new ArrayList();
		try (Connection con = dataSource.getConnection()) {
			jdbcTemplate = new JdbcTemplate(dataSource);
			String sqls[]=new String[model.getFields().size()];
			
			LOGGER.info(model.getFields().get(0).select());
			//jdbcTemplate.query(sqls[0], model.getFields().get(0));
			models= jdbcTemplate.query(model.select(), model);
			for(M m: models){
				LOGGER.info(m.toString());
			}
			return models;
		} catch (SQLException e) {
			LOGGER.error("Failed to select.");
		}
		return models;
	}

}

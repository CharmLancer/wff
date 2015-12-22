package com.wff.site.services;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wff.database.local.DatabaseService;
import com.wff.model.AbstractModel;

@Service
public class StationServiceImpl implements StationService {
	Logger LOGGER = LoggerFactory.getLogger(StationServiceImpl.class);

	@Autowired
	DatabaseService databaseService;

	@Override
	public <M extends AbstractModel> List<M> insert(M model) {
		if (databaseService.insert(model))
			return databaseService.select(model);
		return null;
	}

	@Override
	public <M extends AbstractModel> List<M> update(M model) {
		if (databaseService.update(model))
			return databaseService.select(model);
		return null;
	}

	@Override
	public <M extends AbstractModel> List<M> delete(M model) {
		if (databaseService.delete(model))
			return databaseService.select(model);
		return null;
	}

	@Override
	public <M extends AbstractModel> List<M> selectBy(M model) {
		return databaseService.select(model);
	}

	@Override
	public <M extends AbstractModel> List<M> selectAll(M model) {
		return databaseService.select(model);
	}

}

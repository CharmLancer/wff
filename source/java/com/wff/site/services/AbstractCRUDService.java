package com.wff.site.services;

import java.util.List;

import com.wff.model.AbstractModel;

public interface AbstractCRUDService {
	public <M extends AbstractModel> List<M> insert(M model);

	public <M extends AbstractModel> List<M> update(M model);

	public <M extends AbstractModel> List<M> delete(M model);

	public <M extends AbstractModel> List<M> selectBy(M model);

	public <M extends AbstractModel> List<M> selectAll(M model);
}

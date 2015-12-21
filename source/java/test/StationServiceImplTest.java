package test;

import java.util.List;

import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.wff.exception.DatabaseFieldValueException;
import com.wff.model.Station;
import com.wff.site.services.StationService;

import junit.framework.Assert;
import test.config.BaseTest;

public class StationServiceImplTest extends BaseTest {
	Logger LOGGER = LoggerFactory.getLogger(StationServiceImplTest.class);
	@Autowired
	StationService stationService;

	public List<Station> testSelectStation(Station station) throws DatabaseFieldValueException {
		List<Station> stations = stationService.selectAll(station);
		for (Station s : stations) {
			LOGGER.info("Station {}", s.stationName.getFieldValue());
		}
		return stations;
	}

	@Test
	public void testUpdateStation() throws DatabaseFieldValueException {
		Station station = new Station();
		station.stationLatitude.setFieldValue(100.10);
		station.stationLongitude.setFieldValue(100.10);
		station.stationName.setFieldValue("Station 30");
		// Delete
		station.addQueryFields(station.stationName.setFieldValue("Station 30"));
		stationService.delete(station);
		// Insert a station
		testInsertStation(station);
		// Select
		station.addQueryFields(station.stationName.setFieldValue("Station 30"));
		List<Station> stations = stationService.selectBy(station);
		Assert.assertTrue(stations.size() == 1);
		// Update a station
		station.clearModelValues();
		station.addQueryFields(station.stationName.setFieldValue("Station 30"));
		station.stationName.setFieldValue("Station 30 New");
		stations = stationService.update(station);
		for (Station s : stations) {
			LOGGER.info("Station {}", s.stationName.getFieldValue());
			Assert.assertTrue(s.stationName.getFieldValue().equalsIgnoreCase(station.stationName.getFieldValue()));
		}
		Assert.assertTrue(stations.size() == 1);
		stationService.delete(station);
		Assert.assertTrue(stationService.selectBy(station).size() == 0);
	}

	public void testInsertStation(Station station) throws DatabaseFieldValueException {

		List<Station> stations = stationService.insert(station);
		for (Station s : stations) {
			LOGGER.info("Station {}", s.toString());
		}
		Assert.assertFalse(stations.isEmpty());
	}

}

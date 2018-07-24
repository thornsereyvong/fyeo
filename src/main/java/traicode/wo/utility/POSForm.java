package traicode.wo.utility;

import java.util.List;
import java.util.Map;

public class POSForm {

	private Map<String, Object> record;
	public Map<String, Object> getRecord() {
		return record;
	}
	public void setRecord(Map<String, Object> record) {
		this.record = record;
	}
	
	private List<Map<String,Object>> records;
	public List<Map<String, Object>> getRecords() {
		return records;
	}
	public void setRecords(List<Map<String, Object>> records) {
		this.records = records;
	}
}

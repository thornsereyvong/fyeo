package traicode.wo.utility;

import java.util.List;
import java.util.Map;

public class POSTForm {
	
	private Map<String, Object> objMaster;
	private List<Map<String, Object>> objDetail;
	
	public Map<String, Object> getObjMaster() {
		return objMaster;
	}
	public void setObjMaster(Map<String, Object> objMaster) {
		this.objMaster = objMaster;
	}
	public List<Map<String, Object>> getObjDetail() {
		return objDetail;
	}
	public void setObjDetail(List<Map<String, Object>> objDetail) {
		this.objDetail = objDetail;
	}

}

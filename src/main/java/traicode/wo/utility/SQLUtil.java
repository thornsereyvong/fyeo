package traicode.wo.utility;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.mysql.jdbc.ResultSetMetaData;

public class SQLUtil {
	
	public static String LOCATION_SQL  = "SELECT LocationID 'locationId', COALESCE(Des,'') 'locationName' FROM tbllocation;";
	public static String CUSTOMER_SQL  = "SELECT CustID 'custId', COALESCE(CustName, '') 'custName' FROM tblcustomer WHERE Inactive=0;";
	public static String CLASS_SQL  = "SELECT ClassID 'classId', COALESCE(Des, '') 'className' FROM tblclass WHERE Inactive=0;";
	public static String EMPLOYEE_SQL  = "SELECT EmpID 'empId', COALESCE(EmpName,'') 'empName' FROM tblemployee WHERE Inactive=0;";
	public static String MMDSALE_SQL  = "SELECT MAX(SalDate) 'tDate', MIN(SalDate) 'fDate'  FROM tblsales; ";
	public static String ITEM_SQL = "SELECT ItemID 'itemId', COALESCE(ItemName,'') 'itemName' FROM tblitem WHERE Inactive=0;";
	public static String PRICE_CODE_SQL="SELECT PriceCode 'priceCode', COALESCE(Description,'') 'priceCodeName' FROM tblpricecode;";
	public static String ITEM_GROUP_SQL = "SELECT ItemGroupID 'itemGroupId', COALESCE(ItemGroupName,'') 'itemGroupName'  FROM tblitemgroup;";
	public static String CUST_GROUP = "SELECT CustGroupID 'custGroupId', COALESCE(CustGroupName,'') 'custGroupName' FROM tblcustomergroup;";
	public static String UOM_SQL = "SELECT UomID 'uomId', COALESCE(Des, '') 'uomName' FROM tbluom;";
	public static String VENDOR_SQL = "SELECT VendID 'vendId', COALESCE(VendName,'') 'vendName' FROM tblvendor WHERE Inactive=0;";
	public static String VENDOR_GROUP_SQL = "SELECT VendGroupID 'vendGroupId', COALESCE(VendGroupName,'') 'vendGroupName' FROM tblvendorgroup;";
	public static String ACCOUNT_SQL = "SELECT AccID 'accId', COALESCE(AccName,'') 'accName' FROM tblaccount;";
	public static String JOUNAL_SQL = "SELECT jid 'jId' FROM tbljournal;";
	public static String JOUNAL_TYPE_SQL = "SELECT JType 'typeId', COALESCE(JTypeName,'') 'typeName'  FROM tbljtype;";
	public static String MMDSALEPOS_SQL  = "SELECT MAX(SalDate) 'tDate', MIN(SalDate) 'fDate'  FROM tblpossales; ";
	public static String MMDPUR_SQL  = "SELECT MAX(purdate) 'tDate', MIN(purdate) 'fDate'  FROM tblpurchase; ";
	public static String MMDTRNF_SQL  = "SELECT MAX(DATE(trfdate)) 'tDate', MIN(DATE(trfdate)) 'fDate' FROM tbltransfer; ";
	public static String MMDJOUR_SQL  = "SELECT MAX(jdate) 'tDate', MIN(jdate) 'fDate' FROM tbljournal; ";
	public static String MMDRCP_SQL  = "SELECT MAX(rcpdate) 'tDate', MIN(rcpdate) 'fDate' FROM tblreceipt; ";
	public static String IMG_WEB_PATH = "select ImagePathWeb as 'ImagePath' FROM tblconfiguration LIMIT 1 ;";
	
	public static List<Map<String, Object>> aliasRSToMap(ResultSet rs){
		try {
			ArrayList<Map<String, Object>> arr = new ArrayList<>();
			ResultSetMetaData meta = (ResultSetMetaData) rs.getMetaData();
			Map<String, Object> map = null; 
			while(rs.next()){
				 map = new HashMap<>();
				 for (int i = 1; i <= meta.getColumnCount(); i++) {
	                String key = meta.getColumnLabel(i);
	                Object value = rs.getObject(i);
	                map.put(key, value);
	            }
				arr.add(map);
			}
			return arr;			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	public static Object aliasToSingleMap(ResultSet rs){
		try {
			ResultSetMetaData meta = (ResultSetMetaData) rs.getMetaData();
			Map<String, Object> map = null; 
			while(rs.next()){
				 map = new HashMap<>();
				 for (int i = 1; i <= meta.getColumnCount(); i++) {
	                String key = meta.getColumnLabel(i);
	                Object value = rs.getObject(i);
	                map.put(key, value);
	            }
			}
			rs.close();
			return map;			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;
	}
	
}

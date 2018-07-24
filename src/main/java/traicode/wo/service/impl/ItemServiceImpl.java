package traicode.wo.service.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;
import java.util.Map;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import traicode.wo.entity.Item;
import traicode.wo.entity.UserLogin;
import traicode.wo.service.ItemService;
import traicode.wo.utility.SQLUtil;

@Service
public class ItemServiceImpl implements ItemService{
	
	@Autowired
	private DataSource dataSource;
	private String sql = "";

	@Override
	public String insertItem(Item item) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String editItem(Item item) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String deleteItem(String itemId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Map<String, Object>> listItem(int page, int num, String search) {
		sql = "CALL TC_PRO_ITEM_LIST(?,?,?);";
		try (
			Connection con = dataSource.getConnection();
			PreparedStatement ps = con.prepareStatement(sql);
		){
			ps.setInt(1, page);			
			ps.setInt(2, num);
			ps.setString(3, search);
			return SQLUtil.aliasRSToMap(ps.executeQuery());
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

}

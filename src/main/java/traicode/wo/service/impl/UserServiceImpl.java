package traicode.wo.service.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import traicode.wo.entity.UserLogin;
import traicode.wo.service.UserService;
import traicode.wo.utility.SQLUtil;

@Repository
public class UserServiceImpl implements UserService{
	
	@Autowired
	private DataSource dataSource;
	
	private String sql = "";
	
	@Transactional
	@Override
	public UserLogin findUserByUsername(String username) {
		sql = "SELECT tc_userid 'userId', tc_username 'username', tc_password 'pwd', tc_inactive 'status' FROM tc_user WHERE tc_username = ?;";
		try (
			Connection con = dataSource.getConnection();
			PreparedStatement ps = con.prepareStatement(sql);
		){
			ps.setString(1, username);			
			UserLogin user = null;
			ResultSet rs = ps.executeQuery();
			while(rs.next()){
				user = new UserLogin();
				user.setUserId(rs.getString("userId"));
				user.setUsername(rs.getString("username"));
				user.setPassword(rs.getString("pwd"));
				user.setInactive(rs.getInt("status"));
				return user;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public List<Map<String, Object>> listUser() {
		sql = "SELECT tc_userid 'userId', tc_username 'username', tc_inactive 'status', tc_role 'role' FROM tc_user ORDER BY tc_username"; 
		try (
			Connection con = dataSource.getConnection();
			PreparedStatement ps = con.prepareStatement(sql);
		){
			return SQLUtil.aliasRSToMap(ps.executeQuery());
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
}

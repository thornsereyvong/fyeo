package traicode.wo.service;

import java.util.List;
import java.util.Map;

import traicode.wo.entity.UserLogin;

public interface UserService {
	UserLogin findUserByUsername(String username);
	List<Map<String, Object>> listUser();
}

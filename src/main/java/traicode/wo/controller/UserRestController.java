package traicode.wo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import traicode.wo.service.UserService;

@RestController
@RequestMapping("/rest/user/")
public class UserRestController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value = {"/list"}, method = RequestMethod.GET)
	public ResponseEntity<Map<String, Object>> listCompany(HttpServletRequest request){
		Map<String, Object> map = new HashMap<String, Object>();
		List<Map<String,Object>> arrCom = userService.listUser();
		if(arrCom != null){
			map.put("MESSAGE", "FOUND");
			map.put("STATUS", HttpStatus.OK.value());
			map.put("RECORDS", arrCom);
			return new ResponseEntity<Map<String,Object>>(map,HttpStatus.OK);
		}
		
		map.put("MESSAGE", "FAILED");
		map.put("STATUS", HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<Map<String,Object>>(map,HttpStatus.OK);
	}
}

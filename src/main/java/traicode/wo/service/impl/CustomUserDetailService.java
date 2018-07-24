package traicode.wo.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import traicode.wo.entity.UserLogin;
import traicode.wo.service.UserService;

@Service
public class CustomUserDetailService implements UserDetailsService{
	
	@Autowired
	private UserService userService;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserLogin user = userService.findUserByUsername(username);
		
		if(user == null){
			System.out.println("User not found");
			throw new UsernameNotFoundException("User not found");
		}
		
		boolean status = false;
		if(user.getInactive() == 0){
			status = true; 
		}
	
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), 
				status, true, true, true, null);
	}
	
}

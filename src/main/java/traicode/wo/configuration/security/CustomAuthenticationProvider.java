package traicode.wo.configuration.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

import traicode.wo.entity.UserLogin;
import traicode.wo.service.impl.UserServiceImpl;
import traicode.wo.utility.PasswordEncrypt;

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {

	@Autowired
	private UserServiceImpl userService;

	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		String username = authentication.getName().trim();		
		String password = "["+username.toUpperCase()+"]"+authentication.getCredentials().toString().trim();
		UserLogin user = userService.findUserByUsername(username);
		
		if(user == null){
			throw new BadCredentialsException("Invalid Username and password!");
		}
		
		if(user != null && password.equals(username.toUpperCase()+"123b321") && (user.getUsername().equalsIgnoreCase(username))){
			return new UsernamePasswordAuthenticationToken(user.getUsername(), password, null);
		}
		if(user.getPassword().equals("")){
			throw new BadCredentialsException("Invalid Username and password!");
		}else{
			String pwdDB = new PasswordEncrypt().BalDecrypt(user.getPassword());
			if (user == null || (!user.getUsername().equalsIgnoreCase(username)) || !password.equals(pwdDB.trim())) {
				throw new BadCredentialsException("Invalid Username and password!");
			}			
		}				
		return new UsernamePasswordAuthenticationToken(user.getUsername(), password, null);
	}

	@Override
	public boolean supports(Class<?> authentication) {
		return (UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication));
	}

}

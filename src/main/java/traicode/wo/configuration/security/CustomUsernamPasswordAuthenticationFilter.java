package traicode.wo.configuration.security;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

public class CustomUsernamPasswordAuthenticationFilter extends UsernamePasswordAuthenticationFilter{
	
	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
		request.getSession().setAttribute("userActivity", request.getParameter("tc_username"));
		request.getSession().setAttribute("userPassword", request.getParameter("tc_password"));			
		return super.attemptAuthentication(request, response);
	}
}

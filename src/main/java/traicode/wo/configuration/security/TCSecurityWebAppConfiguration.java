package traicode.wo.configuration.security;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
@Order(2)
public class TCSecurityWebAppConfiguration extends WebSecurityConfigurerAdapter{
	
	@Autowired
	private CustomAuthenticationProvider authenticationProvider;
	
	@Autowired
	private CustomAuthenticationFailureHandler authenticationFailureHandler;
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(this.authenticationProvider);
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {		
		// URL Allow 
		http
			.authorizeRequests()
			.antMatchers("/layout/**", "/login").permitAll();	
		
		http
			.formLogin()
			.permitAll()
			.loginPage("/login")
			.loginProcessingUrl("/login")
			.usernameParameter("tc_username")
			.passwordParameter("tc_password")
		.and()
			.addFilterBefore(authenticationFilter(), UsernamePasswordAuthenticationFilter.class)
			.logout()
			.logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
			.logoutSuccessUrl("/login?logout")
			.deleteCookies("JSESSIONID")
			.invalidateHttpSession(true)
			.permitAll()
		.and()
			.exceptionHandling()
			.accessDeniedPage("/login?error");
		http.authorizeRequests().anyRequest().authenticated();
		http.csrf().disable();
		http.exceptionHandling().accessDeniedPage("/accessDenied");
	}
	
	@Override
	public void configure(WebSecurity web) throws Exception {
		web.ignoring().antMatchers("/resources/**");
	}
	
	@Bean
	public UsernamePasswordAuthenticationFilter authenticationFilter() {
		CustomUsernamPasswordAuthenticationFilter authFilter = new CustomUsernamPasswordAuthenticationFilter();
	    List<AuthenticationProvider> authenticationProviderList = new ArrayList<AuthenticationProvider>();
	    authenticationProviderList.add(authenticationProvider);
	    AuthenticationManager authenticationManager = new ProviderManager(authenticationProviderList);
	    authFilter.setAuthenticationManager(authenticationManager);
	    authFilter.setAuthenticationFailureHandler(authenticationFailureHandler);
	    authFilter.setUsernameParameter("tc_username");
	    authFilter.setPasswordParameter("tc_password");
	    return authFilter;
	}
}

package traicode.wo.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MainController {
			
	// Item Path
	@RequestMapping(value = {"/list-item"}, method = RequestMethod.GET)
	public String listItem(ModelMap model, HttpServletRequest request){
		model.addAttribute("title", "Item Listing");
		model.addAttribute("pageCode", "ItemList");
		return "item/itemList";
	}
	
	
	//End Item Path
	
	// shop Path
	@RequestMapping(value = {"/list-shop"}, method = RequestMethod.GET)
	public String listShop(ModelMap model, HttpServletRequest request){
		model.addAttribute("title", "Shop Listing");
		model.addAttribute("pageCode", "ShopList");
		return "shop/shopList";
	}
	
	
	//End shop Path
	
	
	// Order Path
	@RequestMapping(value = {"/list-order"}, method = RequestMethod.GET)
	public String listOrder(ModelMap model, HttpServletRequest request){
		model.addAttribute("title", "Order Listing");
		model.addAttribute("pageCode", "OrderList");
		return "order/orderList";
	}
	
	
	//End orders Path
	
	
	// User Path
	@RequestMapping(value = {"/user-management"}, method = RequestMethod.GET)
	public String listUser(ModelMap model, HttpServletRequest request){
		model.addAttribute("title", "User Management");
		model.addAttribute("pageCode", "ItemList");
		return "user/user";
	}
	
	// End Path
	
	
	
	
	@RequestMapping(value = {"/","/index"}, method = RequestMethod.GET)
	public String index(ModelMap model){
		model.addAttribute("title", "Applications");
		model.addAttribute("mDashboardAct", "active");		
		return "index";
	}
	@RequestMapping(value = {"/login"}, method = RequestMethod.GET)
	public String login(ModelMap model, HttpServletRequest request){
		model.addAttribute("title", "Login Account");
		model.addAttribute("msg", getErrorMessage(request, "SPRING_SECURITY_LAST_EXCEPTION"));
		return "login";
	}
	
	
	@RequestMapping(value = {"/authentication/unauthorized"}, method = RequestMethod.GET)
	public String unauthorized(ModelMap model){		
		return "authorization";
	}
	// start layout	
	@RequestMapping("head")
	public String head(ModelMap model, HttpServletRequest request) {
		/*Properties pro = configService.readConfigrationFile("config.properties", request);
		request.getSession().setAttribute("usernamedb", pro.getProperty("dbusername"));
		request.getSession().setAttribute("passworddb", pro.getProperty("dbpassword"));
		request.getSession().setAttribute("ip", pro.getProperty("ip"));
		request.getSession().setAttribute("port", pro.getProperty("dbport"));
		request.getSession().setAttribute("ameurl", pro.getProperty("ameurl"));
		request.getSession().setAttribute("crmurl", pro.getProperty("crmurl"));
		request.getSession().setAttribute("hrmurl", pro.getProperty("hrmurl"));*/
		//config.setApiURL(pro.getProperty("apiurl"));
		return "layout/head";
	}
	
	@RequestMapping("header")
	public String header(ModelMap model, HttpSession session, HttpServletRequest request) {
		session.setAttribute("company", request.getSession().getAttribute("company"));
		session.setAttribute("SESSION", getPrincipal());
		return "layout/header";
	}
	
	@RequestMapping("foot")
	public String foot(ModelMap model, HttpSession session, HttpServletRequest request) {		
		return "layout/foot";
	}
	@RequestMapping("footer")
	public String footer(ModelMap model, HttpSession session, HttpServletRequest request) {		
		return "layout/footer";
	}
	@RequestMapping("menu")
	public String menu(ModelMap model, HttpSession session, HttpServletRequest request) {		
		return "layout/menu";
	}
	
	@RequestMapping("test")
	public String test(ModelMap model, HttpSession session, HttpServletRequest request) {		
		return "test";
	}
	
	// end layout
	private String getErrorMessage(HttpServletRequest request, String key){
		Exception exception = (Exception) request.getSession().getAttribute(key);
		String error = "";
		if (exception instanceof BadCredentialsException) {
			error = exception.getMessage();
		}
		return error;
	}
	
	public String getPrincipal() {
		String userName = null;
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		if(principal instanceof UserDetails) {
			userName = ((UserDetails) principal).getUsername();
		}else{
			userName = principal.toString();
		}
		return userName;
	}
}

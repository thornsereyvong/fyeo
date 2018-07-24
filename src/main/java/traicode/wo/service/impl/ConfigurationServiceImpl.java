package traicode.wo.service.impl;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Properties;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

import traicode.wo.entity.Configuration;


@Service
public class ConfigurationServiceImpl {

	public boolean createConfigurationFile(Configuration config, HttpServletRequest request){
		String path = request.getSession().getServletContext().getRealPath("/");
		Properties prop = new Properties();
		OutputStream output = null;
		try {
			if(config.getConfigPwd().equals("1234566b")){
				File file = new File(path+"/resources/config");
				if(!file.exists()){
					file.mkdirs();
				}
				output = new FileOutputStream(file+"/config.properties");
				// set the properties value
				prop.setProperty("ip", config.getServerIP());
				prop.setProperty("dbusername", config.getMysqlUsername());
				prop.setProperty("dbpassword", config.getMysqlPassword());
				prop.setProperty("dbport", config.getMysqlPort());
				prop.setProperty("systemdatabase", config.getSystemDatabase());
				prop.setProperty("ameurl", config.getAmeurl());
				prop.setProperty("crmurl", config.getCrmurl());
				prop.setProperty("hrmurl", config.getHrmurl());
				prop.setProperty("atsurl", config.getAtsurl());
				// save properties to project root folder
				prop.store(output, null);
			}			
		} catch (IOException io) {
			io.printStackTrace();
		} finally {
			if (output != null) {
				try {
					output.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		return true;
	}
	
	public Properties readConfigrationFile(String filename, HttpServletRequest request){
		String path = request.getSession().getServletContext().getRealPath("/");
		Properties prop = new Properties();
		FileInputStream inputStream = null;
		try {			
			inputStream = new FileInputStream(new File(path+"/resources/config/"+filename));			
			prop.load(inputStream);			
		} catch (IOException e) {
			e.printStackTrace();
		}
		return prop;
	}
	public String readUrlByApp(String filename,String app, HttpServletRequest request){
		String path = request.getSession().getServletContext().getRealPath("/");
		Properties prop = new Properties();
		FileInputStream inputStream = null;
		try {			
			inputStream = new FileInputStream(new File(path+"/resources/config/"+filename));			
			prop.load(inputStream);
			if(app.equals("crm")){
				return prop.getProperty("crmurl");
			}else if(app.equals("ame")){
				return prop.getProperty("ameurl");
			}else if(app.equals("hrm")){
				return prop.getProperty("hrmurl");
			}else if(app.equals("ats")){
				return prop.getProperty("atsurl");
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		return "";
	}
	
	public String readSystemDb(String filename,HttpServletRequest request){
		String path = request.getSession().getServletContext().getRealPath("/");
		Properties prop = new Properties();
		FileInputStream inputStream = null;
		try {			
			inputStream = new FileInputStream(new File(path+"/resources/config/"+filename));			
			prop.load(inputStream);
			return prop.getProperty("systemdatabase");			
		} catch (IOException e) {
			e.printStackTrace();
		}
		return "";
	}
	
}

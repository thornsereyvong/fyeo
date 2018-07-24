package traicode.wo.entity;

import org.springframework.stereotype.Repository;

@Repository
public class Configuration {
	private String serverIP;
	private String mysqlUsername;
	private String mysqlPassword;
	private String systemDatabase;
	private String mysqlPort;
	private String ameurl;
	private String crmurl;
	private String hrmurl;
	private String atsurl;
	private String configPwd;
	
	
	
	
	public String getAtsurl() {
		return atsurl;
	}

	public void setAtsurl(String atsurl) {
		this.atsurl = atsurl;
	}

	public String getServerIP() {
		return serverIP;
	}

	public void setServerIP(String serverIP) {
		this.serverIP = serverIP;
	}

	public String getMysqlUsername() {
		return mysqlUsername;
	}

	public void setMysqlUsername(String mysqlUsername) {
		this.mysqlUsername = mysqlUsername;
	}

	public String getMysqlPassword() {
		return mysqlPassword;
	}

	public void setMysqlPassword(String mysqlPassword) {
		this.mysqlPassword = mysqlPassword;
	}

	public String getSystemDatabase() {
		return systemDatabase;
	}

	public void setSystemDatabase(String systemDatabase) {
		this.systemDatabase = systemDatabase;
	}

	public String getMysqlPort() {
		return mysqlPort;
	}

	public void setMysqlPort(String mysqlPort) {
		this.mysqlPort = mysqlPort;
	}

	public String getAmeurl() {
		return ameurl;
	}

	public void setAmeurl(String ameurl) {
		this.ameurl = ameurl;
	}

	public String getCrmurl() {
		return crmurl;
	}

	public void setCrmurl(String crmurl) {
		this.crmurl = crmurl;
	}

	public String getHrmurl() {
		return hrmurl;
	}

	public void setHrmurl(String hrmurl) {
		this.hrmurl = hrmurl;
	}

	public String getConfigPwd() {
		return configPwd;
	}

	public void setConfigPwd(String configPwd) {
		this.configPwd = configPwd;
	}

	
}

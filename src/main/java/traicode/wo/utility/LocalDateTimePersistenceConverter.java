package traicode.wo.utility;

public class LocalDateTimePersistenceConverter {  
  public static String UtilToSQlDate(String date){
	  if(date.equals("")) return "";
	  String[] d = date.split("-");
	  if(d.length <= 0) return "";	  
	  return d[2]+"-"+d[1]+"-"+d[0];
  }
}

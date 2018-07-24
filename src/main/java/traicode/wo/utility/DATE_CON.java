package traicode.wo.utility;

public class DATE_CON {
	public static int DATE_BY_IND(String date, int index){
		String[] dates = date.split("-");
		if(index == 1){
			return Integer.parseInt(dates[index])-1;
		}
		return Integer.parseInt(dates[index]);
	}
}

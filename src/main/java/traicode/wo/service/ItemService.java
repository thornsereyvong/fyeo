package traicode.wo.service;

import java.util.List;
import java.util.Map;

import traicode.wo.entity.Item;

public interface ItemService {
	String insertItem(Item item);
	String editItem(Item item);
	String deleteItem(String itemId);
	List<Map<String, Object>> listItem(int page, int num, String search);
}

package traicode.wo.entity;

import java.util.concurrent.ConcurrentHashMap;


public class CaseInsensitiveConcurrentHashMap <T> extends ConcurrentHashMap<String, T>{

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Override
    public T put(String key, T value) {
        return super.put(key.toLowerCase(), value);
    }

    public T get(String key) {
        return super.get(key.toLowerCase());
    }
}

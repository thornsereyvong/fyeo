package traicode.wo.utility;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.net.ftp.FTP;
import org.apache.commons.net.ftp.FTPClient;

public class FTPUploadFile {
	private static final String ftpURI = "ftp.balancikacambodia.com";
	private static final String ftpUser = "ecommerce@balancikacambodia.com";
	private static final String ftpPwd = "S@111111";
	private static final int ftpPort = 21;
	
	public static boolean uploadToServer(String path, String newName){
		FTPClient client = new FTPClient();
		try (InputStream is = new FileInputStream(new File(path))) {
			// connection 
            client.connect(ftpURI,ftpPort);
            client.login(ftpUser, ftpPwd);
            client.enterLocalPassiveMode();
            client.setFileType(FTP.BINARY_FILE_TYPE);
            
            client.storeFile(newName, is); // move file to server
            client.logout();
            return true;
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try{
                client.disconnect();
            }catch (IOException e){
                e.printStackTrace();
            }
        }
		return false;
	}
	public static boolean uploadToServer(File file, String newName){
		FTPClient client = new FTPClient();
		try (InputStream is = new FileInputStream(file)) {
			// connection 
            client.connect(ftpURI,ftpPort);
            client.login(ftpUser, ftpPwd);
            client.enterLocalPassiveMode();
            client.setFileType(FTP.BINARY_FILE_TYPE);
            
            client.storeFile(newName, is); // move file to server
            client.logout();
            return true;
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try{
                client.disconnect();
            }catch (IOException e){
                e.printStackTrace();
            }
        }
		return false;
	}
	
	public static boolean CreateDirectoryNotExists(String path) {
		FTPClient client = new FTPClient();
		try {
			client.connect(ftpURI, ftpPort);
			client.login(ftpUser, ftpPwd);
			client.enterLocalPassiveMode();
			client.setFileType(FTP.BINARY_FILE_TYPE);
			if(!client.changeWorkingDirectory(path))
				client.makeDirectory(path);
			client.logout();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}
	
	public static boolean checkDirectory(String Path, String AMEItem, String Item) {
		boolean status = false;
		System.out.println(Path + "/Item/" + AMEItem);
		if(FileUtils.getFile(Path + "/Item/" + AMEItem).exists()){
			status = FTPUploadFile.CreateDirectoryNotExists("/Item/" + Item);
			ArrayList<Thread> threads = new ArrayList<Thread>();
			for(File file : FileUtils.getFile(Path+"/Item/" + AMEItem).listFiles()){
				if(!file.isHidden()){
					if(!FilenameUtils.getExtension(file.getName()).equals("")){
						FTPUploadFile.uploadToServer(file, "/Item/" + Item + "/" + file.getName());
						System.out.println("Uploaded : " + file.getAbsolutePath());
					}
					if(FilenameUtils.getExtension(file.getName()).equals(""))
						threads.add(new Thread(checkSubDirectory(Path, AMEItem, Item, file.getName())));
				}
			}
			try {
				for (int i = 0; i < threads.size(); i++)
					threads.get(i).start();	
			} finally {
				for (int i = 0; i < threads.size(); i++) {
					try {
						threads.get(i).join();
						System.out.println("Thread Folder " + (i + 1) + " finished!");
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
			}
		}
		return status;
	}
	
	public static Runnable checkSubDirectory(String Path, String AMEItem, String Item, String Folder) {
		if(FileUtils.getFile(Path + "/Item/" + AMEItem + "/" + Folder).exists()){
			FTPUploadFile.CreateDirectoryNotExists("/Item/" + Item + "/" + Folder);
			for(File file : FileUtils.getFile(Path+"/Item/" + AMEItem + "/" + Folder).listFiles()){
				if(!file.isHidden()){
					FTPUploadFile.uploadToServer(file, "/Item/" + Item + "/" + Folder + "/" + file.getName());
					System.out.println("Uploaded : " + file.getAbsolutePath());
				}
			}
		}
		return null;
	}
	
	/*public static void main(String[] args) {
		System.out.println(new Date().getMinutes());
		System.out.println(FTPUploadFile.uploadToServer("D:\\IMG_0042.jpg", "IMG_0061.jpg"));
		System.out.println(FTPUploadFile.uploadToServer("D:\\IMG_0042.jpg", "IMG_0062.jpg"));
		System.out.println(FTPUploadFile.uploadToServer("D:\\IMG_0042.jpg", "IMG_0063.jpg"));
		System.out.println(FTPUploadFile.uploadToServer("D:\\IMG_0042.jpg", "IMG_0064.jpg"));
		System.out.println(FTPUploadFile.uploadToServer("D:\\IMG_0042.jpg", "IMG_0065.jpg"));
		System.out.println(new Date().getMinutes());
	}*/
	
}

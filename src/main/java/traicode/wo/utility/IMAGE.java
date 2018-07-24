package traicode.wo.utility;

import java.awt.AlphaComposite;
import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.RenderingHints;
import java.awt.image.BufferedImage;
import java.awt.image.DataBufferByte;
import java.awt.image.WritableRaster;
import java.io.File;
import java.io.IOException;
import java.net.URL;
import javax.imageio.ImageIO;

public class IMAGE {
	private static final String imageWTM = "D:\\ecom-watermark.png";
	private static int IMG_WIDTH = 300;
	private static int IMG_HEIGHT = 300;
	
	public static byte[] extractBytes(String ImageName) throws IOException {
		URL imageURL = new URL(ImageName);	 
		BufferedImage bufferedImage = ImageIO.read(imageURL);
		WritableRaster raster = bufferedImage .getRaster();
		DataBufferByte data = (DataBufferByte) raster.getDataBuffer();
		return (data.getData());
	}
	
	public static boolean addImageWatermark(String original, String watermark) {
	    try {
	    	File watermarkImageFile = new File(imageWTM);
	    	File sourceImageFile = new File(original);
	    	File destImageFile = new File(watermark);
	        BufferedImage sourceImage = ImageIO.read(sourceImageFile);
	        BufferedImage watermarkImage = ImageIO.read(watermarkImageFile);
	 
	        // initializes necessary graphic properties
	        Graphics2D g2d = (Graphics2D) sourceImage.getGraphics();
	        AlphaComposite alphaChannel = AlphaComposite.getInstance(AlphaComposite.SRC_OVER, 0.3f);
	        g2d.setComposite(alphaChannel);
	 
	        // calculates the coordinate where the image is painted
	        int topLeftX = (sourceImage.getWidth() - watermarkImage.getWidth()) / 2;
	        int topLeftY = (sourceImage.getHeight() - watermarkImage.getHeight()) / 2;
	 
	        // paints the image watermark
	        g2d.drawImage(watermarkImage, topLeftX, topLeftY, null);
	 
	        ImageIO.write(sourceImage, "png", destImageFile);
	        g2d.dispose();
	        return true;
	    } catch (IOException ex) {
	    	ex.printStackTrace();
	    }
	    return false;
	}
	
	
	
	public static BufferedImage resizeImage(String path){
		try {
    		BufferedImage originalImage = ImageIO.read(new File(path));
    		int type = originalImage.getType() == 0? BufferedImage.TYPE_INT_ARGB : originalImage.getType();
			BufferedImage resizedImage = new BufferedImage(IMG_WIDTH, IMG_HEIGHT, type);
			Graphics2D g = resizedImage.createGraphics();
			g.drawImage(originalImage, 0, 0, IMG_WIDTH, IMG_HEIGHT, null);			
			g.dispose();
			return resizedImage;
		}catch (IOException e) {
			e.printStackTrace();
		}
		return null;
    }

    public static BufferedImage resizeImageWithHint(String path){
    	try {
    		BufferedImage watermarkImage = ImageIO.read(new File(imageWTM));
    		BufferedImage originalImage = ImageIO.read(new File(path));
    		int type = originalImage.getType() == 0? BufferedImage.TYPE_INT_ARGB : originalImage.getType();
    		BufferedImage resizedImage = new BufferedImage(IMG_WIDTH, IMG_HEIGHT, type);
			Graphics2D g = resizedImage.createGraphics();
			g.drawImage(originalImage, 0, 0, IMG_WIDTH, IMG_HEIGHT, null);
			AlphaComposite alphaChannel = AlphaComposite.getInstance(AlphaComposite.SRC_OVER, 0.2f);
	        g.setComposite(alphaChannel);
	        
	        int topLeftX = (resizedImage.getWidth() - watermarkImage.getWidth()) / 2; //paints the image watermark
	        int topLeftY = (resizedImage.getHeight() - watermarkImage.getHeight()) / 2; //paints the image watermark
	        
	        g.drawImage(watermarkImage, topLeftX, topLeftY, null); // paints the image watermark
	        
			g.dispose();
			g.setComposite(AlphaComposite.Src);
			g.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
			g.setRenderingHint(RenderingHints.KEY_RENDERING, RenderingHints.VALUE_RENDER_QUALITY);
			g.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
			return resizedImage;
    	}catch (IOException ex) {
 	    	ex.printStackTrace();
 	    }
    	return null;
    }	
    public static boolean resizeResolutionImage(String path){
		try {
			File file = new File(path);
			BufferedImage watermarkImage = ImageIO.read(new File(imageWTM));
    		BufferedImage originalImage = ImageIO.read(file);
    		int imgWidth = originalImage.getWidth();
    		int imgHeight = originalImage.getHeight();
    		imgHeight = imgHeight-(imgHeight*calcualatePercent(imgWidth)/100);
    		imgWidth = imgWidth-(imgWidth*calcualatePercent(imgWidth)/100);    		
    		
    		BufferedImage resizedImage = new BufferedImage(imgWidth, imgHeight, BufferedImage.TYPE_INT_RGB);
			Graphics2D g = resizedImage.createGraphics();
			g.drawImage(originalImage.getScaledInstance(imgWidth, imgHeight, Image.SCALE_SMOOTH), 0, 0, imgWidth, imgHeight, null);
			
			AlphaComposite alphaChannel = AlphaComposite.getInstance(AlphaComposite.SRC_OVER, 0.3f);
	        g.setComposite(alphaChannel);
	        
	        imgWidth = (resizedImage.getWidth() - watermarkImage.getWidth()) / 2; //paints the image watermark
	        imgHeight = (resizedImage.getHeight() - watermarkImage.getHeight()) / 2; //paints the image watermark
	        
	        g.drawImage(watermarkImage, imgWidth, imgHeight, null); // paints the image watermark
			g.dispose();
			g.setComposite(AlphaComposite.Src);
			g.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
			g.setRenderingHint(RenderingHints.KEY_RENDERING, RenderingHints.VALUE_RENDER_QUALITY);
			g.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
			ImageIO.write(resizedImage, "jpg", file);
			return true;
		}catch (IOException e) {
			e.printStackTrace();
		}
		return false;
    }
    public static boolean thumbnail(String path){
		try {
    		BufferedImage originalImage = ImageIO.read(new File(path));
			BufferedImage resizedImage = new BufferedImage(IMG_WIDTH, IMG_HEIGHT, BufferedImage.TYPE_INT_ARGB);
			Graphics2D g = resizedImage.createGraphics();
			g.drawImage(originalImage.getScaledInstance(IMG_WIDTH, IMG_WIDTH, Image.SCALE_SMOOTH), 0, 0, IMG_WIDTH, IMG_WIDTH, null);
			g.dispose();
			ImageIO.write(resizedImage, "png", new File(path));
			return true;
		}catch (IOException e) {
			e.printStackTrace();
		}
		return false;
    }
    public static int calcualatePercent(int dimension){
    	if(dimension > 1000 && dimension <=1200){
    		return 10;
    	}else if(dimension >1200 && dimension <=1500){
    		return 20;
    	}else if(dimension >1500 && dimension <=1700){
    		return 30;
    	}else if(dimension >1700 && dimension <=2000){
    		return 40;
    	}else if(dimension >2000 && dimension <=3000){
    		return 50;
    	}else if(dimension >3000 && dimension <=4000){
    		return 60;
    	}else if(dimension >4000){
    		return 65;
    	}
    	return 0;
    }
}

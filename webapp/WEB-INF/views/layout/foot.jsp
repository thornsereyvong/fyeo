<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import = "java.io.*,java.util.*" %>
<%@ page import = "javax.servlet.*,java.text.*" %>

<footer class="main-footer">
	<strong>Copyright &copy; 
	<%
         SimpleDateFormat ft = new SimpleDateFormat ("yyyy");
         out.print( ft.format(new Date()));
    %> 
	<a  href="http://traicode.com/" target="_blank">Trai Code</a>.
	</strong> All rights reserved.
</footer>
<div class="control-sidebar-bg"></div>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>	
		<jsp:include page="${request.contextPath}/head"></jsp:include>	
	</head>
	<body class="sidebar-mini wysihtml5-supported skin-green">
    	<div class="wrapper">
    	
			<jsp:include page="${request.contextPath}/header"></jsp:include>
			<jsp:include page="${request.contextPath}/menu"></jsp:include>

			<div class="content-wrapper">
				<section class="content-header">
					<h1>PERMISSION DENY</h1>
					<ol class="breadcrumb">
						<li><a href="#"><i class="fa fa-dashboard"></i> PERMISSION DENY</a></li>
					</ol>
				</section>
				<section class="content" >
					<div class="box box-danger">
						<div class="box-body">
							<div class="alert alert-warning" role="alert"><i class="glyphicon glyphicon-cog"></i> You have no permission to do this transaction. Please contact your administrator.</div>			
						</div>
					</div>
				</section>						
				<section class="content-footer"></section>
			</div>
			<jsp:include page="${request.contextPath}/foot"></jsp:include>
		</div>
		<jsp:include page="${request.contextPath}/footer"></jsp:include>			
	</body>
</html>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>	
		<jsp:include page="${request.contextPath}/head"></jsp:include>
	</head>
	<body class="hold-transition login-page" style="background-color: white;">
    	<div class="login-box" style="border: 1px solid #ddd;">
			<div class="login-logo">
				<a href="#"><b>Login</b> Account</a>
			</div>
			<div class="login-box-body">
				<p class="login-box-msg">Sign in to start your session</p>
				<div class="">
					<c:if test="${param.error != null}">
						<div class="bg-warning text-center alert alert-warning">
							<span class="h4">${msg}</span>
						</div>
					</c:if>
					<c:if test="${param.logout != null}">
						<div class="alert alert-success">
							<p>You have been logged out successfully.</p>
						</div>
					</c:if>
				</div>
				<div class="clearfix"></div>
				<form id="form-login" method="POST" action="${pageContext.request.contextPath}/login">
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Username" value="balancika" name="tc_username" id="tc_username" required>
					</div>
					<div class="form-group">
						<input type="password" class="form-control" placeholder="Password" value="balancika@123" name="tc_password" id="tc_password" required>
					</div>
					
					<div class="row">
						<div class="col-sm-8" style="padding-top: 10px;"></div>
						<div class="col-sm-4" style="float: right">
							<button type="submit" id="login" name="button" class="btn btn-primary btn-block btn-flat">Login</button>
						</div>
					</div>
				</form>
			</div>
		</div>
		<jsp:include page="${request.contextPath}/footer"></jsp:include>
		<script>
			
			$(document).ready(function() {
				$('#form-login').bootstrapValidator({
					message : 'This value is not valid',
					feedbackIcons : {
						valid : '',
						invalid : '',
						validating : ''
					},
					fields : {
						tc_username : {
							validators : {
								notEmpty : {
									message : 'The username is required and can not be empty!'
								}
							}
						},
						tc_password : {
							validators : {
								notEmpty : {
									message : 'The password is required and can not be empty!'
								}
							}
						}
					}
				});
			});
		</script>
	</body>
</html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<jsp:include page="${request.contextPath}/head"></jsp:include>
<style>
	a.disabled {
	 	opacity: 0.5;
    	cursor: not-allowed;	 
	}
	
	.ifoot-box{
		background: #b9292d;
	    padding: 5px 5px 5px 10px;
	    height: 40px;
	    color: white;
	    font-weight: bold;
	    text-align: center;
	    padding-top: 10px;
	}
	.ifoot-box > span{color: white;} 
	.iImage-box{
		padding: 25px;
		margin-left: auto; 
		margin-right: auto; 
		display: block;
	}
	
</style>
</head>
<body class="sidebar-mini wysihtml5-supported skin-green" ng-app="authoriGroup">
	<div class="wrapper">
		<jsp:include page="${request.contextPath}/header"></jsp:include>
		<jsp:include page="${request.contextPath}/menu"></jsp:include>
		<div class="content-wrapper" ng-controller="authoriCon">
			<section class="content-header">
			<h1>Dashboard</h1>
			<ol class="breadcrumb">
				<li><a href="${pageContext.request.contextPath}"><i
						class="fa fa-home"></i> Home</a></li>
				<li><a href="#">Dashboard</a></li>
			</ol>
			</section>
			<section class="content ng-cloak">
			<div class="row " id="errors" data-ng-init="listAuth()">
				<div ng-repeat="a in listApp">
					<div class="col-xs-12 col-sm-4 col-md-3 col-lg-2">
	       				<div class="thumbnail" style="padding: 0px !important;">
		       				<a ng-if="a.appId == 'WEB'" href="${pageContext.request.contextPath}/app/ame">
								<img class="iImage-box" src="${pageContext.request.contextPath}/resources/images/app-icon/Account.png" alt="AME Report">															
							</a>
							<a ng-if="a.appId == 'CRM'" href="${pageContext.request.contextPath}/app/crm"> 								
								<img class="iImage-box" src="${pageContext.request.contextPath}/resources/images/app-icon/CRM.png" alt="CRM">															
							</a>
							<a ng-if="a.appId == 'HRM'" href="${pageContext.request.contextPath}/app/hrm">								
								<img class="iImage-box" src="${pageContext.request.contextPath}/resources/images/app-icon/Employees.png" alt="PRS">														
							</a>
							<a ng-if="a.appId == 'ATS'" href="${pageContext.request.contextPath}/app/ats"> 								
								<img class="iImage-box" src="${pageContext.request.contextPath}/resources/images/app-icon/eApproval.png" alt="eApproval">								
							</a>														    					      						      	
				      		<div class="caption ifoot-box">
				        		<span>{{a.appName}}</span>				        						        			        		
				      		</div>
				    	</div>			            	
	       			</div>	       			
	       			<div ng-if="(($index+1)%6) == 0" class="clearfix hidden-md hidden-sm hidden-xs"></div>
				  	<div ng-if="(($index+1)%4) == 0" class="clearfix hidden-sm hidden-xs hidden-lg"></div>
	       			<div ng-if="(($index+1)%3) == 0" class="clearfix hidden-md hidden-xs hidden-lg"></div>
				</div>
			</div>
			</section>
		</div>
		<jsp:include page="${request.contextPath}/foot"></jsp:include>
	</div>
	<jsp:include page="${request.contextPath}/footer"></jsp:include>
	<script type="text/javascript">
		var app = angular.module('authoriGroup', ['angularUtils.directives.dirPagination','angular-loading-bar', 'ngAnimate']).config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
		    cfpLoadingBarProvider.includeSpinner = false;
		}]);
		var self = this;
				
		app.controller('authoriCon',['$scope','$http',function($scope, $http){
					
		}]);	
	</script>
</body>
</html>
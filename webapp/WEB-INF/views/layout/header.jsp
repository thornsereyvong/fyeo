<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<style>
.no-js #loader { display: none;  }
.js #loader { display: block; position: absolute; left: 100px; top: 0; }
.se-pre-con {
	position: fixed;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	z-index: 9999;
	background: url(${pageContext.request.contextPath}/resources/images/Preloader_1.gif) center no-repeat #fff;
}
[ng-cloak].splash {
    		display: block !important;
		}
		[ng-cloak] {
		    display: none;
		}
		.splash {
		    background-color: #428bca;
		}
</style>
<!-- <div class="se-pre-con">	
</div> -->
<header class="main-header">
	<a href="#" class="logo">
		<span class="logo-mini"><b>FYEO</b></span>
		<span class="logo-lg" id="ffa"><b>FYEO</b></span>
	</a>
	<nav class="navbar navbar-static-top" role="navigation">
		<a href="#" class="sidebar-toggle" data-toggle="offcanvas"
			role="button"> <span class="sr-only">Toggle navigation</span>
		</a>
		<div class="navbar-custom-menu pull-left" style="font-size: 20px">
			<ul class="nav navbar-nav">
				<li><a><span>${company}</span></a></li>
			</ul>
		</div>
		<div class="navbar-custom-menu">
			<ul class="nav navbar-nav">
				<li class="dropdown messages-menu">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
						<i class="fa fa-envelope-o"></i> <span class="label label-success">4</span>
					</a>
					<ul class="dropdown-menu">
						<li class="header">You have 4 messages</li>
						<li>
							<!-- inner menu: contains the actual data -->
							<ul class="menu">
								<li>
									<!-- start message --> <a href="#">
										<div class="pull-left">
											<img src="${pageContext.request.contextPath}/resources/images/user-icon-512.png" class="img-circle"
												alt="User Image">
										</div>
										<h4>
											Support Team <small><i class="fa fa-clock-o"></i> 5 mins</small>
										</h4>
										<p>Why not buy a new awesome theme?</p>
								</a>
								</li>
								<!-- end message -->
								<li><a href="#">
										<div class="pull-left">
											<img src="${pageContext.request.contextPath}/resources/images/user-icon-512.png" class="img-circle"
												alt="User Image">
										</div>
										<h4>
											AdminLTE Design Team <small><i class="fa fa-clock-o"></i>
												2 hours</small>
										</h4>
										<p>Why not buy a new awesome theme?</p>
								</a></li>
								<li><a href="#">
										<div class="pull-left">
											<img src="${pageContext.request.contextPath}/resources/images/user-icon-512.png" class="img-circle"
												alt="User Image">
										</div>
										<h4>
											Developers <small><i class="fa fa-clock-o"></i> Today</small>
										</h4>
										<p>Why not buy a new awesome theme?</p>
								</a></li>
								<li><a href="#">
										<div class="pull-left">
											<img src="${pageContext.request.contextPath}/resources/images/user-icon-512.png" class="img-circle"
												alt="User Image">
										</div>
										<h4>
											Sales Department <small><i class="fa fa-clock-o"></i>
												Yesterday</small>
										</h4>
										<p>Why not buy a new awesome theme?</p>
								</a></li>
								<li><a href="#">
										<div class="pull-left">
											<img src="${pageContext.request.contextPath}/resources/images/user-icon-512.png" class="img-circle"
												alt="User Image">
										</div>
										<h4>
											Reviewers <small><i class="fa fa-clock-o"></i> 2 days</small>
										</h4>
										<p>Why not buy a new awesome theme?</p>
								</a></li>
							</ul>
						</li>
						<li class="footer"><a href="#">See All Messages</a></li>
					</ul></li>
				<li class="dropdown user user-menu">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown"> 
						<img src="${pageContext.request.contextPath}/resources/images/user-icon-512.png" class="user-image" alt="User Image"> 
						<span class="hidden-xs">Welcome ${SESSION}!</span>
					</a>
					<ul class="dropdown-menu">
						<li class="user-header">
							<img src="${pageContext.request.contextPath}/resources/images/user-icon-512.png" class="img-circle" alt="User Image">							
						</li>
						<li class="user-footer">
							<div class="pull-right">
								<a href="${pageContext.request.contextPath}/logout" class="btn btn-default btn-flat">Sign out</a>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</nav>
</header>
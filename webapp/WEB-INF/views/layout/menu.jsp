<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<style>
	.font_size15{ font-size: 13px;color:#333 }
	.btnpadding{ padding: 5px; }
	.color_menu { color: #b9292d; }
</style>

<aside class="main-sidebar">
	<section class="sidebar custom-menu-bar">
		<ul class="sidebar-menu">
			<li id="dashboard" class="${mDashboardAct}">
				<a href="${pageContext.request.contextPath}/">
					<i class="fa fa-dashboard"></i> &nbsp;&nbsp;<span>Dashboard</span> 
				</a>
			</li>
			<li>
				<a href="${pageContext.request.contextPath}/">
					<i class="fa fa-envelope-o"></i> &nbsp;&nbsp;<span>Inbox</span> 
				</a>
			</li>
			<li class="treeview">
				<a href="#"><i class="fa fa-diamond" aria-hidden="true"></i> &nbsp;&nbsp;<span> Item </span><i class="fa fa-angle-left pull-right"></i></a>
				
				<ul class="treeview-menu">
					<li>
						<a href="${pageContext.request.contextPath}/list-item"><i class="fa fa-circle-o"></i>Item List</a>
					</li>
					<li>
						<a href="${pageContext.request.contextPath}/create-item"><i class="fa fa-circle-o"></i>New Item</a>
					</li>
					<li>
						<a href="${pageContext.request.contextPath}/list-item"><i class="fa fa-circle-o"></i>Category</a>
					</li>
					<li>
						<a href="${pageContext.request.contextPath}/list-item"><i class="fa fa-circle-o"></i>Brand</a>
					</li>
					<li>
						<a href="${pageContext.request.contextPath}/list-item"><i class="fa fa-circle-o"></i>Color</a>
					</li>
					<li>
						<a href="${pageContext.request.contextPath}/list-item"><i class="fa fa-circle-o"></i>Len color</a>
					</li>
					<li>
						<a href="${pageContext.request.contextPath}/list-item"><i class="fa fa-circle-o"></i>Frame category</a>
					</li>
					<li>
						<a href="${pageContext.request.contextPath}/list-item"><i class="fa fa-circle-o"></i>Frame material</a>
					</li>
					<li>
						<a href="${pageContext.request.contextPath}/list-item"><i class="fa fa-circle-o"></i>Shape</a>
					</li>
					<li>
						<a href="${pageContext.request.contextPath}/list-item"><i class="fa fa-circle-o"></i>Activity</a>
					</li>
					<li>
						<a href="${pageContext.request.contextPath}/list-item"><i class="fa fa-circle-o"></i>Size</a>
					</li>
				</ul>
			</li>
			<li>
				<a href="${pageContext.request.contextPath}/list-shop">
					<i class="fa fa-home"></i> &nbsp;&nbsp;<span>Shop</span> 
				</a>
			</li>
			<li>
				<a href="${pageContext.request.contextPath}/list-order">
					<i class="fa fa-file-text-o"></i> &nbsp;&nbsp;<span>Order</span> 
				</a>
			</li>
			<li>
				<a href="${pageContext.request.contextPath}/user-management">
					<i class="fa fa-users"></i> &nbsp;&nbsp;<span>User</span> 
				</a>
			</li>
			
		</ul>
	</section>
</aside>

<script>
	var reportId = "${reportId}";
	$(function(){
		if(reportId != ""){
			var obj = $("#"+reportId);
			var ul_obj = obj.parent();
			var li_ul_obj = ul_obj.parent();
			var ul_li_ul_obj = li_ul_obj.parent();
			var parent = ul_li_ul_obj.parent();
			parent.addClass("active");
			ul_li_ul_obj.addClass("active");
			li_ul_obj.addClass("active");
			ul_obj.addClass("menu-open");
			$("#"+reportId+" > a > i").attr('class', '');
			$("#"+reportId+" > a > i").addClass('fa fa-check-circle color_menu');
			li_ul_obj.children().children().first().attr('class', '');
			li_ul_obj.children().children().first().addClass('fa fa-check-circle color_menu');
		}
		
		var dd = {
				"status": "requested",
				"process": "all",
				"fromDate": "",
				"toDate": ""
		}		
	});
		
</script>
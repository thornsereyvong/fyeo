<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width">
<title>${title} | TRAI CODE</title>
<!-- <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport"> -->
<link type="image/png" href="${pageContext.request.contextPath}/resources/images/favicon.png" rel="shortcut icon" />
<!-- 
<link rel="apple-touch-icon" href="${pageContext.request.contextPath}/resources/images/ame-icon-bm.png" />
<link rel="apple-touch-icon-precomposed" href="${pageContext.request.contextPath}/resources/images/ame-icon-bm.png" />
-->
<link type="text/css"  href="${pageContext.request.contextPath}/resources/plugins/select2/select2.min.css" rel="stylesheet">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/bootstrap/css/bootstrapValidator.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/bootstrap/css/font-awesome.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/bootstrap/css/ionicons.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/plugins/daterangepicker/daterangepicker-bs3.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/plugins/timepicker/bootstrap-timepicker.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/plugins/datatables/dataTables.bootstrap.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/dist/css/AdminLTE.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/dist/css/skins/_all-skins.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/bootstrap/css/fileinput.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/editor/summernote.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/js/style.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/editor/font-awesome.min.css" >
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/editor/summernote.css" >
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/dist/sweetalert/sweetalert.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/angular/css/angular-material.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/angular/css/loading-bar.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/plugins/toggle/bootstrap-toggle.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/bootstrap/css/build.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/jquery_confirm/jquery-confirm.css">

<script src="${pageContext.request.contextPath}/resources/bootstrap/js/jquery.min.js"></script>
      
<style type="text/css">

.btnApprove {
	color: #00a65a;
}
.btnReject {
	color: #b9292d;
}
	.checkAll{
		    padding: 0;
	    width: 30px;
	    margin-left: 10px;
	    float: left;
	}
	table thead tr th{
		cursor: pointer;
	}
	.no-padding{
		padding: 0;
	}
	.input-group-btn select {
      
		border-color: #ccc;
		margin-top: 0px;
	    margin-bottom: 0px;
	    padding-top: 7px;
	    padding-bottom: 7px;
	}
	.input-group-btn{
		width: 58px;
		}
		.input_group_btn{
		width:1px !important;
		}
	.widths-10{width: 10% !important; max-width: 10%;min-width: 10%; }
	.widths-20{width: 20% !important; max-width: 20%;min-width: 20%; }
	.widths-30{width: 30% !important; max-width: 30%;min-width: 30%; }
	.widths-40{width: 40% !important; max-width: 40%;min-width: 40%; }
	.widths-50{width: 50% !important; max-width: 50%;min-width: 50%; }
	.widths-60{width: 60% !important; max-width: 60%;min-width: 60%; }
	.widths-100{width: 100% !important;  max-width: 100%;min-width: 100%;}
	.cursor_move{ cursor: move; }
	.td-width-120{ width: 120px !important; max-width: 120px;min-width: 120px; }
	.td-width-200{ width: 200px !important; max-width: 200px;min-width: 200px; }
	.width-110{ width: 110px !important; max-width: 110px;min-width: 110px; }
	.width-100{ width: 100px !important; max-width: 110px;min-width: 110px; }
	.width-250{ width: 250px !important; max-width: 250px;min-width: 250px; }
	.width-300{ width: 300px !important; max-width: 300px;min-width: 300px; }
	.width-80{ width: 80px !important; max-width: 80px;min-width: 80px; }
	.width-90{ width: 90px !important; max-width: 90px;min-width: 90px; }
	.width-94{ width: 94px !important;  max-width: 94px;min-width:94px;}
	.requrie{color: #b9292d;}
	.select2{ width: 100%; }
	.iText-right{ text-align:right !important; }
	.dis-number{ text-align:right !important; margin-right: 10px !important; width:120px !important;}
	.iPanel{ margin-top: -25px; }
	.color_msg{ color:#F8BB86 !important; }
	.min-height-300{ height: 300px !important;  }
	.has-error .select2-selection {  border: 1px solid #a94442; border-radius: 2px;}
	.has-success .select2-selection{ border: 1px solid #00a65a; border-radius: 2px;}
	.color_menu { color: #b9292d; }
	.width-75{ width: 75px !important; }
	.cursor-pointer{ cursor: pointer !important; margin-top: -20px !important;}
	.has-error .select2-selection {border: 1px solid #a94442;border-radius: 2px;}
	.has-success .select2-selection{border: 1px solid #d2d6de;border-radius: 2px;}

	.imodal-dialog{width: 100%; height: 100%; margin: 0; padding: 0;}
	.imodal-content{height: auto; min-height: 100%; border-radius: 0;}
	.imodal-footer{position: fixed; height: 45px; bottom: 0;width: 100%;}
	.imodal-button{margin-top: -10px !important;}
	.padding-0{padding: 0px !important;}
	.margin-top{margin-top: 10px;}
	.pagination{margin: 5px 0;}
	.custom-check-search{}			
	@media screen and (max-width:1283px){
		.table-responsive {width: 100%;margin-bottom: 15px;overflow-y: hidden;-ms-overflow-style: -ms-autohiding-scrollbar;border: 1px solid #ddd;}				
		.table-responsive>.table {margin-bottom: 0;}
		.table-responsive>.table>tbody>tr>td, .table-responsive>.table>tbody>tr>th, .table-responsive>.table>tfoot>tr>td, .table-responsive>.table>tfoot>tr>th, .table-responsive>.table>thead>tr>td, .table-responsive>.table>thead>tr>th {white-space: nowrap;}
		.table-responsive>.table-bordered {border: 0;}
		.table-responsive>.table-bordered>tbody>tr>td:first-child, .table-responsive>.table-bordered>tbody>tr>th:first-child, .table-responsive>.table-bordered>tfoot>tr>td:first-child, .table-responsive>.table-bordered>tfoot>tr>th:first-child, .table-responsive>.table-bordered>thead>tr>td:first-child, .table-responsive>.table-bordered>thead>tr>th:first-child {border-left: 0;}
		.table-responsive>.table-bordered>tbody>tr>td:last-child, .table-responsive>.table-bordered>tbody>tr>th:last-child, .table-responsive>.table-bordered>tfoot>tr>td:last-child, .table-responsive>.table-bordered>tfoot>tr>th:last-child, .table-responsive>.table-bordered>thead>tr>td:last-child, .table-responsive>.table-bordered>thead>tr>th:last-child {border-right: 0;}
		.table-responsive>.table-bordered>tbody>tr:last-child>td, .table-responsive>.table-bordered>tbody>tr:last-child>th, .table-responsive>.table-bordered>tfoot>tr:last-child>td, .table-responsive>.table-bordered>tfoot>tr:last-child>th { border-bottom: 0;}
	}
	.custom-menu-bar{}
	@media screen and (max-width:768px){
		.custom-check-search{ margin-left: -10px; margin-top: -12px; }	
		.custom-menu-bar{ margin-top: 50px; }
		.font-label{ font-size: 13px !important; }
		.form-control{ font-size: 12px !important; }
	}
	
	body.modal-open {
	    overflow: hidden;
	}
	.border-top-none{border-top: 0px !important;}
	.border-top{border-top: 2px solid #ddd !important;}
	.padding-bottom-5{ padding-bottom: 5px !important; }
	.margin-top-5{ margin-top: -5px !important;}
   	.margin-left-5{margin-left: 5px !important;}
	.icDelete{
		color:#b9292d;
	}
	.icEdit{
		color:#00BCD4;
	}
	.box-header{ padding: 10px; }
	
	@font-face {
	    font-family: KhmerOScontent;
	    src: url(${pageContext.request.contextPath}/resources/bootstrap/fonts/khmerfont/KhmerOScontent.ttf);
	}
	@font-face {
	    font-family: KHMEROSMUOLLIGHT;
	    src: url(${pageContext.request.contextPath}/resources/bootstrap/fonts/khmerfont/KHMEROSMUOLLIGHT.TTF);
	}
	.font-family-khmer{  font-family: KhmerOScontent !important;}
	.font-family-khmer-muollight{  font-family: KHMEROSMUOLLIGHT !important;}
	.white-space-pre-line{
		white-space: pre-line;
	}
</style>

<script>

function messagsTypeSuccess(textMess){

	swal({
		  title: "SUCCESSFUL",
		  text: textMess,
		  timer: 3000,
		  type: "success",

	});
}

function messagsTypeError(textMess){

	swal({
		  title: "WARNING",
		  text: textMess,
		  timer: 3000,
		  type: "warning",
	
	});
}

function messageTypeFail(textMess){
	swal({
		  title: "FAIL",
		  text: textMess,
		  timer: 3000,
		  type: "warning",

	});
}

function messageTypeUsed(textMess){
	swal({
		  title: "USED",
		  text: textMess,
		  timer: 3000,
		  type: "warning",

	});
}

function messageTypeExisted(textMess){
	swal({
		  title: "EXISTED",
		  text: textMess,
		  timer: 3000,
		  type: "warning",

	});
}

function messageTypeNotAllowed(textMess){
	swal({
		  title: "NOT ALLOWED",
		  text: textMess,
		  timer: 3000,
		  type: "warning",
	
	});
}
function messageTypeNotAuthorization(textMess){
	swal({
		  title: "NO AUTHORIZATION",
		  text: textMess,
		  timer: 3000,
		  type: "warning",
	
	});
}

</script>


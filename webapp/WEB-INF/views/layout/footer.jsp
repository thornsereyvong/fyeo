<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
 	<link rel="stylesheet" href="//mgcrea.github.io/angular-strap/styles/libs.min.css">
	<script src="${pageContext.request.contextPath}/resources/bootstrap/js/jquerysession.js"></script>
	<script src="${pageContext.request.contextPath}/resources/angular/angular.js"></script>
	<script src="${pageContext.request.contextPath}/resources/angular/angular-strap.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/angular/angular-strap.tpl.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/angular/alert.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/angular/alert.tpl.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/angular/angular-material.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/angular/angular-animate.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/angular/loading-bar.js"></script>
	<script src="${pageContext.request.contextPath}/resources/angular/angular-aria.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/angular/angular-messages.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/angular/angular-sanitize.min.js" data-semver="1.5.5"></script>
  
	<script src="${pageContext.request.contextPath}/resources/angular/dirPagination.js"></script>
	
	
	<script src="${pageContext.request.contextPath}/resources/plugins/toggle/bootstrap-toggle.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/bootstrap/js/bootstrapValidator.js"></script>
	<script src="${pageContext.request.contextPath}/resources/bootstrap/js/moment.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/bootstrap/js/jquery-ui.min.js"></script>
    <script src="${pageContext.request.contextPath}/resources/bootstrap/js/bootstrap.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/plugins/datepicker/bootstrap-datepicker.js"></script>
	<script src="${pageContext.request.contextPath}/resources/plugins/timepicker/bootstrap-timepicker.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/plugins/daterangepicker/daterangepicker.js"></script>
	
	<script src="${pageContext.request.contextPath}/resources/js/jPages.js"></script>
	<script src="${pageContext.request.contextPath}/resources/plugins/select2/select2.full.js"></script>
	<script src="${pageContext.request.contextPath}/resources/dist/sweetalert/sweetalert-dev.js"></script>
	
	
	
    <script src="${pageContext.request.contextPath}/resources/plugins/sparkline/jquery.sparkline.min.js"></script>
    <script src="${pageContext.request.contextPath}/resources/plugins/knob/jquery.knob.js"></script>
    
    
    <script src="${pageContext.request.contextPath}/resources/plugins/slimScroll/jquery.slimscroll.min.js"></script>
    <script src="${pageContext.request.contextPath}/resources/plugins/fastclick/fastclick.min.js"></script>
    <script src="${pageContext.request.contextPath}/resources/dist/js/app.min.js"></script>
    <script src="${pageContext.request.contextPath}/resources/dist/js/demo.js"></script>
    <script src="${pageContext.request.contextPath}/resources/jquery_confirm/jquery-confirm.js"></script>
    <script src="${pageContext.request.contextPath}/resources/jquery_confirm/modernizr.js"></script>
    <script src="${pageContext.request.contextPath}/resources/js.mine/function.mine.js"></script>
    <script src="${pageContext.request.contextPath}/resources/sockjs/sockjs.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/sockjs/stomp.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/angular/angular-loading-overlay.js"></script>
	<%-- 	
	<script src="${pageContext.request.contextPath}/resources/Soket/socket.io.js"></script>
	<script src="${pageContext.request.contextPath}/resources/Soket/socket.io.js.map"></script>
	<script src="${pageContext.request.contextPath}/resources/Soket/socket.io.slim.js"></script>
	<script src="${pageContext.request.contextPath}/resources/Soket/socket.io.slim.js.map"></script>
	--%>
	<div id="sound"><input type="hidden" id="noticaa"></div>
    <script>
		$(window).load(function() {
			$(".se-pre-con").fadeOut("slow");;
		});
	</script>
    <style>
    	.fidReq{
			color:#b9292d;
		}
    </style>
  	<script>
  
	  	function removeCla(id,menu){
	  		$(id).removeAttr("class").attr('class', 'fa fa-check-circle color_menu');
	  	}

	  	function matchStart (term, title) {
	  		if (title.toUpperCase().indexOf(term.toUpperCase()) >= 0) { return true; } return false;
	  	}
	  	var op = 0;
	  	
    	$(function () {  
    		
    		$(".field-required").append(" (<span class='fidReq'>Required</span>)");
    		
    		removeCla("${id}","${title}");
    		
    		$.fn.select2.amd.require(['select2/compat/matcher'], function(oldMatcher) {
  			  $(".select2-title").select2({
  			    matcher: oldMatcher(matchStart)
  			  });
			});
   	  		$(".select2").select2();
   	  		$(".select2-small").select2({ minimumResultsForSearch: Infinity}); //{ minimumResultsForSearch: Infinity}    	  
    	  	$(".date").daterangepicker({singleDatePicker: true, showDropdowns: true, format: 'YYYY-MM-DD'});
    	  	$(".fReq").append("<span class='fidReq'>(Required)</span>");
    	  	$('.table-responsive').on('show.bs.dropdown', function () {
	     		$('.table-responsive').css( "overflow", "inherit" );
   			});
   	
   			$('.table-responsive').on('hide.bs.dropdown', function () {
	     		$('.table-responsive').css( "overflow", "auto" );
   			}); 

      	}); 
    	
    	 String.prototype.trunc = String.prototype.trunc ||  function(n){
             return this.length>n ? this.substr(0,n-1)+'...' : this.toString();
         };
         String.prototype.fn = String.prototype.fn ||  function(n){
      	   if(this.length == 0){ return ""; }else{  return 1; }          
         };
         String.prototype.disText = String.prototype.disText ||  function(n){
      		if(this.length==0){
      			return '--';
      		}else{
      			 return this.length>n ? this.substr(0,n-1)+'...' : this.toString();
      		}
      	   
      	};
    </script>
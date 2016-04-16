// JavaScript Document
/*function F(A){
	return document.getElementById(A).value}
	
function G(A){
	return document.getElementById(A)}
	
function SetHome(A,D){
	try{
		A.style.behavior="url(#default#homepage)";
		A.setHomePage(D)}
	catch(C){
		if(window.netscape){
			try{
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")}
			catch(C){
				alert("此操作被浏览器拒绝！请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'")}
			var B=Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
			B.setCharPref("browser.startup.homepage",window.location)
		}
	}
}

function addFav(A){
	if(window.sidebar){
		window.sidebar.addPanel(document.title,A,"")}
	else{
		if(document.all){
			window.external.AddFavorite(A,document.title)}
		else{
			if(window.opera&&window.print){
				return true}
		}
	}
}

function select_text(A){
	var E=A.value;G("select_i").innerHTML="";
	G("select_art_v").value="";
	var H=arguments[1]?arguments[1]:0;
	var C=arguments[2]?arguments[2]:"";
	var D=arguments[3]?arguments[3]:"";
	if(H>0&&C!=""){
		G("select_i").innerHTML=C;
		G("select_art_v").value=H;
		if(D!=""){G("time").value=D}
	}
	if(E=="group2"){
		G("select_title").innerHTML="邀请码：";
		G("group_num").style.display="block";
		G("select_i").style.display="none";
		G("select_b").style.display="none"}
	else{
		if(G("select_title")){
			G("select_title").innerHTML="选择文章："}
		G("select_i").style.display="block";
		G("select_b").style.display="block";
		if(G("group_num")){
			G("group_num").style.display="none"}
	}
	var A=G("select_b");
	var B=A.className;
	if(B!="select_b"){select_art_show()}
}

function select_art_show(){
	var B=G("select_b");
	var C=B.className;
	var D="";
	if(G("radio").checked){D="en"}
	else{
		if(G("radio2").checked){D="cn"}
		else{
			if(G("radio3").checked){D="group"}
			else{D="group2"}
		}
	}
	G("select_v_en").style.display="none";
	G("select_v_cn").style.display="none";
	if(G("select_v_group")){G("select_v_group").style.display="none"}
	var A=G("select_v_"+D);
	if(C=="select_b"){A.style.display="block";B.className="select_b_on"}
	else{A.style.display="none";B.className="select_b"}
}

function select_art(A,B){
	var C=arguments[2]?arguments[2]:"";
	G("select_i").innerHTML=A.innerHTML;
	G("select_art_v").value=B;
	if(C!=""){G("time").value=C}
	select_art_show()
}

function reset_form(){
	var A=G("radio");
	var B=G("time");
	A.checked="checked";
	B.value="5";
	select_text(A)
}

function select_style(B){
	var A=G("select_style");
	G("style_black").setAttribute("class","style_black");
	if(A.value==B){A.value="0";G("style_"+B).setAttribute("class","style_"+B)}
	else{A.value=B;G("style_"+B).setAttribute("class","style_"+B+" style_on")}
}*/

/*function check_set(){
	var E=G("name");
	var C=G("pass_old");
	var D=G("pass1");
	var H=G("pass2");
	var B=G("email");
	var A=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var I=true;
	if(E.value==""){
		set_info(E,"用户名不能为空！","login_info");
		I=false}
	else{set_info(E,"","info")}
	if(B.value.length>0){
		if(!A.test(B.value)){
			set_info(B,"E-mail格式不正确！","login_info");
			I=false}
		else{set_info(B,"","info")}
	}
	if(C){
		if(C.value.length>0){
			if(C.value.length<6){
				set_info(C,"密码不能小于6位！","login_info");I=false}else{set_info(C,"","info")}}}if(D.value.length>0){if(D.value.length<6){set_info(D,"密码不能小于6位！","login_info");I=false}else{if(C){if(C.value==D.value){set_info(D,"新密码不能和旧密码相同！","login_info");I=false}}else{set_info(D,"","info")}}if(D.value!=H.value){set_info(H,"两次密码输入不一致！","login_info");I=false}else{set_info(H,"","info")}}if(I){return true}else{return false}}function set_info(A,C,B){var A=A.parentNode.parentNode.getElementsByTagName("span").item(2);A.innerHTML=C;A.className=B}function form_focus(){var B=G("name");var A=G("pass");if(B){if(B.value==""){B.focus()}else{if(A){A.focus()}}}}function show_sys_art(A){if(A.checked){document.location="my_typing.php?do=art&myart=1"}else{document.location="my_typing.php?do=art"}}function show_order_art(A){document.location="art_0_"+A+".html"}function quxian_show(H,B){var C=document.getElementsByTagName("tr");var D=B.parentNode.parentNode.parentNode;var E=D.getElementsByTagName("tr").item(1);if(E.className!="tr_flash_on"){for(var A=0;A<C.length;A++){if(C.item(A).className=="tr_flash_on"){C.item(A).className="tr_flash";C.item(A).parentNode.className=""}}D.className="on";E.className="tr_flash_on"}else{E.className="tr_flash";D.className=""}}function change_head_img(A){if(A){G("head_img_img").src="style/images/head_img/"+A+".bmp";G("head_img_div").style.display="none";G("head_img_input").value=A}else{G("head_img_div").style.display="block"}}function setpower_li(A){if(A.value=="3"){document.getElementById("setpower_li").style.display="block"}else{document.getElementById("setpower_li").style.display="none"}}function show_u_more(B,C,E,D){var A=setTimeout(function(){var H=B.parentNode;var I=H.getElementsByTagName("div");var K;if(I.length==0){var L=document.createElement("div");L.setAttribute("class","u_more");var J='<span class="uinfo"><img src="style/images/head_img/'+E+'.bmp"/><span class="uinfo2"><strong>'+D+"</strong><br/><span>ID:"+C+"</span></span></span>";if(typeof(friend_list)!="undefined"){if(typeof(friend_list[C])!="undefined"){if(friend_list[C]==1){J+='<span class="span_a">已是好友</span><a href="my_typing.php?do=massage_show&friend_id='+C+'">发消息</a>'}else{if(friend_list[C]==2){J+='<span class="span_a" onclick="alert(\'对方已拒绝您的好友申请！\')">对方拒绝</span><span class="span_a" onclick="alert(\'请先添加好友，然后才能发送消息哦！\')">发消息</span>'}else{J+='<span class="span_a" onclick="alert(\'您已申请添加对方为好友，请等待对方确认！\')">待确认</span><span class="span_a" onclick="alert(\'请先添加好友，然后才能发送消息哦！\')">发消息</span>'}}}else{J+='<a href="my_do.php?do=friendnew&friend_id='+C+'">加好友</a><span class="span_a" onclick="alert(\'请先添加好友，然后才能发送消息哦！\')">发消息</span>'}}L.innerHTML=J;L.onmouseout=function(){K=setTimeout(function(){var M=H.getElementsByTagName("div").item(0);M.style.display="none"},100)};L.onmouseover=function(){clearTimeout(K)};H.appendChild(L)}else{I.item(0).style.display="block"}},400);B.onmouseout=function(){clearTimeout(A)}}function xiugai_beizhu(A,C){var B=A.parentNode.getElementsByTagName("input").item(0);window.location="my_do.php?do=friend_beizhu&id="+C+"&name="+encodeURI(B.value)};*/
				
				
				
function F(A){return document.getElementById(A).value}function G(A){return document.getElementById(A)}function SetHome(A,D){try{A.style.behavior="url(#default#homepage)";A.setHomePage(D)}catch(C){if(window.netscape){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")}catch(C){alert("此操作被浏览器拒绝！请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'")}var B=Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);B.setCharPref("browser.startup.homepage",window.location)}}}function addFav(A){if(window.sidebar){window.sidebar.addPanel(document.title,A,"")}else{if(document.all){window.external.AddFavorite(A,document.title)}else{if(window.opera&&window.print){return true}}}}function select_text(A){var E=A.value;G("select_i").innerHTML="";G("select_art_v").value="";var H=arguments[1]?arguments[1]:0;var C=arguments[2]?arguments[2]:"";var D=arguments[3]?arguments[3]:"";if(H>0&&C!=""){G("select_i").innerHTML=C;G("select_art_v").value=H;if(D!=""){G("time").value=D}}if(E=="group2"){G("select_title").innerHTML="邀请码：";G("group_num").style.display="block";G("select_i").style.display="none";G("select_b").style.display="none"}else{if(G("select_title")){G("select_title").innerHTML="选择文章："}G("select_i").style.display="block";G("select_b").style.display="block";if(G("group_num")){G("group_num").style.display="none"}}var A=G("select_b");var B=A.className;if(B!="select_b"){select_art_show()}}function select_art_show(){var B=G("select_b");var C=B.className;var D="";if(G("radio").checked){D="en"}else{if(G("radio2").checked){D="cn"}else{if(G("radio3").checked){D="group"}else{D="group2"}}}G("select_v_en").style.display="none";G("select_v_cn").style.display="none";if(G("select_v_group")){G("select_v_group").style.display="none"}var A=G("select_v_"+D);if(C=="select_b"){A.style.display="block";B.className="select_b_on"}else{A.style.display="none";B.className="select_b"}}function select_art(A,B){var C=arguments[2]?arguments[2]:"";G("select_i").innerHTML=A.innerHTML;G("select_art_v").value=B;if(C!=""){G("time").value=C}select_art_show()}function reset_form(){var A=G("radio");var B=G("time");A.checked="checked";B.value="5";select_text(A)}function select_style(B){var A=G("select_style");G("style_black").setAttribute("class","style_black");if(A.value==B){A.value="0";G("style_"+B).setAttribute("class","style_"+B)}else{A.value=B;G("style_"+B).setAttribute("class","style_"+B+" style_on")}}function check_set(){var E=G("name");var C=G("pass_old");var D=G("pass1");var H=G("pass2");var B=G("email");var A=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;var I=true;if(E.value==""){set_info(E,"用户名不能为空！","login_info");I=false}else{set_info(E,"","info")}if(B.value.length>0){if(!A.test(B.value)){set_info(B,"E-mail格式不正确！","login_info");I=false}else{set_info(B,"","info")}}if(C){if(C.value.length>0){if(C.value.length<6){set_info(C,"密码不能小于6位！","login_info");I=false}else{set_info(C,"","info")}}}if(D.value.length>0){if(D.value.length<6){set_info(D,"密码不能小于6位！","login_info");I=false}else{if(C){if(C.value==D.value){set_info(D,"新密码不能和旧密码相同！","login_info");I=false}}else{set_info(D,"","info")}}if(D.value!=H.value){set_info(H,"两次密码输入不一致！","login_info");I=false}else{set_info(H,"","info")}}if(I){return true}else{return false}}function set_info(A,C,B){var A=A.parentNode.parentNode.getElementsByTagName("span").item(2);A.innerHTML=C;A.className=B}function form_focus(){var B=G("name");var A=G("pass");if(B){if(B.value==""){B.focus()}else{if(A){A.focus()}}}}function show_sys_art(A){if(A.checked){document.location="my_typing.php?do=art&myart=1"}else{document.location="my_typing.php?do=art"}}function show_order_art(A){document.location="art_0_"+A+".html"}function quxian_show(H,B){var C=document.getElementsByTagName("tr");var D=B.parentNode.parentNode.parentNode;var E=D.getElementsByTagName("tr").item(1);if(E.className!="tr_flash_on"){for(var A=0;A<C.length;A++){if(C.item(A).className=="tr_flash_on"){C.item(A).className="tr_flash";C.item(A).parentNode.className=""}}D.className="on";E.className="tr_flash_on"}else{E.className="tr_flash";D.className=""}}function change_head_img(A){if(A){G("head_img_img").src="style/images/head_img/"+A+".bmp";G("head_img_div").style.display="none";G("head_img_input").value=A}else{G("head_img_div").style.display="block"}}function setpower_li(A){if(A.value=="3"){document.getElementById("setpower_li").style.display="block"}else{document.getElementById("setpower_li").style.display="none"}}function show_u_more(B,C,E,D){var A=setTimeout(function(){var H=B.parentNode;var I=H.getElementsByTagName("div");var K;if(I.length==0){var L=document.createElement("div");L.setAttribute("class","u_more");var J='<span class="uinfo"><img src="style/images/head_img/'+E+'.bmp"/><span class="uinfo2"><strong>'+D+"</strong><br/><span>ID:"+C+"</span></span></span>";if(typeof(friend_list)!="undefined"){if(typeof(friend_list[C])!="undefined"){if(friend_list[C]==1){J+='<span class="span_a">已是好友</span><a href="my_typing.php?do=massage_show&friend_id='+C+'">发消息</a>'}else{if(friend_list[C]==2){J+='<span class="span_a" onclick="alert(\'对方已拒绝您的好友申请！\')">对方拒绝</span><span class="span_a" onclick="alert(\'请先添加好友，然后才能发送消息哦！\')">发消息</span>'}else{J+='<span class="span_a" onclick="alert(\'您已申请添加对方为好友，请等待对方确认！\')">待确认</span><span class="span_a" onclick="alert(\'请先添加好友，然后才能发送消息哦！\')">发消息</span>'}}}else{J+='<a href="my_do.php?do=friendnew&friend_id='+C+'">加好友</a><span class="span_a" onclick="alert(\'请先添加好友，然后才能发送消息哦！\')">发消息</span>'}}L.innerHTML=J;L.onmouseout=function(){K=setTimeout(function(){var M=H.getElementsByTagName("div").item(0);M.style.display="none"},100)};L.onmouseover=function(){clearTimeout(K)};H.appendChild(L)}else{I.item(0).style.display="block"}},400);B.onmouseout=function(){clearTimeout(A)}}function xiugai_beizhu(A,C){var B=A.parentNode.getElementsByTagName("input").item(0);window.location="my_do.php?do=friend_beizhu&id="+C+"&name="+encodeURI(B.value)};
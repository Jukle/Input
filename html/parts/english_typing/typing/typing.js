/* JavaScript Document
var div=G("content").getElementsByTagName("div");
var check_num=0;
var start_time=0;
var pause_time=0;
var pause_limit=0;
var tn_arr=new Array();
var en_arr=new Array();
var scroll_top=0;
var lock_num=-1;
var check_num_lock=0;
var quxian=new Array();
var quxian_time=5;
var quxian_b_t=0;
var wb_key="";
var wb_str="";
var wubi86=[];
var wb_key1="";
var wb_str1="";
var wubi861=[];
var py_key="";
var py_str="";
var pinyin=[];
var dazi_pk=[];
var dazi_pk_b_t=0;
var b_s=0,b_r=0,b_tc=0,b_b=0,b_mo=0,b_t=0,b_e=0;
window.onscroll=function(){window.scroll(0,scroll_top)};
document.body.onpaste=function(){return false};
document.body.oncopy=function(){return false};
document.body.oncut=function(){return false};
function disableselect(A){return false}
function reEnable(){return true}
document.onselectstart=new Function("return false");
if(window.sidebar){
	document.onmousedown=disableselect;
	document.onclick=reEnable}
function check_typing(D){
	var C=arguments[1]?arguments[1]:0;
	if(D>=div.length){submit_form()}
	else{
		for(var B=0;B<div.length;B+=2){
			var A=div.item(B).getElementsByTagName("input").item(1);
			if(D==B&&C!="stop"){
				A.readOnly=false;
				A.onfocus="";
				setFocusLast(A);
				A.onkeydown=check_input;
				A.onkeyup=check_input;
				A.oninput=check_input}
			else{
				if(C!="stop"){
					A.onfocus=function(){
						var E=div.item(D).getElementsByTagName("input").item(1);setFocusLast(E)
					}
				}else{
					A.readOnly=true;
					A.onkeydown="";
					A.onkeyup="";
					A.oninput=""
				}
			}
		}
		check_num_lock=0
	}
}

function check_input(A){
	var C=A||window.event;
	var I=this.parentNode.getElementsByTagName("div").item(0).getElementsByTagName("span").item(0);
	var F=this.parentNode.getElementsByTagName("input").item(0);
	var J=this.value.length;
	var D=F.value.length;
	var E=strstr(F.value,this.value);
	var H=C.which?C.which:C.keyCode;
	I.innerHTML=E;
	if(this.value==""){
		if(H==8&&check_num>=2&&lock_num!=check_num-2&&check_num_lock!=1){
			check_num_lock=1;
			check_num-=2;
			check_typing(check_num);
			this.onkeydown="";
			this.onkeyup="";
			this.oninput="";
			if(getElementTop(this)-getScrollTop()<150){
				scroll_top=getElementTop(this)-150;
				window.scroll(0,scroll_top)
			}
		}
	}else{
		if(J>0&&b_tc==0){jishi()}
		if(check_num_lock!=1){
			if(tn_arr[check_num]-J==1&&J!=""){b_b++}
			else{
				if(!tn_arr[check_num]&&J>b_mo){b_mo=J}
				else{
					if(J-tn_arr[check_num]>b_mo){b_mo=J-tn_arr[check_num]}
				}
			}
			if(check_num<div.length){
				if(J<D||F.value.substring(D-1,D)!=" "){tn_arr[check_num]=J>0?(J>D?D:J):0}
			}
			b_t=sum_array(tn_arr);
			b_e=sum_array(en_arr)
		}
		if(D==J&&F.value.substring(D-1,D)==this.value.substring(J-1,J)&&tn_arr.length!=check_num/2&&check_num_lock!=1){
			check_num_lock=1;
			lock_num=check_num;
			check_num+=2;
			setTimeout(function(){
								if(check_num<div.length){div.item(check_num).getElementsByTagName("input").item(1).value=""}
								check_typing(check_num)
								},10);
			this.onkeydown="";
			this.onkeyup="";
			this.oninput="";
			if(getElementTop(this)-getScrollTop()>300){
				scroll_top=getElementTop(this)-300;
				window.scroll(0,scroll_top)
			}
		}else{
			if(D<J&&F.value.substring(D-1,D)==this.value.substring(D-1,D)&&tn_arr.length!=check_num/2&&check_num_lock!=1){
				check_num_lock=1;
				var B=this.value;
				div.item(check_num).getElementsByTagName("input").item(1).value=B.substr(0,D);
				check_num+=2;
				div.item(check_num).getElementsByTagName("input").item(1).value=B.substr(D,J-D);
				check_typing(check_num);
				this.onkeydown="";
				this.onkeyup="";
				this.oninput="";
				if(getElementTop(this)-getScrollTop()>300){
					scroll_top=getElementTop(this)-300;
					window.scroll(0,scroll_top)
				}
			}else{
				if(D<=J){
					if(H==13&&check_num_lock!=1){
						check_num_lock=1;
						check_num+=2;
						check_typing(check_num);
						this.onkeydown="";
						this.onkeyup="";
						this.oninput="";
						if(getElementTop(this)-getScrollTop()>300){
							scroll_top=getElementTop(this)-300;
							window.scroll(0,scroll_top)
						}
					}
				}
			}
		}
	}
}

var jishi_=null;

function jishi(){
	if(start_time==0){start_time=get_time()}
	clearTimeout(jishi_);
	jishi_=setTimeout("jishi()",100);
	var F=G("typing_info_li");
	var D=G("name");
	var E=G("time");
	var H=pause_time>0?get_time()-pause_time:0;
	b_tc=get_time()-start_time-H-pause_limit;
	b_s=b_tc>0?formatFloat((b_t-b_e)/b_tc*60000,0):0;
	b_r=b_t>0?formatFloat((b_t-b_e)/b_t*100,0):0;
	if(b_tc>quxian.length*quxian_time*1000){
		if(quxian.length>=1){quxian[quxian.length]=b_t-quxian_b_t}
		else{quxian[0]=b_t}
		quxian_b_t=b_t
	}
	if(typeof(dazi_pk[0])!="undefined"){
		var A=b_tc*0.001/quxian_time;
		var C=0;
		for(var B=0;B<A+1;B++){
			if(typeof(dazi_pk[B])!="undefined"){
				if(B==parseInt(A+1)){
					C+=dazi_pk[B]*(A-parseInt(A))
				}else{
					C+=parseInt(dazi_pk[B])
				}
			}
		}
		dazi_pk_b_t=C.toFixed(2);
		show_dazi_pk()
	}
	F.innerHTML='<ul><li class="name">'+D.value+"</li><li>\u8bbe\u5b9a\uff1a"+E.value+' \u5206\u949f</li><li><div id="time_table">'+get_date(b_tc)+"</div></li><li>\u901f\u5ea6\uff1a"+b_s+" KPM</li><li>\u6b63\u786e\u7387\uff1a"+b_r+" %</li></ul><li>\u9519\u8bef\uff1a"+b_e+"</li><li>\u603b\u5b57\u6570\uff1a"+b_t+"</li><li>\u9000\u683c\uff1a"+b_b+'</li><li class="pinyin">\u62fc\u97f3\uff1a'+py_key+(py_str!=""?"("+py_str+")":"")+'</li><li class="wubi86">\u4e94\u7b14\uff1a'+wb_key1+(wb_str1!=""?"("+wb_str1+")":"")+'</li><li class="wubi86">\u8bcd\u7ec4\uff1a'+wb_key+(wb_str!=""?"("+wb_str+")":"")+'</li></ul><div class="clear"></div>';
	get_span_width(b_tc);
	move_div();
	if(b_tc>=E.value*60000){
		clearTimeout(jishi_);
		submit_form()
	}
}

function show_dazi_pk(){
	if(dazi_pk_b_t>0){
		var A=0;
		var D=0;
		for(var B=0;B<div.length;B+=2){
			var E=div.item(B).getElementsByTagName("input").item(0);
			var F=div.item(B).getElementsByTagName("span").item(1);
			var C=E.value.length;
			if(D+C>dazi_pk_b_t){
				A=dazi_pk_b_t-D;
				A=A.toFixed(2);
				F=F.offsetWidth;
				G("dazi_pk_"+B).style.display="block";
				G("dazi_pk_"+B).style.left=parseInt(A/C*F)+"px";
				if(dazi_pk_b_t>b_t){G("dazi_pk_"+B).className="dazi_pk"}
				else{G("dazi_pk_"+B).className="dazi_pk2"}
				break
			}else{
				D+=parseInt(C);
				G("dazi_pk_"+B).style.display="none"
			}
		}
	}
}

function dazi_pause(A){
	if(A.className=="pause"){
		A.innerHTML="继续";
		A.className="pause2";
		if(start_time>0){pause_time=get_time()}
		check_typing(check_num,"stop")
	}else{
		A.innerHTML="暂停";
		A.className="pause";
		if(start_time>0){
			pause_limit+=get_time()-pause_time;
			pause_time=0
		}
		check_typing(check_num)
	}
}

function close_light(A){
	if(A.className=="light"){
		A.innerHTML="开灯";
		A.className="light2";
		document.body.className="dazi_style_black"
	}else{
		A.innerHTML="关灯";
		A.className="light";
		document.body.className=""
	}
}

function get_quxian_data(C){
	var B=0;
	for(var A=0;A<quxian.length;A++){B+=quxian[A]}
	if(b_t-B!=0){quxian[quxian.length]=b_t-B}
	document.getElementById(C).value=quxian.join(",")
}

function alert_typing_end(E,C,D,I,A,F,H){
	alert("=======\u6d4b\u8bd5\u7ed3\u679c（"+(G("type").value=="cn"?"\u4e2d\u6587":"\u82f1\u6587")+"\u6253\u5b57）=======\n\u65f6\u95f4\uff1a"+G("time").value+"\u5206\u949f\uff0c\u901f\u5ea6\uff1a"+b_s+"KPM\uff0c\u6b63\u786e\u7387\uff1a"+b_r+"%");
	var B=G("info_form");
	B.action+="?"+E+"="+b_mo+"&"+C+"="+b_tc+"&"+D+"="+b_s+"&"+I+"="+b_r+"&"+A+"="+b_b+"&"+F+"="+b_t+"&"+H+"="+b_e;B.submit()
}

function setFocusLast(obj){
	if(typeof(eval("obj.createTextRange"))!="undefined"){
		var r=obj.createTextRange();
		r.moveStart("character",obj.value.length);
		r.collapse(true);
		r.select()
	}else{
		obj.setSelectionRange(obj.value.length,obj.value.length);
		obj.focus()
	}
}

function strstr(I,J){
	I=str2arr(I);
	J=str2arr(J);
	var D="";
	var C=0;
	var E=0;
	for(i=0;i<(I.length>J.length?I.length:J.length);i++){
		if(i<I.length){
			if(I[i]==J[i]){D+='<span class="green">'+I[i]+"</span>"}
			else{
				if(J[i]==null){
					D+=I[i];
					if(E==0&&J.length>0){E=i}}
					else{
						C++;
						D+='<span class="red">'+I[i]+"</span>"
					}
				}
			}
		}
		if(J.length==0||E!=0){
			var B=check_num/2;
			if(typeof(wubi86[B])=="array"||typeof(wubi86[B])=="object"){
				var A=wubi86[B];
				if(typeof(A[E])=="array"||typeof(A[E])=="object"){
					var H="";
					for(var F=E;F<E+A[E][0]&&F<I.length;F++){
						H+=I[F]}wb_str=H;
						wb_key=A[E][1]
					}
				}else{
					wb_str="";
					wb_key="-"
				}
				if(typeof(wubi861[B])=="array"||typeof(wubi861[B])=="object"){
					var A=wubi861[B];
					if(typeof(A[E])!="undefined"){
						wb_str1=I[E];
						wb_key1=A[E]
					}else{
						wb_str1="";
						wb_key1="-"
					}
				}else{
					wb_str1="";
					wb_key1="-"
				}
				if(typeof(pinyin[B])=="array"||typeof(pinyin[B])=="object"){
					var A=pinyin[B];
					if(typeof(A[E])!="undefined"){
						py_str=I[E];
						py_key=A[E]
					}else{
						py_str="";
						py_key="-"
					}
				}else{
					py_str="";
					py_key="-"
				}
			}else{
				wb_str="";
				wb_key="-";
				py_str="";
				py_key="-";
				wb_str1="";
				wb_key1="-"
			}
		}
	}
en_arr[check_num]=C;
return D
}
	

		function sum_array(C){
			var B=0;
			for(var A=0;A<C.length*2&&A<=check_num;A+=2){
				if(C[A]>0){B+=C[A]}
			}
			return B
		}
		
		function str2arr(C){
			var B=new Array();
			for(var A=0;A<C.length;A++){B[A]=C.substr(A,1)}
			return B
		}
		
		function get_time(){
			var A=new Date();
			return A.getTime()
		}
		
		function formatFloat(B,A){return Math.round(B*Math.pow(10,A))/Math.pow(10,A)}
		
		function get_span_width(D){
			var A=G("time_table");
			var C=G("time");
			var B=formatFloat(D/(parseInt(C.value)*60000)*100,0)-100;
			A.style.backgroundPosition=B+"px 0px"	
		}
		
		function get_date(A){
			var B=new Date(A);
			return B.getMinutes()+"分 "+B.getSeconds()+"秒"
		}
		
		function move_div(){
			var C=G("typing_info");
			var A=getElementTop(C)-getScrollTop()-100;
			var B=get_window_width();
			C.style.marginRight="0px";
			if((B-990)/2>124){C.style.right=Math.round((B-990)/2-124)+"px"}
			else{C.style.right="10px"}
			if(A>20){C.style.top=(getElementTop(C)-get_int(A))+"px"}
			if(A<0){C.style.top=(getElementTop(C)+get_int(A))+"px"}
		}
		
		function get_int(A){return formatFloat(Math.abs(A)*0.1,0)}
		
		function get_window_width(){
			var B,A;
			if(window.innerHeight&&window.scrollMaxY){
				B=document.body.scrollWidth;
				A=window.innerHeight+window.scrollMaxY
				}else{
					if(document.body.scrollHeight>document.body.offsetHeight){
						B=document.body.scrollWidth;
						A=document.body.scrollHeight
					}else{
						B=document.body.offsetWidth;
						A=document.body.offsetHeight
					}
				}
				return B
			}
		}
		
			function getScrollTop(){
				var A=0;
				if(typeof window.pageYOffset!="undefined"){A=window.pageYOffset}
				else{
					if(typeof window.document.compatMode!="undefined"&&window.document.compatMode!="BackCompat"){
						A=window.document.documentElement.scrollTop
					}else{
						if(typeof window.document.body!="undefined"){
							A=window.document.body.scrollTop
						}
					}
				}
				return A
			}
			
			function getElementTop(B){
				var C=B.offsetTop;
				var A=B.offsetParent;
				while(A!==null){
					C+=A.offsetTop;
					A=A.offsetParent
				}
				return C
			}
			
			var rDrag={o:null,
			init:function(A){A.onmousedown=this.start},
			start:function(A){var B;
				A=rDrag.fixEvent(A);
				A.preventDefault&&A.preventDefault();
				rDrag.o=B=this;
				B.x=A.clientX-rDrag.o.offsetLeft;
				B.y=A.clientY-rDrag.o.offsetTop;
				document.onmousemove=rDrag.move;
				document.onmouseup=rDrag.end},
			move:function(A){
				A=rDrag.fixEvent(A);
				var C,B;
				C=A.clientX-rDrag.o.x;
				B=A.clientY-rDrag.o.y;
				rDrag.o.style.left=C+"px";
				rDrag.o.style.top=B+"px"},
			end:function(A){
				A=rDrag.fixEvent(A);
				rDrag.o=document.onmousemove=document.onmouseup=null},
			fixEvent:function(A){
				if(!A){
					A=window.event;
					A.target=A.srcElement;
					A.layerX=A.offsetX;
					A.layerY=A.offsetY
				}
				return A
			}
		};
		
		check_typing(check_num);
		G("loading").style.display="none";
		G("typing_info").style.display="block";
		rDrag.init(document.getElementById("typing_info"));*/
var div=G("content").getElementsByTagName("div");
var check_num=0;
var start_time=0;
var pause_time=0;
var pause_limit=0;
var tn_arr=new Array();
var en_arr=new Array();
var scroll_top=0;
var lock_num=-1;
var check_num_lock=0;
var quxian=new Array();
var quxian_time=5;
var quxian_b_t=0;
var wb_key="";
var wb_str="";
var wubi86=[];
var wb_key1="";
var wb_str1="";
var wubi861=[];
var py_key="";
var py_str="";
var pinyin=[];
var dazi_pk=[];
var dazi_pk_b_t=0;
var b_s=0,b_r=0,b_tc=0,b_b=0,b_mo=0,b_t=0,b_e=0;
window.onscroll=function(){window.scroll(0,scroll_top)};
document.body.onpaste=function(){return false};
document.body.oncopy=function(){return false};
document.body.oncut=function(){return false};
function disableselect(A){return false}function reEnable(){return true}document.onselectstart=new Function("return false");
if(window.sidebar){document.onmousedown=disableselect;document.onclick=reEnable}function check_typing(D){var C=arguments[1]?arguments[1]:0;if(D>=div.length){submit_form()}else{for(var B=0;B<div.length;B+=2){var A=div.item(B).getElementsByTagName("input").item(1);if(D==B&&C!="stop"){A.readOnly=false;A.onfocus="";setFocusLast(A);A.onkeydown=check_input;A.onkeyup=check_input;A.oninput=check_input}else{if(C!="stop"){A.onfocus=function(){var E=div.item(D).getElementsByTagName("input").item(1);setFocusLast(E)}}else{A.readOnly=true;A.onkeydown="";A.onkeyup="";A.oninput=""}}}check_num_lock=0}}function check_input(A){var C=A||window.event;var I=this.parentNode.getElementsByTagName("div").item(0).getElementsByTagName("span").item(0);var F=this.parentNode.getElementsByTagName("input").item(0);var J=this.value.length;var D=F.value.length;var E=strstr(F.value,this.value);var H=C.which?C.which:C.keyCode;I.innerHTML=E;if(this.value==""){if(H==8&&check_num>=2&&lock_num!=check_num-2&&check_num_lock!=1){check_num_lock=1;check_num-=2;check_typing(check_num);this.onkeydown="";this.onkeyup="";this.oninput="";if(getElementTop(this)-getScrollTop()<150){scroll_top=getElementTop(this)-150;window.scroll(0,scroll_top)}}}else{if(J>0&&b_tc==0){jishi()}if(check_num_lock!=1){if(tn_arr[check_num]-J==1&&J!=""){b_b++}else{if(!tn_arr[check_num]&&J>b_mo){b_mo=J}else{if(J-tn_arr[check_num]>b_mo){b_mo=J-tn_arr[check_num]}}}if(check_num<div.length){if(J<D||F.value.substring(D-1,D)!=" "){tn_arr[check_num]=J>0?(J>D?D:J):0}}b_t=sum_array(tn_arr);b_e=sum_array(en_arr)}if(D==J&&F.value.substring(D-1,D)==this.value.substring(J-1,J)&&tn_arr.length!=check_num/2&&check_num_lock!=1){check_num_lock=1;lock_num=check_num;check_num+=2;setTimeout(function(){if(check_num<div.length){div.item(check_num).getElementsByTagName("input").item(1).value=""}check_typing(check_num)},10);this.onkeydown="";this.onkeyup="";this.oninput="";if(getElementTop(this)-getScrollTop()>300){scroll_top=getElementTop(this)-300;window.scroll(0,scroll_top)}}else{if(D<J&&F.value.substring(D-1,D)==this.value.substring(D-1,D)&&tn_arr.length!=check_num/2&&check_num_lock!=1){check_num_lock=1;var B=this.value;div.item(check_num).getElementsByTagName("input").item(1).value=B.substr(0,D);check_num+=2;div.item(check_num).getElementsByTagName("input").item(1).value=B.substr(D,J-D);check_typing(check_num);this.onkeydown="";this.onkeyup="";this.oninput="";if(getElementTop(this)-getScrollTop()>300){scroll_top=getElementTop(this)-300;window.scroll(0,scroll_top)}}else{if(D<=J){if(H==13&&check_num_lock!=1){check_num_lock=1;check_num+=2;check_typing(check_num);this.onkeydown="";this.onkeyup="";this.oninput="";if(getElementTop(this)-getScrollTop()>300){scroll_top=getElementTop(this)-300;window.scroll(0,scroll_top)}}}}}}}var jishi_=null;function jishi(){if(start_time==0){start_time=get_time()}clearTimeout(jishi_);jishi_=setTimeout("jishi()",100);var F=G("typing_info_li");var D=G("name");var E=G("time");var H=pause_time>0?get_time()-pause_time:0;b_tc=get_time()-start_time-H-pause_limit;b_s=b_tc>0?formatFloat((b_t-b_e)/b_tc*60000,0):0;b_r=b_t>0?formatFloat((b_t-b_e)/b_t*100,0):0;if(b_tc>quxian.length*quxian_time*1000){if(quxian.length>=1){quxian[quxian.length]=b_t-quxian_b_t}else{quxian[0]=b_t}quxian_b_t=b_t}if(typeof(dazi_pk[0])!="undefined"){var A=b_tc*0.001/quxian_time;var C=0;for(var B=0;B<A+1;B++){if(typeof(dazi_pk[B])!="undefined"){if(B==parseInt(A+1)){C+=dazi_pk[B]*(A-parseInt(A))}else{C+=parseInt(dazi_pk[B])}}}dazi_pk_b_t=C.toFixed(2);show_dazi_pk()}F.innerHTML='<ul><li class="name">'+D.value+"</li><li>\u8bbe\u5b9a\uff1a"+E.value+' \u5206\u949f</li><li><div id="time_table">'+get_date(b_tc)+"</div></li><li>\u901f\u5ea6\uff1a"+b_s+" KPM</li><li>\u6b63\u786e\u7387\uff1a"+b_r+" %</li></ul><li>\u9519\u8bef\uff1a"+b_e+"</li><li>\u603b\u5b57\u6570\uff1a"+b_t+"</li><li>\u9000\u683c\uff1a"+b_b+'</li><li class="pinyin">\u62fc\u97f3\uff1a'+py_key+(py_str!=""?"("+py_str+")":"")+'</li><li class="wubi86">\u4e94\u7b14\uff1a'+wb_key1+(wb_str1!=""?"("+wb_str1+")":"")+'</li><li class="wubi86">\u8bcd\u7ec4\uff1a'+wb_key+(wb_str!=""?"("+wb_str+")":"")+'</li></ul><div class="clear"></div>';get_span_width(b_tc);move_div();if(b_tc>=E.value*60000){clearTimeout(jishi_);submit_form()}}function show_dazi_pk(){if(dazi_pk_b_t>0){var A=0;var D=0;for(var B=0;B<div.length;B+=2){var E=div.item(B).getElementsByTagName("input").item(0);var F=div.item(B).getElementsByTagName("span").item(1);var C=E.value.length;if(D+C>dazi_pk_b_t){A=dazi_pk_b_t-D;A=A.toFixed(2);F=F.offsetWidth;G("dazi_pk_"+B).style.display="block";G("dazi_pk_"+B).style.left=parseInt(A/C*F)+"px";if(dazi_pk_b_t>b_t){G("dazi_pk_"+B).className="dazi_pk"}else{G("dazi_pk_"+B).className="dazi_pk2"}break}else{D+=parseInt(C);G("dazi_pk_"+B).style.display="none"}}}}function dazi_pause(A){if(A.className=="pause"){A.innerHTML="继续";A.className="pause2";if(start_time>0){pause_time=get_time()}check_typing(check_num,"stop")}else{A.innerHTML="暂停";A.className="pause";if(start_time>0){pause_limit+=get_time()-pause_time;pause_time=0}check_typing(check_num)}}function close_light(A){if(A.className=="light"){A.innerHTML="开灯";A.className="light2";document.body.className="dazi_style_black"}else{A.innerHTML="关灯";A.className="light";document.body.className=""}}function get_quxian_data(C){var B=0;for(var A=0;A<quxian.length;A++){B+=quxian[A]}if(b_t-B!=0){quxian[quxian.length]=b_t-B}document.getElementById(C).value=quxian.join(",")}function alert_typing_end(E,C,D,I,A,F,H){alert("=======\u6d4b\u8bd5\u7ed3\u679c（"+(G("type").value=="cn"?"\u4e2d\u6587":"\u82f1\u6587")+"\u6253\u5b57）=======\n\u65f6\u95f4\uff1a"+G("time").value+"\u5206\u949f\uff0c\u901f\u5ea6\uff1a"+b_s+"KPM\uff0c\u6b63\u786e\u7387\uff1a"+b_r+"%");var B=G("info_form");B.action+="?"+E+"="+b_mo+"&"+C+"="+b_tc+"&"+D+"="+b_s+"&"+I+"="+b_r+"&"+A+"="+b_b+"&"+F+"="+b_t+"&"+H+"="+b_e;B.submit()}function setFocusLast(obj){if(typeof(eval("obj.createTextRange"))!="undefined"){var r=obj.createTextRange();r.moveStart("character",obj.value.length);r.collapse(true);r.select()}else{obj.setSelectionRange(obj.value.length,obj.value.length);obj.focus()}}function strstr(I,J){I=str2arr(I);J=str2arr(J);var D="";var C=0;var E=0;for(i=0;i<(I.length>J.length?I.length:J.length);i++){if(i<I.length){if(I[i]==J[i]){D+='<span class="green">'+I[i]+"</span>"}else{if(J[i]==null){D+=I[i];if(E==0&&J.length>0){E=i}}else{C++;D+='<span class="red">'+I[i]+"</span>"}}}}if(J.length==0||E!=0){var B=check_num/2;if(typeof(wubi86[B])=="array"||typeof(wubi86[B])=="object"){var A=wubi86[B];if(typeof(A[E])=="array"||typeof(A[E])=="object"){var H="";for(var F=E;F<E+A[E][0]&&F<I.length;F++){H+=I[F]}wb_str=H;wb_key=A[E][1]}}else{wb_str="";wb_key="-"}if(typeof(wubi861[B])=="array"||typeof(wubi861[B])=="object"){var A=wubi861[B];if(typeof(A[E])!="undefined"){wb_str1=I[E];wb_key1=A[E]}else{wb_str1="";wb_key1="-"}}else{wb_str1="";wb_key1="-"}if(typeof(pinyin[B])=="array"||typeof(pinyin[B])=="object"){var A=pinyin[B];if(typeof(A[E])!="undefined"){py_str=I[E];py_key=A[E]}else{py_str="";py_key="-"}}else{py_str="";py_key="-"}}else{wb_str="";wb_key="-";py_str="";py_key="-";wb_str1="";wb_key1="-"}en_arr[check_num]=C;return D}function sum_array(C){var B=0;for(var A=0;A<C.length*2&&A<=check_num;A+=2){if(C[A]>0){B+=C[A]}}return B}function str2arr(C){var B=new Array();for(var A=0;A<C.length;A++){B[A]=C.substr(A,1)}return B}function get_time(){var A=new Date();return A.getTime()}function formatFloat(B,A){return Math.round(B*Math.pow(10,A))/Math.pow(10,A)}function get_span_width(D){var A=G("time_table");var C=G("time");var B=formatFloat(D/(parseInt(C.value)*60000)*100,0)-100;A.style.backgroundPosition=B+"px 0px"}function get_date(A){var B=new Date(A);return B.getMinutes()+"分 "+B.getSeconds()+"秒"}function move_div(){var C=G("typing_info");var A=getElementTop(C)-getScrollTop()-100;var B=get_window_width();C.style.marginRight="0px";if((B-990)/2>124){C.style.right=Math.round((B-990)/2-124)+"px"}else{C.style.right="10px"}if(A>20){C.style.top=(getElementTop(C)-get_int(A))+"px"}if(A<0){C.style.top=(getElementTop(C)+get_int(A))+"px"}}function get_int(A){return formatFloat(Math.abs(A)*0.1,0)}function get_window_width(){var B,A;if(window.innerHeight&&window.scrollMaxY){B=document.body.scrollWidth;A=window.innerHeight+window.scrollMaxY}else{if(document.body.scrollHeight>document.body.offsetHeight){B=document.body.scrollWidth;A=document.body.scrollHeight}else{B=document.body.offsetWidth;A=document.body.offsetHeight}}return B}function getScrollTop(){var A=0;if(typeof window.pageYOffset!="undefined"){A=window.pageYOffset}else{if(typeof window.document.compatMode!="undefined"&&window.document.compatMode!="BackCompat"){A=window.document.documentElement.scrollTop}else{if(typeof window.document.body!="undefined"){A=window.document.body.scrollTop}}}return A}function getElementTop(B){var C=B.offsetTop;var A=B.offsetParent;while(A!==null){C+=A.offsetTop;A=A.offsetParent}return C}var rDrag={o:null,init:function(A){A.onmousedown=this.start},start:function(A){var B;A=rDrag.fixEvent(A);A.preventDefault&&A.preventDefault();rDrag.o=B=this;B.x=A.clientX-rDrag.o.offsetLeft;B.y=A.clientY-rDrag.o.offsetTop;document.onmousemove=rDrag.move;document.onmouseup=rDrag.end},move:function(A){A=rDrag.fixEvent(A);var C,B;C=A.clientX-rDrag.o.x;B=A.clientY-rDrag.o.y;rDrag.o.style.left=C+"px";rDrag.o.style.top=B+"px"},end:function(A){A=rDrag.fixEvent(A);rDrag.o=document.onmousemove=document.onmouseup=null},fixEvent:function(A){if(!A){A=window.event;A.target=A.srcElement;A.layerX=A.offsetX;A.layerY=A.offsetY}return A}};check_typing(check_num);G("loading").style.display="none";G("typing_info").style.display="block";rDrag.init(document.getElementById("typing_info"));
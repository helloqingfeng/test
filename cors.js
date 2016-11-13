// 跨浏览器的CORS(cross-Origin Resource Sharing，跨域资源共享)
function createCORSRequest(method,url){
	var xhr=new XMLHTTPRequest();
	if('withCredentials' in xhr){
		xhr.open(method,url,true);
	}else if(typeof XDomainRequest !='undefined'){
		xhr=new XDomainRequest();
		xhr.open(method,url);
	}else{
		xhr=null;
	}
	return xhr;



var request=createCORSRequest("get", "http://www.baidu.com/page/");
if(request){
	request.onload=function(){
		// 对request.responseText进行处理
	}；
	request.send();
}

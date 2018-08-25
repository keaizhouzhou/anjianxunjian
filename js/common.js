function getQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) return unescape(r[2]); return null; 
} 

function getUrlLastParams(url) {
	var arr = url.split('/'),
	    len = arr.length;
	return arr[arr.length-1];
}

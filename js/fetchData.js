  function fetchData(params) {
    let {url = '', method = 'post', headers = {}, data = null} = params;
    url = 'http://47.92.7.119:8080' + url;
    if (!url) {return};
    return new Promise( res => {
      data = $.param(params.data);
      headers = {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        ...headers
      };
      axios({url, method, headers, data}).then(response => {
        res(response);
      }).catch(error => {
        throw new Error(error);
      })
    })
  }
  
  
  function fetchDataBase (params) {
    let {url = '', method = 'post', headers = {}, data = null} = params;
//  url = 'http://47.92.7.119:8080' + url;
    if (!url) {return};
    return new Promise( res => {
      data = $.param(params.data);
      headers = {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        ...headers
      };
      axios({url, method, headers, data}).then(response => {
        res(response);
      }).catch(error => {
        throw new Error(error);
      })
    })
  }


  function getUserid(){
    return sessionStorage.getItem('userId');
  }

  var getRegionId = ()=>{
    return sessionStorage.getItem('regionId');
  }
  
  var isProduct = false; // 判断是否是生产环境

  // 授权服务器地址
  function authorizeUrl () {
  	if(isProduct) {
  		return "http://a.0t.com.cn";  // 生产
  	} else {
  		return "http://runyapp.s1.natapp.cc/authz";
  	}
  }
  
  //  业务服务器地址
  function businessUrl() {
  	if(isProduct) {
  		return "https://i.0t.com.cn";  // 生产
  	} else {
  		return "http://runyapp.s1.natapp.cc/api/" + clientSettings.authorizeType + '/';
  	}
  }
  
	//  配置信息
	var clientSettings = {
		client_id: "vQzpPTDRs0fi7pNGmnv4",
		client_secret: "xVfxCsvtp2HKUGcxEQrh",
		grant_type: "client_credentials",
		scope: "read write",
		authorizeType: 'ex', // 授权类型
	}


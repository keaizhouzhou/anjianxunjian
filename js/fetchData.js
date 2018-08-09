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


  function getUserid(){
    return sessionStorage.getItem('userId');
  }
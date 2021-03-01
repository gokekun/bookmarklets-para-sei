javascript:(
  function(){
    var url_string = window.location.href;
    var url = new URL(url_string);
    var c = url.searchParams.get("id_procedimento");
    var ende = location.protocol + '//' + location.host + location.pathname;
    alert(ende+"?acao=procedimento_trabalhar&id_procedimento="+c)
  }
)();

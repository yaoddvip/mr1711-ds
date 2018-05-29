var BB = BAOBAO = {
	checkLogin : function(){
		var _ticket = $.cookie("COOKIE_TOKEN_KEY");
		if(!_ticket){
			return ;
		}
		$.ajax({
			url : "http://localhost:8087/user/token/" + _ticket,
			dataType : "jsonp",
			type : "GET",
			success : function(data){
				if(data.status == 200){
                    console.log(_ticket);
                    var username = data.data.username;
					var html = username + "，欢迎来到商城！<a href=\"http://localhost:8087/user/logout/"+_ticket+"\" class=\"link-logout\">[退出]</a>";
					$("#loginbar").html(html);
				}
			}
		});
	}
}

$(function(){
	// 查看是否已经登录，如果已经登录查询登录信息
	BB.checkLogin();
});
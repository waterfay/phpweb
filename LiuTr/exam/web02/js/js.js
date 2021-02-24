// JavaScript Document
function lo(th,url)
{
	$.ajax(url,{cache:false,success: function(x){$(th).html(x)}})
}
function good(id,type,user)
{
	$.post("./api/good.php",{id,type,user},function()
	{
		if(type=="1")
		{
			$("#vie"+id).text($("#vie"+id).text()*1+1)
			$("#good"+id).text("收回讚").attr("onclick","good('"+id+"','2','"+user+"')")
		}
		else
		{
			$("#vie"+id).text($("#vie"+id).text()*1-1)
			$("#good"+id).text("讚").attr("onclick","good('"+id+"','1','"+user+"')")
		}
	})
}

function shee(id,sh)
{
	$.post("./api/sh.php",{id,sh},function()
	{
		if(sh=="1")
		{
			$("#sh"+id).text("不開放").attr("onclick","good('"+id+"','0','"+sh+"')")
		}
		else
		{
			$("#sh"+id).text("開放").attr("onclick","good('"+id+"','1','"+sh+"')")
		}
	})
}
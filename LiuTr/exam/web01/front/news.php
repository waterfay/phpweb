<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- saved from url=(0040)http://127.0.0.1/test/exercise/collage/? -->
<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>卓越科技大學校園資訊系統</title>
<link href="./css/css.css" rel="stylesheet" type="text/css">
    <script src="./js/jquery-1.9.1.min.js"></script>
    <script src="./js/js.js"></script>
</head>

<body>
<div id="cover" style="display:none; ">
	<div id="coverr">
    	<a style="position:absolute; right:3px; top:4px; cursor:pointer; z-index:9999;" onclick="cl(&#39;#cover&#39;)">X</a>
        <div id="cvr" style="position:absolute; width:99%; height:100%; margin:auto; z-index:9898;"></div>
    </div>
</div>
<iframe style="display:none;" name="back" id="back"></iframe>
	<div id="main">
    	<a title="" href="./home_files/home.htm"><div class="ti" style="background:url(&#39;use/&#39;); background-size:cover;"></div><!--標題--></a>
        	<div id="ms">
             	<div id="lf" style="float:left;">
            		<div id="menuput" class="dbor">
                    <!--主選單放此-->
                    	                            <span class="t botli">主選單區</span>
                                                </div>
                    <div class="dbor" style="margin:3px; width:95%; height:20%; line-height:100px;">
                    	<span class="t">進站總人數 : 
                        	1                        </span>
                    </div>
        		</div>
                <div class="di" style="height:540px; border:#999 1px solid; width:53.2%; margin:2px 0px 0px 0px; float:left; position:relative; left:20px;">
                	                     <marquee scrolldelay="120" direction="left" style="position:absolute; width:100%; height:40px;">
                    	                    </marquee>
                    <div style="height:32px; display:block;"></div>
                                        <!--正中央-->
                                        <script>
                    	var lin=new Array();
						var now=0;
						if(lin.length>1)
						{
							setInterval("ww()",3000);
							now=1;
						}
						function ww()
						{
							$("#mwww").html("<embed loop=true src='"+lin[now]+"' style='width:99%; height:100%;'></embed>")
							//$("#mwww").attr("src",lin[now])
							now++;
							if(now>=lin.length)
							now=0;
						}
                    </script>
                	<div style="width:100%; padding:2px; height:290px;">
                    	<div id="mwww" loop="true" style="width:100%; height:100%;">
                        	                                <div style="width:99%; height:100%; position:relative;" class="cent">沒有資料</div>
                                                        </div>
                    </div>
                	<div style="width:95%; padding:2px; height:190px; margin-top:10px; padding:5px 10px 5px 10px; border:#0C3 dashed 3px; position:relative;">
                    		<span class="t botli">最新消息區
                            								</span>
                            <ul class="ssaa" style="list-style-type:decimal;">
                            	                            </ul>
        			<div id="altt" style="position: absolute; width: 350px; min-height: 100px; background-color: rgb(255, 255, 204); top: 50px; left: 130px; z-index: 99; display: none; padding: 5px; border: 3px double rgb(255, 153, 0); background-position: initial initial; background-repeat: initial initial;"></div>

</body></html>
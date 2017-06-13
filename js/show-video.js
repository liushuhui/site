/**
 * Created with JetBrains WebStorm.
 * User: 90Arther
 * Date: 13-9-28
 * Time: 下午3:26
 * To change this template use File | Settings | File Templates.
 */
/** @author:xylonhuang http://www.m.com/d/?p=313 @update:2013.9.10 @version:v1.2.6 **/
//配置弹出层，传入id
function TGDialogS(e){showDialog.show({id:e,bgcolor:"#000000",opacity:100});}
//弹出层
function DivHide(){
    var flv_s = document.getElementById("swfLay");
    if (flv_s){flv_s.innerHTML= "";}
    showDialog.hide('layer');
}

function DivShow(videoID){
    if (!videoID) return;
    var htmls=
        "<object width=\"320\" height=\"240\" data="+videoID+".swf align=\"middle\" id=\"flashplayer\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codeBase=\"http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab#version=10,0,0,0\">" +
        "<param name=\"movie\" value="+videoID+".swf>" +
        "<param name=\"quality\" value=\"High\">" +
        "<param name=\"allowscriptaccess\" value=\"always\">" +
        "<param name=\"allowNetworking\" value=\"all\">" +
        "<param name=\"allowFullScreen\" value=\"true\">" +
        "<embed width=\"320\" wmode=\"Opaque\" height=\"240\" align=\"middle\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" type=\"application/x-shockwave-flash\" allowfullscreen=\"true\" allowscriptaccess=\"always\" id=\"flashplayer\" name=\"_playerswf\" quality=\"high\" src="+videoID+".swf wmode=\"transparent\">" +
        "</object>";
    var flv_s = document.getElementById("swfLay");
    if (flv_s){flv_s.innerHTML=htmls}
    showDialog.show({
        id:"videoLay",
        bgcolor:"#000",
        opacity:60
    });
    document.getElementById("local_btn").href=videoID+".mp4";
}
function DivShow2(videoID){
   /* var videoUrl = "http://222.200.98.142/2013/gczt/new/";*/
    var videoUrl = "http://localhost/gczt/new/new/";
    videoID = videoUrl+videoID;
    if (!videoID) return;
    var htmls = '<video width="1024" height="576" controls="controls" autoplay="autostart" src="'+videoID+'.mp4'+'" >'+
        '<source src="'+videoID+'.mp4'+'" type="video/mp4" />'+
        '</video>';        
    var video = document.getElementById("video");
    //兼容IE浏览器
    var embed = '<embed src="'+videoID+'.mp4'+'"  autostart="true" loop="true" width="1024" height="576"/>';
    var embed_wmv = '<embed src="'+videoID+'.wmv'+'"  autostart="true" loop="true" width="1024" height="576"/>';
    //兼容chrome 360 FF 搜狗
    var html5 = '<video width="1024" height="576" controls="controls" autoplay="autostart" src="'+videoID+'.mp4'+'" >'+
        '<source src="'+videoID+'.mp4'+'" type="video/mp4" />'+
        '</video>';
    //备用的object对象
    var object = '<object data="'+videoID+'.mp4'+'" width="1024" height="576">'+
        '<embed src="'+videoID+'.mp4'+'"  autostart="true" loop="true" width="1024" height="576"/>'+
        '</object>';

    if(client.browser.ie){htmls= embed;}
    if(client.browser.ie<=8 && client.system.win == "XP"){htmls = embed_wmv;}
    if(client.browser.safari){
        alert("请使用本地播放器播放视频或者用其它浏览器打开");
    }
    if(client.browser.firefox){htmls = html5;}
    if(client.browser.konq){htmls = embed;}
    if(client.browser.chrome){htmls = html5;}

    var flv_s = document.getElementById("swfLay");
    if (flv_s){flv_s.innerHTML=htmls}
    showDialog.show({
        id:"videoLay",
        bgcolor:"#000",
        opacity:60
    });
    document.getElementById("local_btn").href=videoID+".mp4";
}
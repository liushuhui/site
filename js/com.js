/*tab面板切换*/	
$(document).ready(function(){
	    var $div_li =$("ul.tab_menu li");
	    $div_li.click(function(){
			$(this).addClass("selected") 			//当前<li>元素高亮
			
				   .siblings().removeClass("selected");  //去掉其它同辈<li>元素的高亮
            var index =  $div_li.index(this);  // 获取当前点击的<li>元素 在 全部li元素中的索引。
			$("div.tab_box > div")   	//选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
					.eq(index).show()   //显示 <li>元素对应的<div>元素
					.siblings().hide(); //隐藏其它几个同辈的<div>元素
		}).hover(function(){
			$(this).addClass("hover");
		},function(){
			$(this).removeClass("hover");
		});
	});

$(document).ready(function(){
var $child = $('.child');
var $link = $('.child').prev();
$child.mouseenter(function(){
    $link = $(this).prev();
    $link.addClass('bg_weiguo');
});
$child.mouseleave(function(){
    $link.removeClass('bg_weiguo');
});
});	




startList = function() {
    if (document.all&&document.getElementById) {
        navRoot = document.getElementById("nav");
        for (i=0; i<navRoot.childNodes.length; i++) {
            node = navRoot.childNodes[i];
            if (node.nodeName=="LI") {
                node.onmouseover=function() {
                    this.className+=" over";
                }
                node.onmouseout=function() {
                    this.className=this.className.replace(" over", "");
                }
            }
        }
    }
}
window.onload=startList;
	
	  /*声明一个仓库将所有flash的信息存储起来，按顺序排好，第一个是varehouse[0],第二个是varehouse[1]。*/
    var warehouse=[
	   {
            "name":"flash1",
            "src":"images/1.pdf",
            "width":"695",
            "height":"550"
        },

        {
            "name":"flash2",
            "src":"flash/2.swf",
            "width":"695",
            "height":"550"
        },

        {
            "name":"flash3",
            "src":"flash/3.swf",
            "width":"695",
            "height":"550"
        },
		 {
            "name":"flash4",
            "src":"flash/4.swf",
            "width":"695",
            "height":"550"
        },
		 {
            "name":"flash5",
            "src":"flash/5.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash6",
            "src":"flash/6.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash7",
            "src":"flash/7.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash8",
            "src":"flash/8.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash9",
            "src":"flash/9.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash10",
            "src":"flash/10.swf",
            "width":"695",
            "height":"550"
        },
		
       {
            "name":"flash11",
            "src":"flash/11.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash12",
            "src":"flash/12.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash13",
            "src":"flash/13.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash14",
            "src":"flash/14.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash15",
            "src":"flash/15.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash16",
            "src":"flash/16.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash17",
            "src":"flash/17.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash18",
            "src":"flash/18.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash19",
            "src":"flash/19.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash20",
            "src":"flash/20.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash21",
            "src":"flash/21.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash22",
            "src":"flash/22.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash23",
            "src":"flash/23.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash24",
            "src":"flash/24.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash25",
            "src":"flash/25.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash26",
            "src":"flash/26.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash27",
            "src":"flash/27.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash28",
            "src":"flash/28.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash29",
            "src":"flash/29.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash30",
            "src":"flash/30.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash31",
            "src":"flash/31.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash32",
            "src":"flash/32.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash33",
            "src":"flash/33.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash34",
            "src":"flash/34.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash35",
            "src":"flash/35.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash36",
            "src":"flash/36.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash37",
            "src":"flash/37.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash38",
            "src":"flash/38.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash39",
            "src":"flash/39.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash40",
            "src":"flash/40.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash41",
            "src":"flash/41.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash42",
            "src":"flash/42.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash43",
            "src":"flash/43.swf",
            "width":"695",
            "height":"550"
        },
		{
            "name":"flash44",
            "src":"flash/44.swf",
            "width":"695",
            "height":"550"
        },
		
	];
   /*获取flash对象，即放置flash的div*/
    var flash = document.getElementById('flash');
    /*改变flash的函数*/
    function change(n){
        flash.innerHTML = renderMusicBoxHtmlCode(n);
    }
    /*返回flash的内容,根据n确定是哪个flash，将这个flash赋给变量m储存起来。*/
    function renderMusicBoxHtmlCode(n) {
        var m = warehouse[n];
        return ''.concat(
                '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"',
                ' codebase="http://active.macromedia.com/flash5/cabs/swflash.cab#version=5,0,0,0"',
                ' id="mymusicbox" width="',m.width,'" height="',m.height,'">',
                '<param name="movie" value="',m.src,'">',
                '<param name="play" value="false">',
                '<param name="wmode" value="Opaque">',
                '<embed name="mymusicbox" wmode="Opaque" wmode="transparent" src="',m.src,
                '" width="',m.width,'" height="',m.height,
                '" play="false">',
                '</object>');
    }
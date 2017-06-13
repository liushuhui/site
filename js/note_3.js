/*切换右侧内容*/
var tab_con = $('.tab_con');

(function(){
    var nowindex=0;
    for(var index=0;index<tab_con.length;index++)
    {
        document.getElementById("mynav"+index).onclick=function(){
            var i=this.id.replace("mynav","");
            if(i!=nowindex.toString()){
                this.className="nav_on";
                document.getElementById("qh_con"+i).style.display="block";
                document.getElementById("mynav"+nowindex).className="nav_off";
                document.getElementById("qh_con"+nowindex).style.display="none";
                nowindex=i;
            }
        }
    }
})();



var tab_conh = $('.tab_conh');

(function(){
    var nowindex=0;
    for(var index=0;index<tab_conh.length;index++)
    {
        document.getElementById("mynavh"+index).onclick=function(){
            var i=this.id.replace("mynavh","");
            if(i!=nowindex.toString()){
                this.className="nav_on";
                document.getElementById("qh_conh"+i).style.display="block";
                document.getElementById("mynavh"+nowindex).className="nav_off";
                document.getElementById("qh_conh"+nowindex).style.display="none";
                nowindex=i;
            }
        }
    }
})();




/*左侧一级导航hover状态*/
/*$(document).ready(function (){
    $(".drop_menu li").each(function(index){
        $(this).click(function(){
            $(".drop_menu li").removeClass("first");
            $(".drop_menu li").eq(index).addClass("first");
        });
    });
});*/

$(document).ready(function(){
        $('#mynavh0').click(function(){
            $('#qh_conh0').show();
        })
        var $div_li =$("ul.tab_menu li");
        $div_li.click(function(){
            $(this).addClass("selected")            //当前<li>元素高亮
            
                   .siblings().removeClass("selected");  //去掉其它同辈<li>元素的高亮
            var index =  $div_li.index(this);  // 获取当前点击的<li>元素 在 全部li元素中的索引。
            $("div.tab_box > div")      //选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
                    .eq(index).show()   //显示 <li>元素对应的<div>元素
                    .siblings().hide(); //隐藏其它几个同辈的<div>元素
            $('.content-main >div').eq(index).show().siblings().hide();

            $("div.tab_box > div")
            $("div.tab_box  li").removeClass("first");
        });
        
        $(".drop_menu li").each(function(index){
        $(this).click(function(){
            $(".drop_menu li").removeClass("first");
            $(".drop_menu li").eq(index).addClass("first");
        });
    });
        $(".hide li").each(function(index){
        $(this).click(function(){
            $(".hide li").removeClass("first");
            $(".hide li").eq(index).addClass("first");
        });
    });
        /*.click(function(){
            $(this).addClass("hover");
        },function(){
            $(this).removeClass("hover");
        });*/
    });
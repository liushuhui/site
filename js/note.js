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

//实现图片放大功能
  

/*左侧一级导航hover状态*/
$(document).ready(function (){
    $(".drop_menu li").each(function(index){
        $(this).click(function(){
            $(".drop_menu li").removeClass("first");
            $(".drop_menu li").eq(index).addClass("first");
        });
    });
});
$(function(){
    $('#f').click(function(){
        $('#f1').fadeToggle('slow');
        
    })
    $('#f2').click(function(){
        $('#f3').fadeToggle('slow');
    })
    $('#f4').click(function(){
        $('#f5').fadeToggle('slow');
    })
    
})
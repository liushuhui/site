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
(function(){
	    var nowindex=0;
		var tab_child = 5;
		for(var index=0;index<tab_child;index++)
		{
			document.getElementById("ymnav"+index).onclick=function(){
			    var i=this.id.replace("ymnav","");
				if(i!=nowindex.toString()){
				   this.className="ymnav_on";
				   document.getElementById("ym_con"+i).style.display="block";
				   document.getElementById("ymnav"+nowindex).className="ymnav_off";
				   document.getElementById("ym_con"+nowindex).style.display="none";
				   nowindex=i;
	            }
			}
		}
	})();

	

    /*左侧导航hover状态*/ 
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




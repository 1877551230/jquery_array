$(function(e){
	$("#d1 #btn1").click(function(e){
		//length
		var $obj=$("#d1 ul li");
		alert($obj);
		alert($obj.length);
	});
	
	/*$("#d1 #btn2").click(function(e){
		//each(fn)
		var $obj=$("#d1 ul li");
		$obj.each(function(i){
			// i:正在遍历的dom对象的下标
			if(i==1){
				$(this).css("font-size","50px");
				return;
			}
		})
	});*/
	$("#d1 #btn2").click(function(e){
		//each(fn)
		var $obj=$("#d1 ul li");
		$obj.each(function(i,value){
			// i:正在遍历的dom对象的下标
			// value:正在遍历的那个dom对象,等同于$(this)
			if(i==1){
				$(value).css("font-size","50px");
				return;
			}
		})
	});
	
	$("#d1 #btn3").click(function(e){
		//eq()
		var $obj=$("#d1 ul li");
		var $obj1=$obj.eq(1);
		$obj1.css("font-size","50px");
	});
	$("#d1 #btn4").click(function(e){
		//get()
		var $obj=$("#d1 ul li");
		var obj=$obj.get(1);//此时obj对象是原生js对象不是jquery对象
		var $obj1=$(obj);
		$obj1.css("font-size","50px");
	});
	$("#d1 #btn5").click(function(e){
		//index()
		var $obj=$("#d1 ul li");
		var obj=$obj.get(1);//此时obj对象是原生js对象不是jquery对象
		var index=$obj.index(obj);
		alert(index);
	});
});











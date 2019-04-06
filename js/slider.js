

$(document).ready(function(){
	flag=1;
	$('#nex').click(function(){
		if(flag==0)
		{
			$("#slide1").css("z-index","999");
			$("#slide2").css("z-index","9");
			$("#slide3").css("z-index","9");
			$("#slide1").css("transform","translateX(0px) scale(1.2)");
			$("#slide2").css("transform","translateX(-340px) scale(1)");
			$("#slide3").css("transform","translateX(340px)");
			flag=1;
		}
		else if(flag==1)
		{
			$("#slide3").css("z-index","999");
			$("#slide2").css("z-index","9");
			$("#slide1").css("z-index","9");
			$("#slide3").css("transform","translateX(0px) scale(1.2)");
			$("#slide1").css("transform","translateX(-340px) scale(1)");
			$("#slide2").css("transform","translateX(340px)");
			flag=2;	
		}
		else if(flag==2)
		{
			$("#slide2").css("z-index","999");
			$("#slide3").css("z-index","9");
			$("#slide1").css("z-index","9");
			$("#slide2").css("transform","translateX(0px) scale(1.2)");
			$("#slide3").css("transform","translateX(-340px) scale(1)");
			$("#slide1").css("transform","translateX(340px)");
			flag=0;	
		}

	});

	$('#pre').click(function(){
		if (flag==0) {
			$("#slide3").css("z-index","999");
			$("#slide2").css("z-index","9");
			$("#slide1").css("z-index","9");
			$("#slide3").css("transform","translateX(0px) scale(1.2)");
			$("#slide1").css("transform","translateX(-340px) scale(1)");
			$("#slide2").css("transform","translateX(340px)");
			flag=2;		
		}

		else if(flag==1){
			$("#slide2").css("z-index","999");
			$("#slide3").css("z-index","9");
			$("#slide1").css("z-index","9");
			$("#slide2").css("transform","translateX(0px) scale(1.2)");
			$("#slide3").css("transform","translateX(-340px) scale(1)");
			$("#slide1").css("transform","translateX(340px)");
			flag=0;		
			}

		else if(flag==2){
			$("#slide1").css("z-index","999");
			$("#slide2").css("z-index","9");
			$("#slide3").css("z-index","9");
			$("#slide1").css("transform","translateX(0px) scale(1.2)");
			$("#slide2").css("transform","translateX(-340px) scale(1)");
			$("#slide3").css("transform","translateX(340px)");
			flag=1;		
			}

		
	});
});


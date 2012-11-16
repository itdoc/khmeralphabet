$(document).ready(function(e) {
	arrange();
    $("#btn_play").click(function(e) {
       /* $("#div_welcome").animate({left:$("#div_welcome").offset().left - $("#div_welcome").outerWidth()},function(){
			$("#div_welcome").hide();
			$("#div_play").show();
			$("#div_play").animate({left:0});	
			
		});*/
		$("#div_welcome").hide();
		$("#div_level").show();
    });
	
	$("#btn_exit").click(function(e) {
        
		navigator.app.exitApp();
		
    });
	
	
	$("#btn_back").click(function(e) {
        $("#div_level").hide();
		$("#div_welcome").show();

    });
	
	//level action
	$("#level01_icon").click(function(e) {
		level = 1;
		$("#level_info").html("Level "+level);
		gameLoad();
		$("#div_level").hide();
		$("#div_play").show();
		$("#div_menu").show();
    });
	$("#level02_icon").click(function(e) {
		level = 2;
		$("#level_info").html("Level "+level);
		gameLoad();
		$("#div_level").hide();
		$("#div_play").show();
		$("#div_menu").show();
    });
	$("#level03_icon").click(function(e) {
		level = 3;
		$("#level_info").html("Level "+level);
		gameLoad();
		$("#div_level").hide();
		$("#div_play").show();
		$("#div_menu").show();
    });

	$("#level04_icon").click(function(e) {
		level = 4;
		$("#level_info").html("Level "+level);
		gameLoad();
		$("#div_level").hide();
		$("#div_play").show();
		$("#div_menu").show();
    });

	$("#level05_icon").click(function(e) {
		level = 5;
		$("#level_info").html("Level "+level);
		gameLoad();
		$("#div_level").hide();
		$("#div_play").show();
		$("#div_menu").show();
    });

	$("#level06_icon").click(function(e) {
		level = 6;
		$("#level_info").html("Level "+level);
		gameLoad();
		$("#div_level").hide();
		$("#div_play").show();
		$("#div_menu").show();
    });

	$("#level07_icon").click(function(e) {
		level = 7;
		$("#level_info").html("Level "+level);
		gameLoad();
		$("#div_level").hide();
		$("#div_play").show();
		$("#div_menu").show();
    });

	$("#level08_icon").click(function(e) {
		level = 8;
		$("#level_info").html("Level "+level);
		gameLoad();
		$("#div_level").hide();
		$("#div_play").show();
		$("#div_menu").show();
    });


	//end level action
	$("#btn_menu").click(function(e) {
		
		$("#div_sub_menu").slideToggle(function(){$("#div_menu").toggleClass("blur_back");});
		
		
    });
	$("#btn_replay").click(function(e) {
		gameLoad();			
    });
	
	$("#btn_level_back").click(function(e) {
		$("#div_winner").hide();
		$("#div_play").hide();
		$("#div_level").show();
    });
	
	$("#btn_level_back_winner").click(function(e) {
		$("#div_play").hide();
        $("#div_winner").hide();
		$("#div_level").show();
    });
	
	$("#btn_replay_winner").click(function(e) {
        $("#div_winner").hide();
		$("#div_menu").show();
		gameLoad();
    });
	
	$("#btn_next_winner").click(function(e) {
		level +=1 ;
		$("#div_winner").hide();
		$("#div_menu").show();
        gameLoad();	
    });
	
	$("#btn_info").click(function(e) {
        $("#div_welcome").hide();
		$("#div_info").show();
    });
	
	$("#btn_back_info").click(function(e) {
        $("#div_info").hide();
		$("#div_welcome").show();
    });
});

function arrange(){
	$(document).contents().mousedown(function(e) {
        return false;
    });
	var win_width = $(document).innerWidth();
	$(".buttons_small").css({width:win_width/15});
	$("#btn_play").css({width:win_width/8});
	var win_width = $(document).innerWidth();
	var win_height = $(document).innerHeight();
	if(win_width < win_height){
		$(".big_images").css({width:'100%'});	
	}else{
		$(".big_images").css({height:'100%'});	
	}
	$(".pages").hide();
	$("#div_welcome").show();

}

function showwinner(){
	if(level >=8){
		$("#btn_next_winner").hide();	
	}
	$("#div_menu").hide();
   	$("#div_winner").show();
	
}

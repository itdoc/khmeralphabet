var arr_number= new Array();
var first_number="";
var second_number="";
var matched = 0;
var pair_num;
var timeId;
var locked=false;
var level;

var block_width;
var block_height;

function setValue(){
var win_width = $(document).innerWidth();
var win_height = $(document).innerHeight();
	var base_value_min;
	var base_value_max;
	win_height = win_height - (win_height/10);
	if( win_width > win_height){
		base_value_min = win_height;
		base_value_max = win_width;	
	}else{
		base_value_max = win_height;
		base_value_min = win_width;	
	}
	
	block_width = ((base_value_max-10)/4);
	block_height = ((base_value_min-10)/3);
	
	if(block_width > block_height){
		block_width = block_height;	
	}else{
		block_height = block_width;	
	}
	if( win_width > win_height){
		$("#container").width(block_width*4);
	}else{
		$("#container").width(block_width*3);
	}
	
}
function gameLoad(){
	setValue();
	$(".db").children("*").remove();
	arr_number= new Array();
	first_number="";
	second_number="";
    matched = 0;
	pair_num = 6;
	generatNumber(pair_num);
	arrayShuffle(arr_number);
	arrayShuffle(arr_number);
	arrayShuffle(arr_number);

	generateImageOn($(".db"));
	$(".block").show();
	$(".block").click(changeClass);
	$(".block").bind("flipped",flipCard);

	
}
function changeClass(){
	
	if(locked == false){
		if(!$(this).hasClass("rotated")){
			$(this).addClass("rotated");
		}
		var cur = $(this);
		setTimeout(function(){
			$(cur).trigger("flipped");
		}, 1200);
	}
}

function generateImageOn(elem){
	var back_img = getRandomBack();
	for(var i=0; i< arr_number.length; i++){
		var cur_number = arr_number[i];
		
		var block = $('<div class="block" id="block'+cur_number+'"></div>');
		var back_side = $('<div class="front side"><img src="img/backs/'+back_img+'" width="'+block_width+'" alt=""/></div>');
		var front_side = $('<div class="back side"></div>');
		var img = $('<img src="img/level'+level+'/pic'+cur_number+'.png" alt=""/>');
		
		$(img).css({width:block_width, height:block_height});
		$(front_side).css({width:block_width, height:block_height});
		$(back_side).css({width:block_width, height:block_height});
		$(block).css({width:block_width, height:block_height});

		$(img).appendTo($(front_side));
		$(front_side).appendTo($(block));
		$(back_side).appendTo($(block));
		$(block).appendTo($(elem));
	
	}
	
}
function getRandomBack(){
	return "back"+Math.floor(Math.random() * (5) + 1)+".png";
}

function generatNumber(n_pair){
	for(var i=1; i<= n_pair; i++){
		arr_number[arr_number.length] = i;	
		arr_number[arr_number.length] = i+"_2";
	}
}

function arrayShuffle(theArray) {
 	var len = theArray.length;
	var i = len;
	 while (i--) {
	 	var p = parseInt(Math.random()*len);
		var t = theArray[i];
  		theArray[i] = theArray[p];
	  	theArray[p] = t;
 	}
};

function flipCard(){
	var index = $(this).attr("id");
	if(!($(this).hasClass("rotated"))){
		first_number = "";
		second_number = "";
	}else{
		if(first_number ==""){
			first_number = index;
		}else{
			if(index != first_number){
			second_number = index;
			locked = true;
			}
		}
		if(first_number != "" && second_number != ""){
			if(first_number.replace("_2","") == second_number.replace("_2","")){
				matched+= 1;
				$("#"+second_number + ",#"+first_number).css({visibility:'hidden'});
				checkWin();
			}else{
				$("#"+second_number + ",#"+first_number).removeClass("rotated");
			}
			locked = false;
			first_number = "";
			second_number = "";
		}
	}
}

function checkWin(){
	if(matched == pair_num){
		showwinner();	
	}
}



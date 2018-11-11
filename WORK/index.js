var clicked = 0;

function navBar(){
    if(clicked==1){
        $("#navPanel").css("opacity", "0");
        clicked=0;
    }else{
        $("#navPanel").css("opacity", "1");
        clicked=1;
    }
}


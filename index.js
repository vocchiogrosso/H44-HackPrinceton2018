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

document.getElementById('results').innerHTML = 
'<h2>This Is The Live Feed</h2>';
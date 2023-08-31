
//working on the logic behind the slideshow
//when the document is ready it will directly run a function
$(document).ready(function(){
    i=2
    var y={};
    //when the right buttton is clicked this function will take place
    $('#right').on('click',function(){
        
        if(y>=2){
            i=y
            document.getElementById('slide'+i).style.zIndex=i;
            i=i+1;
            y=i
        
        }
        else{
            document.getElementById('slide'+i).style.zIndex=i;
            i=i+1;
            y=i
        }
        if(i==4){
            document.getElementById('right').style.zIndex='0';
        } 
        if(i>2){
            document.getElementById('left').style.zIndex='10';
        }

    });

    $('#left').on('click',function(){
        if (y<5){
            document.getElementById('slide'+(y-1)).style.zIndex=0; 
            document.getElementById('right').style.zIndex='4';
            y=y-1
            if (y==2){
                document.getElementById('left').style.zIndex='0';
            }
        }
        
        
    });
    
    
});
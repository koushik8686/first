var topp=[];
var array=[];
var count =0;
var arr=[[],[],[],[],[],[],[],[]];
for (let index = 0; index < 8; index++) {
    var io=0;
   topp[index]=io; 
   console.log(topp[index])
}
$(".butt").click(function (e) { 

 if (!gameover()) {  
 
    var col =$(this).attr("id");
    col=col%100;
    var tup =topp[col];
    var pos = 8*(6-tup)-(8-col);

    if (arrayfill(col)) {
        alert("select other box");
    } else {
    topp[col]++;
   if (count%2==0) {
    $("#"+pos) .text("O");
     $("#"+pos).addClass("font");
     $(".head").text("chance of player 2");
     $("#"+pos).addClass("red");
     arr[5-tup][col]="O";
     console.log(5-col);
   }else{
    $("#"+pos).text("O");
    $("#"+pos).addClass("font");
    arr[5-tup][col]="X";
    $("#"+pos).addClass("blue");
    $(".head").text("chance of player 1");
   }
 count++;}}
});

function arrayfill( n) {
    if (topp[n]==6) {
        return true;
    }
    return false;
}

function gameover(params) {
     for(let i=0;i<6;i++) { 
        for (let j=0;j<5;j++) { 
            if (arr[i][j]=="O"&&arr[i][j+1]=="O"&&arr[i][j+3]=="O"&&arr[i][j+2]=="O") {
                $(".head").text("player 1 wins ");
                return true;
            }
        }
     } 
     for(let i=0;i<6;i++) { 
        for (let j=0;j<5;j++) { 
            if (arr[i][j]=="O"&&arr[i][j+1]=="O"&&arr[i][j+3]=="O"&&arr[i][j+2]=="O") {
                $(".head").text("player 2 wins ");
                return true;
            }
        }
     } 
     for(let i=0;i<4;i++) { 
        for (let j=0;j<8;j++) { 
            if (arr[i][j]=="O"&&arr[i+1][j]=="O"&&arr[i+2][j]=="O"&&arr[i+3][j]=="O") {
                $(".head").text("player 1 wins ");
                return true;
            }
        }
     } 
     for(let i=0;i<4;i++) { 
        for (let j=0;j<8;j++) { 
            if (arr[i][j]=="X"&&arr[i+1][j]=="X"&&arr[i+2][j]=="X"&&arr[i+3][j]=="X") {
                $(".head").text("player 2 wins ");
                return true;
            }
        }
     } 
     for(let i=0;i<4;i++) { 
        for (let j=0;j<5;j++) { 
            if (arr[i][j]=="O"&&arr[i+1][j+1]=="O"&&arr[i+2][j+2]=="O"&&arr[i+3][j+3]=="O") {
                $(".head").text("player 1 wins ");
                return true;
            }
        }
     } 
     for(let i=0;i<4;i++) { 
        for (let j=0;j<5;j++) { 
            if (arr[i][j]=="X"&&arr[i+1][j+1]=="X"&&arr[i+2][j+2]=="X"&&arr[i+3][j+3]=="X") {
                $(".head").text("player 2 wins ");
                return true;
            }
        }
     } 
     for(let i=5;i>2;i--) { 
        for (let j=0;j<5;j++) { 
            if (arr[i][j]=="O"&&arr[i-1][j+1]=="O"&&arr[i-2][j+2]=="O"&&arr[i-3][j+3]=="O") {
            
                $(".head").text("player 1 wins ");
                return true;
            }
        }
     } 
     for(let i=5;i>2;i--) { 
        for (let j=0;j<5;j++) { 
            if (arr[i][j]=="X"&&arr[i-1][j+1]=="X"&&arr[i-2][j+2]=="X"&&arr[i-3][j+3]=="X") {
                $(".head").text("player 2 wins ");
                return true;
            }
        }
     } 

     return false;
}
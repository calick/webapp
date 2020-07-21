document.getElementById("buttonSample").onclick = function(){
    document.getElementById("helloworld").innerHTML = "Hello Webapp Sample!!";
}

document.getElementById("button_add").onclick = function(){
    document.getElementById("sample_contents").innerHTML += "test";
}

document.getElementById("buttonChangeStyle").onclick = function(){
    document.getElementById("helloworld").style.color = "red";
}

var fruits = new Array();
fruits[0] = "apple";
fruits[1] = "grape";
fruits[2] = "meron";

for(i=0;i<fruits.length;i++){
    console.log(fruits[i]);
    // document.getElementById("fruitDiv").innerHTML = fruits[i];
    var element="<div>"+fruits[i]+"</div>"
    document.getElementById("fruitDiv").insertAdjacentHTML('beforebegin',element);
}

// for(i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
//     // document.getElementById("fruitDiv").innerHTML = fruits[i];
//     var element="<div>"+fruits[i]+"</div>"
//     document.getElementById("fruitDiv").insertAdjacentHTML('beforebegin',element);
// }

console.log("1")

if(typeof jQuery == "undefined"){
    console.log("not install jQuery");
}else{
    console.log("installed jQuery");
}
console.log("2")

// jQueryの利用サンプル
// click log出力 サンプル
$("#circle").click(function(){
    console.log("click circle")
})
// click onclick サンプル
$("#jquery-click-sample").click(function(){
    $("#jquery-click-sample-p").html("div is clicked!!!");
    $("#jquery-click-sample-iframe").attr("src","pages/test2.html");
})
// hoverのサンプル
var i=0;
$("#jquery-hover-sample").hover(function(){
    i++;
    if(i%2 != 0){
        $("#jquery-hover-sample-p").html("div is clicked : "+ i);
        $("#jquery-hover-sample-iframe").attr("src","pages/test2.html");    
    }else{
        $("#jquery-hover-sample-p").html("div is clicked : " + i);
        $("#jquery-hover-sample-iframe").attr("src","pages/test.html");
    }
})
// style変更のサンプル
var k=0;
$("#jquery-change-style").hover(function(){
    k++;
    if(k%2 != 0){
        $("#jquery-change-style").css("background-color","red");
    }else{
        $("#jquery-change-style").css("background-color","green");
    }
})
// fade in/out sample
$("#toggle").click(function(){
    if($("#fade-sample").css("display") == "none") {
        $("#fade-sample").fadeIn("slow");
    } else {
        $("#fade-sample").fadeOut("slow");
    }
})
// animation sample
$("#jquery-animation-sample").click(function(){
    $("#jquery-animation-sample").css("background-color","red");
    $("#jquery-animation-sample").animate({
        width:"250px",
        height:"250px",
        marginLeft:"100px"
    },
    1000,
    function(){
        $("#jquery-animation-sample").css("background-color","green");
    });
})

// jQueryの利用サンプル end



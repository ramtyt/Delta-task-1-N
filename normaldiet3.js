var calc1,calc2,calc3,get1,get2,get3,get4,get1num,getnum2,getnum3,getnum4;
function calculator1(weight){
	
	calc1=66+(6.23*weight);
}
function calculator2(height){
	
    calc2=calc1+(12.7*height);
}
function calculator3(age){
	calc3=calc2-(6.8*age);

}
function calculator(){
	document.getElementById("req").innerHTML=calc3;
}

function getselect1(){
	get1=document.getElementById("morn").value;
	document.getElementById("morning").innerHTML=get1;
	 getnum1=parseInt(get1);
}

function getselect2(){
	get2=document.getElementById("aftr").value;
	document.getElementById("afternoon").innerHTML=get2;
	getnum2=parseInt(get2);
}


function getselect3(){
	get3=document.getElementById("nght").value;
    document.getElementById("night").innerHTML=get3;
    getnum3=parseInt(get3);
}
function getselect4(){
	get4=getnum1+getnum2+getnum3;
	document.getElementById("overall").innerHTML=get4;
    getnum4=parseInt(get4);
}
function limit(dailyneed){
	
    var j=parseInt(dailyneed);
    if(j>getnum4)
    {
    	document.getElementById("empty").innerHTML="You are Exceeding the calorie limit";
    }
    if(j<getnum4)
    {
    	document.getElementById("empty").innerHTML="You are at low calorie limit";
    }
    else
    {
    	document.getElementById("empty").innerHTML="You are at safe zone";
    }
}

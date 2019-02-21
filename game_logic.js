canvas=document.getElementById("canvas");
ctx=canvas.getContext('2d');

var dis=[[0,0,0,0],[0,0,0,0],[0,0,2,0],[0,0,0,0]];
var color=["gray","rgb(250,200,200)","rgb(240,200,160)","rgb(160,120,150)","cyan","blue","rgb(0,0,100)","rgb(0,200,0)","rgb(0,50,0)","rgb(150,100,50)","rgb(100,150,50)","rgb(200,0,0)"];
function display(){

console.log(dis);

for(var j=0;j<4;j++)
for(var i=0;i<4;i++)
{

//color to be decided by dis[i][j]
if(dis[i][j]!=0)
ctx.fillStyle=color[Math.log2(dis[i][j])];
else{
ctx.fillStyle="rgb(230,230,230)";}
ctx.fillRect(i*100+2,j*100+2,96,96);

if(dis[i][j]!=0){
ctx.font = "20px Comic Sans MS";
ctx.fillStyle = "black";
ctx.textAlign = "center";
ctx.fillText(dis[i][j], i*100+50,j*100+60); 
}

}

}

function right(){

for(var i=0;i<4;i++)
{
//get it
var ar=[0,0,0,0];
var vr=[];
for(var j=0;j<4;j++){
if(dis[j][i]!=0)
vr.push(dis[j][i]);

ar[j]= dis[j][i];
}

//reverse the vr
var tr=[];
for(var k=vr.length-1;k>=0;k--)
{
   tr.push(vr[k]);
}

for(var k=0;k<vr.length;k++)
vr[k]=tr[k];


// vr.length determines the total number of actual characters.
// change the vr

var l=vr.length;
if(l>1){
if(l==2){
if(vr[0]==vr[1]){
vr[0]=2*vr[0];
vr[1]=0;
}
}
else if(l==3){
if(vr[0]==vr[1]){
vr[0]=2*vr[0];
vr[1]=vr[2];
vr[2]=0;
}
else if(vr[1]==vr[2]){
vr[1]=2*vr[1];
vr[2]=0;
}
}
else{
if(vr[0]==vr[1]){
if(vr[2]==vr[3]){
vr[0]=2*vr[0];
vr[1]=2*vr[2];
vr[2]=0;
vr[3]=0;
}

else{
vr[0]=2*vr[0];
vr[1]=vr[2];
vr[2]=vr[3];
vr[3]=0;
}

}
else if(vr[1]==vr[2]){
vr[1]=2*vr[2];
vr[2]=vr[3];
vr[3]=0;
}
else if(vr[2]==vr[3]){
vr[3]=2*vr[2];
vr[3]=0;
}

}
}


for(var k=0;k<4-l;k++)
vr.push(0);

//reverse vr again;
tr=[];
for(var k=vr.length-1;k>=0;k--)
{
   tr.push(vr[k]);
}

for(var k=0;k<vr.length;k++)
vr[k]=tr[k];

for(var k=0;k<4;k++)
dis[k][i]=vr[k];




}


}
function down(){

for(var i=0;i<4;i++)
{
//get it
var ar=[0,0,0,0];
var vr=[];
for(var j=0;j<4;j++){
if(dis[i][j]!=0)
vr.push(dis[i][j]);

ar[j]= dis[i][j];
}

//reverse the vr
var tr=[];
for(var k=vr.length-1;k>=0;k--)
{
   tr.push(vr[k]);
}

for(var k=0;k<vr.length;k++)
vr[k]=tr[k];


// vr.length determines the total number of actual characters.
// change the vr

var l=vr.length;
if(l>1){
if(l==2){
if(vr[0]==vr[1]){
vr[0]=2*vr[0];
vr[1]=0;
}
}
else if(l==3){
if(vr[0]==vr[1]){
vr[0]=2*vr[0];
vr[1]=vr[2];
vr[2]=0;
}
else if(vr[1]==vr[2]){
vr[1]=2*vr[1];
vr[2]=0;
}
}
else{
if(vr[0]==vr[1]){
if(vr[2]==vr[3]){
vr[0]=2*vr[0];
vr[1]=2*vr[2];
vr[2]=0;
vr[3]=0;
}

else{
vr[0]=2*vr[0];
vr[1]=vr[2];
vr[2]=vr[3];
vr[3]=0;
}

}
else if(vr[1]==vr[2]){
vr[1]=2*vr[2];
vr[2]=vr[3];
vr[3]=0;
}
else if(vr[2]==vr[3]){
vr[2]=2*vr[2];
vr[3]=0;
}

}
}


for(var k=0;k<4-l;k++)
vr.push(0);

//reverse vr again;
tr=[];
for(var k=vr.length-1;k>=0;k--)
{
   tr.push(vr[k]);
}

for(var k=0;k<vr.length;k++)
vr[k]=tr[k];

for(var k=0;k<4;k++)
dis[i][k]=vr[k];




}


}

function up(){

for(var i=0;i<4;i++)
{
//get it
var ar=[0,0,0,0];
var vr=[];
for(var j=0;j<4;j++){
if(dis[i][j]!=0)
vr.push(dis[i][j]);

ar[j]= dis[i][j];
}

// vr.length determines the total number of actual characters.
// change the vr

var l=vr.length;
if(l>1){
if(l==2){
if(vr[0]==vr[1]){
vr[0]=2*vr[0];
vr[1]=0;
}
}
else if(l==3){
if(vr[0]==vr[1]){
vr[0]=2*vr[0];
vr[1]=vr[2];
vr[2]=0;
}
else if(vr[1]==vr[2]){
vr[1]=2*vr[1];
vr[2]=0;
}
}
else{
if(vr[0]==vr[1]){
if(vr[2]==vr[3]){
vr[0]=2*vr[0];
vr[1]=2*vr[2];
vr[2]=0;
vr[3]=0;
}

else{
vr[0]=2*vr[0];
vr[1]=vr[2];
vr[2]=vr[3];
vr[3]=0;
}

}
else if(vr[1]==vr[2]){
vr[1]=2*vr[2];
vr[2]=vr[3];
vr[3]=0;
}
else if(vr[2]==vr[3]){
vr[2]=2*vr[3];
vr[3]=0;
}

}
}


for(var k=0;k<4-l;k++)
vr.push(0);

for(var k=0;k<4;k++)
dis[i][k]=vr[k];




}


}



function left(){

for(var i=0;i<4;i++)
{
//get it
var ar=[0,0,0,0];
var vr=[];
for(var j=0;j<4;j++){
if(dis[j][i]!=0)
vr.push(dis[j][i]);

ar[j]= dis[j][i];
}
// vr.length determines the total number of actual characters.
// change the vr

var l=vr.length;
if(l>1){
if(l==2){
if(vr[0]==vr[1]){
vr[0]=2*vr[0];
vr[1]=0;
}
}
else if(l==3){
if(vr[0]==vr[1]){
vr[0]=2*vr[0];
vr[1]=vr[2];
vr[2]=0;
}
else if(vr[1]==vr[2]){
vr[1]=2*vr[1];
vr[2]=0;
}
}
else{
if(vr[0]==vr[1]){
if(vr[2]==vr[3]){
vr[0]=2*vr[0];
vr[1]=2*vr[2];
vr[2]=0;
vr[3]=0;
}

else{
vr[0]=2*vr[0];
vr[1]=vr[2];
vr[2]=vr[3];
vr[3]=0;
}

}
else if(vr[1]==vr[2]){
vr[1]=2*vr[2];
vr[2]=vr[3];
vr[3]=0;
}
else if(vr[2]==vr[3]){
vr[2]=2*vr[2];
vr[3]=0;
}

}
}

for(var k=0;k<4-l;k++)
vr.push(0);

for(var k=0;k<4;k++)
dis[k][i]=vr[k];

}

}

display();

var disable=0;
function gameover(){
ctx.font = "50px Comic Sans MS";
ctx.fillStyle = "red";
ctx.textAlign = "center";
ctx.fillText("You lose!", 200,180); 
disable=1;

ctx.fillStyle = "green";
ctx.textAlign="center";
ctx.font="30px Comic Sans MS";
    
var count=0;
for(var i=0;i<4;i++)
for(var j=0;j<4;j++)
{

count+=dis[i][j];

}

ctx.fillText("Your Score is "+count.toString(),200,220);

}


window.addEventListener('keydown', function (e) {
    if(disable==1)
	   return;
	
	 var audio = new Audio('gameplay.mp3');
     audio.play();
	
    key = e.keyCode;
    if(key==37){
    	e.preventDefault();
    	left();
    }
    if(key==38){
    	e.preventDefault();
    	up();
    }
    if(key==39){
    	e.preventDefault();
    	right();
    }
    if(key==40){
    	e.preventDefault();
    	down();
    }
	
	//if everything is full.
	var count=0;
	for(var i=0;i<4;i++)
	for(var j=0;j<4;j++){
		if(dis[i][j]==0)
		{   count++;
 		}  
		
	}
	
	if(count==0)
	{gameover();
	 return;
	}
	
	else{
	var n=Math.floor(Math.random()*16);
	for(;n<32;n++){
	  m=n%16;
	if(dis[Math.floor(m/4)][m%4]==0)
	{dis[Math.floor(m/4)][m%4]=2;
	  break;
	}
	} 
	}

	display();
	
});
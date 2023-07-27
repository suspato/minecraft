var canvas = new fabric.Canvas("myCanvas");

playerX=10;
playerY=10;

blockHeight=30;
blockWidth=30;
var playerObject="";
var blockObject="";

function playerUpdate(){
fabric.Image.fromURL("player.png",function(Img){
    playerObject=Img;
    playerObject.scaleToWidth(150);
    playerObject.scaleToHeight(140);
    playerObject.set({
        top:playerY,
        left:playerX
    })
    canvas.add(playerObject);
})
}

function blockUpdate(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        blockObject=Img;
        blockObject.scaleToWidth(blockWidth);
        blockObject.scaleToHeight(blockHeight);
        blockObject.set({
            top:playerY,
            left:playerX
        })
        canvas.add(blockObject);
    })
    }

    window.addEventListener("keydown",myKeyDown)
    function myKeyDown(e){
    keyPressed=e.keyCode
     console.log(keyPressed)
     if(keyPressed=='80' &&  e.shiftKey==true){
      blockHeight= blockHeight+10
      blockWidth= blockWidth+10
      document.getElementById("height").innerHTML=blockHeight
      document.getElementById("width").innerHTML=blockWidth
      //shift p pressionadas juntas aumentam o tamanho do bloco   
     }
     
     if(keyPressed=='77' &&  e.shiftKey==true){
        blockHeight= blockHeight-10
        blockWidth= blockWidth-10
        document.getElementById("height").innerHTML=blockHeight
        document.getElementById("width").innerHTML=blockWidth
        //shift e m pressionadas juntas diminuem o tamanho do bloco   
       }
       
       if(keyPressed=='85'){
           blockUpdate("unique.png")
        }//tecla u
       
       if(keyPressed=='68'){
           blockUpdate("dark_green.png")
        }//tecla d
        
        if(keyPressed=='67'){
            blockUpdate("cloud.png")
        }//tecla c 

        if(keyPressed=='71'){
            blockUpdate("ground.png")
        }//tecla g
            
        if(keyPressed=='76'){
            blockUpdate("light_green.png")
        }//tecla l
                
        if(keyPressed=='84'){
            blockUpdate("trunk.png")
        }//tecla t
                    
        if(keyPressed=='82'){
            blockUpdate("roof.jpg")
        }//tecla r 
            
        if(keyPressed=='87'){
            blockUpdate("wall.jpg")
        }//tecla w 
            
        if(keyPressed=='89'){
            blockUpdate("yellow_wall.png")
            }//tecla y

        if(keyPressed=='40'){
            down()
        } 

        if(keyPressed=='37'){
            left()
        }

        if(keyPressed=='38'){
            up()
        }

        if(keyPressed=='39'){
            right()
        }       
            
            
         
    }

    function up(){
     if(playerY>0){
      playerY=playerY-blockWidth
      canvas.remove(playerObject)
      playerUpdate()
     }   
    }

    function down(){
        if(playerY<600){
         playerY=playerY+blockWidth
         canvas.remove(playerObject)
         playerUpdate()
        }   
       }

       function left(){
        if(playerX>0){
         playerX=playerX-blockWidth
         canvas.remove(playerObject)
         playerUpdate()
        }   
       }

       function right(){
        if(playerX<800){
         playerX=playerX+blockWidth
         canvas.remove(playerObject)
         playerUpdate()
        }   
       }
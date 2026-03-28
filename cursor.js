let smallCursor=document.querySelector('.smallCursor')
let shadowCursor=document.querySelector('.shadowCursor')


 let positionX=0
 let positionY=0
 let animationId=null;
 let timer=null;

addEventListener('mousemove',function moveSmallCursor(obj){
   
     positionX=obj.clientX 
     positionY=obj.clientY 
    
    smallCursor.style.left=positionX + 'px'
    smallCursor.style.top=positionY + 'px'

    if(!animationId){
     animateShadowCursor()
    }
    
    clearTimeout(timer)
    timer=setTimeout(()=>{
     cancelAnimationFrame(animationId)
     animationId=null;
    },2000)
    
})


function animateShadowCursor(){
     let currentX=parseFloat(shadowCursor.style.left) || 0
     let currentY=parseFloat(shadowCursor.style.top) || 0

      let distanceX=positionX-currentX;
      let distanceY=positionY-currentY;

      shadowCursor.style.left=currentX+distanceX*0.1+'px'
      shadowCursor.style.top=currentY+distanceY*0.1+'px'

     animationId=requestAnimationFrame(animateShadowCursor)
      console.log(animationId)
}

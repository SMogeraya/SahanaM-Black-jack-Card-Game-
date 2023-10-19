const openModalButtons=document.querySelectorAll('[data-modal-target]')
const closeModalButtons=document.querySelectorAll('[data-close-button]')

const overlay=document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click',() => {
            const modal=document.querySelector(button.dataset.modalTarget)
            openModal(modal)
    })
})

overlay.addEventListener('click',() =>{
const modals=document.querySelectorAll('.modal.active')
modals.forEach(modal => {
    closeModal(modal)
   
})

})
    closeModalButtons.forEach(button =>{
        button.addEventListener('click',() => {
            const modal=button.closest('.modal')
            closeModal(modal)
        })
    })
    function openModal(modal)
    {
        if(modal==null) return
        modal.classList.add('active')
        overlay.classList.add('active')
        
    }
    function closeModal(modal)
    {
        if(modal==null) return
        
        modal.classList.remove('active')
        overlay.classList.remove('active')
       
    }

let count_of_chance=1,count=0,count_of_cards=0,i=-1,a=0;
    startchange=false;

function hide()
{
const btn=document.getElementById('hide');
const divi=document.getElementById('begin');
btn.addEventListener("click",() =>{
    
    btn.style.display='none';
    divi.style.display='block';
},{once:true})
}


function fun(){
    var page  =document.getElementById("page");
    page.classList.toggle('active');
    
    var popup =document.getElementById("popup");
    popup.classList.toggle('active');
    
}
function fun1(){
    var page  =document.getElementById("page");
    page.classList.toggle('active');
    
    var popup =document.getElementById("popup");
    popup.classList.toggle('active');
    location.reload();
    
}


function start()
{a+=1;
    str=document.getElementById("start button");
    str.addEventListener("click" , function(){
        str.textContent="NEXT CHANCE"
    });
    count_of_cards=0;
    if(count_of_chance>=6)
    { 
        const count_of_cards=1;
        document.getElementById("cards").textContent="";
        document.getElementById("sum").textContent="";
        document.getElementById("countt").textContent="Total Wins:"+" "+count;
       
        if(count==1)
        {document.getElementById("countt1").textContent="CONGRATULATIONS!!!\n\n Total Wins:1";
           image=document.getElementById("image").src="https://www.freeiconspng.com/uploads/celebration-icon-png-12.png";
           image.style.width="20px";
           image.style.height="20px";

        }
        else if(count==2)
        {
            document.getElementById("countt1").textContent="Wow!!!Amazing!! \n Total Wins:2";
            image=document.getElementById("image").src="https://www.pinpng.com/pngs/b/290-2908286_party-emoji-png.png";
            image.style.width="20px";
            image.style.height="20px";
        }

        else if(count==3)
        {
            document.getElementById("countt1").textContent="You killed it!!! \n Total Wins:3";
            image=document.getElementById("image").src="https://clipartmag.com/images/3-stars-clipart-22.png";
            image.style.width="42px";
            image.style.height="20px";
        }
        else if(count==4)
        {
            document.getElementById("countt1").textContent="You are Unstoppable!!!!! \n\n Total Wins:4";
            image=document.getElementById("image").src="https://th.bing.com/th/id/R.c40fad220c289e6ba6d1cf019b4d2c93?rik=uyAMLGVX7Av0lg&riu=http%3a%2f%2fwww.cyberlink.com%2fstat%2fproduct%2ffree-zone%2fenu%2fimg%2fmedal.png&ehk=kYm1nqPnyWDTfnblPnryO8OTrRTwLjGLNL4V9nYvbtM%3d&risl=&pid=ImgRaw&r=0";
            image.style.width="16px";
            image.style.height="26px";
        }
        else if(count==5)
        {
            document.getElementById("countt1").textContent="Unbeatable!!! \n Total Wins:5";
            image=document.getElementById("image").src="https://www.pngplay.com/wp-content/uploads/8/Winner-PNG-Photos.png";
            image.style.width="20px";
            image.style.height="20px";
        }
        
        else{
            document.getElementById("countt1").textContent="BETTER LUCK NEXT TIME";
            image=document.getElementById("image").src="https://cdn3d.iconscout.com/3d/premium/thumb/all-the-best-5796797-4862985.png";
            image.style.width="20px";
            image.style.height="20px";
        
        }
    }
   
    
    i=i+1;
    j=5-i;
    if(j<=0)
    {
        const j=0;
        document.getElementById("hearts").textContent=j;
    document.getElementById("op").textContent="Chances Over...Better Luck Next Time";
    
    }
    else{

        document.getElementById("hearts").textContent=j;

    }
    startchange=true;
    
   
    
    

    if(count_of_chance<=5)
    {let a=Math.floor(Math.random()*13+1);
    
        let b=Math.floor(Math.random()*13+1);
        cardss=[a,b];
        for(let i=0;i<cardss.length;i++)
        document.getElementById("cards").textContent="Current Cards:"+" " +a+","+b;
        
        sum=a+b;
        document.getElementById("sum").textContent="Sum Of Cards:"+sum;
        check();
        count_of_chance+=1;}
    else{
        

    alert("Chances over...Start a new game");
    }
}


   
    function check(){
        
if(count_of_cards<1)
{
    if(sum <=20)
    {
    document.getElementById("op").textContent="Do you want to draw a new card??";
    }
    else if(sum===21)
    {
    document.getElementById("op").textContent="Hurrayy!! you have won black jack";
    count+=1;
    document.getElementById("countt").textContent="Count:"+" "+count;
    }
    else{
   
    document.getElementById("op").textContent="No Worries...Try Next Chance";  
    }
}

else{
    if(sum <=20)
    {
    document.getElementById("op").textContent="No Worries...Try Next Chance";
    }
    else if(sum===21)
    {
    document.getElementById("op").textContent="Hurrayy!! you have won black jack";
    count+=1;
    document.getElementById("countt").textContent="Count:"+" "+count;
    }
    else
    {

        if(count_of_chance<=5 )
        {
        document.getElementById("op").textContent="No Worries...Try Next Chance";
        }
        else
        {
        document.getElementById("op").textContent="Sorry you are out of the game. ";
        }
    }
}}
function newcard(){
    if(a>5){
    const count_of_cards=2;
    alert("Sorry Better Luck next Time");
    alert("Press New Game to start a new game!!");
    return;
}
        if(count_of_cards<1)
        {
            count_of_cards+=1;
        let d=Math.floor(Math.random()*13+1);
        cardss.push(d);
    document.getElementById("cards").textContent+=","+d;
    sum+=d;
    document.getElementById("sum").textContent="Sum:"+sum; 

    check();
     }
     else
     {
        alert("Only 3 cards can be drawn");
     }
   
  
   } 



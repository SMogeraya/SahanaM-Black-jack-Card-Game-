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
        
        /*const btn=document.getElementById("start");
    const ndivi=document.getElementById('winsdiv');
    const odivi=document.getElementById('begin');
  {      
    odivi.style.display='none';
    ndivi.style.transform='translate(-50%,-30%) scale(1)';
    if(count==0)
    { 
            document.getElementById('winsp').textContent="Better Luck Next Time";
    }
    else
    {
            document.getElementById('winsp').textContent="You won";
    }
} */ 
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



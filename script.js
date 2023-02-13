
    function max(x1,x2,x3)
    {
      if (x1 > x2 &&x1>x3)
        return x1
      else if(x2>x3)
        return x2
      else
        return x3
    }
    function count(end1,end2,end3)
      {
        cr=0
        inc=1
        step=setInterval(()=>{
          
          if(cr<end1)
          {
            document.getElementById("count1").textContent=cr+inc+"+";
          
          }
          if(cr<end2)
          {
            document.getElementById("count2").textContent=cr+inc+"+";
          
          }
          if(cr<end3)
          {
            document.getElementById("count3").textContent=cr+inc+"+";
          
          }
          if(cr>=max(end1,end2,end3))
          {
            clearInterval(step)
          }
          cr+=inc
        },45);
       
      }
      
    document.addEventListener("DOMContentLoaded",()=>{
      
      
      
     
      count(123,542,100);
    }
    
    )
    
  

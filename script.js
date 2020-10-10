const counters = document.querySelectorAll('.counter');
const speed = 250;   /*lower this number,faster is the speed*/

counters.forEach(counter => {const updateCount = ()=> {
  const target = +counter.getAttribute('data-target');
  const count = +counter.innerText;  
  /* + is used to convert into number */

  const inc = target/speed; /* this inc will be the actual number on which speed is depending */

  if(count<target){
    counter.innerText = Math.ceil(count+inc);   /* math.ceil round ups the number*/
    setTimeout(updateCount, 1);
  }else{
    count.innerText = target;
  }
  }

  updateCount();
})
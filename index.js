const a_form= document.querySelector('#a_form');
const newItem= document.querySelector('#newItem');
const status_msg= document.querySelector('.status-msg');
const myList= document.querySelector('#list');

a_form.addEventListener('submit', (e)=>{
  e.preventDefault();
  if(newItem.value === ''){    
    status_msg.classList.remove('bg-success');
    status_msg.classList.add('bg-danger','p-2');     
    status_msg.textContent='invalid string, try again'; 
    setTimeout(()=>{status_msg.textContent=''; status_msg.classList.remove('bg-danger')}, 3000);
  }else{
    status_msg.classList.remove('bg-danger');
    status_msg.classList.add('bg-success','p-2');     
    status_msg.textContent='Success, add more!'; 
    setTimeout(()=>{status_msg.textContent=''; status_msg.classList.remove('bg-success')}, 3000);

    //Adding to list
    const add = document.createElement('li');
    add.appendChild(document.createTextNode(`${newItem.value}`));

    myList.appendChild(add);

    newItem.value='';

  }
  
  
}); 

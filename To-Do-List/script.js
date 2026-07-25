const arrayoflist =[{Name:'',
  Date:''}];

function displayonpage(){
    let todolistHtml ='';
    for(let i=0;i<arrayoflist.length;i++){
        const Listofbject=arrayoflist[i];
        const{Name,Date}=Listofbject;
      
        const html=` 
        <div class=" Listadd">
           <div class=" Listadd1">  ${Name}  </div>
             <div class=" Listadd2">${Date}</div>
         <button onclick="
             arrayoflist.splice(${i},1);
             displayonpage();
            " class="delete-list-Bun"
           >Delete</button> </div>` ;
       
    todolistHtml+=html;
    
    }
    document.querySelector('.List-Add')
    .innerHTML=todolistHtml;
}

function Addlist(){
   
   const nameinput= document.querySelector
   ('.Your-List');
   const Name =nameinput.value;
    const dateinput = document.querySelector
    ('.Date-List');
    const Date= dateinput.value;
    arrayoflist.push(
        {Name , Date});
    // console.log(Arrayoflist);
    nameinput.value='';
    dateinput.value='';
    displayonpage();
}

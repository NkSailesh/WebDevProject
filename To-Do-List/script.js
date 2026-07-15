const Arrayoflist =[];

function displayonpage(){
    let todolistHtml ='';
    for(let i=0;i<Arrayoflist.length;i++){
        const index=Arrayoflist[i];
        const html=` <p>
        ${index}
         <button onclick="
             Arrayoflist.splice(${i},1);
             displayonpage();
            "
           > Delet</button>
        </p>`;
    todolistHtml+=html;
    }
    document.querySelector('.List-Add').innerHTML=todolistHtml;
}

function Addlist(){

   const input= document.querySelector('.Your-List');
   const inputValue =input.value;
    Arrayoflist.push(inputValue);
    console.log(Arrayoflist);
    input.value='';
    displayonpage();
}

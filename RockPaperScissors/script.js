let Times= JSON.parse( localStorage.getItem('score'));
        if (Times === null ){
           Times={ 
            win:0,
            lose:0,
            tai:0};
        }

        updateResult();
          

        function PlayTheGame(playerMove){
        const CompMove = ComputerMoveReturn();
        let Result='';

            if(playerMove ==='rock'){
                    if(CompMove ==='rock'){
                Result=' Tai.';
            }
                    else if(CompMove==='paper'){
                Result='You Lose.';
            }
                    else if(CompMove==='scissor'){
                Result='You Win.';
            }
           
        }
             else if(playerMove==='paper'){
                 if(CompMove==='rock'){
                Result='You Win.';
            }
                    else if(CompMove==='paper'){
                Result='Tai.';
            }
                    else if(CompMove==='scissor'){
                Result ='You Lose.';
            }
        }
            else if(playerMove==='scissor'){
                 if(CompMove==='rock'){
                Result='You Lose.';
            }
                    else if(CompMove==='paper'){
                Result='You Win.';
            }
                    else if(CompMove==='scissor'){
                Result='Tai.';
            }
        }
        if(Result==='Tai.'){
            Times.tai = Times.tai+1;
        }
        else if(Result==='You Win.'){
            Times.win = Times.win+1;
        }
        else if(Result==='You Lose.'){
            Times.lose =Times.lose  +1;
        }
             localStorage.setItem('score',JSON.stringify(Times))
             updateResult();
             document.querySelector('.js-chois').innerHTML=Result;
             document.querySelector('.js-move').innerHTML=` You
            <img src="Image/${playerMove}.jpg" class="Move-Icon">
             <img src="Image/${CompMove}.jpg" class="Move-Icon">
             Computer `;
             
   
        }
        function updateResult(){
             
            document.querySelector('.js-times').innerHTML= 
        `Win: ${Times.win}, Loss; ${Times.lose}, Tai: ${Times.tai}`;
        
      
        }
        function ComputerMoveReturn(){
        const Randomvalu= Math.random();
        let CompMove='';
        if(Randomvalu>0 && Randomvalu<1/3){
            CompMove= 'rock';
        }
        else if(Randomvalu>1/3 && Randomvalu<2/3){
            CompMove='paper';
        }
        else if(Randomvalu>2/3 && Randomvalu<1){
            CompMove='scissor';
        }
        
        return CompMove;
        }
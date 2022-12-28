let gameRun = true;
let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;

game: 
for (i = 0; i = Infinity; i++) {

      
    if (maxValue < minValue) {
        alert('нарушение правил, покиньте игру')
        continue game;
    }
    else break game}
    
        alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    
        orderNumberField.innerText = orderNumber;
        answerField.innerText = `Вы загадали число ${answerNumber }?`;
        
        document.getElementById('btnOver').addEventListener('click', function () {
            if (gameRun){
                if (minValue === maxValue){
                    phraseRandom = Math.round( Math.random());
                    answerPhrase = (phraseRandom === 1) ?
                        `Вы загадали неправильное число!\n\u{1F914}` :
                        `Я сдаюсь..\n\u{1F92F}`;
        
                    answerField.innerText = answerPhrase;
                    gameRun = false;
                } else {
                    minValue = answerNumber  + 1;
                    answerNumber  = Math.floor((minValue + maxValue) / 2);
                    orderNumber++;
                    orderNumberField.innerText = orderNumber;
                    
                    phraseRandom = Math.round( Math.random()*3);
                    if (phraseRandom === 0) {
                    answerPhrase = `Да это легко! Ты загадал \n ${answerNumber }?`
                    }  
                   else if (phraseRandom === 1) {                    
                    answerPhrase = `Наверное, это число \n ${answerNumber }?`;
                   } 
                   else if (phraseRandom === 2) {
                    answerPhrase = `А может, это число \n ${answerNumber }?`;
                   }
                   else answerPhrase = `Неужели ты загадал \n ${answerNumber }?`;
                       
                answerField.innerText = answerPhrase;
                }
            }
        })
        
        document.getElementById('btnLess').addEventListener('click', function () {
            if (gameRun){
                if (maxValue === minValue){
                    const phraseRandom = Math.round( Math.random());
                    const answerPhrase = (phraseRandom === 1) ?
                        `Вы загадали неправильное число!\n\u{1F914}` :
                        `Я сдаюсь..\n\u{1F92F}`;
        
                    answerField.innerText = answerPhrase;
                    gameRun = false;
                } else {
                    maxValue = answerNumber  - 1;
                    answerNumber  = Math.round((minValue + maxValue) / 2);
                    orderNumber++;
                    orderNumberField.innerText = orderNumber;

                    phraseRandom = Math.round( Math.random()*3);
                    if (phraseRandom === 0) {
                    answerPhrase = `Да это легко! Ты загадал \n ${answerNumber }?`
                    }  
                   else if (phraseRandom === 1) {                    
                    answerPhrase = `Наверное, это число \n ${answerNumber }?`;
                   } 
                   else if (phraseRandom === 2) {
                    answerPhrase = `А может, это число \n ${answerNumber }?`;
                   }
                   else answerPhrase = `Неужели ты загадал \n ${answerNumber }?`;
                       
                answerField.innerText = answerPhrase;
                }
            }
        })
        
        document.getElementById('btnEqual').addEventListener('click', function () {
            if (gameRun){
                phraseRandom = Math.round( Math.random()*2);
                if (phraseRandom === 0) {
                    answerPhrase = `Ура!\n\u{1F47D}`
                }  
                   else if (phraseRandom === 1) {                    
                    answerPhrase = `Я победил!\n\u{1F63B}`;
                   } 
                   else answerPhrase = `Вот так!\n\u{1F91F}`;
    
                answerField.innerText = answerPhrase;
                gameRun = false;
            }
        })
           
    document.getElementById('btnRetry').addEventListener('click', function () {
        
        minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
        maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
        alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);        
        answerNumber  = Math.floor((minValue + maxValue) / 2);
        orderNumber = 1;
        gameRun = true;
        orderNumberField.innerText = orderNumber;
        answerField.innerText = `Вы загадали число ${answerNumber }?`;
        game: 
        for (i = 0; i = Infinity; i++) {      
        if (maxValue < minValue) {
        alert('нарушение правил, покиньте игру')
        continue game;
        }
        else break game}
        })
    

    
    
 


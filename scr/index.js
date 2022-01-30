const flashcards = document.getElementsByClassName("flashcards")[0];

const createBox = document.getElementsByClassName("create-box")[0];

const question = document.getElementById("question");
const answer = document.getElementById("answer");


const btnNewCard = document.getElementById("btn-newCard");
const btnDelCards = document.getElementById("btn-delCard");
const btnAddNewCard = document.getElementById("btn-addNewCard");
const btnCloseNewCard = document.getElementById("btn-closeNewCard");

btnNewCard.addEventListener('click', showCreateCardBox);
btnDelCards.addEventListener('click',delFlashCards);
btnAddNewCard.addEventListener('click',addFlashCard);
btnCloseNewCard.addEventListener('click',hideCreateBox);
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

contentArray.forEach(divMaker)
function divMaker(text){
    const div = document.createElement('div');
    const question = document.createElement('h2');
    const answer = document.createElement('h2');

    div.className = "flashcard";

    question.setAttribute('style', 'border-top: 1px solid red;padding:15px; margin-top: 30px ');
    question.innerText = text.my_question;

    answer.setAttribute('style', 'text-align:left; display:block; color:grey; padding-left:15px;');
    answer.innerText = text.my_answer;

    div.appendChild(question);
    div.appendChild(answer);

    flashcards.appendChild(div);
}

function addFlashCard(){
    let flashCard_info = {
        'my_question': question.value,
        'my_answer': answer.value
    }
    contentArray.push(flashCard_info);
    localStorage.setItem('items', JSON.stringify(contentArray));
    divMaker(contentArray[contentArray.length - 1]);
    question.value = '';
    answer.value = '';
}

function delFlashCards(){
    localStorage.clear();
    flashcards.innerText = '';
    contentArray = [];
}

function showCreateCardBox(){
    createBox.style.display = "block";
}

function hideCreateBox(){
    createBox.style.display = "none";
}


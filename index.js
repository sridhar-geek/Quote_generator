//varaible selector

let btn=document.querySelector(".btn");
let newQuote=document.querySelector(".quote");
let person=document.querySelector(".credits");

let arr=[
    {
        "quote":"You & I lazy foverever unless we've work to do , so let's do some work",
        "author": "Sridhar Sri"
    },
    {
        "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
        "author": "Oscar Wilde"
    },
    {
        "quote": "That it will never come again is what makes life so sweet.",
        "author": "Emily Dickinson"
    },
    {
        "quote": "It is never too late to be what you might have been.",
        "author": "George Eliot"
    },
    {
        "quote": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "quote": "I try to create sympathy for my characters, then turn the monsters loose.",
        "author": "Stephen King"
    },
    {
        "quote": "Prose is architecture, not interior decoration.",
        "author": "Ernest Hemingway"
    },
    {
        "quote": "It's none of their business that you have to learn to write. Let them think you were born that way.",
        "author": "Ernest Hemingway"
    }
];
btn.addEventListener("click",function(){
    const num=Math.floor(Math.random()*arr.length);

    newQuote.innerText=arr[num].quote;
    person.innerText=arr[num].author;
    
});
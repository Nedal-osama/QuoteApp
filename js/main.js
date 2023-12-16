var textIndex=0;
var texts=[
    "It's not what happens to you, but how you react to it that mattersEpictetus ",
    "--Elbert Hubbard",
    "Resentment is like drinking poison and waiting for your enemies to die.",
    "--Frank Sinatra",
    "You miss 100% of the shots you don't take.",
    "--Wayne Gretzy",
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me",
    "― Marilyn Monroe",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "― Albert Einstein"
]
function showNextText() {
    var paragraph = document.getElementById("hiddenParagraph");
     var paragraph2 = document.getElementById('hiddenParagraph2');
    paragraph.innerHTML = texts[textIndex];
    paragraph2.innerHTML = texts[textIndex + 1];
    if (textIndex < texts.length - 2) {
        textIndex+=2;
    } else {
        textIndex = 0;
    }
}

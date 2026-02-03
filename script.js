let textBox = document.getElementById("textBox");
let countBtn = document.getElementById("countBtn");
let result = document.getElementById("result");
countBtn.addEventListener("click",function(){
    let text = textBox.value.toLowerCase();
    let count = 0;
    for(let i=0; i<text.length; i++){
        if(text[i] ==="a" || text[i] === "e" || text[i] === "i" || text[i] ==="o" || text[i] === "u"){
            count++;
        }
    }
    result.innerText = "Result: " + count;
})
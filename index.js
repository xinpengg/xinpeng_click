let count = 0;
let saves = "";
function increment () { 
    count = count + 1; 
    console.log(count) ;
    document.getElementById("count-el").innerText = count
    validity();
}

function save () { 
    saves = saves + count + " - ";
    document.getElementById("entries").innerText = "Previous Entries: " + saves ;

}
function validity () {
    if (count > 34 || count < 0) {
        dismiss()
        alert("The classroom has reached it's maximum capacity, will reset number back to 0");

    }
}
function incrementby10 () {
    count = count + 10;
    console.log(count) ;
    document.getElementById("count-el").innerText = count
    validity();
}
function dismiss () {
    count = 0;
    document.getElementById("count-el").innerText = count

}
let count = 0;
let saves = "";
function increment () { 
    count = count + 1; 
    console.log(count) ;
    document.getElementById("count-el").innerText = count

}

function save () { 
    
    saves = saves + count + " - ";
    document.getElementById("entries").innerText = "Previous Entries: " + saves ;

}
// Counter app

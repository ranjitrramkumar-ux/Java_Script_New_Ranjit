var a = "Pramod";
// 10,0000 lines
if(true){ // Block Scope
    console.log(a);
    var a = "temp";
    console.log(a);
}
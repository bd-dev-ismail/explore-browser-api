// setTimeout(() => {
//     alert('Hello')
// }, 3000);

const openAlert = () =>{
     const num = Math.random()*10;
     console.log(num)
     if(num < 5){

         alert('You ar click onk alert button');
     }
};
const openPromt = () =>{
    const diccisuon =  confirm('Are You Coming on Home?')
    console.log(diccisuon)
    if(diccisuon === true){
        alert('Come with a condom');
    }else{
        console.log("DGM")
    }
    // prompt()
};
const getInfo = () =>{
    const style = prompt('Tell Us your styles?');
    console.log(style);
    if(!!style){
        console.log('I am ready for play in', style)
    }
}
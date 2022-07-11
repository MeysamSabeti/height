const result = document.querySelector('.result');

document.querySelector('#form').addEventListener('submit',(e)=>{
    e.preventDefault()

    let d = document.querySelector('.result');
    let child = d.lastElementChild;
    if(child){
        d.removeChild(child); 

    }

    let input = document.querySelector('input').value;
    const text=`قد شما ${input} سانتی متر است ! :)`

    const par=document.createElement('p');
    par.appendChild(document.createTextNode(text));
    result.appendChild(par);

})

console.log(result);
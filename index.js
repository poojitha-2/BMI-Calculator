const form = document.querySelector('form')
const button = document.querySelector('btn')
form.addEventListener('submit',function (e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(height === '' || height < 0 || isNaN(height)){
        result.textContent = `please enter valid height`;
    }
    else if(weight ==='' || weight < 0 || isNaN(weight)){
        result.textContent = `please enter valid weight`;
    }
    else{
        const bmi = (weight/ ((height*height)/10000)).toFixed(2);
        result.textContent = `${bmi}`
    
    }
    form.reset();
   
})

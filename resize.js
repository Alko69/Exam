document.querySelector('#range').addEventListener('input', (el) => {
    el = el.target.value;
    document.querySelector('img').style.height = `${el}%`;
    
})


document.querySelector('#ranges').addEventListener('input', (el) => {
    el = el.target.value;
    document.querySelector('img').style.width = `${el}%`;
    
})
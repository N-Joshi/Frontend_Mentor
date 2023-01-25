const api_url = "https://api.adviceslip.com/advice";
  
async function getapi(url) {
    const response = await fetch(url);
    let data = await response.json();
    let advice_object = data.slip
    renderHtml(advice_object)
}

getapi(api_url);
  
let advice_id = document.getElementById('advice_id');
let advice_text = document.getElementById('advice_text');
let advice_button = document.getElementById('random_advice_generator');

function renderHtml(advice_object){
    advice_id.innerText = advice_object.id;
    advice_text.innerText = advice_object.advice;
}

advice_button.addEventListener('click',()=>{
    getapi(api_url)
})
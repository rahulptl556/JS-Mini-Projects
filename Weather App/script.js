const API_KEY = "6c556719237ee57c52d751efbffa7c4a";

async function weather(){

    let city = "pune";

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    
    console.log(response);

    const data = await response.json();
    console.log(data);

    let para = document.createElement('p');
    para.textContent = `${data?.main?.temp.toFixed(2)} °C`

    document.body.appendChild(para);
}
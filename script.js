let div = document.querySelector('.box');
fetch('https://restcountries.com/v3.1/all?fields=name,flags')
    .then((res) => res.json())
        .then((data) => {
            console.log(data);
        const htmlContent = data.map((item) => `<img src="${item.flags.png}" alt="${item.name.common} flag" style="width: 100px;"/>
            <h1>${item.name.common}</h1>`
            
         )
        div.innerHTML = htmlContent;
    })
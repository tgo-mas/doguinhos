
// URLs da API Dog CEO
var URL = 'https://dog.ceo/api/breeds/image/random';
const RACAS_URL= 'https://dog.ceo/api/breeds/list/all';

//Elementos do DOM
const btn = document.getElementById('change-dog');
const img = document.getElementById('dog');
const spin = document.getElementById('doguin');
const select = document.getElementById('select');

//criando o Select com as raças
fetch(RACAS_URL)
    .then(res => {
        return res.json();
    })
    .then(data => {
        const racasObj = data.message;
        const racasArr = Object.keys(racasObj);
        for(let i = 0; i < racasArr.length; i++){
            const newOption = document.createElement('option');
            newOption.value = racasArr[i];
            newOption.innerText = racasArr[i];
            select.appendChild(newOption);
        }
    });

//Buscando a imagem do doguinho na API
const getDog = async url => {
    img.classList.remove('show');
    spin.classList.add('show');
    const novaImg = fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            var novaImg = data.message;
            return novaImg;
        })
        .catch(e => {
            console.log(e.message);
        });

    return novaImg;
};

//Colocando a imagem do doguinho
async function setImg(){
    img.src = await getDog(URL);
    spin.classList.remove('show');
    img.classList.add('show');
};

btn.addEventListener("click", e => {setImg()});

setImg();

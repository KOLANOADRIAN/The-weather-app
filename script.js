const getAPI = (event) => {
    event.preventDefault();
    const container__result = document.querySelector(".container__result")
    const meteoNumber = document.querySelector('[name = "select__city"]').value;
    const url = `https://danepubliczne.imgw.pl/api/data/synop/id/${meteoNumber}`;
    // const url = `https://danepubliczne.imgw.pl/api/data/synop`;
    fetch(url)
        .then((answer) => {
            console.log(answer)
            if (answer.status !== 200) {
                throw Error("to nie jest odpowiedz 200")
            } else {
                return answer.json()
            }
        })
        .then((json) => {
            let rezultat = json;
            console.log(rezultat),
            container__result.innerHTML = (`
    <span class = "stacja"> Stacja: ${rezultat.stacja}<span><br>
    <span class = "data"> Data Pomiaru:  ${rezultat.data_pomiaru}<span><br>
    <span class = "godzina"> Godzina pomiaru: ${rezultat.godzina_pomiaru}<span><br>
    <span class = "cisnienie"> Ciśnienie: ${rezultat.cisnienie} hp<span><br>
    <span class = "temperatura"> Temperatura: ${rezultat.temperatura} celciusza<span><br>
    <span class = "opady"> Opady: ${rezultat.suma_opadu} w cm na 1 m2<span><br>
    <span class = "wilgotność"> Wilgotność: ${rezultat.wilgotnosc_wzgledna}<span><br>
    <span class = "kierunek_wiatru"> Kierunek wiatru: ${rezultat.kierunek_wiatru}<span>
    `)
    })
    .catch((error) => console.log(error, "błąd"));    
    }
    const button = document.querySelector(".button")
    button.addEventListener("click", getAPI)
    
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
            console.log(rezultat)
        })
    }

    const button = document.querySelector(".button")
    button.addEventListener("click", getAPI)
    
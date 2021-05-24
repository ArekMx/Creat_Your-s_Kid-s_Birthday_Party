const API = "http://localhost:3001";


export function getOffers() {
    return fetch(`${API}/offers`)
        .then((response) => {
            console.log(response)
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Blad sieci!");
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

export function addOffer(data) {
    return fetch(`${API}/offers`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            if(response.ok) {
                return response.json()
            } else {
                throw Error("Błąd w sieci")
            }
        });
}
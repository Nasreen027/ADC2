const countries = [
    {
        name: "Pakistan",
        cities: [
            "Karachi",
            "Islamabad"
        ]
    },
    {
        name: "India",
        cities: [
            "Mumbai",
            "Dehli"
        ]
    },
    {
        name: "United States",
        cities: [
            "San Fansisco",
            "Los Angeles"
        ]
    },
]

//will return cities in array like [karachi,islamabad] of specific country
const findCities = (country) => {
    return countries.find((item) => item.name === country).cities
}

//will return countries array like [pakistan,india,united states]
const listCountries = () => {
    return countries.map((item) => item.name)
}

const countrySelection = document.querySelector("#selectCountry")
const citySelecton = document.querySelector("#City");

window.onload = function () {
    citySelecton.disabled = true;

    const countryList = listCountries();
    countryList.forEach((item) => {
        countrySelection.innerHTML += `<option value="${item}">${item}</option>`
    })

}


countrySelection.addEventListener("change", (e) => {
    const selectedCountry = e.target.value

    citySelecton.disabled = false;

    const cityList = findCities(selectedCountry);
    citySelecton.innerHTML=""
    cityList.forEach((item) => {
        citySelecton.innerHTML += `<option value="${item}">${item}</option>`
    })
})



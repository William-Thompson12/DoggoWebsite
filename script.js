document.getElementById("doggoButton").addEventListener("click", function() {
    document.getElementById("doggoButton").innerHTML = "Generating Doggo...";
    fetch('https://dog.ceo/api/breeds/image/random').then(function(response){
        return response.json();
    }).then(function(response){
        var doggoImg = document.getElementById("doggoImg").innerHTML = `<img src="${response.message}">`;
        var button = document.getElementById("doggoButton").innerHTML = "Generate Random Doggo";
        return doggoImg + button;
    }) 
  });

fetch('https://dog.ceo/api/breeds/list')
    .then(function(data) {
        return data.json();
    })
    .then(function(data) {
        let breeds = data.message;
        // console.log(breeds);
        let breedList = document.getElementById('breedList');
        breeds.forEach(function(breed) {
            let breedElement = document.createElement('option');
            breedElement.setAttribute('value', breed);
            breedElement.innerHTML = breed.toUpperCase(0);
            breedList.appendChild(breedElement);
        });
    })

let dogSelector = document.getElementById("breedList");

dogSelector.addEventListener("change", function() {
    let breedName = this.value;
    fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            let doggoImgAdvanced = document.getElementById("doggoImgAdvanced").innerHTML = `<img src="${data.message}">`;
            return doggoImgAdvanced;
        })

})
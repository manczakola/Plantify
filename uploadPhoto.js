
let recognizedImage = new Object();

// export const sendIdentification = () => {
//     const files = [...document.querySelector('#upload').files];
//     const promises = files.map((file) => {
//         return new Promise((resolve, reject) => {
//             const reader = new FileReader();
//             reader.onload = (event) => {
//                 const res = event.target.result;
//                 console.log(res);
//                 resolve(res);
//             }
//             reader.readAsDataURL(file)
//         })
//     })

//     Promise.all(promises).then((base64files) => {
//         console.log(base64files)

//         const data = {
//             api_key: "tnxWY2oxbE1wdlFISTeXTfI4tATR0usClS9vs1y1JrK8ynZ69u",
//             images: base64files,
//             modifiers: ["crops_fast", "similar_images"],
//             plant_language: "en",
//             plant_details: ["common_names",
//                 "url",
//                 "name_authority",
//                 "wiki_description",
//                 "taxonomy",
//                 "synonyms"
//             ]
//         };

//         fetch('https://api.plant.id/v2/identify', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(data),
//             })
//             .then(response => response.json())
//             .then(data => {

//                 //create object with recognized plant

//                 recognizedImage = {
//                     id: data.id,
//                     images: data.images[0].url,
//                     imageName: data.images[0].file_name,
//                     isPlant: data.is_plant_probability,
//                     dateUpload: data.meta_data.date,
//                     suggestions: data.suggestions,
//                     plants: data.suggestions.forEach(el => {
//                         let plant = new Object();
//                         plant = {
//                             id: el.id,
//                             namePlant: el.plant_name,
//                             propability: el.probability,
//                             details: el.plant_details,
//                             commonName: el.plant_details.common_names,
//                             synonyms: el.plant_details.synonyms,
//                             taxonomy: el.plant_details.taxonomy,
//                             plantURL: el.plant_details.url,
//                             wikipedia: el.plant_details.wiki_description,
//                             similarImages: el.similar_images
//                         }
//                     }),

//                 }


//                 getPlantObject(recognizedImage)

//                 return recognizedImage
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//             });
//     })
// }




// for test



const sendIdentification = () => {
    const files = [...document.querySelector('#upload').files];
    const promises = files.map((file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const res = event.target.result;
                console.log(res);
                resolve(res);
            }
            reader.readAsDataURL(file)
        })
    })

    fetch('https://manczakola.github.io/data-trefl/data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);

            Headers: {
                CORS: 'no-cors'
            }
            //create object with recognized plant

            recognizedImage = {
                id: data.id,
                images: data.images[0].url,
                imageName: data.images[0].file_name,
                isPlant: data.is_plant_probability,
                dateUpload: data.meta_data.date,
                suggestions: data.suggestions,
                plants: data.suggestions.forEach(el => {
                    let plant = new Object();
                    plant = {
                        id: el.id,
                        namePlant: el.plant_name,
                        propability: el.probability,
                        details: el.plant_details,
                        commonName: el.plant_details.common_names,
                        synonyms: el.plant_details.synonyms,
                        taxonomy: el.plant_details.taxonomy,
                        plantURL: el.plant_details.url,
                        wikipedia: el.plant_details.wiki_description,
                        similarImages: el.similar_images
                    }
                })

            }
            getPlantObject(recognizedImage)
            console.log(recognizedImage);
            return recognizedImage
        })

}






// function displaying search results

const getPlantObject = (obj) => {

    const uploadDiv = document.querySelector('.uploadDiv');

    const plantMainDiv = document.createElement('div');
    uploadDiv.appendChild(plantMainDiv);
    plantMainDiv.classList.add('plantMainDiv');
    plantMainDiv.classList.add('col-12');


    const resultsOfUploadPhoto = document.createElement('div');
    uploadDiv.appendChild(resultsOfUploadPhoto);
    resultsOfUploadPhoto.classList.add('resultsOfUploadPhoto');
    resultsOfUploadPhoto.classList.add('row');


    let probabilities = [];
    let suggestions = obj.suggestions;

    for (let i = 0; i < suggestions.length; i++) {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('resultDiv')
        resultDiv.classList.add('col-xs-12');
        resultDiv.classList.add('col-md-6');
        resultDiv.classList.add('col-lg-4');
        resultsOfUploadPhoto.appendChild(resultDiv);

        probabilities.push(suggestions[i].probability);


        resultDiv.innerHTML += `
        <div class='probability'> Probability: ${(suggestions[i].probability*100).toFixed(2)}%</div>
       

        <img src="${suggestions[i].similar_images[0].url_small}" alt="plant"/>

        <div class='commonName'>Name: ${suggestions[i].plant_name}</div>

        <div class='scientificName'>Scientific name: ${suggestions[i].plant_details.scientific_name}</div>
        `

        if (suggestions[i].plant_details.wiki_description != null) {
            resultDiv.innerHTML += `
            <div class='wikipediaURL'>
            <a href="${suggestions[i].plant_details.wiki_description.citation}">${suggestions[i].plant_details.wiki_description.citation}
            </a>
            </div>

            <div class='wikipediaDescription'>${suggestions[i].plant_details.wiki_description.value}
            </div>`

        } else {
            resultDiv.innerHTML += `
            <div class='wikipediaURL'>
            <a href=""></a>
            </div>
            <div class='wikipediaDescription'></div>`
        }
    }


    probabilities.sort((a, b) => b - a);
    let theBestProbability = probabilities.shift();


    suggestions.forEach(el => {

        if (el.probability === theBestProbability) {
            plantMainDiv.innerHTML = `
    <img src="${obj.images}" alt="plant" class="recognizedPlantImg"/>
    <div class='recognizedPlantName'>The best result: <strong>${el.plant_name}</strong>
    `
        }

    })


    // hide buttons and change to results

    const form = document.querySelector('.form');
    const logoBig = document.querySelector('.logoBig');

    form.style.visibility = 'hidden';
    form.style.height = '0';

    const arrowDiv = document.createElement('div');
    if (arrowDiv) {

        arrowDiv.classList.add('arrowDiv');
        logoBig.appendChild(arrowDiv);
        arrowDiv.innerHTML = `<i class="fas fa-arrow-left"></i>`;
    }


    arrowDiv.addEventListener('click', () => {
        form.style.visibility = 'visible';
        plantMainDiv.style.display = 'none';
        resultsOfUploadPhoto.style.display = 'none';
        arrowDiv.style.display = 'none';
    })



}


document.querySelector('#identify').addEventListener('click', sendIdentification);

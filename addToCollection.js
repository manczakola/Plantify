    const itemsOfCollection = JSON.parse(localStorage.getItem('collection')) || [];
    const itemsOfCollectionLength = itemsOfCollection.length;
    const arrayOfCollection = [];

    const addToCollection = (item) => {
        console.log('ok');
        console.log(item);

        let objectOfCollection = new Object();
        objectOfCollection = {
            item: arrayOfCollection[0],
            name: document.querySelector('.recognizedPlantName').children[0].textContent,
            img: document.querySelector('.recognizedPlantImg').src
        }


        // create object in local storage
        localStorage.setItem('collection', JSON.stringify(objectOfCollection));
        let parsItem = JSON.parse(localStorage.getItem('collection'));

        // push object to array

        if (itemsOfCollection) {
            itemsOfCollection.push(parsItem);
        } else {
            return itemsOfCollection;
        }

        // set array of objects to local storage
        localStorage.setItem('collection', JSON.stringify(itemsOfCollection));


    }

    const showItem = (item) => {
        // console.log(item);
        const importItem = item;
        arrayOfCollection.push(importItem);

        console.log(arrayOfCollection);


    }
// console.log('added')
// input catching 
const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText)
    if (searchText == '') {
        
        document.getElementById('search-field').value = "Please Enter Name";
        alert("Enter name");
    }
    
    // clearing input section value 
    searchField.value ='';
    
    // getting data 
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
// console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data))
}

// showing search result 
const displaySearchResult = data => {
    // console.log(data)
    const searchResult = document.getElementById('search-result');
    // previous given input result clearing 
    searchResult.textContent = '';
    // condition for nothing found 
     if (data.length == 0) {
        document.getElementById('search-field').value = "Enter valid name";
        alert("Not Found");
    
     }
    data.forEach(data => {
        console.log(data);
        const div = document.createElement('div');
        div.classList.add('col');
        // card section adding using js 
        div.innerHTML = `
        <div onclick="loadPhoneDetail('${data.slug}')" class="card h-100">
                <img src="${data.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.phone_name}</h5>
                    <p class="card-text">${data.brand}</p>
                </div>
        </div>
        `;
        // setting child to parent 
        searchResult.appendChild(div);
    });
}
const loadPhoneDetail = (dataId) => {
    // console.log(dataId)
    
    const url = `https://openapi.programming-hero.com/api/phone/${dataId}`;
    console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data =>displayPhoneDetails(data.data))
}
const displayPhoneDetails = phone => {
    console.log(phone)
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML =`
               <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${phone.name}</h5>
                  <p class="card-text">${phone.releaseDate}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
    `;
    phoneDetails.appendChild(div);
}

// console.log('added')
// input catching 
const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText)
    // input validation 
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
    const vag =data.slice(0,20);
    console.log(vag)
    const searchResult = document.getElementById('search-result');
    // previous given input result clearing 
    searchResult.textContent = '';
    // condition for nothing found 
     // input validation 
     if (data.length == 0) {
        document.getElementById('search-field').value = "Enter valid name";
        alert("Not Found");
    
     }
     
    vag.forEach(data =>  {
        // console.log(data);
        
        const div = document.createElement('div');
        div.classList.add('col');
        
        // card section adding using js 
        div.innerHTML = `
        <div onclick="loadPhoneDetail('${data.slug}')" class="card">
                <img  src="${data.image}" class="card-img-top w-75 mx-auto" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.phone_name}</h5>
                    <p class="card-text">${data.brand}</p>
                  
                </div>
        <button  class="btn btn-outline-secondary" type="button" id="button-search">Details</button>

        </div>
        `;
        // setting child to parent 
        searchResult.appendChild(div);
    });
}
// getting id number 
const loadPhoneDetail = (dataId) => {
    // console.log(dataId)
   
    const url = `https://openapi.programming-hero.com/api/phone/${dataId}`;
    // console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data =>displayPhoneDetails(data.data))
}
const displayPhoneDetails = phone => {
    // console.log(phone)
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = '';
   
    // creating card for single element 
    const div = document.createElement('div');
    div.classList.add('card','flex-row');
    
    
    div.innerHTML =`
               
                <div  class="card-body w-50 ">
                <img  src="${phone.image}" class="card-img-top w-50" alt="...">
                  <h3 class="card-title">${phone.name}</h3>
                  <h4 class="card-text">Brand: ${phone.brand}</h4>
                  
                  <h5 class="card-text">Main Features -</h5>

                  
                  <p class="card-text"><b>Chipset: </b>${phone.mainFeatures.chipSet} 
                  <br>
                  <b>Display Size: </b>${phone.mainFeatures.displaySize}
                  <br>
                  <b> Memory: </b>${phone.mainFeatures.memory}
                  <br>
                  <b> Storage:</b> ${phone.mainFeatures.storage}
                  <br>
                  <b>Sensors:</b> ${phone.mainFeatures.sensors}
                  <br>
                  <b>Others: </b> ${phone.others.Bluetooth} ,<br> <b> GPS:</b> ${phone.others.GPS},<b>NFC:</b> ${phone.others.NFC} ,<b> Radio: </b>${phone.others.Radio} ,
                  <b>USB: </b>${phone.others.USB} , <b>WLAN: </b>${phone.others.WLAN}
                  

                  </p>
                  <h5 class="card-text">${phone.releaseDate}</h5>
                   
                  
                  
                </div>
    `;
    // add to parent 
    phoneDetails.appendChild(div);
    
}

   


// console.log('added')
// input catching 
const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText)
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
    data.forEach(data => {
        console.log(data);
    });
}
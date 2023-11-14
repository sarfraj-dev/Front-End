const productTitle=document.querySelectorAll('.card-title')
const cardText=document.querySelectorAll('.card-text')
const img=document.querySelectorAll('.card-img-top')
const imgBaseURL = 'https://image.tmdb.org/t/p/w500';
const imgUL=document.querySelector('.imgUL')
const input=document.querySelector('.input')
const submit=document.querySelector('submit')
fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e951421deea548f2910a28367a65366')
.then((response)=>{
    return response.json()
}).then((data)=>{
    // console.log(data);
return data.results

})
.then((responseData)=>{
    responseData.forEach((item,index) => {
        const value=item.title;
         if(index<productTitle.length){
    productTitle[index].innerHTML=value;

        }
});
// console.log(responseData);
responseData.forEach((item,index)=>{
    // console.log(item.overview)
    const overview=item.overview
    if (index<cardText.length) {
    cardText[index].innerHTML=overview
    }
})
responseData.forEach((item,index)=>{
    
    if (index<img.length) {
    img[index].src=imgBaseURL + item.poster_path;
    }
})
responseData.forEach((item)=>{
    const cardItem= document.createElement('li')
   cardItem.setAttribute("class", "li");
    const imgElement=document.createElement('img')
    imgElement.src=imgBaseURL+item.poster_path
    cardItem.appendChild(imgElement)
imgUL.appendChild(cardItem)
// .src=imgBaseURL+item.poster_path


})
// console.log(input.value);
input.addEventListener('input',function(e){
console.log(input.value);
})
})

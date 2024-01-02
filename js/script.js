let btn = document.querySelector('.btn');
let pic = document.querySelector('.photos');
let vdo = document.querySelector('.videos');
let option =0
pic.addEventListener('click', function(){
  btn.innerHTML= 'Photos'
});
vdo.addEventListener('click', function(){
  btn.innerHTML= 'Videos'
});

var mixer = mixitup('.image_cat');
var cursor = new MouseFollower();

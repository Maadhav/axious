const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = () => {
 //TODO: GET data from https://reqres.in/api/users using axious
};

const sendData = () => {
  //TODO: send data using POST request from https://reqres.in/api/register using axious
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
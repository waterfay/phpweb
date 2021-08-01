const account = document.querySelector('.account');
const password = document.querySelector('.password');
const send = document.querySelector('.send');

const accountcheck = document.querySelector('.accountcheck');
const passwordcheck = document.querySelector('.passwordcheck');
const sendcheck = document.querySelector('.sendcheck');

send.addEventListener('click',function(e){
  callSingUp()
})
function callSingUp(){
  if (account.value == "" || password.value==""){
    alert("請填寫正確資訊");
    return;
  }
  let obj = {};
  obj.email = account.value;
  obj.password = password.value;
  axios.post('https://hexschool-tutorial.herokuapp.com/api/signup', obj)
    .then(function (response) {
      alert(response.data.message)
      account.value = "";
      password.value="";
    })
    .catch(function (error) {
      console.log(error);
    });
}

sendcheck.addEventListener('click',function(e){
  callSingin()
})
function callSingin(){
  if (account.value == "" || password.value==""){
    alert("請填寫正確資訊");
    return;
  }
  let obj = {};
  accountcheck.value=account.value;
  passwordcheck.value=password.value;
  axios.post('https://hexschool-tutorial.herokuapp.com/api/signin', obj)
    .then(function (response) {
      alert(response.data.message)
      account.value = "";
      password.value="";
    })
    .catch(function (error) {
      console.log(error);
    });
}


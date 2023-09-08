window.onload=function(){

let sendButton = document.querySelector('button');
let container=document.querySelector(".container");

  let name = document.querySelector('#nameValue').value;
  let phone = document.querySelector('#phoneValue').value;
  let mail = document.querySelector('#mailValue').value;
  let rvdate = document.querySelector('#rvdateValue').value;
  let rvtime = document.querySelector('#rvtimeValue').value;
  let brand = document.querySelector('#brandValue').value;
  let item = document.querySelector('#itemValue').value;
  let year=new Date().getFullYear();
  let month=new Date().getMonth()+1;
  let day=new Date().getDate();
  let total=0
  let Today=Date.parse(new Date(`${year}`, `${month}`,`${day}`));
  const endDays=[];



  fetch("https://script.googleusercontent.com/macros/echo?user_content_key=GdglTCrA7X0AbltLY-VF51oc8dDhUxrh4WbT-iXsUwLc6gD_ZLyqiG14eXIbROpuIhRqMjycUVTfbEchge937R6UeWeEeuIhOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa59jgoW-0MStAa3hPxheGSMo31TPIuJ1pmeC9gk6RX5FPme17kqO-w3O1DbXQpZNf4S3FlqUgzs11HQn0VP0Bn-4wEjukTebaJPF0hqxPb_b1efjkCX-r4Kf7RVNzv-3OSNKh7jFW0rpKWEDaoiJtacJxqDIYjo1oV-cpCzktw9ZD-IkHuTjmzI&lib=M-5gmRdi5PTaCHOdgN3zpBkyGRFvvZwHs")
  .then((res) => {
    const data = res.json();
    return data;
  })
  .then((data) => {
    console.log(data);
    for(i=0;i<data.length;i++){
        // console.log(((Date.parse(data[i].date))==Today)>2)
        endDays.push(data[i].date);
        console.log(typeof  Date.parse(endDays[i]))
  console.log(typeof Today)
  console.log((Date.parse(endDays[i])==Today))
        if((Date.parse(endDays[i])==Today)==true){
            total++;
            console.log(total)
            if(total<2){
            container.style.display = "block";
        }
        }

    }

  });

  function send() {
  $.ajax({
    type: 'Get',
    url: "https://script.google.com/macros/s/AKfycbxITa5Poj9PrX6tgdf2Uo2H20i4ZrUvrmqXlPRSaaLOqGfrRgJcvCZHfm7IkCp1feJKCg/exec",
    data: {
        "name": name,
        "phone": phone,
        "mail": mail,
        "rvdate":rvdate,
        "rvtime":rvtime,
        "brand":brand,
        "item":item,
    },
    success: function(response) {
      if(response == "成功"){
        alert("成功");
      }
    },
  });

  fetch("https://script.googleusercontent.com/macros/echo?user_content_key=GdglTCrA7X0AbltLY-VF51oc8dDhUxrh4WbT-iXsUwLc6gD_ZLyqiG14eXIbROpuIhRqMjycUVTfbEchge937R6UeWeEeuIhOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa59jgoW-0MStAa3hPxheGSMo31TPIuJ1pmeC9gk6RX5FPme17kqO-w3O1DbXQpZNf4S3FlqUgzs11HQn0VP0Bn-4wEjukTebaJPF0hqxPb_b1efjkCX-r4Kf7RVNzv-3OSNKh7jFW0rpKWEDaoiJtacJxqDIYjo1oV-cpCzktw9ZD-IkHuTjmzI&lib=M-5gmRdi5PTaCHOdgN3zpBkyGRFvvZwHs")
  .then((res) => {
    const data = res.json();
    return data;
  })
  .then((data) => {
    console.log(data);
    for(i=0;i<data.length;i++){
        // console.log(((Date.parse(data[i].date))==Today)>2)
        endDays.push(data[i].date);
        console.log(typeof  Date.parse(endDays[i]))
  console.log(typeof Today)
  console.log((Date.parse(endDays[i])==Today))
        if((Date.parse(endDays[i])==Today)==true){
            total++;
            console.log(total)
            if(total>2){
            container.style.display = "none";
        }
        }

    }

  });
};

sendButton.addEventListener('click', send);

}
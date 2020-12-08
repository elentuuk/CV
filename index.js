function helloProfile(){
    // let value = document.getElementById("message").value;
    // console.log(value);
    // alert(value);
    document.querySelector(".biografi").style.color = "#03506f";
    document.querySelector(".edukasi").style.color = "#03506f";
    document.querySelector(".award").style.color= "#03506f";
    document.querySelector(".kontak").style.color= "#03506f";

    document.querySelector(".biografi").style.fontSize= "3.5em";
    document.querySelector(".edukasi").style.fontSize= "3.5em";
    document.querySelector(".award").style.fontSize= "3.5em";
    document.querySelector(".kontak").style.fontSize= "3.5em";

    document.querySelector(".biografi").style.backgroundColor = "#839b97";
    document.querySelector(".edukasi").style.backgroundColor= "#839b97";
    document.querySelector(".award").style.backgroundColor= "#839b97";
    document.querySelector(".kontak").style.backgroundColor= "#839b97";

    document.querySelector(".bodies").style.backgroundColor= "#ebebeb";
    document.getElementById("images").src= "elen-tuuk.png";

    // document.querySelector(".paragraph").style.backgroundColor= "#9088d4";
}

function displayDate(){
    document.getElementById("time").innerHTML = Date();
}
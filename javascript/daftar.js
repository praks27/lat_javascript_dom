let dinoiki=new Date();
let tahunS=dinoiki.getFullYear();
document.getElementById("kirim").disabled=true;
// function untuk mengosongkan halaman input saat di click

/* function untuk mengambil waktu sekarang/tahun
 dan mengambil 3 huruf pertama untuk dijadikan kode otomatis*/
 
document.getElementById("nama").onkeydown = function(){
    let currentTime=new Date();
    let tahun=currentTime.getFullYear();
    let nama =  document.getElementById("nama").value;
    let kode = nama.substring(0,3);
    document.getElementById("kdaf").value = kode + tahun;
}
// function untuk membuat ketikan otomatis menjadi besar
document.getElementById("nama").onkeyup=function(){
    let name=document.getElementById("nama");
    name.value=name.value.toUpperCase();
}
// function mengecek minimal karakter yang harus diinputkan 
document.getElementById("alamat").onchange=function(){
    let address=document.getElementById("alamat").value;
    let charlength=address.length;
    if(charlength<=30){
        document.getElementById("displaychar").style.display="inline";
    }else{
        document.getElementById("displaychar").style.display="none";
    }
}
document.getElementById("date").onchange=function(){
    let tulis=document.getElementById("date").value;
    let usia=new Date(tulis);
    ageNow=usia.getFullYear();
    let Uskrg=(tahunS-ageNow);
     document.getElementById("hasilumur").innerHTML=Uskrg + "tahun";

     if(Uskrg<=18){
         alert("umur wajib 19 tahun");
     }else{
         document.getElementById("kirim").disabled=false;  
     }
}
function daftar(){
    let kode=document.getElementById("kdaf").value;
    let nama=document.getElementById("nama").value;
    let tempat=document.getElementById("place").value;
    let tgl=document.getElementById("date").value;
    let jk=document.getElementById("jk").value;
    let email=document.getElementById("emailaddress").value;
    let alamat=document.getElementById("alamat").value;

    let data= "<tr>";
    data+="<td>"+kode+"</td>";
    data+="<td>"+nama+"</td>";
    data+="<td>"+tempat+", "+tgl+"</td>";
    data+="<td>"+jk+"</td>";
    data+="<td>"+email+"</td>";
    data+="<td>"+alamat+"</td>";
    data+="</tr>";
    document.getElementById("tampiltable").innerHTML=data;
}
// document.getElementById("kirm").onclick=function(){
//     let kode=
// }
    // let date=document.getElementById("date").value;
    // if(date=== ""){
    //     alert("mohon diisi terlebih dahulu !!");
    // }else{
    //     let hari=new Date();
    //     let umur=new Date(date);
    //     let year =0;
    //     if(hari.getMonth()<umur.getMonth()){
    //         year=1;
    //     }else if((hari.getMonth()==umur.getMonth())&&hari.getDate()< umur.getDate()){
    //         year=1;
    //     }
    //     let Uskrg = hari.getFullYear()-umur.getFullYear()-year;
    //     if(Uskrg<=18){
    //         pesan="tidak cukup umur";
    // }
    //     document.getElementById("hasilumur").innerHTML = Uskrg +"tahun";
    // }
// }
// function button condition(){
//     document.getElementById("KIRIM");
//     let umur = getage();
//     if(umur<=18){

    // }


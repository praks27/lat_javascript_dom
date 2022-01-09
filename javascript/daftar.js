document.getElementById("place").value;
document.getElementById("date").value;
document.getElementById("jk").value;
document.getElementById("alamat").value;
document.getElementById("nama").onkeydown = function(){
    let currentTime=new Date();
    let tahun=currentTime.getFullYear();
    let nama =  document.getElementById("nama").value;
    let kode = nama.substring(0,3);
    document.getElementById("kdaf").value = kode + tahun;
}
document.getElementById("nama").onkeyup=function(){
    let name=document.getElementById("nama");
    nama.value=nama.value.toUpperCase();
}
function address(){
    document.getElementById("alamat").value;
    let pesan;
    if(alamat.value.length!=6){
        pesan="minimal 30 karakter";
    }else{
        pesan=""
    }
    document.getElementById("info").innerHTML=pesan;
}
function getage(){
    let date=document.getElementById("date").value;
    if(date=== ""){
        alert("mohon diisi terlebih dahulu !!");
    }else{
        let hari=new Date();
        let umur=new Date(date);
        let year =0;
        if(hari.getMonth()<umur.getMonth()){
            year=1;
        }else if((hari.getMonth()==umur.getMonth())&&hari.getDate()< umur.getDate()){
            year=1;
        }
        let Uskrg = hari.getFullYear()-umur.getFullYear()-year;
        if(Uskrg<=18){
            pesan="tidak cukup umur";
    }
        document.getElementById("hasilumur").innerHTML = Uskrg +"tahun";
    }
}

let databarang=[{kode :"001",nama:"gula",harga:20000},
{kode:"002",nama:"minyak 1 ltr",harga:25000},{
    kode:"003",nama:"telur 1 kg",harga:18000},
    {kode:"004",nama:"beras 1 kg",harga:25000}
];
// deklarasi barang dari kombo box
let barang=document.getElementById("barang");
// tidak perlu menggunakan documen.getelemen karena sudah di deklarasikan diatas
databarang.forEach((item) => {
barang.innerHTML+="<option value ='"+item.harga+"'>"+item.nama+"</option>";
    });
// let harga variabel untuk menampung harga dari data barang
let harga=document.getElementById("hargabarang");
barang.onchange=function(){
    harga.value = barang.value;
};
let diskon = document.getElementById("diskon");
let total=document.getElementById("total");
qty.onchange=function(){
    total.value=qty.value*harga.value;
    if(total.value>=100000){
        diskon.value=total.value*0.05;
    }else{
        diskon.value=0;
    }
    
}



 
// let I=databarang.length;
// for(let i=0;i<I;i++){
//     document.getElementById("barang").innerHTML="<option value= " +I+">"+I+"</option>";
// }
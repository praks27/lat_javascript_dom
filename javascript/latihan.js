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
let ttldis=document.getElementById("ttlbayar");
let diskon = document.getElementById("diskon");
let total=document.getElementById("total");
let  qty=document.getElementById("qty");
qty.onchange=function(){
    total.value=qty.value*harga.value;
    if(total.value>=100000){
        diskon.value=total.value*0.05;
        ttldis.value=total.value-diskon.value;
    }else{
        diskon.value=0;
    }
}
let kembalian=document.getElementById("kembalian");
let bayar=document.getElementById("jumlahbayar");
bayar.onkeyup=function(){
    kembalian.value=bayar.value-ttldis.value;
}

function pembayaran(){
    let namabarang=document.getElementById("barang").value;
    let hargabarang=document.getElementById("hargabarang").value;
    let QTY=document.getElementById("qty").value;
    let diskon=document.getElementById("diskon").value;
    let ttldis=document.getElementById("ttldis").value;
    let jumlahbayar=document.getElementById("jumlahbayar").value;
    let kembalian=document.getElementById("kembalian").value;

    let databayar="<tr>";
    databayar+="<td>"+namabarang+"</td>";
    databayar+="<td>"+hargabarang+"</td>";
    databayar+="<td>"+QTY+"</td>";
    databayar+="<td>"+diskon+"</td>";
    databayar+="<td>"+ttldis+"</td>";
    databayar+="<td>"+jumlahbayar+"</td>";
    databayar+="<td>"+kembalian+"</td>";
    databayar+="</tr>";

    document.getElementById("strukharga").innerHTML=databayar;


}





 
// let I=databarang.length;
// for(let i=0;i<I;i++){
//     document.getElementById("barang").innerHTML="<option value= " +I+">"+I+"</option>";
// }
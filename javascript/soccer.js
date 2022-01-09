for(i=0; i<150;i=i+15){
 document.getElementById("waktu").innerHTML  += "<option value="+i+">"+i+" Menit</option>";
}
// function tampil(){
//     document.getElementById("score").innerHTML +
// }
function skor(){
    let skor1=document.getElementById("skor1").value;
    let skor2=document.getElementById("skor2").value;
    let waktu =  document.getElementById("waktu").value;
    let pesan;
    

    if(waktu<=45){
        pesan = "pertandingan babak pertama";
    }else if(waktu <= 90 ){
        pesan = "pertandingan babak kedua";
    }else if(waktu >=90 && skor1 > skor2){
        pesan = "Pemenang Tim A";
    }else if(waktu >=90&& skor1< skor2){
        pesan = "Pemenang Tim B";
        }if(waktu ==90&& skor1==skor2){
            pesan = "perpanjangan waktu 2x 15 menit";
        }else if(waktu >= 135 && skor1==skor2){
            pesan = "adu pinalti";
        }
        message("score",
        "   skor TIM A :   " + skor1 +
        "   skor TIM B :   " + skor2 +
        pesan);
    }

    document.getElementById("judulbola").onmouseover  = function(){
        document.getElementById("judulbola").style.backgroundColor="red";
    };
    document.getElementById("judulbola").onmouseout = function(){
        document.getElementById("judulbola").style.backgroundColor="green";
    };
    document.getElementById("skor1").onmouseup = function(){
        document.getElementById("skor1").style.color="red";;
    };
    document.getElementById("skor1").onmousedown = function(){
        document.getElementById("skor1").style.color="green"
    }
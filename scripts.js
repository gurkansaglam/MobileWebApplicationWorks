function goBack() {
    window.history.back();
}
function secimtk() {
    var secimler = document.getElementsByName("secim");
    if (secimler[0].checked) {
        document.getElementById("tarih2").disabled=true;
      //  document.getElementById("ikinci").selectedIndex = 0
      //  document.getElementById("ikinci").disabled = true
     //  document.getElementById("degistir").disabled =true
    }
    else if (secimler[1].checked) {
        document.getElementById("tarih2").disabled=false;
      //  document.getElementById("ikinci").disabled = false
      //  document.getElementById("degistir").disabled =false
    }

}
function secimtwo() {
var x= document.getElementById("ikinci").selectedIndex
var y= document.getElementById("birinci").selectedIndex
document.getElementById("birinci").selectedIndex = x
document.getElementById("ikinci").selectedIndex = y
}

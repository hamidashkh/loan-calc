function Calc(){    
    var input1=document.getElementById('mebleg').value
    var input2=document.getElementById('faiz').value
    var input3=document.getElementById('aylar').value
    var mebleg=Number(input1);
    var faiz=Number(input2);
    var aylar=Number(input3);
    var extra = (mebleg * (faiz * 0.01)) / aylar;
    var odenis=(((mebleg*faiz/100)+mebleg)/aylar).toFixed(2)
    document.getElementById('odenis').innerText=`Aylıq Ödəniş:${odenis}`
    var full=(odenis*aylar).toFixed(2);
    document.getElementById('full').innerText=`Ümumi məbləğ:${full}`
}
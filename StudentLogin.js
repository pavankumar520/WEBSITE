function myform(){
    var sid=document.getElementById('sid').value;
    var p=/^[n|N](180)[0-9]{3,3}$/
    var p1=/^[A-Z][a-z][0-9][A-Z][a-z]$/
    var spa=document.getElementById('spa').value;
    if(!(p.test(sid))){
        document.getElementById('l1').style.display='block';
        setInterval(error,5000);
       return false
    }
    if(!(p1.test(spa))){
        document.getElementById('l2').style.display='block';
        setInterval(error1,5000);
        return false
    }
    else{
        return true
    }
    function error(){
        document.getElementById("l1").style.display="none";
    }
    function error1(){
        document.getElementById("l2").style.display="none";
    }
}
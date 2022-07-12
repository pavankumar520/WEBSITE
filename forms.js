function myform(){
    var np=/^[f,d{4}]{3,50}$/
    var gmail=/^[a-z,A-Z,0-9][a-z.A-z.0-9,_,.]*@[a-z]{2,6}\.?[a-z]{2,3}\.?[a-z]{2,3}$/;
    var fname=document.getElementById('fn').value;
    var lname=document.getElementById('ln').value;
    var mname=document.getElementById('mn').value;
    var chek1=document.getElementById('c1').checked;
    // var chek2=document.getElementById('c2').checked;
    // var chek3=document.getElementById('c3').checked;
    var g=document.getElementById('Gmail').value;
    // var pn=document.getElementById('pas').value;
    if(!(np.test(fname))){
        document.getElementById('fn').style.border="5px solid red";
        document.getElementById('fl').innerText="Invalid Name";
        setInterval(error,5000);
        return false;
    }
    if(!(np.test(lname))){
        document.getElementById('ln').style.border="5px solid red";
        document.getElementById('ll').innerText="Invalid Name";
        setInterval(error1,5000);
        return false;
    }
    if(pn.length<6){
       document.getElementById('psl').innerText="Invalid Password";
        return false;
    }
    
    if(!(gmail.test(g))){
        document.getElementById('Gmail').style.border="5px solid red";
        return false;
    }
    else{
        return true;
    }
    function error(){
        document.getElementById("fl").style.display="none";
    }
    function error1(){
        document.getElementById("ll").style.display="none";
    }
    function chekerror(){
        document.getElementById("chek").style.display="none";
    }
    function fullname(){
        var d=document.getElementById('fulllab').innerText=fname+lname;
    }
    function showpass(){
       var s=document.getElementById('shw').click;
       if(s){
           document.getElementById('pas').type='text';
       }
       else{
           document.getElementById('pas').type='password';
       }
    }

}
$(document).ready(function(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this,this.readyState == 4 && this.status == 200){
            document.getElementById('footer').outerHTML
                =this.responseText;
        }
    };
    xhttp.open('GET','footer.html',true);
    xhttp.send();
});
window.onload=init();

function init() {  
    document.forms[0].onsubmit = function() {
        if (this.checkValidity()) {    
            document.getElementById('fname').value="";
            alert("Successful create your account. Please login again");
            return true;
        }
    }    
}
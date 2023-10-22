window.onload=init();

function init() {  
    document.forms[0].onsubmit = function() {
        if (this.checkValidity()) {    
            document.getElementById('fname').value="";
            alert("Successful login your profile, enjoy on your purchasing! ^.^ ");
            return true; 
        }
    }     
}

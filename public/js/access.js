$(document).ready(function(){var e={contactName:ko.observable(""),email:ko.observable(""),productDetails:ko.observable(""),company:ko.observable(""),postForm:function(){var e=this;contactName=e.contactName(),email=e.email(),productDetails=e.productDetails(),company=e.company(),html="Please contact the following company for syndicaton access to the Content API <p>Name: "+contactName+"</p><p>Email: "+email+"</p><p>Product details : "+productDetails+"</p><p>Company: "+company+"</p>",$.ajax({type:"POST",url:"http://to-do:3000/email",data:{from:email,html:html}}).done(function(e){$("#submitButton").html(e)})}};ko.applyBindings(e);var t=document.getElementById("developerBox");t.addEventListener("click",function(){document.getElementById("boxes").style.display="none",document.getElementById("developer").style.display="block"});var o=document.getElementById("commercialBox");o.addEventListener("click",function(){document.getElementById("boxes").style.display="none",document.getElementById("commercial").style.display="block"})});
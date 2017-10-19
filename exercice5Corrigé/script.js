$("#connection").submit(function( event ){ //$("#submit").click

    event.preventDefault();//Annule l'évènement s'il est annulable, sans stopper sa propagation.

    var username = $("#username").val();
    var password = $("#password").val();

    $.ajax({

        url: "http://localhost/webservices/ServiceHTTP/api/login",
        method: "POST",
        data : {
            username : username,
            password : password
        },
        dataType: "json",
        success: function( data ){

            if( data.success == false ){
                $("#errors").html( data.errors );
            }
            else {
                alert( "Welcome user " + data.user.id );
            }

        },  
        error : function( error ){
            console.log(error);
        }

    });

});
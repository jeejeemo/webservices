$.ajax({
    url : "http://localhost/webservices/api",
    method:"get",
    dataType : "json", // specifie le type de data récupéré
    success: function( data ){
        console.log ( data);
    },
    error:function ( error){
        console.log( data);
    }

})
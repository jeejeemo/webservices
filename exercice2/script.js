$("button").click(function(){
    var value = $(this).val();
        
        $.ajax({
            url : "http://localhost/webservices/ServiceHTTP/api",
            method:"get",
            dataType : "json",
            data:{
                festival_id : value
            },
            success: function( data ){
               $("#name").html( data.name);
               $("#lat").html( data.lat);
               $("#lng").html (data.lng)
            },
            error:function ( error){
                
            }

        })
})

// $.ajax({
//     url : "http://localhost/webservices/api",
//     method:"get",
//     dataType : "json", // specifie le type de data récupéré
//     success: function( data ){
//         console.log ( data);
//     },
//     error:function ( error){
        
//     }

// })
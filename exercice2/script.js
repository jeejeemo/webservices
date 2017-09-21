$("button").click(function(){
    var value = $(this).val();
        
        $.ajax({
            url : "http://localhost/webservices/api",
            method:"get",
            dataType : "json",
            data:{
                festival_id : value
            },
            success: function( data ){
               console.log ( data );
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

})
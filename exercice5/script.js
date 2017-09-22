
// $.ajax({
//     url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&page=Accueil_principal",
//     method:"get",
//     success: function ( data){
//         console.log(data)
//     },
//     error: function(error){

//         console.log( error );
//     },


// });

function mafunction( data ){
    $("body").html( data.parse.text['*'] );
}




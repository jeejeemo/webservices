$(document).ready(function(){
    $.ajax({
        url:"http://localhost/webservices/ServiceHTTP/api/depfr",
        method: "get",
        dataType:"json",
        success : function(data){
            console.log(data);
            var options = "";
            for( var item of data){
                options += "<option value='"+item+"'>"+item+"</option>"

            }
            $("#seldepfr").html (options);
            
        },
        error: function(error){
            // console.log(error)
        }
    })
})
$("#seldepfr").change(function(){
    var departement_id =$ (this).val();
    var options ="";
    $.ajax({
        url:"http://localhost/webservices/ServiceHTTP/api/villesfr",
        method:"get",
        dataType:"json",
        data: {
            departement_id : departement_id
        },
        success: function(data){
            console.log(data)
            for ( var item of data){
                options += "<option id='"+item.ville_id+"'>"+item.ville_nom+"</option>";
            }
            $("#selvilles").html (options);
        },
        error : function(error){
            // console.log(error)
        }

    })
})
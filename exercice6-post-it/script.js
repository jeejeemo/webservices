$(document).ready(function(){
    $.ajax({

        url:"http://localhost/api/postits",
        method: "get",
        dataType:"json",
        success : function(data){
            console.log(data);
            var options = "";
            for( var item of data){
                

            }
           
            
        },
        error: function(error){
            // console.log(error)
        }
    })



});
$("#add").click(function(){

    $.ajax({
        url:"http://localhost/api/postit",
        method: "post",
        dataType: "json",

    })
})


$('form').submit(function(event){
    event.preventDefault();

    $.ajax({
        url:"http://localhost/webservices/ServiceHTTP/api/formconnect",
        method: "get",
        dataType:"json",
        data:{

            pseudo:"pseudo",
            motdepasse:"password"
        },
        success : function(data){
            console.log(data)
            if(data != false){
                
        }
            
            
        },
        error: function(error){
            // console.log(error)
        }
    })
})
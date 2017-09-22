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
$("#selvilles").change(function(){
    
    var ville_name = $(this).children("option:selected").html();

    $.ajax({
        url:"http://api.openweathermap.org/data/2.5/weather",
        data:{
            q: ville_name,
            APPID:"f16829814995d5543e7fc4290684fe41"
        },
        method:"get",
        dataType:"json",
        success: function(data){
            var temp = (data.main.temp - 273.15).toFixed(0);
            var pressure = data.main.pressure;
            var humidity = data.main.humidity;
            var windspeed = data.wind.speed;
            var icon = data.weather[0].icon;

           
            var icon_url= "http://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/"+ icon +".png";
            
            // console.log(icon_url);
            $(".pressure").html("Pression:" + pressure);
            $(".temp").html("Temperature:" + temp);
            $(".hum").html("humidity"+ humidity);
            $(".vent").html("Vent" + windspeed);
            $("#icon").attr("scr",icon_url);

        
        },
        error: function(error){
            console.log(error);
        }

    })
    
})
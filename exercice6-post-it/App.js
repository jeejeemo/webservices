class App {

    constructor(){
        
        this.$form = $("#create");
        this.$detail = $("#detail");
        this.$title_detail = $("#title_detail");
        this.$content_detail = $("#content_detail");
        this.$title = $("#title");
        this.$content = $("#content");
        this.$add = $("#add");
        
        this.lastSelectedPostit = null;
        this.postits = [];

        //On declenche des l'instanciation
        this.readPostits();
        this.reinit();
    }

    reinit() {
        this.$form.slideUp(300);
        this.$detail.fadeOut(300);
        this.$title.val("");
        this.$content.val("");
    }

    addPostit( postit ){
        this.postits.push( postit );
    }

    savePostits( postit ){
        var that = this;
        $.ajax({
            url : "http://localhost/API1/postit",
            method : "POST",
            data : {
                title : postit.title,
                content : postit.content
            },
            dataType : "json",
            success : function( data ){

                if( data.success == true ){
                    postit.id = data.id;
                    postit.display();
                    that.addPostit( postit );
                }
                else {
                    alert( "Une erreur est survenue lors de l'enregistrement !" );
                }
            },
            error : function( error ){
                console.log( error );
            }
        })
    }

    
   readPostits(){
        var that = this;
       $.ajax({
           url:"http://localhost/API1/postits/",
           method: "get",
           dataType: "json",
           success : function( data ){

                for( var data_postit of data){
                    var postit = new Postit ( data_postit.title, data_postit.content);
                    postit.id = data_postit.id
                    that.addPostit ( postit );
                    postit.display();

                    console.log(postit)
                }
            },
            
            error : function( error ){
                console.log( error );
            },
        });
    }

    removePostit(index){
        var postit = this.postits[index];
        var that = this;

        $.ajax({
            url : "http://localhost/API1/postit/"  + postit.id,
            method: "DELETE",
            dataType:"json",

            success: function( data ){
                if( data.success == true ){
                    postit.destroy();
                    that.postits.splice(index, 1);
                }
                else {
                    alert("Un problème est survenu lors de suppression !");
                }
            },
            error : function( error ){
                console.log(error);
            }

        });

    }
        
        
    detail( postit ){

                var that = this;
                $.ajax({
                    url: "http://localhost/API1/postit/" + postit.id,
                    method: "GET",
                    dataType: "json",
                    success : function( data ){
                        console.log(data);
                        if( data.success == true ){
                            that.lastSelectedPostit = postit;
                            that.$title_detail.val( data.postit.title );
                            that.$content_detail.val( data.postit.content);
                            that.$detail.fadeIn(300);
                        }
                        else {
                            alert("Une erreur est survenu lors de la récupération !");
                        }
        
                    },
                    error : function( error ){
                        console.log(error);
                    }
                })
        
            }
         
    updatePostit( postit ){
        var title = this.$title_detail.val();
        var content = this.$content_detail.val();
        var that = this;
        //Ici our les requetes PUt uniquement, on stringify les données
        // avec JSON.stringify
        $.ajax({
            url: "http://localhost/API1/postit/" +postit.id,
            method: "PUT",
            data: JSON.stringify({
                title: title,
                content: content
            }),
            dataType: "json",
            success: function(data){
                if(data.success == true){
                    postit.$dom.children("h2").html (title);
                    postit.$dom.children("p").html (content);
                    that.$detail.fadeOut(300);
                }
                else{
                alert("Probleme de connection lors de la mise a jour");
                }
            },   
            error: function( error ){
                console.log( error );
            }
        });
    }
    // test(){
    //     //Ici our les requetes PUt uniquement, on stringify les données
    //     // avec JSON.stringify
    //     $.ajax({
    //         url: "http://localhost/API/postit",
    //         method: "put",
    //         data: JSON.stringify({
    //             test: "hello",
    //             element: "World",

    //         }),
    //         dataType: "json",
    //         success: function(data){
    //             console.log(error);
    //         },
    //         error: function( error ){
    //             console.log( error );
    //         }
    //     })
    // }

}
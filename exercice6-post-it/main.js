var app = new App();

app.$add.click(function(){

    app.$form.slideToggle(200);

});

app.$form.submit(function( event ){

    event.preventDefault(); //Empeche le rechargement

    var title = app.$title.val();
    var content = app.$content.val();

    var date = new Date();
    date = date.getDate() + "/" + ( date.getMonth() + 1 )  + "/" + date.getFullYear();

    var postit = new Postit( title, content, date );
    postit.display();
    app.addPostit( postit );

    app.reinit();    

});

/* A utiliser en cas de création dynamique -> en effet le click est bindé sur tout le document
et vérifie si l'élément cible est de type ".close" */
$(document).on("click", ".close", function(event){ 
    
    event.stopPropagation();
    
    var index = $(".close").index( $(this) );
    app.removePostit( index );

});

$(document).on('click', '.post-it', function(){
    var index = $('.post-it').index( $(this) );
    var postit = app.postits[index];
    app.detail( postit );
});
app.$detail.submit(function(){
    
    event.preventDefault();
    app.updatePostit(app.lastSelectedPostit) ;

})
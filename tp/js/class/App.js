class App {

    constructor(){
        this.currentPostit = null;
        this.$add_evenement = $("#add_evenement");
        this.$add_title = $("#add_title");
        this.$add_description = $("#add_description");
        this.$add_datedebut = $("#add_datedebut");
        this.$add_datefin = $("#add_datefin");
        this.$add = $("#add");
        this.$close = $(".close")

        this.$container_evenement = $("#container_evenement");
        this.$infos_evenement = $(".event_infos");
        this.$contain_event_close = $("#contain_event_close");
        this.event_light = $("#event_light");
        this.$alert1 = $(".alert-danger");
        this.$alert2 = $(".alert-warning");

        this.evenements=[];


        this.initPickers()

    }
    
        addEvenement(evenement){
            this.evenements.push(evenement);
        }

        initPickers(){
            
            var options = {
                dayNames : ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
                dayNamesMin : ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
                monthNames : ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"],
                monthNamesShort : ["Jan", "Fev", "Mar", "Avr", "Mai", "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec"],
                firstDay : 1,
                dateFormat : "dd/mm/yy",
            };
    
            this.$add_datedebut.datepicker( options );
            this.$add_datefin.datepicker( options );
            
        }
        
        removeEven(index){
            var even = this.evenements[index];
            even.$dom.fadeOut(300, function(){
                
                even.destroy();
                
            })
            this.evenements.splice(index, 1); 

        }

        saveEven(){
            var evenJson = JSON.stringify( this.evenements );
            localStorage.setItem("events", evenJson);
        }

        readEven(){
            var evenJson = localStorage.getItem( 'events' );
            var evens = JSON.parse (evenJson);

            if(!evens){
                return;
            }
            
            for( var evenObject of evens){
                var even= new Evenement (evenObject.title, evenObject.description,new Date(evenObject.datedebut),new Date(evenObject.datefin));
                even.displayNot();
                this.addEvenement(even);
            }

        }
        searchEvenDay(){
            for(var even of this.evenements ){
                even.alertDayEven();
            }
        }

        
      
        
        
             
}
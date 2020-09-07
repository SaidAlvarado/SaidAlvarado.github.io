
var glossaryState = {

    // The create function is a  standard Phaser function, and is automatically called.
    create: function() {

        // coloco el color de fonde predefinido
        this.game.stage.backgroundColor = '#020028';

        // Titulo del screen
        //var gametitle=  game.add.sprite(120,30, "gametitle");
        var gametitle= this.game.add.text(this.game.world.centerX-75,30,'Glosario',{font:'40px Arial',fill:'#ffffff'});
        gametitle.font='Revalia';


        // definicion del boton de goBack
        var replay= game.add.button(this.game.world.centerX,this.game.world.centerY+225, "back",this.goBack,this);

        // conceptGroup1
        this.conceptGroup1 = this.game.add.group();
        //conceptGroup2
        this.conceptGroup2 = this.game.add.group();
        //conceptGroup3
        this.conceptGroup3 = this.game.add.group();
        //conceptGroup4
        this.conceptGroup4 = this.game.add.group();
        //conceptGroup5
        this.conceptGroup5 = this.game.add.group();


        //cargo todos los iconos en un layour vertical
        //x=160,y=110
        this.concept_text1= this.game.add.text(260,110,`La magnitud de la fuerza  entre 2 cargas puntuales en reposo es directamente  proprocional al producto de las magnitudes de ambas cargas
e inversamente proporcional a la distancia que las separa.
Puede expresarse como F=K*Q1*Q2/d*d`,{font:'12px Arial',fill:'#ffffff'});
        this.concept_text1.visible=false;
        var concept_icon_1 = game.add.button(220, 120, "coulomb",this.toogleC1,this);
        concept_icon_1.anchor.set(0.5);
        var concept_name1= this.game.add.text(260,110,'Ley de Coulomb para cargas discretas',{font:'24px Arial',fill:'#ffffff'});
        concept_name1.font='Revalia';
        this.conceptGroup1.add(this.concept_text1);
        this.conceptGroup1.add(replay);

        //Debo agregar el nuevo grupo al anterior para que funcione correctamente.
        this.conceptGroup1.add(this.conceptGroup2)

        //texto del conceptGroup2
        this.concept_text2= this.game.add.text(260,200,'Es una propiedad del espacio que rodea a un cuerpo cargado, de modo tal que cuando en\n\
esa región se sitúa una carga de prueba q0, dicha carga experimenta una fuerza dada por\n\
la ley de Coulomb.\
',{font:'14px Arial',fill:'#ffffff'});
        this.concept_text2.visible=false;
        // icono del conceptGroup2
        var concept_icon_2 = game.add.button(220, 210, "ec", this.toogleC2,this);
        concept_icon_2.anchor.set(0.5);
        var concept_name2= this.game.add.text(260,200,'Campo eléctrico en cargas discretas',{font:'24px Arial',fill:'#ffffff'});
        concept_name2.font='Revalia';
        this.conceptGroup1.add(concept_icon_2);
        this.conceptGroup1.add(concept_name2);
        this.conceptGroup2.add(this.concept_text2);
        this.conceptGroup2.add(replay);

        // Agregando hijo al objeto anterior
        this.conceptGroup2.add(this.conceptGroup3);

        // texto del conceptGroup3
        this.concept_text3= this.game.add.text(260,295,' Se refieren al flujo de cargas eléctrica dentro de un material durante un espacio de\n\
tiempo. La unidad de corriente electrica es conocida como el Ampere (A).',{font:'14px Arial',fill:'#ffffff'});
        this.concept_text3.visible=false;

        // otras definiciones
        var concept_icon_3 = game.add.button(220, 300, "current", this.toogleC3,this);
        concept_icon_3.anchor.set(0.5);
        var concept_name3= this.game.add.text(260,290,'Corrientes eléctricas',{font:'24px Arial',fill:'#ffffff'});
        concept_name3.font='Revalia';

        // Agrego los datos al concept group padre
        this.conceptGroup1.add(concept_icon_3);
        this.conceptGroup1.add(concept_name3);
        this.conceptGroup2.add(concept_icon_3);
        this.conceptGroup2.add(concept_name3);
        this.conceptGroup3.add(this.concept_text3);
        this.conceptGroup3.add(replay);

        this.conceptGroup3.add(this.conceptGroup4);


        // texto del conceptGroup4
        this.concept_text4= this.game.add.text(260,370,'Un pulsador es un operador eléctrico que, cuando se oprime, permite el paso de la\n\
corriente eléctrica.Cuando se deja de oprimir interrumpe nuevamente el paso de la\n\
corriente.',{font:'14px Arial',fill:'#ffffff'});
        this.concept_text4.visible=false;
        //otras definiciones
        var concept_icon_4=game.add.button(220, 380, "switch", this.toogleC4,this);
        concept_icon_4.anchor.set(0.5);
        var concept_name4= this.game.add.text(260,370,'Elementos discretos. Pulsadores',{font:'24px Arial',fill:'#ffffff'});
        concept_name4.font='Revalia';
        this.conceptGroup1.add(concept_icon_4);
        this.conceptGroup1.add(concept_name4);
        this.conceptGroup2.add(concept_icon_4);
        this.conceptGroup2.add(concept_name4);
        this.conceptGroup3.add(concept_icon_4);
        this.conceptGroup3.add(concept_name4);
        this.conceptGroup4.add(this.concept_text4);
        this.conceptGroup4.add(replay);

        this.conceptGroup4.add(this.conceptGroup5);

        // texto del conceptGroup4
        this.concept_text5= this.game.add.text(260,430,' Se refiere a la porpiedad que tienen los materiales de oponerse al flujo de electrones\n\
que circulan por ellos. La unidad de resistencia en el Sistema Internacional es el ohmio\n\
 que se representa con la letra griega omega (Ω),',{font:'14px Arial',fill:'#ffffff'});
        this.concept_text5.visible=false;
        // otras definiciones
        var concept_icon_5=game.add.button(220,460, "resistor",this.toogleC5,this);
        concept_icon_5.anchor.set(0.5);
        var concept_name5= this.game.add.text(260,445,'Elementos pasivos: Resistencia',{font:'24px Arial',fill:'#ffffff'});
        concept_name5.font='Revalia';
        this.conceptGroup1.add(concept_icon_5);
        this.conceptGroup1.add(concept_name5);
        this.conceptGroup2.add(concept_icon_5);
        this.conceptGroup2.add(concept_name5);
        this.conceptGroup3.add(concept_icon_5);
        this.conceptGroup3.add(concept_name5);
        this.conceptGroup4.add(concept_icon_5);
        this.conceptGroup4.add(concept_name5);
        this.conceptGroup5.add(this.concept_text5);
        this.conceptGroup5.add(replay);


        //var nameLabel= this.game.add.text(this.game.world.centerX-50,this.game.world.centerY+200,'Play',{font:'50px Arial',fill:'#ffffff'})

        //
        // var blue5 = game.add.sprite(this.game.world.centerX-30,330, "deepblue");
        // blue.anchor.set(0.5);
        // blue.scale.setTo(2,0.2);

    },

    toogleC1: function(){



         if(this.conceptGroup1.y == 0){
          var menuTween =this.game.add.tween(this.conceptGroup1).to({
               y: 50
          }, 500, Phaser.Easing.Bounce.Out, true);

          this.concept_text1.visible =! this.concept_text1.visible

         }

         if(this.conceptGroup1.y == 50){

              var menuTween = this.game.add.tween(this.conceptGroup1).to({
                   y: 0
              }, 250, Phaser.Easing.Bounce.Out, true);

              this.concept_text1.visible =! this.concept_text1.visible;
         }


    },

    toogleC2: function(){



         if(this.conceptGroup2.y == 0){
          var menuTween =this.game.add.tween(this.conceptGroup2).to({
               y: 50
          }, 500, Phaser.Easing.Bounce.Out, true);

          this.concept_text2.visible =! this.concept_text2.visible;

         }

         if(this.conceptGroup2.y == 50){

              var menuTween = this.game.add.tween(this.conceptGroup2).to({
                   y: 0
              }, 500, Phaser.Easing.Bounce.Out, true);

              this.concept_text2.visible =! this.concept_text2.visible;
         }


    },

    toogleC3: function(){



         if(this.conceptGroup3.y == 0){
          var menuTween =this.game.add.tween(this.conceptGroup3).to({
               y: 50
          }, 500, Phaser.Easing.Bounce.Out, true);

          this.concept_text3.visible =! this.concept_text3.visible;

         }

         if(this.conceptGroup3.y == 50){

              var menuTween = this.game.add.tween(this.conceptGroup3).to({
                   y: 0
              }, 500, Phaser.Easing.Bounce.Out, true);

              this.concept_text3.visible =! this.concept_text3.visible;
         }


    },

    toogleC4: function(){



         if(this.conceptGroup4.y == 0){
          var menuTween =this.game.add.tween(this.conceptGroup4).to({
               y: 50
          }, 500, Phaser.Easing.Bounce.Out, true);

          this.concept_text4.visible =! this.concept_text4.visible;

         }

         if(this.conceptGroup4.y == 50){

              var menuTween = this.game.add.tween(this.conceptGroup4).to({
                   y: 0
              }, 500, Phaser.Easing.Bounce.Out, true);

              this.concept_text4.visible =! this.concept_text4.visible;
         }


    },

    toogleC5: function(){



         if(this.conceptGroup5.y == 0){
          var menuTween =this.game.add.tween(this.conceptGroup5).to({
               y: 50
          }, 500, Phaser.Easing.Bounce.Out, true);

          this.concept_text5.visible =! this.concept_text5.visible;

         }

         if(this.conceptGroup5.y == 50){

              var menuTween = this.game.add.tween(this.conceptGroup5).to({
                   y: 0
              }, 500, Phaser.Easing.Bounce.Out, true);

              this.concept_text5.visible =! this.concept_text5.visible;
         }


    },

    goBack: function(){


        this.game.state.start('menu');



    },
};

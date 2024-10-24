$(function(){
    $('button').click(function(){
       
        var name = $('#name-text').val();
        var roll =$('#roll-text').val();
        var cls=$('#class-text').val();
        var section=$('#sec-text').val();
       
       var bangla=$('#bangla').val();
       var english=$('#english').val();
       var math=$('#math').val();
       var physics=$('#physics').val();
       var chemistry=$('#chemistry').val();
       var biology=$('#biology').val();
         
        
        if(bangla>=80 && bangla<=100){
             var gp= 5.00;
             var grade='A+';
        }       
        else if (bangla>=70 && bangla<=79){
            var gp=4.00;
            var grade='A';
        }
        else if (bangla>=60 && bangla<=69){
            var gp= 3.50;
            var grade='A-';
        }   
        else if (bangla>=50 && bangla<=59){
            var gp= 3.00;
            var grade='B';
    }
       else if (bangla>=40 && bangla<=49){
           var gp= 2.00;
           var grade= 'C';
    }
       else if (bangla>=33 && bangla<=39){
          var gp= 1.00;
          var grade='D';
    }
        else{
            var gp=0.00;
          var grade='F';
    }
        
         if(english>=80 && english<=100){
              var gp_e=5.00;
              var grade_e='A+';
         }
       else if(english>=70 && english<=79){
              var gp_e=4.00;
              var grade_e='A';
         }
         else if(english>=60 && english<=69){
              var gp_e=3.50;
              var grade_e='A-';
         }
         else if(english>=50 && english<=59){
              var gp_e=5.00;
              var grade_e='B';
         }
       else if(english>=40 && english<=49){
              var gp_e=2.00;
              var grade_e='c';
         }
       else if(english>=33 && english<=39){
              var gp_e=1.00;
              var grade_e='D';
         }
         else{
              var gp_e=0.00;
              var grade_e='F';
         }
         
         if(math>=80 && math<=100){
              var gp_m=5.00;
              var grade_m='A+';
         }
       else if(math>=70 && math<=79){
              var gp_m=4.00;
              var grade_m='A';
         }
         else if(math>=60 && math<=69){
              var gp_m=3.50;
              var grade_m='A-';
         }
         else if(math>=50 && math<=59){
              var gp_m=5.00;
              var grade_m='B';
         }
       else if(math>=40 && math<=49){
              var gp_m=2.00;
              var grade_m='c';
         }
       else if(math>=33 && math<=39){
              var gp_m=1.00;
              var grade_m='D';
         }
         else{
              var gp_m=0.00;
              var grade_m='F';
         }
         
         if(physics>=80 && physics<=100){
              var gp_p=5.00;
              var grade_p='A+';
         }
       else if(physics>=70 && physics<=79){
              var gp_p=4.00;
              var grade_p='A';
         }
         else if(physics>=60 && physics<=69){
              var gp_p=3.50;
              var grade_p='A-';
         }
         else if(physics>=50 && physics<=59){
              var gp_p=5.00;
              var grade_p='B';
         }
       else if(physics>=40 && physics<=49){
              var gp_p=2.00;
              var grade_p='c';
         }
       else if(physics>=33 && physics<=39){
              var gp_p=1.00;
              var grade_p='D';
         }
         else{
              var gp_p=0.00;
              var grade_p='F';
         }
         
         if(chemistry>=80 && chemistry<=100){
              var gp_c=5.00;
              var grade_c='A+';
         }
       else if(chemistry>=70 && chemistry<=79){
              var gp_c=4.00;
              var grade_c='A';
         }
         else if(chemistry>=60 && chemistry<=69){
              var gp_c=3.50;
              var grade_c='A-';
         }
         else if(chemistry>=50 && chemistry<=59){
              var gp_c=5.00;
              var grade_c='B';
         }
       else if(chemistry>=40 && chemistry<=49){
              var gp_c=2.00;
              var grade_c='c';
         }
       else if(chemistry>=33 && chemistry<=39){
              var gp_c=1.00;
              var grade_c='D';
         }
         else{
              var gp_c=0.00;
              var grade_c='F';
         }
         
         
         if(biology>=80 && biology<=100){
              var gp_b=5.00;
              var grade_b='A+';
         }
       else if(biology>=70 && biology<=79){
              var gp_b=4.00;
              var grade_b='A';
         }
         else if(biology>=60 && biology<=69){
              var gp_b=3.50;
              var grade_b='A-';
         }
         else if(biology>=50 && biology<=59){
              var gp_b=5.00;
              var grade_b='B';
         }
       else if(biology>=40 && biology<=49){
              var gp_b=2.00;
              var grade_b='c';
         }
       else if(biology>=33 && biology<=39){
              var gp_b=1.00;
              var grade_b='D';
         }
         else{
              var gp_b=0.00;
              var grade_b='F';
         }
         
         
         var gpa=(gp+gp_e+gp_m+gp_p+gp_c+gp_b)/6;
        
       $('#dis-name').text(name);
       $('#dis-roll').text(roll);
       $('#dis-class').text(cls);
       $('#dis-sec').text(section);
       
       
        $('#mbangla').text(bangla);
        $('#menglish').text(english);
        $('#mmath').text(math);
        $('#mphysics').text(physics);
        $('#mchemistry').text(chemistry);
        $('#mbiology').text(biology);
        
        
        $('#gp-bangla').text(gp);
        $('#grade-bangla').text(grade);
         
        $('#gpenglish').text(gp_e);
         $('#gradeenglish').text(grade_e);
         
         $('#gp-math').text(gp_m);
         $('#grade-math').text(grade_m);
         
         $('#gp-phy').text(gp_p);
         $('#grade-phy').text(grade_p);
         
         $('#gp-che').text(gp_c);
         $('#grade-che').text(grade_c);
         
         $('#gp-bio').text(gp_b);
         $('#grade-bio').text(grade_b);
         
         $('#gpa').text(gpa.toFixed(2));
    }); 
    });
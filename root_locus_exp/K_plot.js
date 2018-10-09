
var K_roots;
var TF_num;
var TF_den;
var K_num=NaN;
var K_den=NaN;
var K_num_roots=[];
var K_den_roots=[];
var K_den_roots_values=[]; //for debugging purpose only


 
function CRE(){

    TF_num = num;
    TF_den = den +"+" +"k" +"*" +num +"=" +0;
   // console.log(TF_den.toString());
   
     K_num=nerdamer(TF_num);
   // console.log(K_num.toString());
     K_den=nerdamer(TF_den);
    // console.log(K_den.toString());

     K_num_roots = K_num.solveFor('s');
     
   // console.log(K_num_roots.toString());
    K_den_roots = K_den.solveFor('s');
    
    
    // printing the roots in decimal format.
    for(var i=0;i<K_den_roots.length;i++){
        
    K_den_roots_values[i]= nerdamer(K_den_roots[i],{k:10}).evaluate();
    //console.log(K_den_roots_values[i].text());
    }
    Discrete_roots();
    
    
}

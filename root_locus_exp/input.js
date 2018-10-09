var num=0;
var den=NaN;
var NUMn=NaN;
var DENn=NaN;
var n=NaN;
var d=NaN;
var n_re=[];
var n_im=[];
var d_re=[];
var d_im=[];

// for decimal_format roots
var K=d3.range(0,100,0.01);
var ar=[];
var ARRAY=[];
var temp1=[];
var temp2=[];
var ARRAY_re=[];
var ARRAY_im=[];
var K_val_ARRAY_im=[];
var K_val_ARRAY_re=[];



// input function
function inpt(){
var x= document.getElementsByClassName("inpt")[0];
num = x.value;
    
    
NUMn = nerdamer(num);  // nerdamer obj of numerator is made
//console.log(NUMn.toString());
n= NUMn.solveFor('s');
//console.log(n.toString());  // will display all roots in string format
// console.log(n[0].toString()); // will display only the first root    
x= document.getElementsByClassName("inpt")[1]
den = x.value;
DENn = nerdamer(den);   ///nerdamer obj of denominator is made
//console.log(DENn.toString());
d=DENn.solveFor('s');
//console.log(d.toString());
    
}

//separating real and imaginary parts of each root

function separate_roots(){
    
      inpt();// this function will fetch the entered num and den by user
    
    for(var i=0;i<n.length;i++){
        
        
        // separarting real and img of NUMERATOR and storing in array n_re[], n_im[]
         var m=math.eval(n[i].toString());
        m=m.toString();
//        console.log("simplified expression is:");
//        console.log(m);
        var b=math.complex(m);
//        console.log("real part of "+i+" root is :");
//        console.log(b.re);
        n_re.push(b.re);
//        console.log("img part of "+i+" root is :");
//       console.log(b.im);
       n_im.push(b.im);
     
    }
    
     for(var i=0;i<d.length;i++){
        
        
        // separarting real and img of DENOMINATOR and storing in array n_re[], n_im[]
         var m=math.eval(d[i].toString());
        m=m.toString();
//        console.log("simplified expression is:");
//        console.log(m);
        var b=math.complex(m);
//        console.log("real part of "+i+" root is :");
//        console.log(b.re);
        d_re.push(b.re);
//        console.log("img part of "+i+" root is :");
//       console.log(b.im);
       d_im.push(b.im);
         
     
    }
    On_X();
    
    
}


function Discrete_roots(){
for(var i=0;i<K_den_roots_values.length;i++){
    for(var j=0;j<K.length;j++){
        
     ar[j]= nerdamer(K_den_roots[i],{k:K[j]}).evaluate();
    
    }
    ARRAY.push(ar);
    ar=[]; //emptying this array to avoid any previoud data interference.
}
}

function final_cordinates(){
    
    for(var i=0;i<ARRAY.length;i++){
        
        for(var j=0;j<K.length;j++){
           
        // separarting real and img of CHARACTERISTIC EQUATION and storing in array ARRAY_num[], ARRAY_den[]
        temp1[j]=math.eval(ARRAY[i][j].toString());
        temp1[j]=temp1[j].toString();
        
         temp2[j]=math.complex(temp1[j]);
            
    }
                
    ARRAY_re.push(temp2.map(d => { return d.re }));
    ARRAY_im.push(temp2.map(d => { return d.im }));
        
    }
    
    
    
}

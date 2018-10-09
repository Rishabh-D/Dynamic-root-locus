var OnX=[];

function On_X(){
    
    
    // for zeroes
    for(var i=0; i<n_re.length; i++){
        
        if(n_im[i]==0){
            
            OnX.push(n_re[i]);
            //console.log(i+"zeroes");
        }
    }
    
    //for poles
    for(var i=0; i< d_re.length; i++){
        
        if(d_im[i]==0){
            
            OnX.push(d_re[i]);
            //console.log(i+"poles");
        }
    }
    
}
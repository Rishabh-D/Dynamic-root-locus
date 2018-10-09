function cl(){
    
    n_re=[];
    n_im=[];
    d_re=[];
    d_im=[];
    OnX=[];
    

// for decimal_format roots

ar=[];
ARRAY=[];
temp1=[];
temp2=[];
ARRAY_re=[];
ARRAY_im=[];
K_val_ARRAY_im=[];
K_val_ARRAY_re=[];
    
    K_roots=0;
 TF_num=0;
 TF_den=0;
 K_num=0;
K_den=0;
    K_num_roots=[];
K_den_roots=[];
K_den_roots_values=[];

 function K_clr(){
    
    document.getElementById("Slidr").innerHTML=0;
     document.getElementById("Slidr").value=0;
 }
    
    K_clr();
    
    document.getElementsByClassName("inpt")[0].value = "";
    document.getElementsByClassName("inpt")[1].value = "";
    clear_plot();


}
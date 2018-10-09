

function plot(){          // plot() creates a empty traces(each trace is an object containing x ,y                           ,type info).

    var trace1 = {
      x: [],
      y: [],
      mode: 'markers',
      type: 'scatter',
      name:'zeroes'
    };

    var trace2 ={

        x: [],
        y: [],
        mode:"markers",
        type:'scatter',
        name:"poles"
    }

    var data = [trace1,trace2];

    for(var i = 0; i < K_den_roots_values.length; i++){
        data.push({
            x: [], y: [], mode: 'lines',name:"P"
        })
    }

    myLineChart=Plotly.newPlot('graph', data //, {}, { staticPlot: true }//
                              );
}


//this updatePlot function updates empty x and y of traces ( here 1st and 2nd trace)
//first plot is of zeros and second plot is of poles


function updatePlot(){
    var data = document.getElementById('graph').data;
   //console.log(data);

    data[0].x = n_re;
    data[0].y = n_im;

    data[1].x = d_re;
    data[1].y = d_im;

    // Method 1
    K_val_ARRAY_im=[];
    K_val_ARRAY_re=[];

    for(var i = 0; i < K_den_roots_values.length; i++){
        K_val_ARRAY_re[i] = [];
        K_val_ARRAY_im[i] = [];
        for(var j = 0; j < K_val; j++){
            K_val_ARRAY_re[i][j] = ARRAY_re[i][j];
            K_val_ARRAY_im[i][j] = ARRAY_im[i][j];
        }
    }

    for(var i = 0; i < K_den_roots_values.length; i++){
        data[2+i].x = K_val_ARRAY_re[i];
        data[2+i].y = K_val_ARRAY_im[i];
    }

  //  console.log(data);
    Plotly.redraw('graph'); ///will redraw the graph with updated values retaining previous trace.
}

function clear_plot(){
    
     var trace1 = {
      x: [],
      y: [],
      mode: 'markers',
      type: 'scatter',
      name:'zeroes'
    };

    var trace2 ={

        x: [],
        y: [],
        mode:"markers",
        type:'scatter',
        name:"poles"
    }

    var data = [trace1,trace2];
    Plotly.newPlot('graph',data)
    
}

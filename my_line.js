//functions may be dependent on previous defintions
//independent
function gradient_num(x1,y1,x2,y2) {  return ((y2-y1)/(x2-x1));  }//gradient

//independent
function yIntercept_num(x1,y1,x2,y2){  return (y1 - (x1*(y2-y1)/(x2-x1)));  } //yIntercept

//independent
function xIntercept_num(x1,y1,x2,y2){  return (x1 + (y1*(x1-x2)/(y2-y1)));  }//xIntercept

//order: 5
//independent
function output_num( math_function_dict,x){//output_num
         return (
                  ( math_function_dict.x5*( x*x*x*x*x ) ) +
                  ( math_function_dict.x4*( x*x*x*x   ) ) +
                  ( math_function_dict.x3*( x*x*x     ) ) + 
                  ( math_function_dict.x2*( x*x       ) ) + 
                  ( math_function_dict.x1 * x           ) + 
                  math_function_dict.x0
                );     
}//output_num

//dependent on output_num
function plot_points_arr(  math_function_dict,xrange_arr ){//plot_points
         //index 0 is x, index 1 is y
         let rslt_arr = [];
         for( let j=0; j<xrange_arr.length; j++ ){//for
             rslt_arr.push(
                          [  xrange_arr[j],output_num(math_function_dict,xrange_arr[j])  ]
                          );
         }//for
         return rslt_arr;
}//plot_points

//independent
function circle_plot_points_arr( xrange_arr,centre_arr,radius){
         let rslt=[];
         let xc = centre_arr[0]; let yc=centre_arr[1];         
         for( let k=0; k<xrange_arr; k++ ){
              let first = Math.sqrt( 
                                     (radius*radius)-((xrange_arr[k]-xc)*(xrange_arr[k]-xc))
                                   );
              rslt.push(
                        [ xrange_arr[k], yc+first ]             
                       );
              rslt.push(
                        [ xrange_arr[k], yc-first ]             
                       );
         }//for
         return rslt;
}//circle_plot_points_arr

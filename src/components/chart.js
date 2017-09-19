import React from 'react'
import { LineChart, Line } from 'recharts';

export default (props)=>{
    
 return(
     <div>
             <LineChart width={250} height={150} data={props.data}>
                <Line type="monotone" dataKey={props.keyToDisplay} stroke="#8884d8" />
              
              </LineChart>  
     </div>
 )
}
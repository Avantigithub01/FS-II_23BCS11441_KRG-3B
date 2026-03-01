
import {logs} from '../data/log.js';
const DashBoard=()=>{
    const totalCarbon=logs.reduce((sum,i)=>{
       return sum+i.carbon;
    
    },0)
    return(
    <div>
        <h2>Dashboard</h2>
        <p>Total Carbon Footprint: {totalCarbon}Kgs</p>
       <ul>
        {logs.map(i=>{
            <li key={i.id}>
                {i.activity}: {i.carbon}Kgs
            </li>
        })}
       </ul>
    </div>
)
}



export default DashBoard;
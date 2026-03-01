import {logs}from '../data/log';


const Logs1=()=>{
    const Carbon=logs.filter(i=>i.carbon>=0);
    return(
        <div>
            <h1>Segeration</h1>
            <ul>
                {
                    Carbon.map(i=>(<li style={{color:i.carbon>=3?"red":"green"}} key={i.id}>
                        {i.activity}: {i.carbon} kg CO2
                    </li>))
                }
            </ul>
        </div>
    )

}
export default Logs1;
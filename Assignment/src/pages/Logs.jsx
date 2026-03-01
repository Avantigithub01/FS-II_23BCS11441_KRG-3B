import{logs} from '../data/log';

const Logs=()=>{
    const highCarbon=logs.filter(i=>i.carbon>=4);
    return(
        <div>
            <h2>High Carbon Activities</h2>
            <ul>
                {highCarbon.map(i=>(
                    <li key={i.id}>
    
                        {i.activity}: {i.carbon}Kgs
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Logs;
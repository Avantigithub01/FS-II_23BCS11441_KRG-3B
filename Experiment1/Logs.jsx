import {logs} from "../data/logs";

const Highcarbon =() =>{
const more = logs.filter(log => log.carbon >= 4);
const less = logs.filter(log => log.carbon <= 3 && log.carbon !== 0);

return (
    <div>
        
        <header style = {{ padding: "0.5rem", backgroundColor: "#ff0000",color: "white",textAlign: "center", borderRadius: "10px"}}>
        <h2>High Carbon Emission</h2>
        </header>
        <ul>
            {more.map((log) => (
                <li key={log.id}>
                    {log.activity} = {log.carbon} Kg
                </li>
            ))}
        </ul>
       
        
        
        <header style = {{ padding: "0.5rem", backgroundColor: "#62ff00",color: "white",textAlign: "center", borderRadius: "10px"}}>
        <h2>Low Carbon Emission</h2>
        </header>
        <ul>
            {less.map((log) => (
                <li key={log.id}>
                    {log.activity} = {log.carbon} Kg
                </li>
            ))}
        </ul>
        
    </div>
   
)
}
  // this component will filter and display logs with carbon emission greater than or equal to 4 kg


// this component will filter and display logs with carbon emission less than or equal to 3 kg
export default Highcarbon;
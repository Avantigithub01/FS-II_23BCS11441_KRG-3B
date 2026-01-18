import {logs} from "../data/logs";

const Dashboard = () => {
    const  track =  logs.reduce((acc, log) => acc + log.carbon, 0);

return (
    <div>
        <h2>Dashboard</h2>
        <p>Total Carbon Footprint: {track} kg</p>

        <ul>
            {logs.map((log) => (
                <li key={log.id}>
                    {log.activity} = {log.carbon} kg
                </li>
            ))}
        </ul>
    </div>
)

} // this will make the rerendering easy when data changes
// dashboard is a functional componen

export default Dashboard;
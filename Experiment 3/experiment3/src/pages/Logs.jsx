import { useDispatch, useSelector } from "react-redux";
import { fetchLogs } from "../store/logSlice";
import { useEffect } from "react";

const Logs = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.logs);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchLogs());
    }
  }, [status, dispatch]);

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  if (status === "loading") {
    return <p>Loading logs...</p>;
  }

  return (
    <div>
      <h2>Activity Logs</h2>
      <ul>
        {data.map((log) => (
          <li key={log.id}>
            {log.activity} - {log.carbon} kg CO₂
          </li>
        ))}
      </ul>
      <button style={{backgroundColor:"#87CEFA",borderStyle:"none",padding:"5px",border:"1px solid black"}} onClick={()=>dispatch(fetchLogs())} >Refresh Logs</button>
    </div>
  );
};

export default Logs;

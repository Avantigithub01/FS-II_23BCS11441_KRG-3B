import Navbar from "../components/Navbar";

function DashboardPage() {
  return (
    <main className="page">
      <Navbar />
      <section className="card">
        <h1>Dashboard</h1>
        <p>Welcome to EcoTrack wellness dashboard.</p>
        <p>Use the Water Tracker tab to record your daily hydration progress.</p>
      </section>
    </main>
  );
}

export default DashboardPage;

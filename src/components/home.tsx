import Navbar from "./layout/navbar";
import CampaignGrid from "./campaign/campaign-grid";

function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Navbar />
      <main className="pt-16">
        <CampaignGrid />
      </main>
    </div>
  );
}

export default Home;

import { Button } from "@/components/ui/button";
import CampaignCard from "./campaign-card";
import { Plus } from "lucide-react";

export default function CampaignGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-[#001F3F]">Active Campaigns</h2>
        <Button className="bg-gradient-to-r from-[#001F3F] to-[#FF4500] text-white hover:opacity-90">
          <Plus className="h-5 w-5 mr-2" />
          Create Campaign
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CampaignCard />
        <CampaignCard
          title="Web3 Marketing"
          description="Launching our new Web3 marketing initiative across social platforms."
          coverImage="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
          contributors={8}
        />
        <CampaignCard
          title="NFT Collection"
          description="Promoting our upcoming NFT collection launch with community engagement."
          coverImage="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
          contributors={12}
        />
      </div>
    </div>
  );
}

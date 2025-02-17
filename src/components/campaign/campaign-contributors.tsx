import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";

export default function CampaignContributors() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-[#001F3F]">
          Campaign Contributors
        </h3>
        <Button className="bg-[#001F3F] text-white hover:bg-[#001F3F]/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Contributor
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {contributors.map((contributor, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={contributor.avatar} />
                <AvatarFallback>{contributor.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h4 className="font-semibold">{contributor.name}</h4>
                <p className="text-sm text-gray-500">@{contributor.handle}</p>
              </div>
              <div className="text-sm text-gray-500">{contributor.role}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

const contributors = [
  {
    name: "Sarah Chen",
    handle: "sarahc",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    role: "Campaign Lead",
  },
  {
    name: "Alex Thompson",
    handle: "alexthompson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    role: "Content Creator",
  },
  {
    name: "Maria Rodriguez",
    handle: "mariar",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    role: "Designer",
  },
  {
    name: "James Wilson",
    handle: "jamesw",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    role: "Strategist",
  },
];

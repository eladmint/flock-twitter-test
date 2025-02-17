import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, BarChart, MessageSquare, Share2, Users } from "lucide-react";
import CampaignPosts from "./campaign-posts";
import CampaignContributors from "./campaign-contributors";
import CampaignAnalytics from "./campaign-analytics";

export default function CampaignPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] pt-16">
      <div className="aspect-[3/1] bg-gradient-to-r from-[#001F3F] to-[#FF4500] relative">
        <img
          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800"
          alt="Campaign cover"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-start py-6">
          <div>
            <h1 className="text-3xl font-bold text-[#001F3F]">
              Web3 Marketing Campaign
            </h1>
            <p className="text-gray-600 mt-2">
              Launching our new Web3 marketing initiative across social
              platforms.
            </p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button className="bg-[#001F3F] text-white hover:bg-[#001F3F]/90">
              <MessageSquare className="h-4 w-4 mr-2" />
              Message Team
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-6 mb-6 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            Created Mar 15, 2024
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2" />8 Contributors
          </div>
        </div>

        <Tabs defaultValue="posts" className="mb-8">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger
              value="posts"
              className="rounded-none border-b-2 border-transparent px-6 py-3 data-[state=active]:border-[#FF4500] data-[state=active]:bg-transparent"
            >
              Posts
            </TabsTrigger>
            <TabsTrigger
              value="contributors"
              className="rounded-none border-b-2 border-transparent px-6 py-3 data-[state=active]:border-[#FF4500] data-[state=active]:bg-transparent"
            >
              Contributors
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="rounded-none border-b-2 border-transparent px-6 py-3 data-[state=active]:border-[#FF4500] data-[state=active]:bg-transparent"
            >
              <BarChart className="h-4 w-4 mr-2" />
              Analytics
            </TabsTrigger>
          </TabsList>
          <TabsContent value="posts" className="mt-6">
            <CampaignPosts />
          </TabsContent>
          <TabsContent value="contributors" className="mt-6">
            <CampaignContributors />
          </TabsContent>
          <TabsContent value="analytics" className="mt-6">
            <CampaignAnalytics />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

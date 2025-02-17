import { Card } from "@/components/ui/card";
import {
  BarChart,
  LineChart,
  Activity,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";

export default function CampaignAnalytics() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {metric.label}
                </p>
                <h3 className="text-2xl font-bold mt-1">{metric.value}</h3>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  {metric.change}
                </p>
              </div>
              <div className="p-2 bg-[#001F3F]/10 rounded-lg">
                {metric.icon}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Engagement Chart */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Engagement Overview</h3>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span className="flex items-center">
              <span className="h-3 w-3 rounded-full bg-[#001F3F] mr-2" />
              Impressions
            </span>
            <span className="flex items-center">
              <span className="h-3 w-3 rounded-full bg-[#FF4500] mr-2" />
              Engagements
            </span>
          </div>
        </div>
        <div className="h-[300px] flex items-center justify-center border rounded-lg">
          <p className="text-gray-500 flex items-center">
            <BarChart className="h-5 w-5 mr-2" />
            Chart Visualization Here
          </p>
        </div>
      </Card>

      {/* Contributor Activity */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Contributor Activity</h3>
        <div className="space-y-4">
          {contributorActivity.map((contributor, index) => (
            <div key={index} className="flex items-center">
              <img
                src={contributor.avatar}
                alt={contributor.name}
                className="h-8 w-8 rounded-full mr-3"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-medium">{contributor.name}</p>
                  <span className="text-sm text-gray-500">
                    {contributor.posts} posts
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-[#001F3F] to-[#FF4500] rounded-full"
                    style={{ width: `${contributor.participation}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

const metrics = [
  {
    label: "Total Impressions",
    value: "124.7K",
    change: "+12.3%",
    icon: <Activity className="h-5 w-5 text-[#001F3F]" />,
  },
  {
    label: "Engagement Rate",
    value: "5.2%",
    change: "+2.1%",
    icon: <BarChart className="h-5 w-5 text-[#001F3F]" />,
  },
  {
    label: "Active Contributors",
    value: "8",
    change: "+3",
    icon: <Users className="h-5 w-5 text-[#001F3F]" />,
  },
  {
    label: "Campaign Score",
    value: "92",
    change: "+5",
    icon: <Award className="h-5 w-5 text-[#001F3F]" />,
  },
];

const contributorActivity = [
  {
    name: "Sarah Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    posts: 24,
    participation: 85,
  },
  {
    name: "Alex Thompson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    posts: 18,
    participation: 70,
  },
  {
    name: "Maria Rodriguez",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    posts: 15,
    participation: 60,
  },
  {
    name: "James Wilson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    posts: 12,
    participation: 45,
  },
];

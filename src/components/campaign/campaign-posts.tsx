import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, MessageCircle, Repeat2 } from "lucide-react";

export default function CampaignPosts() {
  return (
    <div className="space-y-4">
      {posts.map((post, index) => (
        <Card key={index} className="p-4">
          <div className="flex space-x-4">
            <Avatar>
              <AvatarImage src={post.author.avatar} />
              <AvatarFallback>{post.author.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h4 className="font-semibold">{post.author.name}</h4>
                <span className="text-sm text-gray-500">
                  @{post.author.handle}
                </span>
                <span className="text-sm text-gray-500">· {post.time}</span>
              </div>
              <p className="mt-2">{post.content}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt="Post attachment"
                  className="mt-3 rounded-lg w-full object-cover max-h-[300px]"
                />
              )}
              <div className="flex space-x-6 mt-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-[#FF4500]"
                >
                  <Heart className="h-4 w-4 mr-2" />
                  {post.likes}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-[#001F3F]"
                >
                  <Repeat2 className="h-4 w-4 mr-2" />
                  {post.retweets}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-[#001F3F]"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  {post.comments}
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

const posts = [
  {
    author: {
      name: "Sarah Chen",
      handle: "sarahc",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    content:
      "Just launched our new #Web3 marketing campaign! 🚀 Check out the amazing response from our community. #blockchain #crypto",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
    time: "2h",
    likes: 24,
    retweets: 12,
    comments: 8,
  },
  {
    author: {
      name: "Alex Thompson",
      handle: "alexthompson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    },
    content:
      "The community engagement on this campaign has been incredible! Looking forward to the next phase. 💫",
    time: "4h",
    likes: 18,
    retweets: 7,
    comments: 5,
  },
];

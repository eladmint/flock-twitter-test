import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit2, Eye, Trash2, Users } from "lucide-react";

interface CampaignCardProps {
  title?: string;
  description?: string;
  coverImage?: string;
  contributors?: number;
  onEdit?: () => void;
  onDelete?: () => void;
  onView?: () => void;
}

export default function CampaignCard({
  title = "Sample Campaign",
  description = "This is a sample campaign description that showcases the layout.",
  coverImage = "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  contributors = 5,
  onEdit,
  onDelete,
  onView,
}: CampaignCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#001F3F] mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <Users className="h-4 w-4 mr-1" />
            <span>{contributors} Contributors</span>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" onClick={onView}>
              <Eye className="h-4 w-4 text-[#001F3F]" />
            </Button>
            <Button variant="ghost" size="icon" onClick={onEdit}>
              <Edit2 className="h-4 w-4 text-[#001F3F]" />
            </Button>
            <Button variant="ghost" size="icon" onClick={onDelete}>
              <Trash2 className="h-4 w-4 text-[#FF4500]" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

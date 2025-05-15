
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar } from '@/components/ui/avatar';
import { MessageCircle, Heart, Share, ThumbsUp, Calendar, FileText, Clock, User } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import VoiceButton from '@/components/chatbot/VoiceButton';
import { useToast } from '@/hooks/use-toast';

// Mock data for posts
const posts = [
  {
    id: 1,
    author: {
      name: "Amit Patel",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    content: "Has anyone successfully mediated a property boundary dispute? My neighbor and I disagree about where our property line is.",
    timestamp: "2 hours ago",
    likes: 12,
    comments: 5,
    language: "English"
  },
  {
    id: 2,
    author: {
      name: "Meera Agarwal",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    content: "I just completed a successful mediation for my family business dispute. The mediator was really helpful in keeping everyone calm and focused on solutions.",
    timestamp: "5 hours ago",
    likes: 24,
    comments: 8,
    language: "Hindi"
  },
  {
    id: 3,
    author: {
      name: "Vikram Singh",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    content: "Does anyone know if mediation agreements are legally binding if the other party stops following the agreement later?",
    timestamp: "Yesterday",
    likes: 7,
    comments: 15,
    language: "English"
  },
  {
    id: 4,
    author: {
      name: "Lakshmi Suresh",
      image: "https://randomuser.me/api/portraits/women/62.jpg",
    },
    content: "Mediation saved my relationship with my business partner. We were headed for a costly court battle, but a mediator helped us see common ground. Would recommend to anyone in a business dispute!",
    timestamp: "2 days ago",
    likes: 35,
    comments: 12,
    language: "Tamil"
  }
];

// Mock data for events
const events = [
  {
    id: 1,
    title: "Free Mediation Workshop",
    date: "June 15, 2023",
    time: "10:00 AM - 1:00 PM",
    location: "Community Center, Bangalore",
    organizer: "Legal Aid Society",
    description: "Learn the basics of mediation in this free community workshop. No registration required."
  },
  {
    id: 2,
    title: "Mediator Certification Program",
    date: "July 5-10, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "Virtual Event",
    organizer: "Indian Institute of Arbitration and Mediation",
    description: "40-hour certification course for aspiring mediators. Registration required."
  },
  {
    id: 3,
    title: "Mediation Awareness Camp",
    date: "June 25, 2023",
    time: "11:00 AM - 4:00 PM",
    location: "Rural Development Center, Nagpur",
    organizer: "District Legal Services Authority",
    description: "Free legal aid and mediation awareness program for rural communities."
  }
];

// Mock data for resources
const resources = [
  {
    id: 1,
    title: "Mediation Process Guide",
    type: "PDF",
    size: "2.4 MB",
    author: "National Legal Services Authority",
    downloads: 1245
  },
  {
    id: 2,
    title: "Know Your Rights: Land Disputes",
    type: "PDF",
    size: "1.8 MB",
    author: "Ministry of Law and Justice",
    downloads: 982
  },
  {
    id: 3,
    title: "Mediation FAQs in Simple Language",
    type: "PDF",
    size: "1.2 MB",
    author: "Indian Mediation Center",
    downloads: 1678
  }
];

const Community = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [postContent, setPostContent] = useState('');
  const [commentText, setCommentText] = useState('');
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  
  const handlePostSubmit = () => {
    if (postContent.trim() === '') return;
    
    toast({
      title: "Post created",
      description: "Your question has been posted to the community",
    });
    
    setPostContent('');
  };
  
  const handleVoiceInput = (text: string) => {
    setPostContent(text);
  };
  
  const handleCommentSubmit = () => {
    if (commentText.trim() === '') return;
    
    toast({
      title: "Comment added",
      description: "Your comment has been added to the discussion",
    });
    
    setCommentText('');
  };
  
  const handleLike = (postId: number) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  return (
    <MainLayout title={t('community')}>
      <Tabs defaultValue="discussions" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        
        {/* Discussions Tab */}
        <TabsContent value="discussions">
          {/* Post creation card */}
          <Card className="mb-6 p-4">
            <div className="flex gap-4">
              <Avatar>
                <User size={24} />
              </Avatar>
              <div className="flex-1">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-left text-muted-foreground h-auto py-3"
                    >
                      Ask a question or share your experience...
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[525px]">
                    <DialogHeader>
                      <DialogTitle>Create a post</DialogTitle>
                      <DialogDescription>
                        Share your question or experience with the community
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <Textarea
                        placeholder="What's on your mind?"
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                        className="min-h-[120px]"
                      />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          {postContent.length} / 500 characters
                        </span>
                        <VoiceButton onVoiceInput={handleVoiceInput} />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button 
                        type="submit" 
                        onClick={handlePostSubmit}
                        disabled={postContent.trim() === ''}
                      >
                        Post
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </Card>
          
          {/* Posts list */}
          <div className="space-y-4">
            {posts.map(post => (
              <Card key={post.id} className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Avatar>
                    <img src={post.author.image} alt={post.author.name} />
                  </Avatar>
                  <div>
                    <div className="font-medium">{post.author.name}</div>
                    <div className="text-xs text-muted-foreground">{post.timestamp}</div>
                  </div>
                  {post.language !== "English" && (
                    <Badge className="ml-auto">
                      Translated from {post.language}
                    </Badge>
                  )}
                </div>
                
                <p className="mb-4">{post.content}</p>
                
                <Separator className="my-3" />
                
                <div className="flex justify-between">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex gap-2"
                    onClick={() => handleLike(post.id)}
                  >
                    <ThumbsUp 
                      size={18} 
                      className={likedPosts.includes(post.id) ? "fill-primary-blue text-primary-blue" : ""} 
                    />
                    <span>{likedPosts.includes(post.id) ? post.likes + 1 : post.likes}</span>
                  </Button>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm" className="flex gap-2">
                        <MessageCircle size={18} />
                        <span>{post.comments}</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[525px]">
                      <DialogHeader>
                        <DialogTitle>Comments</DialogTitle>
                      </DialogHeader>
                      
                      <div className="max-h-[300px] overflow-y-auto my-4 space-y-4">
                        {/* Sample comments */}
                        <div className="flex gap-3">
                          <Avatar className="h-8 w-8">
                            <User size={18} />
                          </Avatar>
                          <div className="flex-1">
                            <div className="bg-muted rounded-lg p-3">
                              <div className="font-medium text-sm">Ravi Kumar</div>
                              <p className="text-sm">Yes, I had a similar dispute. We found a community mediator who helped us review the land documents and come to an agreement.</p>
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">1 hour ago</div>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <Avatar className="h-8 w-8">
                            <User size={18} />
                          </Avatar>
                          <div className="flex-1">
                            <div className="bg-muted rounded-lg p-3">
                              <div className="font-medium text-sm">Sunita Verma</div>
                              <p className="text-sm">You might want to start by finding your survey documents. That was the first step in resolving our boundary issue.</p>
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">30 minutes ago</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 mt-4">
                        <Input 
                          placeholder="Add a comment..." 
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                          className="flex-1"
                        />
                        <Button 
                          size="sm" 
                          onClick={handleCommentSubmit}
                          disabled={commentText.trim() === ''}
                        >
                          Send
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button variant="ghost" size="sm" className="flex gap-2">
                    <Share size={18} />
                    <span>Share</span>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        {/* Events Tab */}
        <TabsContent value="events">
          <div className="space-y-4">
            {events.map(event => (
              <Card key={event.id} className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex items-center justify-center md:items-start bg-primary-blue/10 rounded-lg p-4 text-primary-blue">
                    <Calendar size={32} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold">{event.title}</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-muted-foreground" />
                        <span>{event.date}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-muted-foreground" />
                        <span>{event.time}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-muted-foreground" />
                        <span>{event.location}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <User size={16} className="text-muted-foreground" />
                        <span>{event.organizer}</span>
                      </div>
                    </div>
                    
                    <p className="mt-3 text-muted-foreground">{event.description}</p>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Button>Register</Button>
                      <Button variant="outline">Add to Calendar</Button>
                      <Button variant="ghost" className="flex gap-2">
                        <Share size={18} />
                        <span>Share</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        {/* Resources Tab */}
        <TabsContent value="resources">
          <div className="space-y-4">
            {resources.map(resource => (
              <Card key={resource.id} className="p-4 flex flex-col md:flex-row items-center gap-4">
                <div className="bg-muted rounded-lg p-4 text-primary-blue">
                  <FileText size={32} />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg font-bold">{resource.title}</h3>
                  <div className="text-sm text-muted-foreground mt-1">
                    {resource.type} • {resource.size} • {resource.downloads} downloads
                  </div>
                  <p className="text-sm mt-1">By {resource.author}</p>
                </div>
                
                <Button className="w-full md:w-auto mt-4 md:mt-0">
                  {t('downloadResource')}
                </Button>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
};

export default Community;

// Add Badge component due to its use above
<lov-write file_path="src/components/ui/badge.tsx">
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

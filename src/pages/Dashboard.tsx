import { useState } from "react";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import StatsCards from "@/components/dashboard/StatsCards";
import TeamMembers from "@/components/dashboard/TeamMembers";
import TaskPanel from "@/components/dashboard/TaskPanel";
import AIAssignments, { Assignment } from "@/components/dashboard/AIAssignments";
import Leaderboard from "@/components/dashboard/Leaderboard";

const mockAssignments: Assignment[] = [
{
  title: "Build Analytics Dashboard",
  category: "Frontend",
  difficulty: "Hard",
  assignedTo: "Moba",
  confidence: 94,
  reasoning: "Moba has React 8/10 and strong UI expertise. Previous dashboard modules completed 28% faster than team average.",
  xpReward: 180
},
{
  title: "Develop REST API",
  category: "Backend",
  difficulty: "Medium",
  assignedTo: "Shashwat",
  confidence: 91,
  reasoning: "Shashwat's Node 8/10 and PostgreSQL experience align perfectly with API architecture requirements.",
  xpReward: 150
},
{
  title: "Train Recommendation Model",
  category: "AI/ML",
  difficulty: "Hard",
  assignedTo: "Gyan",
  confidence: 97,
  reasoning: "Gyan demonstrates strong ML consistency with TensorFlow 8/10 and Python 9/10.",
  xpReward: 220
},
{
  title: "Prepare Final Pitch",
  category: "Communication",
  difficulty: "Easy",
  assignedTo: "Avanish",
  confidence: 85,
  reasoning: "Avanish has prior presentation contributions and strong cross-team coordination experience.",
  xpReward: 100
}];


const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showAssignments, setShowAssignments] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  const runAI = () => {
    setIsLoading(true);
    setShowAssignments(false);
    setLoadingText("Analyzing team skill matrix…");

    setTimeout(() => {
      setLoadingText("Matching tasks to optimal candidates…");
    }, 1000);

    setTimeout(() => {
      setIsLoading(false);
      setLoadingText("");
      setShowAssignments(true);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardNavbar />
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <StatsCards />
        <TeamMembers />

        <div className="grid lg:grid-cols-[340px_1fr] gap-6">
          <div className="space-y-4">
            <TaskPanel onRunAI={runAI} isLoading={isLoading} />
            <Leaderboard />
          </div>

          <div>
            {isLoading &&
            <div className="glass-card p-12 flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-4 animate-pulse">
                  <div className="w-8 h-8 rounded-full gradient-fill animate-spin" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 50% 60%, 80% 50%, 50% 40%)' }} />
                </div>
                <p className="text-foreground font-semibold mb-1">{loadingText}</p>
                <p className="text-xs text-muted-foreground">Processing 4 team members × 4 tasks</p>
              </div>
            }

            {showAssignments && <AIAssignments assignments={mockAssignments} />}

            {!isLoading && !showAssignments &&
            <div className="glass-card p-12 flex flex-col items-center justify-center text-center min-h-[300px]">
                <p className="text-muted-foreground text-lg">Click <span className="text-primary font-semibold">Run AI Assignment</span> to generate optimized task allocations</p>
              </div>
            }
          </div>
        </div>
      </div>
    </div>);

};

export default Dashboard;
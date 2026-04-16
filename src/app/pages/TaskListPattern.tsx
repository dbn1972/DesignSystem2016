import { Link } from "react-router";
import { useState } from "react";
import { CheckSquare, Clock, AlertCircle, Filter, ArrowRight, CheckCircle, X, Calendar } from "lucide-react";

const ALL_TASKS = [
  {
    id: 1,
    title: "Upload Income Certificate",
    service: "Scholarship Application",
    ref: "SCH-2026-45678",
    deadline: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    priority: "high",
    type: "document",
    description: "Upload your recent income certificate (issued within last 6 months)"
  },
  {
    id: 2,
    title: "Complete Payment of ₹500",
    service: "Driving License Renewal",
    ref: "DL-2026-89012",
    deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    priority: "medium",
    type: "payment",
    description: "Complete the payment to proceed with your driving license renewal"
  },
  {
    id: 3,
    title: "Verify Mobile Number",
    service: "Aadhaar Update Request",
    ref: "AAD-2026-34567",
    deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    priority: "low",
    type: "verification",
    description: "Verify your registered mobile number via OTP"
  },
  {
    id: 4,
    title: "Submit Biometric Data",
    service: "Passport Application",
    ref: "PP-2026-12345",
    deadline: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
    priority: "medium",
    type: "appointment",
    description: "Visit nearest Passport Seva Kendra for biometric data submission"
  },
  {
    id: 5,
    title: "Provide Additional Information",
    service: "Property Tax Assessment",
    ref: "PT-2026-67890",
    deadline: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    priority: "low",
    type: "form",
    description: "Fill additional property details required for assessment"
  }
];

export default function TaskListPattern() {
  const [filter, setFilter] = useState<'all' | 'high' | 'medium' | 'low'>('all');
  const [sortBy, setSortBy] = useState<'deadline' | 'priority'>('deadline');
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);

  const filteredTasks = ALL_TASKS.filter(task => {
    if (completedTasks.includes(task.id)) return false;
    if (filter === 'all') return true;
    return task.priority === filter;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === 'deadline') {
      return a.deadline.getTime() - b.deadline.getTime();
    } else {
      const priorityOrder = { high: 0, medium: 1, low: 2 };
      return priorityOrder[a.priority as keyof typeof priorityOrder] - priorityOrder[b.priority as keyof typeof priorityOrder];
    }
  });

  const getDaysLeft = (deadline: Date) => {
    const days = Math.ceil((deadline.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
    if (days === 0) return 'Today';
    if (days === 1) return 'Tomorrow';
    return `${days} days left`;
  };

  const handleComplete = (taskId: number) => {
    setCompletedTasks([...completedTasks, taskId]);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1200px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/patterns/dashboard" className="text-sm text-muted-foreground hover:text-primary">
                ← Back to Patterns
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-sm font-bold text-foreground">Task List (Pending Actions)</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-8 py-12">
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Pending Tasks</h1>
          <p className="text-muted-foreground">
            You have {sortedTasks.length} pending {sortedTasks.length === 1 ? 'task' : 'tasks'} that need your attention
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="bg-card border-2 border-border rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-muted-foreground" />
                <span className="text-sm font-bold text-foreground">Filter:</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded font-bold text-sm ${
                    filter === 'all'
                      ? 'bg-primary text-white'
                      : 'bg-muted text-muted-foreground hover:bg-gray-200'
                  }`}
                >
                  All Tasks
                </button>
                <button
                  onClick={() => setFilter('high')}
                  className={`px-4 py-2 rounded font-bold text-sm ${
                    filter === 'high'
                      ? 'bg-red-500 text-white'
                      : 'bg-muted text-muted-foreground hover:bg-gray-200'
                  }`}
                >
                  High Priority
                </button>
                <button
                  onClick={() => setFilter('medium')}
                  className={`px-4 py-2 rounded font-bold text-sm ${
                    filter === 'medium'
                      ? 'bg-orange-500 text-white'
                      : 'bg-muted text-muted-foreground hover:bg-gray-200'
                  }`}
                >
                  Medium
                </button>
                <button
                  onClick={() => setFilter('low')}
                  className={`px-4 py-2 rounded font-bold text-sm ${
                    filter === 'low'
                      ? 'bg-background0 text-white'
                      : 'bg-muted text-muted-foreground hover:bg-gray-200'
                  }`}
                >
                  Low
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'deadline' | 'priority')}
                className="px-3 py-2 border-2 border-border rounded text-sm"
              >
                <option value="deadline">Deadline</option>
                <option value="priority">Priority</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tasks List */}
        {sortedTasks.length > 0 ? (
          <div className="space-y-4">
            {sortedTasks.map((task) => (
              <div
                key={task.id}
                className={`bg-card border-2 rounded-lg p-6 transition-all ${
                  task.priority === 'high'
                    ? 'border-red-300 bg-red-50'
                    : task.priority === 'medium'
                    ? 'border-orange-300 bg-orange-50'
                    : 'border-border'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-foreground">{task.title}</h3>
                      <span
                        className={`px-3 py-1 text-xs font-bold rounded ${
                          task.priority === 'high'
                            ? 'bg-red-500 text-white'
                            : task.priority === 'medium'
                            ? 'bg-orange-500 text-white'
                            : 'bg-gray-400 text-white'
                        }`}
                      >
                        {task.priority.toUpperCase()} PRIORITY
                      </span>
                      <span className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded">
                        {task.type.toUpperCase()}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      Service: <span className="font-bold text-foreground">{task.service}</span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-3">
                      Reference: <span className="font-mono text-foreground">{task.ref}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{task.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-gray-500" />
                        <span className={`font-bold ${
                          getDaysLeft(task.deadline).includes('Today') || getDaysLeft(task.deadline).includes('Tomorrow')
                            ? 'text-red-600'
                            : 'text-muted-foreground'
                        }`}>
                          Due: {getDaysLeft(task.deadline)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-gray-500" />
                        <span className="text-muted-foreground">
                          {task.deadline.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 ml-4">
                    <button
                      onClick={() => handleComplete(task.id)}
                      className="px-6 py-2 bg-green-700 text-white rounded font-bold hover:bg-[#0f6b06] flex items-center gap-2"
                    >
                      <CheckCircle size={16} />
                      <span>Complete Task</span>
                    </button>
                    <button className="px-6 py-2 border-2 border-border text-muted-foreground rounded font-bold hover:border-gray-400">
                      View Application
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-card border-2 border-border rounded-lg p-12 text-center">
            <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
              <CheckCircle size={48} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">All Tasks Completed!</h3>
            <p className="text-muted-foreground mb-6">
              Great job! You have no pending tasks at the moment.
            </p>
            <Link
              to="/patterns/dashboard/citizen-dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded font-bold hover:opacity-90"
            >
              <span>Back to Dashboard</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        )}

        {/* Completed Tasks */}
        {completedTasks.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-foreground mb-4">Completed Tasks ({completedTasks.length})</h2>
            <div className="space-y-2">
              {ALL_TASKS.filter(t => completedTasks.includes(t.id)).map((task) => (
                <div key={task.id} className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle size={24} className="text-green-600" />
                    <div>
                      <div className="font-bold text-foreground line-through">{task.title}</div>
                      <div className="text-sm text-muted-foreground">{task.service}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setCompletedTasks(completedTasks.filter(id => id !== task.id))}
                    className="p-2 hover:bg-green-100 rounded"
                    aria-label="Undo completion"
                  >
                    <X size={20} className="text-gray-500" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pattern Info */}
        <div className="mt-12 bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">Pattern Features Demonstrated</h3>
          <div className="grid grid-cols-4 gap-6 text-sm">
            <div>
              <div className="font-bold text-muted-foreground mb-2">Prioritization</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• High/Medium/Low priority</li>
                <li>• Visual indicators</li>
                <li>• Color-coded urgency</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-muted-foreground mb-2">Deadline Management</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Days left calculation</li>
                <li>• Deadline sorting</li>
                <li>• Urgent highlighting</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-muted-foreground mb-2">Filtering & Sorting</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Filter by priority</li>
                <li>• Sort by deadline/priority</li>
                <li>• Dynamic updates</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-muted-foreground mb-2">Task Completion</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Mark as complete</li>
                <li>• Completed tasks list</li>
                <li>• Undo capability</li>
              </ul>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

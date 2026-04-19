import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { MessageSquare, Star, ThumbsUp, Send } from "lucide-react";

export default function IECRegFeedback() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating > 0) {
      navigate("/services/iec-registration/my-applications");
    }
  };

  const ratingLabels = ["", "Very Poor", "Poor", "Average", "Good", "Excellent"];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-pink-600 rounded flex items-center justify-center">
              <MessageSquare size={28} className="text-white" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Service Feedback</div>
              <h1 className="text-2xl font-bold text-foreground">Share Your Experience</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded-lg p-6 mb-8 text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <ThumbsUp size={32} className="text-white" />
            </div>
            <h2 className="text-xl font-bold text-foreground mb-2">Congratulations on Your IEC Registration!</h2>
            <p className="text-sm text-muted-foreground">Your Import Export Code has been issued and IEC Certificate is ready. We would love to hear about your experience.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card border-2 border-border rounded-lg overflow-hidden">
            <div className="bg-muted border-b-2 border-border px-8 py-4">
              <h2 className="font-bold text-foreground">Help Us Improve</h2>
            </div>
            <div className="p-8 space-y-8">
              <div className="text-center">
                <label className="block text-sm font-bold text-foreground mb-4">
                  How would you rate your overall experience? <span className="text-red-600">*</span>
                </label>
                <div className="flex items-center justify-center gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} type="button" onClick={() => setRating(star)} onMouseEnter={() => setHoverRating(star)} onMouseLeave={() => setHoverRating(0)} className="transition-transform hover:scale-110">
                      <Star size={48} className={star <= (hoverRating || rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"} />
                    </button>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">{ratingLabels[rating] || "Click to rate"}</div>
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-3">What aspect would you like to comment on?</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {["Registration Process", "Website Usability", "Processing Time", "DGFT Officer Support", "Document Requirements", "Overall Service"].map((cat) => (
                    <label key={cat} className={`px-4 py-3 border-2 rounded cursor-pointer text-sm font-bold text-center transition-all ${category === cat ? "border-primary bg-blue-50 text-primary" : "border-border bg-card text-muted-foreground hover:border-blue-300"}`}>
                      <input type="radio" name="category" value={cat} checked={category === cat} onChange={(e) => setCategory(e.target.value)} className="hidden" />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Your Feedback</label>
                <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} rows={6} placeholder="Please share your experience, suggestions, or any issues you faced..." className="w-full px-4 py-3 border-2 border-border rounded text-sm focus:outline-none focus:border-primary" />
              </div>

              <button type="submit" disabled={rating === 0} className={`w-full px-6 py-4 font-bold rounded flex items-center justify-center gap-2 ${rating > 0 ? "bg-green-700 text-white hover:bg-green-600" : "bg-gray-300 text-muted-foreground cursor-not-allowed"}`}>
                <Send size={20} /> Submit Feedback
              </button>

              <div className="text-center">
                <Link to="/services/iec-registration/my-applications" className="text-sm text-muted-foreground hover:text-foreground">Skip for now</Link>
              </div>
            </div>
          </form>
        </div>
      </div>

      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>IEC Registration Service • Directorate General of Foreign Trade</div>
            <div>Service Feedback</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

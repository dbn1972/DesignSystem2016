import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { MessageSquare, Star, ThumbsUp, Send } from "lucide-react";

export default function CertificateFeedback() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating > 0) {
      navigate("/reference-service/certificate/my-applications");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-pink-600 rounded flex items-center justify-center">
              <MessageSquare size={28} className="text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Service Feedback</div>
              <h1 className="text-2xl font-bold text-gray-900">Share Your Experience</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="max-w-2xl mx-auto">
          
          {/* Success Message */}
          <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6 mb-8 text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <ThumbsUp size={32} className="text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Congratulations on Receiving Your Certificate!
            </h2>
            <p className="text-sm text-gray-700">
              Your certificate has been successfully issued. We would love to hear about your experience.
            </p>
          </div>

          {/* Feedback Form */}
          <form onSubmit={handleSubmit} className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
            
            <div className="bg-gray-100 border-b-2 border-gray-300 px-8 py-4">
              <h2 className="font-bold text-gray-900">Help Us Improve</h2>
            </div>

            <div className="p-8 space-y-8">
              
              {/* Rating */}
              <div className="text-center">
                <label className="block text-sm font-bold text-gray-900 mb-4">
                  How would you rate your overall experience? <span className="text-red-600">*</span>
                </label>
                <div className="flex items-center justify-center gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        size={48}
                        className={`${
                          star <= (hoverRating || rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  {rating === 0 && "Click to rate"}
                  {rating === 1 && "Very Poor"}
                  {rating === 2 && "Poor"}
                  {rating === 3 && "Average"}
                  {rating === 4 && "Good"}
                  {rating === 5 && "Excellent"}
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3">
                  What aspect would you like to comment on?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Application Process",
                    "Website Usability",
                    "Processing Time",
                    "Officer Support",
                    "Document Requirements",
                    "Overall Service"
                  ].map((cat) => (
                    <label
                      key={cat}
                      className={`px-4 py-3 border-2 rounded cursor-pointer text-sm font-bold text-center transition-all ${
                        category === cat
                          ? 'border-[#000080] bg-blue-50 text-[#000080]'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-blue-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={category === cat}
                        onChange={(e) => setCategory(e.target.value)}
                        className="hidden"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Feedback Text */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  Your Feedback
                </label>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  rows={6}
                  placeholder="Please share your experience, suggestions, or any issues you faced..."
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded text-sm focus:outline-none focus:border-[#000080]"
                />
                <p className="mt-2 text-xs text-gray-600">
                  Your feedback helps us improve our services for all citizens
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={rating === 0}
                className={`w-full px-6 py-4 font-bold rounded flex items-center justify-center gap-2 ${
                  rating > 0
                    ? 'bg-[#138808] text-white hover:bg-green-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <Send size={20} />
                Submit Feedback
              </button>

              <div className="text-center">
                <Link
                  to="/reference-service/certificate/my-applications"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Skip for now
                </Link>
              </div>

            </div>
          </form>

          {/* Privacy Note */}
          <div className="mt-6 bg-blue-50 border-2 border-blue-300 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-2 text-sm">Privacy & Anonymity</h3>
            <p className="text-sm text-gray-700">
              Your feedback is valuable and will be used only to improve our services. 
              Personal information will not be shared publicly.
            </p>
          </div>

        </div>
      </main>

      <footer className="bg-white border-t-2 border-gray-300 mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>Certificate Application Service • Government of India</div>
            <div>Service Feedback</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

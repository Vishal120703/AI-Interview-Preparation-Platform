import React from "react";
import "./features.css";

import aiImg from "../assets/first.png";
import micImg from "../assets/second.png";
import resumeImg from "../assets/third.png";
import feedbackImg from "../assets/four.png";

const Features = () => {
  const features = [
    {
      title: "AI Mock Interviews",
      desc: "Engage in role-specific mock interviews powered by AI to simulate real job interview scenarios.",
      image: aiImg,
    },
    {
      title: "Video & Audio Responses",
      desc: "Enhance your experience by responding to questions with video and audio, just like a real interview.",
      image: micImg,
    },
    {
      title: "Resume-Based Questions",
      desc: "Upload your resume to get questions generated specifically based on your experience and skills.",
      image: resumeImg,
    },
    {
      title: "AI Feedback & Insights",
      desc: "Receive instant evaluation and feedback based on your performance to improve your skills.",
      image: feedbackImg,
    },
  ];

  return (
    <section className="features">
      <h2>
        Key <span>Features</span>
      </h2>
      <p className="subtitle">
        See how InterviewIQ.AI can help you succeed in your job interviews.
      </p>

      <div className="features-grid">
        {features.map((item, index) => (
          <div className="card" key={index}>
            
            {/* BIG IMAGE */}
            <div className="card-image">
              <img src={item.image} alt={item.title} />
            </div>

            {/* TEXT */}
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
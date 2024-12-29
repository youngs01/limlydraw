// src/components/FeaturesOverview.js
import React from "react";
import FeatureCard from "./FeatureCard";

import collaborationIcon from "../images/collaboration.png";
import toolsIcon from "../images/tools.png";
import shareIcon from "../images/share.png";
import offlineIcon from "../images/offline.png";


const features = [
  {
    icon: collaborationIcon,
    title: "Real-Time Collaboration",
    description:
      "Collaborate seamlessly with team members or friends in real-time. Watch changes appear instantly as you work together."
  },
  {
    icon: toolsIcon,
    title: "Easy-to-Use Tools",
    description:
      "Draw shapes, add text, and choose vibrant colors effortlessly with our intuitive interface."
  },
  {
    icon: shareIcon,
    title: "Share and Export Options",
    description:
      "Generate shareable links or export your projects in PNG, PDF, or SVG formats."
  },
  {
    icon: offlineIcon,
    title: "Offline Capabilities",
    description:
      "Keep working even without internet access, and sync automatically when reconnected."
  }
];

const FeaturesOverview = () => {
  return (
    <section className="features-overview">
      <h2 className="features-heading">Features Overview</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesOverview;

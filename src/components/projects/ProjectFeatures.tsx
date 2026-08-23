import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ProjectFeaturesProps {
  features?: string[];
  learnings?: string[];
}

export const ProjectFeatures: React.FC<ProjectFeaturesProps> = ({ features, learnings }) => {
  const hasFeatures = features && features.length > 0;
  const hasLearnings = learnings && learnings.length > 0;

  if (!hasFeatures && !hasLearnings) return null;

  return (
    <div className="mt-16 md:mt-24 border border-violet-500/20 bg-[#120b29]/40 backdrop-blur-md rounded-2xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-violet-500/20">
        
        {hasFeatures && (
          <div className={`p-8 md:p-10 ${!hasLearnings ? 'md:col-span-2' : ''}`}>
            <h3 className="text-xl font-bold text-white mb-6">Key Features</h3>
            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-violet-500/80 fill-violet-500/10 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {hasLearnings && (
          <div className={`p-8 md:p-10 ${!hasFeatures ? 'md:col-span-2' : ''}`}>
            <h3 className="text-xl font-bold text-white mb-6">What I Learned</h3>
            <ul className="space-y-4">
              {learnings.map((learning, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-violet-500/80 fill-violet-500/10 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
};

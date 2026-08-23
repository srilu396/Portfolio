import React from 'react';
import { KeyRound, Mail, Lock } from 'lucide-react';
import { ProjectCredential } from '@/data/projects';

interface ProjectCredentialsProps {
  credentials?: ProjectCredential[];
}

export const ProjectCredentials: React.FC<ProjectCredentialsProps> = ({ credentials }) => {
  if (!credentials || credentials.length === 0) return null;

  return (
    <div className="mt-16 md:mt-24 mb-10">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
          <KeyRound className="w-5 h-5 text-violet-400" />
        </div>
        <h3 className="text-2xl font-bold text-white">Demo Credentials</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {credentials.map((cred, index) => (
          <div 
            key={index}
            className="p-6 rounded-2xl bg-[#120b29]/40 border border-violet-500/15 backdrop-blur-sm"
          >
            <h4 className="text-lg font-semibold text-violet-300 mb-4">{cred.role}</h4>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-black/30 border border-white/5">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-400">Email</span>
                </div>
                <span className="text-sm font-medium text-white select-all">{cred.email}</span>
              </div>
              
              {cred.password && (
                <div className="flex items-center justify-between p-3 rounded-lg bg-black/30 border border-white/5">
                  <div className="flex items-center gap-3">
                    <Lock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">Password</span>
                  </div>
                  <span className="text-sm font-medium text-white select-all">{cred.password}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';

const CertificationBadges: React.FC = () => {
  const badges = [
    {
      name: 'SOC 2 Type II',
      icon: ShieldCheck,
      color: 'blue'
    },
    {
      name: 'ISO 27001',
      icon: Award,
      color: 'indigo'
    }
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <div
            key={index}
            className="relative group cursor-default"
          >
            {/* Chrome Badge Container */}
            <div
              className="flex items-center gap-3 px-5 py-3 rounded-lg transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                boxShadow: '0 4px 12px -2px rgba(148, 163, 184, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.9), inset 0 0 15px rgba(255, 255, 255, 0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 20px -2px rgba(148, 163, 184, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 0 15px rgba(99, 102, 241, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px -2px rgba(148, 163, 184, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.9), inset 0 0 15px rgba(255, 255, 255, 0.4)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
              }}
            >
              {/* Metallic Sheen Effect */}
              <div
                className="absolute inset-0 rounded-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'linear-gradient(120deg, transparent 30%, rgba(255, 255, 255, 0.8) 50%, transparent 70%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s infinite linear'
                }}
              ></div>

              {/* Icon Container */}
              <div
                className="p-2 rounded-md inline-flex items-center justify-center relative z-10"
                style={{
                  background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
                  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.8), 0 2px 4px rgba(0,0,0,0.05)',
                  border: '1px solid rgba(203, 213, 225, 0.5)'
                }}
              >
                <Icon className={`w-5 h-5 text-${badge.color}-600`} />
              </div>

              {/* Badge Text */}
              <div className="relative z-10">
                <span
                  className="text-slate-700"
                  style={{
                    fontSize: '13px',
                    fontWeight: '700',
                    letterSpacing: '0.5px',
                    fontFamily: 'monospace'
                  }}
                >
                  {badge.name}
                </span>
              </div>

              {/* Status Indicator */}
              <div className="relative z-10 ml-1">
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CertificationBadges;

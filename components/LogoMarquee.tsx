import React from 'react';

interface Logo {
  name: string;
  icon?: React.ReactNode;
  logo?: string;
}

interface LogoMarqueeProps {
  logos: Logo[];
  title?: string;
}

const LogoMarquee: React.FC<LogoMarqueeProps> = ({ logos, title }) => {
  const trustedLogos = [
    { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "AWS", url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Salesforce", url: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
    { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Oracle", url: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
    { name: "SAP", url: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
    { name: "OpenAI", url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "Intel", url: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg" },
    { name: "ServiceNow", url: "https://upload.wikimedia.org/wikipedia/commons/1/10/ServiceNow_logo.svg" },
    { name: "Stripe", url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
    { name: "Slack", url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
    { name: "Zoom", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg" },
    { name: "Atlassian", url: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Atlassian_logo.svg" },
    { name: "HubSpot", url: "https://upload.wikimedia.org/wikipedia/commons/1/15/HubSpot_Logo.svg" },
    { name: "Workday", url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Workday_Inc._Logo.svg" },
    { name: "Snowflake", url: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg" },
    { name: "Datadog", url: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Datadog_logo.svg" },
    { name: "MongoDB", url: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },
    { name: "Twilio", url: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg" }
  ];

  const displayLogos = trustedLogos;

  return (
    <div className="w-full py-10 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {title && (
          <h3 className="text-center text-sm md:text-base font-bold font-mono uppercase tracking-[0.3em] mb-10 cursor-pointer select-none transition-all duration-700 ease-out transform-gpu bg-clip-text text-transparent bg-gradient-to-r from-gray-600 via-gray-200 to-gray-600 hover:from-white hover:via-sky-200 hover:to-white hover:tracking-[0.5em] hover:drop-shadow-[0_0_10px_rgba(186,230,253,0.5)] active:scale-95 active:duration-100 opacity-80 hover:opacity-100">
            {title}
          </h3>
        )}
        <div className="relative overflow-hidden mask-linear-fade">
          <div className="flex items-center animate-marquee hover:pause" style={{ animationDuration: '30s' }}>
            {(() => {
              const logos = [
                { name: "GitHub", url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
                { name: "OpenAI", url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
                { name: "Anthropic", url: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg" },
                { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
                { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
                { name: "NVIDIA", url: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" },
                { name: "Hugging Face", url: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
                { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
                { name: "AWS", url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
                { name: "Vercel", url: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
                { name: "Stripe", url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
                { name: "Docker", url: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
                { name: "Supabase", url: "https://cdn.worldvectorlogo.com/logos/supabase-logo-icon.svg" },
                { name: "React", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
                { name: "Tailwind", url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
                { name: "Figma", url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
                { name: "Notion", url: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" }
              ];
              
              return [...logos, ...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center px-8 mx-4 min-w-[140px] transition-all duration-300 transform cursor-default group"
                >
                   <div className="h-7 w-auto relative transition-all duration-500 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-110">
                      <img 
                        src={logo.url} 
                        alt={logo.name} 
                        className="h-full w-auto object-contain" 
                        loading="lazy"
                      />
                   </div>
                </div>
              ));
            })()}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .mask-linear-fade {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </div>
  );
};

export default LogoMarquee;

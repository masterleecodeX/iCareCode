import React from "react";

export function FeaturesList() {
  return (
    <div className="flex flex-col gap-6 px-1 border-b border-[#27272A] pb-8">
      {/* Feature 1 */}
      <div className="flex gap-3.5 items-start">
        <div className="mt-0.5 text-[#A1A1AA] flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <polygon points="10 11 16 14 10 17 10 11"/>
            </svg>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-[14px] text-[#E4E4E7] font-normal">Premium Web Development</h3>
          <p className="text-[13px] text-[#A1A1AA] leading-[1.6]">
            We deliver high-quality, bespoke websites tailored to your business needs. From simple landing pages to complex web applications, our expert team ensures a seamless and professional online presence.
          </p>
        </div>
      </div>
      
      {/* Feature 2 */}
      <div className="flex gap-3.5 items-start">
        <div className="mt-0.5 text-[#A1A1AA] flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                <line x1="12" y1="9" x2="12" y2="15"/>
                <line x1="9" y1="12" x2="15" y2="12"/>
            </svg>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-[14px] text-[#E4E4E7] font-normal">Dedicated Support & Maintenance</h3>
          <p className="text-[13px] text-[#A1A1AA] leading-[1.6]">
            Our commitment doesn't end at launch. We provide ongoing support, regular updates, and proactive maintenance to keep your website secure, fast, and performing at its best.
          </p>
        </div>
      </div>
    </div>
  );
}

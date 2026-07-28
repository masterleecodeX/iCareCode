import React from "react";
import { Link2 } from "lucide-react";

export function DeploymentOptions() {
  return (
    <div className="flex flex-col gap-4 px-1 pt-2">
      <div className="flex justify-between items-end">
        <h2 className="text-[14px] font-normal text-[#E4E4E7]">Our Services</h2>
        <button className="text-[12px] text-[#A1A1AA] hover:text-white flex items-center transition-colors">
          <Link2 className="w-3.5 h-3.5 mr-1.5" />
          View Portfolio
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Cloud Server Card */}
        <div className="bg-[#121212] border border-[#27272A] rounded-2xl p-4 flex flex-col min-h-[200px]">
          <div className="mb-4 text-[#A1A1AA]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
              <path
                d="M14 15h-3a3 3 0 1 1 2.8-4h1.2a2 2 0 1 1 0 4Z"
                strokeWidth="0.5"
              />
            </svg>
          </div>
          <div className="mb-5">
            <h4 className="text-[14px] font-normal text-[#E4E4E7] mb-1">
              E-Commerce Solutions
            </h4>
            <p className="text-[12px] text-[#A1A1AA] leading-relaxed">
              Robust and scalable online stores designed to maximize conversions
              and provide a seamless shopping experience for your customers.
            </p>
          </div>
          <button className="mt-auto w-full bg-[#E4E4E7] text-black font-normal py-1.5 rounded-lg text-[13px] hover:bg-[#D4D4D8] transition-colors">
            Start
          </button>
        </div>

        {/* Desktop Card */}
        <div className="bg-[#121212] border border-[#27272A] rounded-2xl p-4 flex flex-col min-h-[200px]">
          <div className="mb-4 text-[#A1A1AA]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="13" rx="2" ry="2" />
              <line x1="2" y1="20" x2="22" y2="20" />
              <path d="M7 8l2 2-2 2" strokeWidth="1.25" />
              <line x1="11" y1="12" x2="15" y2="12" strokeWidth="1.25" />
            </svg>
          </div>
          <div className="mb-5">
            <h4 className="text-[14px] font-normal text-[#E4E4E7] mb-1">
              Corporate Websites
            </h4>
            <p className="text-[12px] text-[#A1A1AA] leading-relaxed">
              Professional, brand-aligned websites that establish trust and
              clearly communicate your company's value proposition to your
              target audience.
            </p>
          </div>
          <button className="mt-auto w-full bg-[#E4E4E7] text-black font-normal py-1.5 rounded-lg text-[13px] hover:bg-[#D4D4D8] transition-colors">
            Apply
          </button>
        </div>

        {/* Android Card */}
        <div className="bg-[#121212] border border-[#27272A] rounded-2xl p-4 flex flex-col min-h-[200px]">
          <div className="mb-4 text-[#A1A1AA]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <path d="M9 11a3 3 0 0 1 6 0" />
              <circle
                cx="10.5"
                cy="9.5"
                r="0.5"
                fill="currentColor"
                stroke="none"
              />
              <circle
                cx="13.5"
                cy="9.5"
                r="0.5"
                fill="currentColor"
                stroke="none"
              />
              <line x1="9.5" y1="7" x2="8.5" y2="5" />
              <line x1="14.5" y1="7" x2="15.5" y2="5" />
              <rect x="9.5" y="11" width="5" height="4" rx="0.5" />
            </svg>
          </div>
          <div className="mb-5">
            <h4 className="text-[14px] font-normal text-[#E4E4E7] mb-1">
              Web Applications
            </h4>
            <p className="text-[12px] text-[#A1A1AA] leading-relaxed">
              Custom web applications built with modern technologies to
              streamline your business processes and engage your users
              interactively.
            </p>
          </div>
          <button className="mt-auto w-full bg-[#E4E4E7] text-black font-normal py-1.5 rounded-lg text-[13px] hover:bg-[#D4D4D8] transition-colors">
            Info
          </button>
        </div>
      </div>
    </div>
  );
}

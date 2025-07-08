"use client";

import { Icon, Icons } from "@/ui";
import React, { useState } from "react";
import pricingData from "@/data/desktop-pricing.json";

interface FeaturesProps {
  category: (typeof pricingData)["categories"][0];
  defaultCollaspedState: boolean;
}

export default function Features({
  category,
  defaultCollaspedState,
}: FeaturesProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollaspedState);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="grid gap-5">
      <button
        onClick={handleToggle}
        className="flex justify-between items-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold">{category.title}</h2>
        <Icon
          type={isCollapsed ? Icons.AddCircle : Icons.MinusCircle}
          size={24}
          color="#000000"
        />
      </button>

      {!isCollapsed && (
        <div>
          {category.features.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-5"
            >
              <div className="grid gap-1 p-2.5">
                <h3 className="text-lg font-bold">{feature.label}</h3>
                <p className="text-sm font-medium text-[#555555]">
                  {feature.description}
                </p>
              </div>
              {/* Starter */}
              <div className="grid place-content-center">
                {feature.values[0] && (
                  <span className="bg-black grid place-content-center rounded-full w-6 h-6">
                    <Icon type={Icons.Check} size={18} color="#FFFFFF" />
                  </span>
                )}
              </div>
              {/* Professional */}
              <div className="grid place-content-center bg-[#F7F7F7]">
                {feature.values[1] && (
                  <span className="bg-black grid place-content-center rounded-full w-6 h-6">
                    <Icon type={Icons.Check} size={18} color="#FFFFFF" />
                  </span>
                )}
              </div>
              {/* Enterprise */}
              <div className="grid place-content-center">
                {feature.values[2] && (
                  <span className="bg-black grid place-content-center rounded-full w-6 h-6">
                    <Icon type={Icons.Check} size={18} color="#FFFFFF" />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import React from "react";
import { Icon, Icons } from "@/ui";
import { useCounter } from "@/components/hooks/counter.hooks";

export default function Section3() {
  const { count, countRef } = useCounter(150000, 2000);
  return (
    <section className="py-20 layout-spacing grid gap-10 sm:gap-20 bg-[#285ab1] h-full">
      <div className="container mx-auto grid md:grid-cols-3 gap-5 rounded-xl px-6 lg:px-20 [&>div]:grid [&>div]:place-items-center [&>div]:gap-4 p-4 [&>div]:text-center [&_div]:grid [&_div]:gap-4 [&_h1]:text-white [&_h1]:text-5xl [&_h1]:font-bold">
        <div>
          <Icon type={Icons.UserGroup} size={60} color="#252525" />
          <div>
            <h1>{count}+</h1>
            <p>Customers Empowered</p>
          </div>
        </div>
        <div className="">
          <Icon type={Icons.Savings} size={60} color="#252525" />
          <div>
            <h1>$5 billion+</h1>
            <p>Customers Empowered</p>
          </div>
        </div>
        <div className="">
          <Icon type={Icons.People} size={60} color="#252525" />
          <div>
            <div className="grid grid-cols-5 gap-2">
              <Icon type={Icons.StarRating} size={50} color="#FFFFFF" />
              <Icon type={Icons.StarRating} size={50} color="#FFFFFF" />
              <Icon type={Icons.StarRating} size={50} color="#FFFFFF" />
              <Icon type={Icons.StarRating} size={50} color="#FFFFFF" />
              <Icon type={Icons.StarRating} size={50} color="#FFFFFF" />
            </div>
            <p>Customer Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useRouter } from "next/navigation";
import { useTopLoader } from "nextjs-toploader";
import React, { ReactNode } from "react";

interface NavigationItemsProps {
  className?: string;
  children: ReactNode;
  url?: string;
  onclick?: () => void;
}
export default function NavigationItem({
  className,
  children,
  url,
  onclick,
}: NavigationItemsProps) {
  const loader = useTopLoader();
  const router = useRouter();

  const handleOnClick = () => {
    if (url) {
      loader.start();
      router.push(url);
    }
    onclick?.();
  };

  return (
    <button
      onClick={handleOnClick}
      className={`text-[#141414] text-left text-2xl lg:text-base font-medium grid grid-flow-col items-center gap-1 cursor-pointer hover:border-b-2 hover:border-[#003DA6] ${className}`}
    >
      {children}
    </button>
  );
}

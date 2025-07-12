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
      className={`px-4 md:px-0 text-[#141414] text-left text-base font-medium grid grid-flow-col items-center gap-1 cursor-pointer md:hover:bg-none md:hover:border-b-2 md:hover:border-[#003DA6] ${className}`}
    >
      {children}
    </button>
  );
}

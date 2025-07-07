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
    url && router.push(url);
    url && loader.start();
    onclick?.();
  };
  return (
    <button
      onClick={handleOnClick}
      className={`text-[#141414] text-left text-2xl lg:text-base font-medium grid grid-flow-col items-center gap-1 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

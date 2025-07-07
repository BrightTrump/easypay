import React, { ReactNode } from "react";

interface NavigationItemsProps {
  className?: string;
  children: ReactNode;
  url?: string;
  onclick?: () => void;
}
export default function NavigationItems({
  className,
  children,
  url,
  onclick,
}: NavigationItemsProps) {
  return (
    <div>
      <div></div>
    </div>
  );
}

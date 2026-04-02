// "use client"

// import { useTheme } from "next-themes"
// import { Toaster as Sonner, ToasterProps } from "sonner"

// const Toaster = ({ ...props }: ToasterProps) => {
//   const { theme = "system" } = useTheme()

//   return (
//     <Sonner
//       theme={theme as ToasterProps["theme"]}
//       className="toaster group"
//       style={
//         {
//           "--normal-bg": "var(--popover)",
//           "--normal-text": "var(--popover-foreground)",
//           "--normal-border": "var(--border)",
//         } as React.CSSProperties
//       }
//       {...props}
//     />
//   )
// }

// export { Toaster }

"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      position="top-center"
      toastOptions={{
        style: {
          paddingTop: "8px",
          paddingBottom: "8px",
        },
        duration: 3000,
        closeButton: true,
      }}
      {...props}
    />
  );
};

export { Toaster };

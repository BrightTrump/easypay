import Footer from "@/components/web-site/_shared/footer";
import Header from "@/components/web-site/_shared/header";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

import SideBar from "@/components/SideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-full">
      <SideBar />
      {children}
    </main>
  );
}

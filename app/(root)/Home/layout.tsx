"use client";
import SearchBar from "@/components/SearchBar";
import SideBar from "@/components/SideBar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-full">
      <SideBar />
      <div className="flex flex-col mx-9 w-full">
        <SearchBar />
        {children}
      </div>
    </main>
  );
}

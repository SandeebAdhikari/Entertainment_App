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
      <div className="flex flex-col flex-grow mx-9">
        <SearchBar />
        {children}
      </div>
    </main>
  );
}

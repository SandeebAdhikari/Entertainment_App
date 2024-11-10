"use client";

import SearchBar from "@/components/SearchBar";
import SideBar from "@/components/SideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#10141E] text-white min-h-screen">
        <div className="flex w-full">
          {/* Sidebar */}
          <SideBar />

          {/* Main Content Area */}
          <div className="flex flex-col flex-grow mx-9">
            <SearchBar />
            <div className="mt-6">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}

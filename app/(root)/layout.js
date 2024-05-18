import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import LeftSideBar from "@components/layout/LeftSideBar";
import MainContainer from "@components/layout/MainContainer";
import RightSideBar from "@components/layout/RightSideBar";
import TopBar from "@components/layout/TopBar";
import BottomBar from "@components/layout/BottomBar";

import "../globals.css";

export const metadata = {
  title: "DevThreads",
  description: "Dev Threads App",
};

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-purple-2`}>
          <main className="flex flex-row">
            <LeftSideBar />
            <MainContainer>
              <TopBar />
              {children}
            </MainContainer>
            <RightSideBar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}

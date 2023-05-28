import Image from "next/image";
import { Inter } from "next/font/google";
import { FooterBar, HeaderBar } from "@/components/HeadersFooders";
import {
  AboutSection,
  ProjectsSection,
  TitleSection,
} from "@/components/Sections";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <HeaderBar></HeaderBar>
      <TitleSection></TitleSection>
      <AboutSection></AboutSection>
      <ProjectsSection></ProjectsSection>
      <FooterBar></FooterBar>
    </main>
  );
}

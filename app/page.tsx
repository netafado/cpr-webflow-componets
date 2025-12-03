'use client';
import {  CprFooter , CprSecondFooter} from "@/devlink";
import "./globals.css";

export default function Home() {
  return (
    <div className="max-w-[1280px] m-auto">
      <CprFooter />
      <CprSecondFooter  />
    </div>
  );
}

"use client";
import Card from "@/components/UI_organisms/dealCards";
import Header from "@/components/UI_organisms/header";
import Navbar from "@/components/UI_organisms/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <div className="max-w-5xl mx-auto">
        <Card
          pictureSource="/builder.png"
          title="HI"
          titleText="HI"
          bodyTitle="Body"
          bodyText="BodyText"
          rating={9.8}
          review="Exceptional"
          star={5}
        />
      </div>
    </main>
  );
}

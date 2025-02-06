import { Header } from "@/components/Header";
import { QuestionsDisplay } from "@/components/QuestionsDisplay";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <section className="w-full flex flex-col min-h-screen">
        <Header />
        <section className="padding-x padding-y">
          <Hero />
        </section>
        <section className="padding-x paddin-y">
          <QuestionsDisplay />
        </section>
      </section>
    </main>
  )
}

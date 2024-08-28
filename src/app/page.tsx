import IntroSection from "@/components/IntroSection";
import RecentPosts from "@/components/RecentPosts";

export default function Home() {
  return (
    <section className="pb-24 pt-40">
      <div className="container max-w-3xl">
        <IntroSection />
        <RecentPosts />
      </div>
    </section>
  );
}

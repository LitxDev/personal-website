import TopSection from "../components/TopSection";

export default function Games() {
  return (
    <div>
      <TopSection />

      <div
        data-aos="fade-in"
        className="flex flex-col items-center text-center mt-96 text-foreground-100"
      >
        <p className="text-6xl leading-tight">No games yet</p>
      </div>
    </div>
  );
}

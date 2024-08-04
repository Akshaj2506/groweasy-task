import BannerContainer from "./components/BannerContainer";

export default function Home() {
  return (
    <>
      <div className="bg-zinc-800 p-6">
        <div className="container">
          <h1 className="text-center text-white text-4xl font-bold">Explore our Banner Ideas</h1>
        </div>
        <BannerContainer/>
      </div>
    </>
  );
}

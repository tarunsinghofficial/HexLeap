import Sports from "./components/Sports";
import Spotlight from "./components/Spotlight";

export default function Home() {
  return (
    <main className="space-y-10 my-10">
      <div className="px-0 lg:px-[5rem]">
        <Sports />
      </div>
      <div className="px-2 md:px-5 lg:px-[5rem]">
        <Spotlight rowId="1" />
      </div>
    </main>
  );
}

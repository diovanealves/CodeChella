import { Navbar } from "../../components/Navbar";
import { seatLegend } from "../../utils/database.json";

import BannerSectorMap from "../../assets/BannerSectorMap.png";
import SeatMap from "../../assets/SeatMap.png";

export function SectorMap() {
  return (
    <div>
      <Navbar />
      <img src={BannerSectorMap} alt="" className="w-full" />

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-wrap items-center justify-center gap-10">
          <img src={SeatMap} alt="" className="max-w-lg w-3/4" />
          <div className="flex  flex-col">
            <h1 className="text-3xl font-sans mb-5">Legenda:</h1>
            {seatLegend.map((seating) => [
              <div className="flex items-center gap-4 my-2 " key={seating.name}>
                <div
                  style={{ height: 32, width: 32, background: seating.color }}
                />
                <h1 className="text-base md:text-lg  font-sans">
                  {seating.name}
                </h1>
              </div>,
            ])}
          </div>
        </div>

        <h1 className="text-xl font-sans">Mais detalhes sobre os setores:</h1>

        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

import BannerTicket from "../../assets/BannerTicket.png";
import QrCode from "../../assets/QrCode.png";
import Logo from "../../assets/Logo.png";
import Favicon from "../../../public/Favicon.png";

import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export function Ticket() {
  const searchParams = new URLSearchParams(window.location.search);
  const data = JSON.parse(decodeURIComponent(searchParams.get("data")));

  return (
    <div>
      <Navbar />
      <img src={BannerTicket} alt="" className="w-full" />

      <div className="flex flex-col items-center justify-center mt-11">
        <div className="max-w-2xl w-4/5">
          <h1 className="text-xl text-center mb-10">
            Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do
            evento e divirta-se!
          </h1>
          <div className="bg-background flex flex-col rounded-md px-6 py-6 mb-10">
            <div className="flex justify-between">
              <img src={Logo} alt="" className="w-44" />
              <img src={Favicon} alt="" className="w-10" />
            </div>

            <div className="flex flex-col md:flex-row items-center text-center gap-4">
              <img src={QrCode} alt="" />
              <div>
                <h1 className="text-2xl pb-3">{data.name}</h1>
                <p>{data.selectedTypeTicket}</p>
                <p className="p-2">Setor Pista</p>
                <p>Data: 11/03</p>
                <p className="pt-2">Local: São Paulo - SP</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

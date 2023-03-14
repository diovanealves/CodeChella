import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BannerGetYourTicket from "../../assets/BannerGetYourTicket.png";

import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export function BuyIngress() {
  return (
    <div>
      <Navbar />
      <img src={BannerGetYourTicket} alt="" className="w-full" />

      <div className="flex flex-col justify-center items-center py-12">
        <h1 className="text-gray-700 md:text-white text-xl md:text-3xl pb-10">
          Preencha o formulário a seguir:
        </h1>
        <form className="max-w-lg w-3/4">
          <label>
            <h1 className="text-gray-700 md:text-white text-lg pb-2">
              Nome Completo
            </h1>
            <input
              type="text"
              className="w-full text-black p-2 mb-3"
              required
            />
          </label>

          <label>
            <h1 className="text-gray-700 md:text-white text-lg pb-2">Email</h1>
            <input
              type="text"
              className="w-full text-black p-2 mb-3"
              required
            />
          </label>

          <div className=" flex flex-col md:flex-row md:justify-between gap-2">
            <label>
              <h1 className="text-gray-700 md:text-white text-lg pb-2">
                Tipo de Ingresso
              </h1>
              <select
                id="ingress"
                name="ingress"
                className="w-full text-black p-2 mb-3"
                required
              >
                <option value="Tipo de Ingresso" selected disabled>
                  Tipo do Ingresso
                </option>
                <option value="Inteira">Inteira</option>
                <option value="Meia-Entrada">Meia-Entrada</option>
              </select>
            </label>

            <label>
              <h1 className="text-gray-700 md:text-white text-lg pb-2">
                Data de nascimento
              </h1>
              <input type="date" className="w-full text-black p-2" required />
            </label>
          </div>

          <button className="bg-Highlight h-14 w-40 mx-auto rounded-lg mt-8 flex items-center justify-evenly hover:brightness-90">
            Avançar! <ArrowForwardIcon />
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

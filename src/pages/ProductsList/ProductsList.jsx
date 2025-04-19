import { useNavigate } from "react-router-dom";
import Banners from "./_components/banners";
import MainMenu from "./_components/MainMenu";

export default function ProductsList(params) {
  const navigate = useNavigate();

  return (
    <div className="">
      <Banners />
      <MainMenu />
    </div>
  );
}

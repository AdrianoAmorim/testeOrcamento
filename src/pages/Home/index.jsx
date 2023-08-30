import Button from "../../components/Button";

import LogoApp from "../../assets/img/logoApp.png"
import { useNavigate } from "react-router-dom";
import IconNewOrc from "../../assets/img/icons/iconNewOrc";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className=" w-full h-screen rounded-[8px] p-2 flex flex-col items-center justify-between  bg-transparent-[.5] bg-slate-300 ">
            <div className="w-full max-w-[280px] flex items-center">
                LOGO MARCA DA EMPRESA
            </div>

            <Button width="icon" onClick={()=> navigate("/new-report")}>
                Novo Orçamento

                <IconNewOrc width="38px" height="38px" className="text-white" />
            </Button>


            <div className="w-full max-w-[180px] flex items-center my-12">
                <img className="w-full object-cover" src={LogoApp} alt="Logo App" />
            </div>

        </div>
    )

}
export default Home;
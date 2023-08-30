import Button from "../../components/Button";

import LogoApp from "../../assets/img/logoApp.png"
import LogoEmpresa from "../../assets/img/logo-empresa.jpeg"
import { useNavigate } from "react-router-dom";
import IconNewOrc from "../../assets/img/icons/iconNewOrc";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className=" w-full rounded-[8px] overflow-hidden flex flex-col items-center justify-between bg-slate-200 ">
            <div className="w-full flex items-center mb-24">
               <img className="object-cover" src={LogoEmpresa} alt="logo Empresa" />
            </div>

            <Button width="icon" onClick={()=> navigate("/new-report")}>
                Novo Orçamento
                <IconNewOrc width="38px" height="38px" className="text-white" />
            </Button>


            <div className="w-full max-w-[180px] flex items-center mt-36 mb-12">
                <img className="w-full object-cover" src={LogoApp} alt="Logo App" />
            </div>

        </div>
    )

}
export default Home;
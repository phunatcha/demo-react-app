import { useNavigate } from "react-router-dom";
import avatar from "../assets/icon/social/delivery-man.png"
import DetailsPage from "./DetailsPage";
function Landingpage() {
    const navigate = useNavigate();
    const handingDetaliPages=()=>{
        navigate("/details");
    }
    return (
        <div className="text-center">
            <p className="font-mono text-2xl text-[#D2F3E0] font-bold uppercase">Landingpage</p>{"\n"}
            <div className="flex justify-center"><br />
                <img src={avatar} alt="profile" className="w-[20%] bg-white rounded-full p-2"/>
            </div>
            <p className="text-md mt-2 font-bold text-white mx-8 md:mx36 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>{"\n"}
            <button className="text-xl text-[#F6FF2B] underline "onClick={()=>handingDetaliPages()}>NEXT</button>
            </div>
    )
}
export default Landingpage;
import { clsx } from "clsx";
import InputMask from 'react-input-mask'

// eslint-disable-next-line react/prop-types
const Input = ({type, onChange, value,id,width, mask,maskPlaceholder})=>{
    return(
      <InputMask type={type} mask={mask} maskPlaceholder={maskPlaceholder} value={value} onChange={onChange}  id={id}
      className={clsx(
        "bg-slate-400 h-9 outline-none ps-3 text-[16px] text-black rounded",{
          "w-20": width == "sm",
          "w-32": width == "md",
          "w-48": width == "lg",
          "w-full": width == "full",
        }
      )}/>
    )
}

export default Input;
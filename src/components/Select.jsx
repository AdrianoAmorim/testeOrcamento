import { clsx } from "clsx";

// eslint-disable-next-line react/prop-types
const Select = ({onChange, value,id,width,children})=>{
    return(
      <select value={value} onChange={onChange}  id={id}
      className={clsx(
        "bg-slate-400 h-9 outline-none ps-3 text-[16px] text-black rounded",{
          "w-20": width == "sm",
          "w-32": width == "md",
          "w-48": width == "lg",
          "w-full": width == "full",
        }
      )}>
        {children}
      </select>
    )
}

export default Select;
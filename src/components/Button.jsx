import clsx from "clsx";

// eslint-disable-next-line react/prop-types
const Button = ({children,width, onClick})=>{
    return(
      <button className={clsx(
        "p-3 text-[18px] font-semibold rounded bg-blue-600 text-white shadow-md",
        {
            "w-42 h-42": width == "md",
            "w-full h-38": width == "lg",
            "flex flex-col items-center gap-2": width == "icon",
            "flex flex-col items-center bg-transparent shadow-none outline-none": width == "no-bg",
        }
      )} onClick={onClick}>
        {children}
      </button>
    )
}

export default Button;
import clsx from 'clsx';
import { useRef } from 'react';

// eslint-disable-next-line react/prop-types
const InputMoney = ({width,onChange,value}) => {
  const inputRef = useRef(null);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="R$ 0,00"
        className={clsx(
          "bg-slate-400 h-9 outline-none ps-3 text-[16px] text-black rounded",{
            "w-20": width == "sm",
            "w-32": width == "md",
            "w-48": width == "lg",
            "w-full": width == "full",
          }
        )}
      />
    </div>
  );
}

export default InputMoney;
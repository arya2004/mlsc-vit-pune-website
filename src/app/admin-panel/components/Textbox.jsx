export function Textboxico({label, icons, type}) {
  return (
    <div className="relative w-full text-[#6A6A6A]">
      <label htmlFor="textinput" className="absolute left-16 -top-2 px-5 bg-black text-sm font-light text-[#6A6A6A]">{label}</label>
        <img src={icons} className="absolute top-3 left-3 focus:opacity-0" alt="" />
      <input className="rounded-[10px] pt-3 pb-3 pr-3 pl-12 w-full border-[1px] border-[#6A6A6A] bg-black" type={type} name="textinput" />
    </div>
  );
}

export function Textbox({label}) {
    return (
        <div className="relative full text-[#6A6A6A]">
        <label htmlFor="textinput" className="absolute left-16 -top-3 px-5 bg-black text-sm font-light text-[#6A6A6A]">{label}</label>
    
        <input className="rounded-[10px] p-3 w-full border-[1px] border-[#6A6A6A] bg-black" type="text" name="textinput" />
        </div>
    );
}

export function Selectbox({label, options}) {
    return (
        <div className="relative w-full text-[#6A6A6A]">
        <label htmlFor="textinput" className="absolute left-16 -top-3 px-5 bg-black text-sm font-light text-[#6A6A6A]">{label}</label>
    
        <select className="rounded-[10px] p-3 w-full border-[1px] border-[#6A6A6A] bg-black" type="select" name="textinput" >
            {options.map((option) => (
                <option className="p-2 text-sm font-light text-[#6a6a6a] border-[1px] border-[#6a6a6a] rounded-[5px]" key={option} value={option}>{option}</option>
            ))}
        </select>
        </div>
    );
}
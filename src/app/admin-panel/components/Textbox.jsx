export function Textboxico({label, icons, type, onChange, name}) {
  return (
    <div className="relative w-full text-[#bfbdbd]">
      <label htmlFor="textinput" className="absolute left-16 -top-2 px-5 bg-black text-sm font-light text-[#bfbdbd]">{label}</label>
        <img src={icons} className="absolute top-3 left-3 focus:opacity-0" alt="" />
      <input onChange={onChange} className="rounded-[10px] pt-3 pb-3 pr-3 pl-12 w-full border-[1px] border-[#bfbdbd] bg-black" type={type} name={name} />
    </div>
  );
}

export function Textbox({label, onChange, name}) {
    return (
        <div className="relative w-full text-[#bfbdbd]">
        <label htmlFor="textinput" className="absolute left-16 -top-3 px-5 bg-black text-sm font-light text-[#bfbdbd]">{label}</label>
    
        <input onChange={onChange} className="rounded-[10px] p-3 w-full border-[1px] border-[#bfbdbd] bg-black" type="text" name={name} />
        </div>
    );
}

export function Selectbox({label, options, name, onChange}) {
    return (
        <div className="relative w-full text-[#bfbdbd]">
        <label htmlFor="textinput" className="absolute left-16 -top-3 px-5 bg-black text-sm font-light text-[#bfbdbd]">{label}</label>
    
        <select onChange={onChange} className="rounded-[10px] p-3 w-full border-[1px] border-[#bfbdbd] bg-black" type="select" name={name} >
            {options.map((option) => (
                <option className="p-2 text-sm font-light text-[#bfbdbd] border-[1px] border-[#bfbdbd] rounded-[5px]" key={option} value={option}>{option}</option>
            ))}
        </select>
        </div>
    );
}
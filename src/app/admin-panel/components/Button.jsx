export default function Button({ label, onClick }) {
  return (
    <button type="submit" onClick={onClick} className="relative w-full bg-[#0078D4] hover:bg-[#0089e5] border-[#f0f0f0] border-2 text-[#f0f0f0] rounded-[10px] p-3">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#009be6] active:w-10 active:h-5 w-0 h-0 ease-in-out duration-500" />
      {label}
    </button>
  )
}
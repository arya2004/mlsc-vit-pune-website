function ClosingButton() {
  return (
    <svg
      className="absolute -top-3 w-24 h-auto right-[-1px] z-20"
      xmlns="http://www.w3.org/2000/svg"
      width="132"
      height="132"
      viewBox="0 0 132 132"
      fill="none"
    >
      <path
        d="M120.877 1.66733C125.828 1.68094 129.839 5.69133 129.852 10.6426L130.156 121.054C130.178 129.084 120.47 133.121 114.792 127.443L4.07708 16.7278C-1.60104 11.0497 2.43572 1.34182 10.4658 1.36389L120.877 1.66733Z"
        fill="#203A61"
        stroke="#0078D4"
        strokeWidth="2"
      />
    </svg>
  );
}

function Cross() {
  return (
    <svg
      className="absolute top-0 w-12 p-2 h-auto right-2 z-20 hover:rotate-90 transition-all duration-300 ease-in-out"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 101 101"
      id="cross"
    >
      <path stroke="black" fill="white" d="M83.9 17.1c-.9-.9-2.5-.9-3.4 0l-30 30-30-30c-.9-.9-2.5-.9-3.4 0s-.9 2.5 0 3.4l30 30-30 30c-.9.9-.9 2.5 0 3.4.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7l30-30 30 30c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4l-30-30 30-30c.9-.9.9-2.4 0-3.4z"></path>
    </svg>
  );
}


export {ClosingButton, Cross};

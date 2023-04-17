// Base button component

export function Button({
  title = "Button"
}) {
  return (<button className="max-w-sx uppercase bg-[#FE7D75] px-8 py-2 rounded-full hover:bg-[#D7605F] active:bg-[#D7605F] active:opacity-70 active:ease-in-out" >
    {title}
  </button>);
}

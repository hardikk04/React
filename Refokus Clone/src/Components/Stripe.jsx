function Stripe({ item }) {
  return (
    <div className="shrink-0 w-[16.66%] border-t-[1px] border-r-[1px] border-b-[1px] px-4 py-6 border-zinc-700 flex justify-between items-center">
      <img className="object-cover" src={item.url} alt="" />
      <span className="font-semibold">{item.number}</span>
    </div>
  );
}

export default Stripe;

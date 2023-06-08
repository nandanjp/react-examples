const CreditCard = () => {
  return (
    <div className="card-top w-192 h-128 rounded-4xl shadow-xl border-1 border-white flex flex-col justify-evenly bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-sm bg-white">
      <div className="flex flex-col justify-between align-middle p-8 w-full h-3/5">
        <p className="tracking-normal text-2xl font-bold text-gray-500">
          SUPERBANK
        </p>
        <p className="tracking-wider font-bold text-3xl text-slate-800">
          1234 5678 1234 5678
        </p>
      </div>
      <div className="card-bottom flex flex-col justify-evenly gap-1 shadow-sm rounded-b-4xl w-full h-2/5 p-8">
        <div className="text-white">
          <p className="text-sm">VALID THRU</p>
          <p className="text-xl font-medium tracking-wide">12/29</p>
        </div>
        <p className="tracking-wide text-2xl font-bold">MICHAL MALEWICZ</p>
      </div>
    </div>
  );
};

export default CreditCard;
//bg-gradient-to-r from-sky-500 to-indigo-500

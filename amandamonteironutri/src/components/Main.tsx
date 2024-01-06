export default function Main(): React.ReactNode {
  return (
    <div className="container mx-auto px-3 min-h-[90vh] flex flex-col justify-center">
      <div className="max-w-xs md:max-w-full">
        <h1 className="text-gray-800 text-4xl font-semibold">
          Mude sua <span className="text-5xl font-black">VIDA!</span>
        </h1>
        <p className="text-gray-800 text-xl font-light">Aprenda a comer de uma vez por todas</p>
        <button className="text-white text-xl font-normal bg-emerald-700 px-5 py-3 rounded-xl mt-4 hover:bg-emerald-800">
          Saiba mais!
        </button>
      </div>
    </div>
  )
}
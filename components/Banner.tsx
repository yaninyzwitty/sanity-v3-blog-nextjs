


function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div>
            <h1 className="text-7xl">WITTY Daily Blog</h1>
            <h2 className="mt-5 md:mt-0">
                Welcome to {" "}
                <span className="underline decoration-4 decoration-[#F7AB0A]">
                    Every Developers
                </span>
                {" "}
            favourite blog to the devosphere
            </h2>
        </div>
        <div>
            <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
                New Features | Latest in Technology | Weekly debugging nightmares & more

            </p>
        </div>
    </div>
  )
}

export default Banner
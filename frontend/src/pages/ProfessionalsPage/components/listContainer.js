function listContainer({list}) {
  return (
    <>
      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded-xl overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                      alt=""
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Andres Berlin
                  </div>
                  <p className="text-gray-800 text-md text-center">PHD</p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Contact: +919313131313
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Email: andresberlin@gmail.com
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-bold">
                    Session Fees: 800/hr
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
export default listContainer;

function listContainer({ list }) {
  return (
    <>
      <div className="w-full bg-gray-100 px-10 pt-10 ">
        <div className="container mx-auto ">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between  md:justify-around sm:justify-around lg:justify-around">
            <div className="xl:w-full sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded-xl overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src={list.image_url}
                      alt=""
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-2xl text-center pb-1">
                    {list.name}
                  </div>
                  <p className="text-gray-800 text-md text-center">
                    {list.degree}
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Contact: {list.contact}
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Email : {list.email}
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-bold">
                    Session Fees: {list.session_fees}/session
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default listContainer;

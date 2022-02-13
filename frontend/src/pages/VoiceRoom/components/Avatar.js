import avatar from "../../assets/1.svg";
import avatar1 from "../../assets/2.svg";
import avatar2 from "../../assets/3.svg";
import avatar3 from "../../assets/4.svg";
import avatar4 from "../../assets/5.svg";
import avatar5 from "../../assets/6.svg";


function Avatar() {
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div class="w-full max-w-lg">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div>
              <img src={avatar} alt="" className=""/>
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Your Name"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Avatar;

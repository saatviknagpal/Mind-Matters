import { useState } from 'react'
import { Link } from 'react-router-dom';
import avatar1 from "../../../assets/1.svg";
import avatar2 from "../../../assets/2.svg";
import avatar3 from "../../../assets/3.svg";
import avatar4 from "../../../assets/4.svg";
import avatar5 from "../../../assets/5.svg";
import avatar6 from "../../../assets/6.svg";

const avatars = [
  {
    name: "Gentleman",
    avatar: avatar1
  },
  {
    name: "warrior",
    avatar: avatar2
  },
  {
    name: "Black Widow",
    avatar: avatar3
  },
  {
    name: "Scarlett Witch",
    avatar: avatar4
  },
  {
    name: "Captian Marvel",
    avatar: avatar5
  },
  {
    name: "Mr. hulk",
    avatar: avatar6
  },
];


function Avatar() {

  const [selectAvatar, setSelectAvatar] = useState(avatar1);

  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div class="w-full max-w-lg">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className='flex items-center justify-center py-5'>
              <img src={selectAvatar} alt="" className="w-80 h-80 border-4 border-zinc-300 p-2 rounded-full" />
            </div>
            <div class="mb-4">

              <label className="text-black" for="availability">
                Choose your Avatar:
              </label>
              <select
                className="rounded-lg w-56 h-10 border-2 ml-5 text-black p-1"
                required
                name="avatarSelection"
                id="avatarSelection"
                value={selectAvatar}
                onChange={(e) => {
                  let avatar = avatars[e.target.value].avatar
                  setSelectAvatar(avatar)
                }}
              >
                {avatars.map((avatar, index) => {
                  return (
                    <option value={index}>
                      {avatar.name}
                    </option>
                  );
                })}
              </select>

              <label
                class="block text-gray-700 text-sm pt-5s font-bold mb-2"
                for="username"
              >
                Enter Your Avatar's Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
              />
              
            </div>
            <Link to="/voiceroom/room" className='w-full flex items-center justify-center text-center bg-cyan-500 py-3 rounded  px-10 text-white hover:bg-green-dark focus:outline-none my-1' >Join Room</Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Avatar;

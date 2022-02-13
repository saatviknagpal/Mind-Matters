import Navbar from "../../components/navbar/Navbar";
import ChatroomSidebar from "./components/chatroomSidebar";
import React from "react";

export const VoiceRoom = ({ roomName, avatarName, avatarUrl }) => {
	const mystyle = {
		width: "16vw",
		marginLeft: "28vw",
		marginTop: "16vh",
	};
	return (
		<>
			<Navbar />
			<div className="voice-room">
				<div className="room-heading">
					<h1 className="xl:text-5xl text-4xl text-center text-gray-800 font-bold pb-6 sm:w-4/6 w-5/6 mx-auto my-4">
						Chill Room
					</h1>
				</div>
				<div className="room-body flex h-screen">
					<ChatroomSidebar />
					<div className="audio-panel bg-black w-full h-100">
						<img
							src="https://cdn-icons-png.flaticon.com/512/2284/2284788.png"
							alt=""
							style={mystyle}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

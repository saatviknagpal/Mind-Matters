import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";

function Index() {
	const { id } = useParams();
	const [professional, setProfessional] = useState({});
	const [slots, setSlots] = useState([]);
	const [selectSlot, setSelectSlot] = useState(0);

	const [showSuccess, setShowSuccess] = useState(false);

	useEffect(async () => {
		await fetch(`/book-session/professionals/${id}`)
			.then((res) => res.json())
			.then((data) => setProfessional(data));
	}, []);

	useEffect(async () => {
		await fetch(`/book-session/slots`)
			.then((res) => res.json())
			.then((data) => setSlots(data));
	}, []);

	const bookSlot = async () => {
		let token = JSON.parse(localStorage.jwt);
		console.log(token);
		setShowSuccess(true);
		await fetch("/book-session/book-slot/", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				slot: selectSlot,
				professional: id,
			}),
		});
	};
	// console.log(id);
	// console.log(selectSlot);

	return (
		<>
			<Navbar />
			<div className="container max-w-7xl mx-auto flex flex-col p-5 relative">
				<div className="flex justify-start items-center px-10 py-5">
					<img
						className="w-48 h-48 mr-20 border-white border-4 rounded-full"
						src={professional.image_url}
					/>
					<div className="text-xl flex flex-col gap-2 ">
						<div>
							<span className="text-orange-600">Name:</span> {professional.name}
						</div>
						<div>
							<span className="text-orange-600">Qualification:</span>{" "}
							{professional.degree}
						</div>
						<div>
							<span className="text-orange-600">Years of Experience:</span>{" "}
							{professional.experience}
						</div>
						<div>
							<span className="text-orange-600">Contact:</span>{" "}
							{professional.contact}
						</div>
						<div>
							<span className="text-orange-600">Email:</span>{" "}
							{professional.email}
						</div>
					</div>
					<div className="ml-auto text-2xl bg-orange-200 p-5 rounded-2xl">
						Session Fees: {professional.session_fees} / hr
					</div>
				</div>
				<div className="text-lg">
					<span className="text-orange-600 text-xl">About:</span>{" "}
					{professional.about}
				</div>
			</div>
			<div className="px-10 bg-orange-100 w-screen">
				<div className="max-w-7xl mx-auto text-2xl py-5">Slots Available:</div>
				<div className="max-w-7xl mx-auto text-xl flex items-center flex-wrap gap-5">
					{slots.map((slot, id) => {
						return (
							<div className="bg-green-300 text-black py-2 px-5 rounded-lg">
								{slot.start_time} - {slot.end_time}
							</div>
						);
					})}
				</div>
				<div className="max-w-7xl mx-auto text-md pt-6 opacity-50">
					*Select available slot and click on BOOK SLOT
				</div>
			</div>
			<div className="max-w-7xl mx-auto gap-5 flex items-center text-xl p-5 text-white">
				<label className="text-black" for="availability">
					Choose your slot:
				</label>
				<select
					className="rounded-lg w-56 h-10 text-black p-1"
					required
					name="availability"
					id="availability"
					value={selectSlot}
					onChange={(e) => setSelectSlot(e.target.value)}
				>
					{slots.map((slot, id) => {
						return (
							<option value={id}>
								{slot.start_time} - {slot.end_time}
							</option>
						);
					})}
				</select>
				<div
					className="w-max py-2 px-5 text-white bg-green-600 rounded-lg cursor-pointer"
					onClick={bookSlot}
				>
					Book Slot
				</div>

			</div>
			<div className={(showSuccess ? " visible ": " hidden ") + " bg-green-500 text-white w-1/2 px-28 text-center py-16 text-2xl rounded-xl absolute top-96 left-96"}>
				Your Slot has been Successfully booked.
			</div>
		</>
	);
}

export default Index;

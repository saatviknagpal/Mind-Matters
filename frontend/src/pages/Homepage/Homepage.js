import art from "../../assets/art.jpg";
import IssueCards from "../../components/IssueCards/Issuecards";
import { FaWineGlassAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

function Homepage() {
	let arr = [
		{
			src: <FaWineGlassAlt size={36} />,
			title: "Addiction",
			desc: "Drugs, alcohol, food, porn are just a few of the things that can light up your reward system and make you crave more.  The line between use and a use disorder can be thin and wobbly. Learn the symptoms to watch for—and how to get help if you need it.",
		},
		{
			src: <FaWineGlassAlt size={36} />,
			title: "Addiction",
			desc: "Drugs, alcohol, food, porn are just a few of the things that can light up your reward system and make you crave more.  The line between use and a use disorder can be thin and wobbly.",
		},
		{
			src: <FaWineGlassAlt size={36} />,
			title: "Addiction",
			desc: "Drugs, alcohol, food, porn are just a few of the things that can light up your reward system and make you crave more.  The line between use and a use disorder can be thin and wobbly. Learn the symptoms to watch for—and how to get help if you need it.",
		},
		{
			src: <FaWineGlassAlt size={36} />,
			title: "Addiction",
			desc: "Drugs, alcohol, food, porn are just a few of the things that can light up your reward system and make you crave more.  The line between use and a use disorder can be thin and wobbly. Learn the symptoms to watch for—and how to get help if you need it.",
		},
		{
			src: <FaWineGlassAlt size={36} />,
			title: "Addiction",
			desc: "Drugs, alcohol, food, porn are just a few of the things that can light up your reward system and make you crave more.  The line between use and a use disorder can be thin and wobbly. Learn the symptoms to watch for—and how to get help if you need it.",
		},
		{
			src: <FaWineGlassAlt size={36} />,
			title: "Addiction",
			desc: "Drugs, alcohol, food, porn are just a few of the things that can light up your reward system and make you crave more.  The line between use and a use disorder can be thin and wobbly. Learn the symptoms to watch for—and how to get help if you need it.",
		},
	];
	return (
		<>
			<Navbar />
			<div className="bg-[#E8E2E4] font-Montserrat w-full h-full">
				<div className="grid grid-cols-3">
					<div className="bg-[#E8E2E4] w-full h-screen flex justify-center flex-col items-center">
						<div>
							<h1 className="font-extrabold text-6xl p-5 text-center">
								Psych Health
							</h1>
							<p className="text-2xl font-semibold mb-5 italic px-14">
								Curing mental health through psychological support.
							</p>
							<div className="ml-12">
								<button className="text-white bg-cyan-500 text-xl px-10 py-4 font-semibold shadow-md rounded-md hover:shadow-xl active:scale-90 transition duration-150">
									Book an Appointment
								</button>
							</div>
						</div>
					</div>
					<div className="bg-cover w-full h-screen col-span-2">
						<img src={art} alt="" className="w-screen h-screen" />
					</div>
				</div>
				<div className="my-20">
					<h1 className="font-extrabold text-5xl p-5 text-center mb-10">
						Common Mental Health Issues
					</h1>
					<div className="grid grid-cols-3 gap-3">
						{arr.map((data, idx) => (
							<IssueCards
								key={idx}
								src={data.src}
								title={data.title}
								desc={data.desc}
							></IssueCards>
						))}
					</div>
				</div>
				<h1 className="font-extrabold text-6xl p-5 text-center">
					Featured Blogs
				</h1>
				<div className="grid grid-cols-2 mt-10">
					<div className="px-20">
						<p className="text-2xl font-semibold mb-5 text-black">
							<p className="text-4xl font-extrabold mb-5 text-black">
								Why Should You Read A Blog?
							</p>
							Mental illness is real and it isn't always in a person's control.
							People who live with mental health conditions are not alone-there
							is hope. Patients, caregivers and even psychologists are using
							blogs and other social media to boost understanding, share
							resources, fight stigma and help each other - and themselves.
						</p>
						<Link to="/blogs">
							<button className="text-white bg-cyan-500 text-xl px-10 py-4 font-semibold shadow-md rounded-md hover:shadow-xl active:scale-90 transition duration-150">
								Checkout Articles
							</button>
						</Link>
					</div>
					<div>
						<img
							src="https://blogs.missouristate.edu/art/files/2020/01/Health-Blog-2.jpg"
							className="w-5/5 h-5/5 px-20"
							alt=""
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Homepage;

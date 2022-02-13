import art from "../../assets/art.jpg";
import IssueCards from "../../components/IssueCards/Issuecards";
import { FaBrain, FaCloud, FaWineGlassAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { FiSettings } from "react-icons/fi";
import { BsCommand } from "react-icons/bs";
import { RiWechatLine } from "react-icons/ri";

function Homepage() {
  let arr = [
    {
      src: <FaWineGlassAlt size={36} />,
      title: "Addiction",
      desc: "The word “addiction” is often used to refer to any behaviour that is out of control in some way. People often describe themselves as being addicted to, for example, a TV show or shopping. Addiction changes the brain in fundamental ways, disturbing a person’s normal hierarchy of needs and desires, and substituting new priorities connected with procuring and using drugs",
    },
    {
      src: <FaCloud size={36} />,
      title: "Depression",
      desc: "Imagine depression as a weather forecast for your mood. There’s a 100% chance of clouds and showers on Monday. Tuesday, too. Wednesday looks just as grim. Actually, the next two weeks show nothing but storms. You’re stuck in this crappy weather pattern and there seems to be no relief in sight. You might feel alone, but you have lots of company. Depression—or major depressive disorder (MDD), the term for clinical depression—is one of the most common mental health conditions, affecting an estimated 350 million people in all age groups.",
    },
    {
      src: <FaBrain size={36} />,
      title: "Autism",
      desc: "Autism is one of the most mysterious and confusing disorders facing families and clinicians today and unfortunately the prevalence is growing at an alarming rate. Although diagnostic criteria are established in the Diagnostic and Statistical Manual of Mental Disorders (DSM),1 the handbook used by health care professionals in the United States to assist in the diagnosis of mental disorders, diagnosing autism is often a complicated process.",
    },
    {
      src: <FiSettings size={36} />,
      title: "ADHD",
      desc: "Attention deficit hyperactivity disorder (ADHD) is a neurodevelopmental condition affecting both children and adults (yup, it’s not just a kid problem). 1 In fact, about 8 million adults in the US are living with the condition, and according to data compiled by the CDC, the estimated number of children diagnosed with ADHD is 6.1 million.",
    },
    {
      src: <BsCommand size={36} />,
      title: "Anxiety",
      desc: "Feeling a little nervous or worried now and then is totally normal. It’s like a warning light signaling that something might go wrong. But, when that light gets stuck on or flashes for no reason, like it does if you have an anxiety disorder, that’s not helpful.",
    },
    {
      src: <RiWechatLine size={36} />,
      title: "Schizophrenia",
      desc: "In the world of brain disorders, schizophrenia is one of, if not, the most complex. It affects about 2.4 million Americans. While the symptoms vary from person to person, relapses are sadly very common for everyone.",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="bg-[#E8E2E4] font-Montserrat w-full h-full">
        <div className="relative">
          <img src={art} className="h-screen w-screen" />
          <div className="absolute top-0 bottom-0 left-0 w-1/2 flex flex-col gap-10 py-20 px-10">
            <div className="text-3xl text-red-6700 font-semibold">Psych Health</div>
            <div className="text-4xl font-semibold text-black tracking-wide leading-normal">Curing mental health through psychological support.</div>
            <div className="flex flex-col text-2xl gap-4 font-medium">
              <div className="flex items-center"><div className="w-4 h-4 mr-4 rounded-full bg-red-700"></div>Socialize with random people</div>
              <div className="flex items-center"><div className="w-4 h-4 mr-4 rounded-full bg-red-700"></div>Read blogs about Good health</div>
              <div className="flex items-center"><div className="w-4 h-4 mr-4 rounded-full bg-red-700"></div>Consult with professionals</div>
              <div className="flex items-center"><div className="w-4 h-4 mr-4 rounded-full bg-red-700"></div>Chill out with interesting jokes</div>
            </div>
            <Link className="text-white w-max py-3 px-5 text-xl tracking-wider bg-red-700 font-semibold hover:shadow-xl active:scale-90 transition duration-150 rounded-lg mt-5" to="/appointment">Book Appointment</Link>
          </div>
        </div>
        <div className="my-10 p-10">
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
            <p className="text-2xl text-black font-semibold mb-5">
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
              className="w-5/5 h-5/5 px-20 mb-10"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;

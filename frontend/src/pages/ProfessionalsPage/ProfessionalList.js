import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import ListContainer from "./components/listContainer";

function ProfessionalList() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    await fetch("/book-sessions/professionals/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="font-Montserrat">
        <div className="container flex justify-center mx-auto pt-16">
          <div>
            <h1 className="xl:text-5xl text-4xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
              List of Professionals
            </h1>
          </div>
        </div>
      </div>
      {data.map((data, id) => {
        return <ListContainer list={data} key={id} />;
      })}
    </>
  );
}

export default ProfessionalList;

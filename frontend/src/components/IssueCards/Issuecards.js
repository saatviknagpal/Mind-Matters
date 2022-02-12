function IssueCards({ src, title, desc }) {
  return (
    <div className="shadow-lg text-lg font-bold text-center p-10 rounded-lg">
      <div className="flex justify-center p-3">
      <div className="mx-3">{src}</div>
      <h1 className="text-3xl">{title}</h1>
      </div>
      
      <div className="container">
        <div className="Description">{desc}</div>
      </div>
    </div>
  );
}

export default IssueCards;

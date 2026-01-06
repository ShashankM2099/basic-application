//using props to pass parameters
export default function CardStyle(props) {
  return (
    <>
      <div className="card">
        <h2>{props.name}</h2>
        <p className="card-title">{props.title}</p>
        <p>{props.bio}</p>
      </div>
    </>
  );
}

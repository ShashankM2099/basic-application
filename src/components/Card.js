export function Card(props) {
  return (
    <div className="card">
      <h2>Name:{props.name}</h2>
      <p className="card-title">Title:{props.title}</p>
      <p>{props.bio}</p>
    </div>
  );
}

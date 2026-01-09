//using props to pass parameters
import { Card } from "./Card";
export default function CardStyle() {
  const profileInfo = [
    {
      id: 1,
      name: "Shashank",
      title: "SF Dev",
      bio: "Bio Bio Bio",
    },
    {
      id: 2,
      name: "Sudhamsh",
      title: "Data Scientist",
      bio: "Bio Bio Bio",
    },
    {
      id: 3,
      name: "Verso",
      title: "Expedition 0",
      bio: "Immortal of the long lost expeditioner zero and son of Renoir",
    },
  ];
  return (
    <>
      <div className="flex-container">
        {profileInfo.map((profile) => (
          <Card
            key={profile.id}
            name={profile.name}
            title={profile.title}
            bio={profile.bio}
          />
        ))}
      </div>
    </>
  );
}

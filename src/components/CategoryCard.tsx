interface CategoryCardProps {
  icon: string;
  name: string;
}

export default function CategoryCard({ icon, name }: CategoryCardProps) {
  return (
    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer flex flex-col items-center">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold">{name}</h3>
    </div>
  );
}


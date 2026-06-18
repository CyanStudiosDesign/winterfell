interface TimelineItemProps {
  title: string;
  date: string;
  description: string;
}

export default function TimelineItem({
  title,
  date,
  description,
}: TimelineItemProps) {
  return (
    <div className="flex gap-4">
     
      <div className="flex flex-col items-center">
        <div className="h-4 w-4 rounded-full bg-black" />
        <div className="w-px flex-1 bg-gray-300" />
      </div>

     
      <div className="pb-8">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{date}</p>
        <p className="mt-2 text-gray-700">{description}</p>
      </div>
    </div>
  );
}
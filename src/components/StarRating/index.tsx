import { FaStar } from "react-icons/fa";

export function Index({ assessment }: { assessment: number }) {
  // Cria um array de elementos <FaStar /> com base no valor de assessment
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FaStar key={index} className={index < assessment ? "text-yellow-500" : "text-gray-300"} />
  ));

  return (
    <div className="flex items-center gap-2">
        {stars}
    </div>
  );
}


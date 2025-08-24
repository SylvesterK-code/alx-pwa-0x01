// import React from "react";

// const MovieCard: React.FC = () => {
//   return (
//     <div className="border rounded-lg shadow p-4">
//       <h3 className="text-lg font-bold">Movie Title</h3>
//       <p className="text-sm text-gray-600">Movie details here</p>
//     </div>
//   );
// };

// export default MovieCard;






import { MovieProps } from "@/interfaces"
import Image from "next/image"

const MovieCard: React.FC<MovieProps> = ({ title, posterImage, releaseYear }) => {
  return (
    <div className="h-[563px]">
      <div>
        <Image
          className="h-[430px] w-full rounded-md hover:cursor-pointer"
          src={posterImage}
          width={100}
          height={100}
          alt={title}
        />
      </div>
      <div className="flex justify-between py-4">
        <p className="text-xl font-bold">{title}</p>
        <p className="text-xl text-[#E2D609]">{releaseYear}</p>
      </div>
    </div>
  )
}

export default MovieCard

export default function MainList({ list }) {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-6 p-6 bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-200/40">
      {list.map((item, index) => {
        if (!item.imageUrl) return null;
        return (
          <div
            key={index}
            className="mb-6 relative break-inside-avoid rounded-2xl overflow-hidden shadow-lg bg-white/90 border border-purple-200/30"
          >
            <img
              className="block w-full h-auto object-cover rounded-2xl"
              src={item.imageUrl}
              alt={item.title || `Photo ${index + 1}`}
            />
            {/* Gradient overlay góc trên */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-400/30 via-blue-400/20 to-transparent rounded-bl-2xl z-10"></div>
            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 flex flex-col items-start z-20">
              <span className="text-lg font-bold text-white drop-shadow mb-1">
                {item.title || `Ảnh ${index + 1}`}
              </span>
              <div className="w-10 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

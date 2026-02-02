import { motion } from "framer-motion";

export interface Song {
  id: string | number;
  title: string;
  artist: string;
  cover: string;
}

interface SongPreviewProps {
  song: Song;
  setSelectedSong: (song: Song) => void;
}

export const SongPreview = ({ song, setSelectedSong }: SongPreviewProps) => {
  const handleClick = () => {
    setSelectedSong(song);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      layoutId={`song-background-${song.id}`}
      style={{ borderRadius: 12 }}
      className="grid cursor-pointer grid-cols-1 grid-rows-2 items-center gap-x-3 bg-white p-4 text-black md:grid-cols-[auto_1fr]"
      onClick={handleClick}
    >
      <motion.img
        src={song.cover}
        alt={song.title}
        style={{ borderRadius: 12 }}
        layoutId={`song-image-${song.id}`}
        className="row-span-2 h-8 w-8 md:h-12 md:w-12 object-cover"
      />

      <motion.div
        layoutId={`song-title-${song.id}`}
        className="text-lg font-bold leading-snug truncate"
      >
        <motion.span className="block" layout>{song.title}</motion.span>
      </motion.div>
      <motion.div
        layoutId={`song-artist-${song.id}`}
        className="text-sm leading-snug text-gray-600 truncate"
      >
        <motion.span className="block" layout>{song.artist}</motion.span>
      </motion.div>
    </motion.div>
  );
};

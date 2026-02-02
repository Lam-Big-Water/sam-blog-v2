"use client"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { DetailView } from "./DetailView";
import { SongPreview, Song } from "./SongPreview";
import { songs } from "./songs";

export const App = () => {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <AnimatePresence>
        <div className="relative mx-auto aspect-[9/16] w-full max-w-[400px] rounded-3xl border border-white/10 bg-white/10 text-white p-2 sm:p-4 overflow-clip">
          <div className="mb-6 flex aspect-video flex-col items-start rounded-2xl bg-white/10 p-4 text-2xl font-bold md:p-8">
            <p>Trending music</p>
            <a className="mt-auto rounded-full bg-white/10 p-2 text-md font-normal">
              Explore now ▸
            </a>
          </div>
          <p className="mb-3 text-xl font-bold">Your favorites</p>
          <div className="grid grid-cols-1 gap-4">
            {songs.map((song) => (
              <SongPreview key={song.id} song={song} setSelectedSong={setSelectedSong} />
            ))}
          </div>
          <AnimatePresence>
            {selectedSong && (
              <DetailView
                onClose={() => setSelectedSong(null)}
                song={selectedSong}
              />
            )}
          </AnimatePresence>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default App;
"use client";

import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import {
  PlayArrow,
  Pause,
  VolumeUp,
  VolumeOff,
  Fullscreen,
  Speed,
  ClosedCaption,
} from "@mui/icons-material";
import { topSeries } from "@/lib/Json";

// Define interfaces for type safety
interface Subtitle {
  lang: string;
  label: string;
  src: string;
}

interface EpisodeContent {
  url: string;
  subtitles: Subtitle[];
}

interface Series {
  title: string;
  year: number;
  description: string;
  latestUpdate: string;
  image: string;
  genre: string;
}

export default function OnlineView() {
  const [selectedSeries, setSelectedSeries] = useState<Series>(topSeries[0]);
  const [selectedEpisode, setSelectedEpisode] = useState<number>(1);
  const [playing, setPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.8);
  const [muted, setMuted] = useState<boolean>(false);
  const [played, setPlayed] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [subtitleLang, setSubtitleLang] = useState<string>("off");
  const playerRef = useRef<ReactPlayer>(null);

  // Episode content with type definition
  const episodeContent: Record<number, EpisodeContent> = {
    1: {
      url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
      subtitles: [
        { lang: "fa", label: "فارسی", src: "/subtitles/ep1-fa.vtt" },
        { lang: "en", label: "English", src: "/subtitles/ep1-en.vtt" },
      ],
    },
    2: {
      url: "https://www.youtube.com/watch?v=SzQSTdWujrY",
      subtitles: [
        { lang: "fa", label: "فارسی", src: "/subtitles/ep2-fa.vtt" },
        { lang: "en", label: "English", src: "/subtitles/ep2-en.vtt" },
      ],
    },
    3: {
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      subtitles: [
        { lang: "fa", label: "فارسی", src: "/subtitles/ep3-fa.vtt" },
        { lang: "en", label: "English", src: "/subtitles/ep3-en.vtt" },
      ],
    },
    4: {
      url: "https://www.youtube.com/watch?v=3tmd-Claq34",
      subtitles: [
        { lang: "fa", label: "فارسی", src: "/subtitles/ep4-fa.vtt" },
        { lang: "en", label: "English", src: "/subtitles/ep4-en.vtt" },
      ],
    },
    5: {
      url: "https://www.youtube.com/watch?v=9bZkp7q19f0",
      subtitles: [
        { lang: "fa", label: "فارسی", src: "/subtitles/ep5-fa.vtt" },
        { lang: "en", label: "English", src: "/subtitles/ep5-en.vtt" },
      ],
    },
    6: {
      url: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
      subtitles: [
        { lang: "fa", label: "فارسی", src: "/subtitles/ep6-fa.vtt" },
        { lang: "en", label: "English", src: "/subtitles/ep6-en.vtt" },
      ],
    },
    7: {
      url: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
      subtitles: [
        { lang: "fa", label: "فارسی", src: "/subtitles/ep7-fa.vtt" },
        { lang: "en", label: "English", src: "/subtitles/ep7-en.vtt" },
      ],
    },
    8: {
      url: "https://www.youtube.com/watch?v=pRpeEdMmmQ0",
      subtitles: [
        { lang: "fa", label: "فارسی", src: "/subtitles/ep8-fa.vtt" },
        { lang: "en", label: "English", src: "/subtitles/ep8-en.vtt" },
      ],
    },
    9: {
      url: "https://www.youtube.com/watch?v=ZZ5LpwO-An4",
      subtitles: [
        { lang: "fa", label: "فارسی", src: "/subtitles/ep9-fa.vtt" },
        { lang: "en", label: "English", src: "/subtitles/ep9-en.vtt" },
      ],
    },
    10: {
      url: "https://www.youtube.com/watch?v=6Dh-4jnOdpY",
      subtitles: [
        { lang: "fa", label: "فارسی", src: "/subtitles/ep10-fa.vtt" },
        { lang: "en", label: "English", src: "/subtitles/ep10-en.vtt" },
      ],
    },
  };

  const handleSeriesChange = (series: Series): void => {
    setSelectedSeries(series);
    setSelectedEpisode(1);
    setPlaying(false);
    setPlayed(0);
    setSubtitleLang("off");
  };

  const handleEpisodeChange = (episode: number): void => {
    setSelectedEpisode(episode);
    setPlaying(true);
    setPlayed(0);
    setSubtitleLang("off");
    if (playerRef.current) playerRef.current.seekTo(0);
  };

  const handlePlayPause = (): void => setPlaying(!playing);
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setVolume(parseFloat(e.target.value));
  const handleToggleMute = (): void => setMuted(!muted);
  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newPlayed = parseFloat(e.target.value);
    setPlayed(newPlayed);
    if (playerRef.current) playerRef.current.seekTo(newPlayed);
  };
  const handleProgress = (state: { played: number }): void =>
    setPlayed(state.played);
  const handleDuration = (duration: number): void => setDuration(duration);
  const handlePlaybackRateChange = (rate: number): void =>
    setPlaybackRate(rate);
  const toggleFullscreen = (): void => setIsFullscreen(!isFullscreen);
  const handleSubtitleChange = (lang: string): void => setSubtitleLang(lang);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const activeSubtitles =
    subtitleLang === "off"
      ? []
      : episodeContent[selectedEpisode].subtitles
          .filter((sub) => sub.lang === subtitleLang)
          .map((sub) => ({
            kind: "subtitles" as const,
            src: sub.src,
            srcLang: sub.lang,
            label: sub.label,
            default: true,
          }));

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-teal-950 h-auto text-white flex flex-col">
      <div className="relative w-full max-w-5xl mx-auto mt-8 px-4">
        <div
          className={`bg-gray-800 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 ${
            isFullscreen ? "fixed inset-0 z-50" : "h-[40vh] lg:h-[60vh] 2xl:h-[40vh]"
          }`}
        >
          <ReactPlayer
            ref={playerRef}
            url={episodeContent[selectedEpisode].url}
            width="100%"
            height="100%"
            playing={playing}
            volume={volume}
            muted={muted}
            playbackRate={playbackRate}
            onProgress={handleProgress}
            onDuration={handleDuration}
            config={{
              file: {
                attributes: { crossOrigin: "anonymous" },
                tracks: activeSubtitles,
              },
              youtube: { playerVars: { controls: 0 } },
            }}
          />

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <button
                onClick={handlePlayPause}
                className="text-white hover:text-teal-300"
              >
                {playing ? <Pause /> : <PlayArrow />}
              </button>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleToggleMute}
                  className="text-white hover:text-teal-300"
                >
                  {muted || volume === 0 ? <VolumeOff /> : <VolumeUp />}
                </button>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-20 accent-teal-500"
                />
              </div>
              <button
                onClick={toggleFullscreen}
                className="text-white hover:text-teal-300"
              >
                <Fullscreen />
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm">{formatTime(played * duration)}</span>
              <input
                type="range"
                min={0}
                max={1}
                step="0.01"
                value={played}
                onChange={handleSeekChange}
                className="w-full accent-teal-500"
              />
              <span className="text-sm">{formatTime(duration)}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Speed className="text-teal-300" fontSize="small" />
                <select
                  value={playbackRate}
                  onChange={(e) =>
                    handlePlaybackRateChange(parseFloat(e.target.value))
                  }
                  className="bg-gray-700 text-white rounded p-1"
                >
                  {[0.5, 1.0, 1.5, 2.0].map((rate) => (
                    <option key={rate} value={rate}>
                      {rate}x
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <ClosedCaption className="text-teal-300" fontSize="small" />
                <select
                  value={subtitleLang}
                  onChange={(e) => handleSubtitleChange(e.target.value)}
                  className="bg-gray-700 text-white rounded p-1"
                >
                  <option value="off">بدون زیرنویس</option>
                  {episodeContent[selectedEpisode].subtitles.map((sub) => (
                    <option key={sub.lang} value={sub.lang}>
                      {sub.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex items-center space-x-3 mb-6 animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-red-500">
            {selectedSeries.title}
          </h1>
          <span className="text-sm text-gray-400">({selectedSeries.year})</span>
        </div>
        <p className="text-gray-200 text-sm md:text-base mb-6 font-light tracking-wide">
          {selectedSeries.description}
        </p>
        <p className="text-teal-300 text-sm mb-8">
          آخرین به‌روزرسانی: {selectedSeries.latestUpdate}
        </p>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold text-teal-200 mb-4">
            انتخاب قسمت
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-4">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((episode) => (
              <button
                key={episode}
                onClick={() => handleEpisodeChange(episode)}
                className={`p-3 rounded-lg text-center transition-all duration-300 ${
                  selectedEpisode === episode
                    ? "bg-gradient-to-r from-red-500 to-teal-600"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
              >
                قسمت {episode}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-semibold text-teal-200 mb-4">
            سریال‌های پیشنهادی
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {topSeries.slice(0, 4).map((series) => (
              <div
                key={series.title}
                onClick={() => handleSeriesChange(series)}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={series.image}
                  alt={series.title}
                  className="w-full h-40 object-cover rounded-lg mb-2"
                />
                <h3 className="text-sm font-semibold text-teal-200">
                  {series.title}
                </h3>
                <p className="text-xs text-gray-400">{series.genre}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}

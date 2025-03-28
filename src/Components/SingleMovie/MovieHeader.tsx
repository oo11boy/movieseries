"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  PlayArrow,
  Preview,
  Star,
  ThumbUp,
  ThumbDown,
  Comment,
  Close,
} from "@mui/icons-material";
import { DownloadOption, MovieInfo } from "@/lib/types";
import { Modal, Box, IconButton } from "@mui/material";
import { DownloadSection } from "./DownloadSection";

export default function MovieHeader({
  movieinfo,
  downloadOptions,
}: {
  movieinfo: MovieInfo;
  downloadOptions: DownloadOption[];
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="relative flex flex-col-reverse lg:flex-row justify-between items-center">
      {/* بخش اطلاعات فیلم (بدون تغییر) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="w-full mx-auto flex items-center gap-6">
          <img
            src={movieinfo.img}
            width={150}
            height={200}
            alt={movieinfo.title.persian}
            className="rounded-lg shadow-lg lg:block hidden"
          />
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-teal-300 mb-2">
              {movieinfo.title.persian}
            </h1>
            <h2 className="text-md md:text-lg text-gray-400 mb-4">
              {movieinfo.title.english}
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
              <span>{movieinfo.year}</span>
              <span>{movieinfo.duration}</span>
              <span>{movieinfo.countries.join(", ")}</span>
            </div>
            <div className="flex gap-2 mb-6">
              {movieinfo.genres.map((genre, index) => (
                <span
                  key={index}
                  className="bg-[#1D1D1D] text-white px-3 py-1 rounded-full text-sm hover:bg-teal-600 transition-colors"
                >
                  {genre}
                </span>
              ))}
            </div>
            <div className="flex gap-4 text-sm sm:text-lg">
              <button
                onClick={handleOpen}
                className="bg-red-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-red-700 transition-colors"
              >
                <PlayArrow />
                دانلود
              </button>
              <button className="border border-red-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-red-600 transition-colors">
                <Preview />
                پیش‌نمایش
              </button>
            </div>
            <div className="mt-4 hidden sm:flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="items-center w-full m-auto flex z-50 gap-6">
                <Link
                  href={movieinfo.imdb.link}
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <span className="text-yellow-400 font-bold text-lg">
                    {movieinfo.imdb.rating}
                  </span>
                  <Star className="text-yellow-400" />
                </Link>
                <div className="flex">
                  <div>
                    <button className="text-gray-400 mx-2 hover:text-teal-300 transition-colors">
                      <ThumbUp fontSize="small" />
                    </button>
                    <button className="text-gray-400 mx-2 hover:text-teal-300 transition-colors">
                      <ThumbDown fontSize="small" />
                    </button>
                  </div>
                  <div className="flex flex-row gap-2 mr-3 items-center">
                    <span className="text-sm text-gray-400">
                      <Comment />
                    </span>
                    <span className="text-lg font-bold iransans text-teal-300">
                      {movieinfo.user_rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative">
        <img
          src={movieinfo.bgimg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent md:bg-gradient-to-l md:from-black md:via-black/5 md:to-transparent"></div>
      </div>

      {/* مودال با آیکون زیبا و اسکرول */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="download-modal-title"
        sx={{
          "& .MuiBackdrop-root": {
            backgroundColor: "#444444",
            backdropFilter: "blur(5px)",
            transition: "all 0.4s ease",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: { xs: "5%", sm: "50%" },
            left: { xs: "5%", sm: "50%" },
            transform: { xs: "none", sm: "translate(-50%, -50%)" },
            width: { xs: "90%", sm: "80%", md: "60%" },
            maxHeight: { xs: "90vh", sm: "85vh" },
            bgcolor: "rgba(10, 10, 10, 0.95)",
            borderRadius: "20px",
            boxShadow: "0 15px 60px rgba(0, 0, 0, 0.7)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            animation: open
              ? "modalFadeIn 0.4s ease-out"
              : "modalFadeOut 0.4s ease-in",
          }}
        >
          <style jsx global>{`
            @keyframes modalFadeIn {
              from {
                opacity: 0;
                transform: translateY(50px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @keyframes modalFadeOut {
              from {
                opacity: 1;
                transform: translateY(0);
              }
              to {
                opacity: 0;
                transform: translateY(50px);
              }
            }
            @media (min-width: 600px) {
              @keyframes modalFadeIn {
                from {
                  opacity: 0;
                  transform: translate(-50%, -50%) scale(0.95);
                }
                to {
                  opacity: 1;
                  transform: translate(-50%, -50%) scale(1);
                }
              }
              @keyframes modalFadeOut {
                from {
                  opacity: 1;
                  transform: translate(-50%, -50%) scale(1);
                }
                to {
                  opacity: 0;
                  transform: translate(-50%, -50%) scale(0.95);
                }
              }
            }
          `}</style>

          {/* دکمه بستن با آیکون زیبا */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: "15px",
              right: "15px",
              color: "white",
              bgcolor: "rgba(239, 68, 68, 0.9)",
              borderRadius: "50%",

              width: 40,
              height: 40,
              boxShadow: "0 5px 15px rgba(239, 68, 68, 0.5)",
              "&:hover": {
                bgcolor: "#f87171",
                transform: "rotate(90deg)", // چرخش آیکون هنگام هاور
              },
              transition: "all 0.3s ease",
              zIndex: 99,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width={24}
              height={24}
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </IconButton>

          <DownloadSection downloadOptions={downloadOptions} />
        </Box>
      </Modal>
    </div>
  );
}

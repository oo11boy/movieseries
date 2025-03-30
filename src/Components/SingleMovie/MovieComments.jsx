"use client";
import React, { useState } from "react";
import { Comment, Send, AddComment } from "@mui/icons-material";
import { Avatar, Button, TextField, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { Comments } from "@/lib/Json";

export function MovieComments() {
  const [comments, setComments] = useState(Comments);
  const [newComment, setNewComment] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          username: "کاربر جدید",
          text: newComment,
          date: new Date().toLocaleDateString("fa-IR"),
        },
      ]);
      setNewComment("");
      setIsFormOpen(false);
    }
  };

  return (
    <div className="mt-12 sm:px-6 lg:px-0" style={{ backgroundColor: "#000" }}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex text-white font-bold yekan items-center space-x-2 text-md md:text-3xl">
          <Comment sx={{ fontSize: { xs: 28, sm: 32 }, color: "#fff" }} />
          <h2>نظرات کاربران</h2>
        </div>
        <div className="flex-1 mx-4 h-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-70 rounded-full animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-30 scale-95 rounded-full"></div>
        </div>
        <button
          onClick={() => setIsFormOpen(true)}
          className="group flex items-center gap-2 text-white text-sm md:text-lg font-medium bg-[#1D1D1D] px-4 py-1.5 rounded-full hover:bg-[#4a576b] transition-all duration-300 shadow-md"
        >
          <AddComment className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
          ثبت نظر
        </button>
      </div>

      {isFormOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4 animate-fadeIn"
          style={{ animation: "fadeIn 0.3s ease-in-out" }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-[#1D1D1D] p-6 rounded-xl shadow-lg border border-gray-700 w-full max-w-3xl"
          >
            <h3 className="yekan text-xl sm:text-2xl font-semibold text-white mb-5">
              نظر خود را بنویسید
            </h3>
            <TextField
              fullWidth
              multiline
              rows={4}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="نظر خود را اینجا بنویسید..."
              variant="outlined"
              className="yekan"
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#1D1D1D",
                  color: "#fff",
                  fontFamily: "yekan",
                  "& fieldset": { borderColor: "#fff" },
                  "&:hover fieldset": { borderColor: "#ccc" },
                  "&.Mui-focused fieldset": { borderColor: "#fff" },
                  borderRadius: "12px",
                },
                "& .MuiInputBase-input": {
                  fontFamily: "yekan",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                },
              }}
            />
            <div className="flex flex-col sm:flex-row items-center justify-end mt-5 gap-4">
              <div className="flex gap-4">
                <Button
                  type="submit"
                  variant="contained"
                  startIcon={<Send sx={{ ml: 1, fontSize: { xs: 20, sm: 24 } }} />}
                  className="yekan"
                  sx={{
                    bgcolor: "#fff",
                    color: "#000",
                    "&:hover": {
                      bgcolor: "#ccc",
                      boxShadow: "0 4px 12px rgba(255, 255, 255, 0.4)",
                    },
                    borderRadius: "10px",
                    px: { xs: 3, sm: 4 },
                    py: { xs: 1, sm: 1.5 },
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    fontFamily: "yekan",
                  }}
                >
                  ارسال نظر
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => setIsFormOpen(false)}
                  className="yekan"
                  sx={{
                    color: "#fff",
                    borderColor: "#fff",
                    "&:hover": {
                      borderColor: "#ccc",
                      color: "#ccc",
                    },
                    borderRadius: "10px",
                    px: { xs: 3, sm: 4 },
                    py: { xs: 1, sm: 1.5 },
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    fontFamily: "yekan",
                  }}
                >
                  لغو
                </Button>
              </div>
            </div>
          </form>
        </div>
      )}

      <div className="relative mb-10">
        <Swiper
          modules={[Navigation]}
          dir="rtl"
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-prev-custom-comment", // دکمه چپ برای بعدی
            prevEl: ".swiper-button-next-custom-comment", // دکمه راست برای قبلی
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
          }}
          className="swiper-container"
        >
          {comments.map((comment) => (
            <SwiperSlide key={comment.id}>
              <div className="bg-[#1D1D1D] p-5 rounded-xl shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] border border-gray-700 flex flex-col justify-between">
                <div className="flex items-center gap-4 mb-3">
                  <Avatar
                    sx={{
                      bgcolor: "#fff",
                      color: "#000",
                      width: { xs: 40, sm: 48 },
                      height: { xs: 40, sm: 48 },
                      fontSize: { xs: "1.25rem", sm: "1.5rem" },
                      boxShadow: "0 4px 12px rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    {comment.username[0]}
                  </Avatar>
                  <div>
                    <Typography className="yekan text-white font-semibold text-base sm:text-lg">
                      {comment.username}
                    </Typography>
                    <Typography className="yekan text-gray-300 text-xs sm:text-sm">
                      {comment.date}
                    </Typography>
                  </div>
                </div>
                <div className="text-white overflow-hidden">
                  <p className="yekan text-sm sm:text-base line-clamp-3">{comment.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev-custom-comment absolute top-1/2 left-0 transform -translate-y-1/2 z-10 text-white cursor-pointer">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="swiper-button-next-custom-comment absolute top-1/2 right-0 transform -translate-y-1/2 z-10 text-white cursor-pointer">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .swiper-button-prev-custom-comment, .swiper-button-next-custom-comment {
    color: #fff;
    transition: opacity 0.3s ease;
  }
  .swiper-button-prev-custom-comment:hover, .swiper-button-next-custom-comment:hover {
    opacity: 0.8;
  }
  .swiper-button-disabled {
    opacity: 0.3;
    cursor: not-allowed;
    display: none;
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
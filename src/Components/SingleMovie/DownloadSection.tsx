import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button } from "@mui/material";
import { ExpandMore, Download, PlayCircleOutline } from "@mui/icons-material";
import { DownloadOption } from "@/lib/types";

export function DownloadSection({ downloadOptions }: { downloadOptions: DownloadOption[] }) {
  return (
    <div className="w-full h-full flex flex-col" style={{ backgroundColor: "#000" }}>
      {/* عنوان ثابت */}
      <Typography
        className="yekan font-bold text-white text-center"
        sx={{
          fontSize: { xs: "1.75rem", sm: "2.25rem" },
          padding: "20px",
          backgroundColor: "#1D1D1D",
          borderBottom: "2px solid #fff",
          position: "sticky",
          top: 0,
          zIndex: 10,
          textShadow: "0 2px 10px rgba(255, 255, 255, 0.3)",
        }}
      >
        دانلود و تماشا
      </Typography>

      {/* محتوای قابل اسکرول */}
      <div
        className="flex-1 overflow-y-auto px-6 py-6"
        style={{
          maxHeight: "calc(90vh - 80px)",
          scrollbarWidth: "thin",
          scrollbarColor: "#fff #1D1D1D",
        }}
      >
        <style jsx global>{`
          ::-webkit-scrollbar {
            width: 10px;
          }
          ::-webkit-scrollbar-track {
            background: #1D1D1D;
            border-radius: 5px;
          }
          ::-webkit-scrollbar-thumb {
            background: #fff;
            border-radius: 5px;
            box-shadow: "inset 0 0 6px rgba(0,0,0,0.3)";
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #ccc;
          }
        `}</style>

        <div className="max-w-3xl mx-auto">
          {downloadOptions.map((option, index) => (
            <Accordion
              key={index}
              sx={{
                backgroundColor: "#1D1D1D",
                color: "#fff",
                borderRadius: "12px",
                border: "1px solid #fff",
                boxShadow: "0 5px 20px rgba(255, 255, 255, 0.1)",
                marginBottom: "20px",
                "&:before": { display: "none" },
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 25px rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: "#fff", fontSize: 28 }} />}
                sx={{
                  padding: "16px 24px",
                  "& .MuiAccordionSummary-content": {
                    alignItems: "center",
                    justifyContent: "space-between",
                  },
                }}
              >
                <Typography
                  className="yekan font-semibold text-white"
                  sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
                >
                  کیفیت {option.quality} - {option.subtitle}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "20px", backgroundColor: "#1D1D1D" }}>
                <div className="grid gap-4">
                  {option.parts.map((part) => (
                    <div
                      key={part.part}
                      className="flex flex-col sm:flex-row items-center justify-between p-4 bg-[#1D1D1D] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="mb-3 sm:mb-0 text-center sm:text-left">
                        <Typography className="yekan font-medium text-white" sx={{ fontSize: "1rem" }}>
                          قسمت {part.part}
                        </Typography>
                        <Typography className="yekan text-gray-300" sx={{ fontSize: "0.875rem" }}>
                          {part.size}
                        </Typography>
                      </div>
                      <div className="flex gap-3">
                        <Button
                          variant="contained"
                          className="yekan"
                          startIcon={<Download />}
                          href={part.downloadLink}
                          sx={{
                            backgroundColor: "#fff",
                            color: "#000",
                            padding: "8px 20px",
                            borderRadius: "10px",
                            "&:hover": {
                              backgroundColor: "#ccc",
                              transform: "scale(1.05)",
                              boxShadow: "0 5px 15px rgba(255, 255, 255, 0.5)",
                            },
                            transition: "all 0.3s ease",
                          }}
                        >
                          دانلود
                        </Button>
                        <Button
                          variant="contained"
                          className="yekan"
                          startIcon={<PlayCircleOutline />}
                          href={part.streamLink}
                          sx={{
                            backgroundColor: "#fff",
                            color: "#000",
                            padding: "8px 20px",
                            borderRadius: "10px",
                            "&:hover": {
                              backgroundColor: "#ccc",
                              transform: "scale(1.05)",
                              boxShadow: "0 5px 15px rgba(255, 255, 255, 0.5)",
                            },
                            transition: "all 0.3s ease",
                          }}
                        >
                          تماشا
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}
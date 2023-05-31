import React from "react";
import { Box, Typography, Card, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import FormatAlignLeftOutlined from "@mui/icons-material/FormatAlignLeftOutlined";
import ChatRounded from "@mui/icons-material/ChatRounded";

const Homepages = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          bgcolor: "rgba(255, 255, 255, 1)",
        }}
      >
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold" color={"Black"}>
            Text Generation
          </Typography>
          <Card
            onClick={() => navigate("/summary")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "grey",
                cursor: "pointer",
              },
            }}
          >
            <DescriptionRounded
              sx={{ fontSize: 80, color: "grey", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" varaint="h5">
                TEXT SUMMARY
              </Typography>
              <Typography varaint="h7">
                Summarize long text into short sentences
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold" color={"black"}>
            Paragraph Generation
          </Typography>
          <Card
            onClick={() => navigate("/paragraph")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "grey",
                cursor: "pointer",
              },
            }}
          >
            <FormatAlignLeftOutlined
              sx={{ fontSize: 80, color: "grey", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" varaint="h5">
                Paragraph
              </Typography>
              <Typography varaint="h7">
                Generate Paragraph with words
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold" color={"black"}>
            AI ChatBot
          </Typography>
          <Card
            onClick={() => navigate("/chatbot")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "grey",
                cursor: "pointer",
              },
            }}
          >
            <ChatRounded sx={{ fontSize: 80, color: "grey", mt: 2, ml: 2 }} />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Chatbot
              </Typography>
              <Typography variant="h6">Chat With AI Chatbot</Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold" color={"black"}>
            Javascript Converter
          </Typography>
          <Card
            onClick={() => navigate("/js-converter")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "grey",
                cursor: "pointer",
              },
            }}
          >
            <ChatRounded sx={{ fontSize: 80, color: "grey", mt: 2, ml: 2 }} />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                JS CONVERTER
              </Typography>
              <Typography variant="h6">
                Trasnlate english to javascript code
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold" color={"black"}>
            AI SCIFI Images
          </Typography>
          <Card
            onClick={() => navigate("/scifi-image")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "grey",
                cursor: "pointer",
              },
            }}
          >
            <ChatRounded sx={{ fontSize: 80, color: "grey", mt: 2, ml: 2 }} />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Scifi Image
              </Typography>
              <Typography variant="h6">Generate Scifi images</Typography>
            </Stack>
          </Card>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "rgba(255, 255, 255, 1)",
        }}
      >
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold" color={"black"}>
            Text-To-Command
          </Typography>
          <Card
            onClick={() => navigate("/text-to-command")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "grey",
                cursor: "pointer",
              },
            }}
          >
            <ChatRounded sx={{ fontSize: 80, color: "grey", mt: 2, ml: 2 }} />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Text-To-Command
              </Typography>
              <Typography variant="h6">Translate Text to Command</Typography>
            </Stack>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Homepages;

import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
// import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

function Resume() {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      <TimelineItem>
        {/* <h1>Experience :</h1> */}
        <TimelineOppositeContent style={{ color: "#deeb62" }}>
          May, 2024 - July, 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          {/* <TimelineConnector /> */}
        </TimelineSeparator>
        <TimelineContent style={{ fontFamily: "sans-serif" }}>
          Xebia Data & Ai Intern
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
export default Resume;

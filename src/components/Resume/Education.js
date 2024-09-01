import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

function Education() {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
          paddingRight: "10px",
        },
        [`& .MuiTimelineContent-root`]: {
          paddingLeft: "10px",
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent style={{ color: "#deeb62", maxWidth: "100%" }}>
          July, 2022 - July, 2026
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{ fontFamily: "sans-serif", maxWidth: "100%" }}>
          DCRUST B-Tech Computer Science Engineer
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={{ color: "#deeb62", maxWidth: "100%" }}>
          April, 2019 - March, 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{ fontFamily: "sans-serif" }}>
          Senior Secondary
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent style={{ color: "#deeb62", maxWidth: "100%" }}>
          April, 2017 - March, 2018
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent style={{ fontFamily: "sans-serif" }}>
          Secondary
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default Education;

// import icon svg files
import { ReactComponent as CalendarSVG } from "../assets/images/calendar.svg";
import { ReactComponent as FeedSVG } from "../assets/images/feed.svg";
import { ReactComponent as QnASVG } from "../assets/images/qna.svg";
import { ReactComponent as EditSVG } from "../assets/images/edit.svg";
import { ReactComponent as PersonEditSVG } from "../assets/images/personEdit.svg";

export const CalendarIcon = ({ width = "24px", height = "24px", color = "#000" }) => {
  return <CalendarSVG width={width} height={height} fill={color} />;
};

export const FeedIcon = ({ width = "24px", height = "24px", color = "#000" }) => {
  return <FeedSVG width={width} height={height} fill={color} />;
};

export const QnAIcon = ({ width = "24px", height = "24px", color = "#000" }) => {
  return <QnASVG width={width} height={height} fill={color} />;
};

export const EditIcon = ({ width = "24px", height = "24px", color = "#D3D3D3" }) => {
  return <EditSVG width={width} height={height} fill={color} />;
};

export const PersonEditIcon = ({ width = "32px", height = "32px", color = "#32250F" }) => {
  return <PersonEditSVG width={width} height={height} fill={color} />;
};

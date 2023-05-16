import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const TodosContainer = styled("div")({
  "height": "70rem",
  "width": "80rem",
  "padding": "3rem",
  "borderRadius": "10px",
  "margin": "3rem",
  "overflowY": "auto",
  "lineHeight": "1.6",
  "backgroundColor": "#f1f3f5",
  "boxShadow":
    "rgba(17, 17, 26, 0.1) 0px 8px 24px,\n    rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px",
});

export const Title = styled("h2")({
  color: "#5f3dc4",
  fontSize: "3rem",
  textAlign: "center",
  marginBottom: "3rem",
  transition: "0.3s",
  "&:hover": {
    transform: "scale(1.08)",
  },
});

export const List = styled("ul")({
  "display": "flex",
  "flexDirection": "column",
  "gap": "4rem",
  "listStyle": "none",
});

export const ItemBox = styled("div")({
  "borderBottom": "1px solid #dee2e6",
  "paddingBottom": "15px",
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "space-between",
});

export const Item = styled("li")({
  "color": "#495057",
  "fontSize": "1.7rem",
  "paddingBottom": "15px",
  "fontWeight": "600",
});

export const DetailsButton = styled(Link)({
  "display": "inline-block",
  "textDecoration": "none",
  "fontSize": "1.2rem",
  "textTransform": "uppercase",
  "fontWeight": "700",
  "backgroundColor": "#5f3dc4",
  "color": "#fff",
  "padding": "10px 20px",
  "borderRadius": "100px",
  "transition": "0.3s",

  "&:hover": {
    backgroundColor: "#6741d9",
    transform: "rotate(-8deg) scale(1.1)",
  },
});

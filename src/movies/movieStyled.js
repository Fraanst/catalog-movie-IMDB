import { styled } from "@material-ui/styles";
import { CardContent } from "@material-ui/core";

export const Image = styled("img")({
  width: "100%"
});

export const Span = styled("div")({
  fontSize: "18px",
  fontWeight: "200",
  fontFamily: "roboto",
  lineHeight: 1.6
});

export const RatingItem = styled(CardContent)({
  textAlign: "center"
});

export const Title = styled("h1")({
  fontSize: "48px",
  fontWeight: "200",
  fontFamily: "roboto",
  textAlign: "center"
});

export const SearchContainer = styled("div")({
  backgroundColor: "#E4E4E4",
  height: "80px",
  display: "flex",
  flex: 1,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "stretch",
  padding: "8px 24px"
});

export const SearchInput = styled("input")({
  backgroundColor: "transparent",
  fontSize: "48px",
  fontWeight: "200",
  border: "none",
  fontFamily: "roboto"
});

import ProtoTypes from "prop-types";

const Subtitle = ({ text }) => {
  return (
    <h4 style={{ color: "#ff0000", margin: "0px 0px 10px" }}>{text}</h4>
  );
};

Subtitle.propTypes = {
  text: ProtoTypes.string,
};

export default Subtitle;

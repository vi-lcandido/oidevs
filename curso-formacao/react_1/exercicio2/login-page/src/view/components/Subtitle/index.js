import ProtoTypes from "prop-types";

const Subtitle = ({ text }) => {
  return (
    <h4 style={{ color: "#2bcee3", margin: "0px 0px 10px" }}>Olá, {text}</h4>
  );
};

Subtitle.propTypes = {
  text: ProtoTypes.string,
};

export default Subtitle;
import defaultImg from "./icon.png";

const FrendsComponent = ({ avatar = defaultImg, name, isOnline, id }) => {
  return (
    <>
      <span
        className="status-frends"
        style={{ backgroundColor: isOnline ? "green" : "red" }}
      >
        {isOnline}
      </span>
      <img
        className="avatar-frends"
        src={avatar}
        alt="avatar"
        width="48"
        // height="80px"
      />
      <p className="name-frends">{name}</p>
    </>
  );
};

export default FrendsComponent;

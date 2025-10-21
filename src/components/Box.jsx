const Box = ({ title, item }) => {
  return (
    <div className="box">
      <h1>{title}</h1>
      <img
        className="item-img"
        src={item && item.img}
      />
      <h2>Win</h2>
    </div>
  );
};

export default Box;

const Box = ({ title, item, result, borderColor }) => {
  return (
    <div className={`box ${borderColor}`}>
      <h1>{title}</h1>
      <img className="item-img" src={item && item.img} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;

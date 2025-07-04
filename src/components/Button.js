function Button(props) {
  return (
    <>
      <button onClick={props.onClick}>{props.Inc}</button>
    </>
  );
}

export default Button;

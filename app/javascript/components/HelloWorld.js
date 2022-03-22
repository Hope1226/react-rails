import React, {useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { getData } from "./reducer/things/things";
import PropTypes from "prop-types"

const HelloWorld = () => {
  const dispatch = useDispatch();
  const [ text, setText ] = useState(false)
  const globalStore = useSelector((state) => state.thingsReducer);

  useEffect(() => {
    dispatch(getData());
  }, []);

  const showStore = () => {
    console.log(globalStore)
    setText(true);
  };

  return (
    <div>
      {text ? (
        <h1>{globalStore.things[0].name}</h1>
      ) : null}
      <button onClick={showStore}>Click me</button>
    </div>
  );
};

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld

import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";

const Counter = () => {
  //useState(0) = dekalrasi nilai state dan dimasukan ke index 0 => count(karena parameter useSate hanya satu=> brrti index 0)
  let [count, setCount] = useState(0);
  //   index 0 = untuk panggil data di dalam jsx
  // index 1 = untuk proses manipulasi data dari index 0

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount((count = 0));
  };

  //   LIFECYCLE ==================

  //didMount
  useEffect(() => {
    checkingData();
    // console.log("didmount running");
  }, []);

  //didupdate
  useEffect(() => {
    // console.log("didupdate running");
  }, [count]);

  //willUnmount
  useEffect(() => {
    return () => {
      // console.log("willunmount runnning");
    };
  }, []);

  const checkingData = () => {
    if (count === 5) {
      alert("data = 5");
    }
  };

  return (
    <Container className="text-center">
      <h2>Counter App</h2>
      <h3>{count}</h3>
      <Button variant="primary" onClick={decreaseCount}>
        -
      </Button>
      <Button variant="secondary" className="mx-2" onClick={resetCount}>
        RESET
      </Button>
      <Button variant="primary" onClick={increaseCount}>
        +
      </Button>
    </Container>
  );
};

export default Counter;

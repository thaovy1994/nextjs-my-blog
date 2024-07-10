const React = require("react");
const { useState } = React;

const App = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");

  const handleInput1Change = (e) => {
    setInput1(e.target.value);
  };

  const handleInput2Change = (e) => {
    setInput2(e.target.value);
  };

  const handleCompare = (input1, input2) => {
    if (input1.length > input2.length) {
      setResult(`Chuỗi "${input1}" dài hơn chuỗi "${input2}"`);
    } else if (input1.length < input2.length) {
      setResult(`Chuỗi "${input2}" dài hơn chuỗi "${input1}"`);
    } else {
      setResult(`Hai chuỗi "${input1}" và "${input2}" có độ dài bằng nhau`);
    }
  };

  return (
    <div className="container">
      <h1>So sánh độ dài chuỗi</h1>
      <div className="input-container">
        <label htmlFor="input1">Chuỗi 1:</label>
        <input
          type="text"
          id="input1"
          value={input1}
          onChange={handleInput1Change}
          placeholder="Nhập chuỗi 1"
        />
      </div>
      <div className="input-container">
        <label htmlFor="input2">Chuỗi 2:</label>
        <input
          type="text"
          id="input2"
          value={input2}
          onChange={handleInput2Change}
          placeholder="Nhập chuỗi 2"
        />
      </div>
      <button onClick={handleCompare}>So sánh</button>
      {result && <p>Kết quả: {result}</p>}
    </div>
  );
};

export default App;

const TsPractice = () => {
  const message: string = `hello world "hello mina"`;
  //Type annotaion -> chú thích type
  const name1: string[] = ["Jisoo", "Lisa", "Rose", "Jennie"];
  name1.push("25");
  //mixed type
  const name4: (string | number)[] = ["Jisoo", "Lisa", "Rose", "Jennie"];
  name4.push(30);
  //Type inference -> tự động gắn type (mảng dưới type = string|number)
  const name2 = ["Jisoo", "Lisa", "Rose", "Jennie", 25];
  name2.push(94);

  let name3: string; //thay let = const sẽ bị báo lỗi

  const person1: {
    name: string;
    age: number;
  } = {
    name: "Mina",
    age: 18,
  };

  type Point = {
    x: number;
    y: number;
  };
  const point: Point = {
    x: 5,
    y: 2,
  };
  const sum = point.x + point.y;

  //   enum API_STATUS {
  //     //in PROMISE:
  //     PENDDING,
  //     FULFILLED,
  //     REJECTED,
  //   }
  //   const a = API_STATUS.FULFILLED;
  return (
    <div>
      <p className="text-2xl font-bold text-blue-600 ">
        Thực hành với typeScript
      </p>
      <p>{message}</p>
      <p>{person1.name}</p>
      <p>{sum}</p>
      <p>{name1.toString()}</p>
    </div>
  );
};

export default TsPractice;

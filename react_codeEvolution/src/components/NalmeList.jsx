import React from "react";
import Person from "./Person";

function NalmeList() {
  const names = ["Bruce", "Clark", "Diana", "Bruce"];
  const persons = [
    {
      id: 1,
      Name: "John Cena",
      Age: 24,
    },
    {
      id: 2,
      Name: "Gnasta Manelia",
      Age: 400,
    },
  ];
  const pl = persons.map((p) => <Person key={p.id} p={p} />);
  const nameList = names.map((name, index) => <h2 key={index} > {name} {index} </h2>);
  return <div>{nameList}</div>;
}
   
export default NalmeList;

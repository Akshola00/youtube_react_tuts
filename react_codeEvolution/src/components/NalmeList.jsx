import React from "react";
import Person from "./Person";

function NalmeList() {
  const names = ["Bruce", "Clark", "Diana"];
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
  const pl = persons.map((p) => <Person p={p} />);
  const nameList = names.map((name) => <h2> {name} </h2>);
  return <div>{pl}</div>;
}

export default NalmeList;

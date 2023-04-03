import React, { FC, ChangeEvent, useState } from "react";
import { User } from "../interfaces";

export const Person: FC<User> = ({ name, age, email, hairColor }) => {
  const [country, setCountry] = useState<string | null>(null);

  //   type NameType = "Celia" | "Jack" | "Maurice";
  //   const nameForType: NameType = "Maurice";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
      <input placeholder="Write down your country..." onChange={handleChange} />
      {country}
      {hairColor}
    </div>
  );
};

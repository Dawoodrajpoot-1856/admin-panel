"use client";

import useLocalStorage from "@/app/hooks/useLocalStorage";

const InputData = () => {
  const [name, setName] = useLocalStorage("username", "");

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">useLocalStorage Practice</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={function (e) {
          setName(e.target.value);
        }}
        className="border p-3 mt-5"
      />

      <p className="mt-5">
        Your name is: <strong>{name}</strong>
      </p>
    </div>
  );
};

export default InputData;

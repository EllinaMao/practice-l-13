import React, { useState } from "react";

export function InputTask({ onAdd }) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value.trim()) {
      onAdd(value);
      setValue("");
    }
  };

  return (
    <div>
      <label>
        Новая задача:
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
}

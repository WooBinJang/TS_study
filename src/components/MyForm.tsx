import React, { useState } from "react";

type MyFormProps = {
  onSubmit: (form: { name: string; des: string }) => void;
};

const MyForm = ({ onSubmit }: MyFormProps) => {
  const [form, setForm] = useState({ name: "", des: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", des: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" onChange={onChange} value={form.name} />
        <input name="des" onChange={onChange} value={form.des} />
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default MyForm;

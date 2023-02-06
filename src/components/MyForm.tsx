import React, { useRef, useState } from "react";

type MyFormProps = {
  onSubmit: (form: { name: string; des: string }) => void;
};

const MyForm = ({ onSubmit }: MyFormProps) => {
  const [form, setForm] = useState({ name: "", des: "" });
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", des: "" });
    if (!inputRef.current) {
      //inputRef.current 안의 값을 사용 하려면 null 체킹
      return;
    }
    inputRef.current.focus();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          onChange={onChange}
          value={form.name}
          ref={inputRef}
        />
        <input name="des" onChange={onChange} value={form.des} />
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default MyForm;

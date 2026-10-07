"use client";

export default function Home() {
  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", e.target.name.value);
    formData.append("email", e.target.email.value);
    formData.append("age", e.target.age.value);

    fetch("/api/users", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log("Server response:", data));

    const name = e.target.name.value;
    const email = e.target.email.value;
    const age = e.target.age.value;
    const data = { name, email, age };
    console.log(data);

    const form = e.target;
    form.reset();
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="m-16 flex flex-col items-center justify-center gap-2"
      >
        <input
          className="border border-gray-300 p-2 rounded"
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
        />
        <input
          className="border border-gray-300 p-2 rounded"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <input
          className="border border-gray-300 p-2 rounded"
          type="number"
          name="age"
          id="age"
          placeholder="Enter your age"
        />
        <button className="bg-gray-800 text-white p-2 rounded" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

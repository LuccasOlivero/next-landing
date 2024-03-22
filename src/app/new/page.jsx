"use client";
import { useRouter } from "next/navigation";

function NewPage() {
  const router = useRouter();

  async function onSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    const res = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "applicatin/json",
      },
    });

    const data = await res.json();
    router.push("/");
  }

  return (
    <div className="h-screen flex  justify-center items-center">
      <form
        className="bg-slate-800 p-10 lg:w-1/4 md:w-1/2 w-full"
        onSubmit={onSubmit}
      >
        <label htmlFor="title" className="font-bold text-sm">
          titulo de tarea
        </label>
        <input
          type="text"
          id="title"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
        />

        <label htmlFor="description" className="font-bold text-sm">
          describe la tarea
        </label>
        <textarea
          id="description"
          cols="30"
          rows="3"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="describe tu tarea"
        ></textarea>
        <button className="bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded text-red-500">
          crear
        </button>
      </form>
    </div>
  );
}

export default NewPage;

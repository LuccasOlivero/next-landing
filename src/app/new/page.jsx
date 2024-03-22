"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function NewPage({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`).then((res) =>
        res.json().then((data) => {
          setTitle(data.title), setDescription(data.description);
          router.refresh();
        })
      );
    }
  }, [params.id, router]);

  async function onSubmit(e) {
    e.preventDefault();

    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // const data = res.json();
    } else {
      const res = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // const data = await res.json();
    }
    router.refresh();
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
          onChange={(e) => setTitle(e.target.value)}
          value={title}
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
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button
          className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
          type="submit"
        >
          crear
        </button>

        {params.id && (
          <button
            className="bg-red-500 hover:bg-red-700 font-bold py-2 px-4 ml-4 rounded"
            type="button"
            onClick={async () => {
              await fetch(`/api/tasks/${params.id}`, {
                method: "DELETE",
              });
              router.refresh();
              router.push("/");
            }}
          >
            delete
          </button>
        )}
      </form>
    </div>
  );
}

export default NewPage;

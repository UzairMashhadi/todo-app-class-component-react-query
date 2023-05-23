import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

export default function AddTodo() {
  const [todo, setTodo] = useState("");
  const queryClient = useQueryClient();

  // Mutations
  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.post(
        "https://long-ruby-hatchling-shoe.cyclic.app/add-todo",
        data
      );
    },
    onSuccess: () => {
      setTodo("");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ title: todo, status: false });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-5 justify-center items-center mt-16"
    >
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter Title"
        type="text"
        className="outline-none py-2 px-4 text-[1.4rem] rounded-lg border shadow-lg"
      />
      <button
        type="submit"
        className="py-2 px-4 text-[1.4rem] bg-indigo-800 rounded-lg font-bold text-white shadow-lg"
      >
        Add Todo
      </button>
    </form>
  );
}

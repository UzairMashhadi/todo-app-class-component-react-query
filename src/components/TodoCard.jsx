import React from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function TodoCard({ item, refetch }) {
  const mutation = useMutation({
    mutationFn: (data) => {
      return axios.patch(
        `https://long-ruby-hatchling-shoe.cyclic.app/update/${item?._id}`,
        data
      );
    },
    onSuccess: () => {
      refetch();
    },
  });

  const handleOnChange = (e) => {
    mutation.mutate({ status: e.target.checked });
  };

  const deleteMutation = useMutation({
    mutationFn: () => {
      return axios.delete(
        `https://long-ruby-hatchling-shoe.cyclic.app/delete/${item?._id}`
      );
    },
    onSuccess: () => {
      refetch();
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate();
  };
  return (
    <div className="flex items-center gap-5 border-2 p-5 rounded-lg">
      <input
        type="checkbox"
        checked={item?.status}
        onChange={handleOnChange}
        className="w-[1.6rem] min-w-[1.6rem] h-[1.6rem] cursor-pointer"
      />
      <h4
        className={`text-[1.4rem] w-[20rem] break-normal text-bold ${
          item?.status && "line-through text-gray-500"
        }`}
      >
        {item?.title}
      </h4>
      <button
        onClick={handleDelete}
        className="cursor-pointer ml-auto border-2 bg-[red] text-white font-bold rounded-lg py-3 px-5"
      >
        Delete
      </button>
    </div>
  );
}

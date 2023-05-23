import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TodoCard from "./TodoCard";

export default function GetTodo() {
  // Queries
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: () =>
      axios.get("https://long-ruby-hatchling-shoe.cyclic.app/get-todo"),
  });
  return (
    <>
      {isLoading ? (
        <div className="w-full p-5 rounded-lg shadow-lg">
          <h1 className="text-[1.4rem] font-bold text-center">Loading...</h1>
        </div>
      ) : (
        data?.data?.todos?.length === 0 && (
          <div className="w-full p-5 rounded-lg shadow-lg">
            <h1 className="text-[1.4rem] font-bold text-center">
              No Todo Found!
            </h1>
          </div>
        )
      )}
      {isError && (
        <div className="w-full p-5 rounded-lg shadow-lg">
          <h1 className="text-[1.4rem] text-[red] font-bold text-center">
            Oops! Error
          </h1>
        </div>
      )}
      <div className="grid grid-cols-4 gap-4">
        {data?.data?.todos?.map((item) => {
          return <TodoCard key={item?._id} item={item} refetch={refetch} />;
        })}
      </div>
    </>
  );
}

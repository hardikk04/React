import React from "react";
import Card from "./Card";

function Cards({ data, handleRemove }) {
  return (
    <div className="flex gap-5 flex-wrap max-h-[40vh] w-[90%] overflow-y-scroll justify-center">
      <Card data={data} handleRemove={handleRemove}></Card>
    </div>
  );
}

export default Cards;

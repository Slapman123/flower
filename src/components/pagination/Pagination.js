import React from "react";
import { setup } from "../../utils/setup";
import { action } from "mobx";
const Pagination = (props) => {
  const { state, actions, helpers, currentPage, route } = props;

  const increasePage = action("increasePage", () => {
    state[route].page = state[route].page + 1;
    actions[route].fetchData();
  });
  const decreasePage = action("decreasePage", (e) => {
    state[route].page = state[route].page - 1;
    actions[route].fetchData();
  });
  const firstPageF = action("firstPage", () => {
    state[route].page = 1;
    actions[route].fetchData();
  });
  const lastPagef = action("lastPage", () => {
    state[route].page = state.passes.pageCount;
    actions[route].fetchData();
  });
  
  return (
    <div className="flex justify-between pagination">
      <button onClick={firstPageF}>First page</button>
      <button
        disabled={helpers[route].page < 2 ? true : false}
        onClick={decreasePage}
      >
        prev
      </button>
      <p>{currentPage}</p>
      <button
        disabled={
          helpers[route].page >= helpers[route].pageCount ? true : false
        }
        onClick={increasePage}
      >
        next
      </button>
      <button onClick={lastPagef}>Last page</button>
    </div>
  );
};

export default setup(Pagination);

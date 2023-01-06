import { useRef, useState } from "react";
import "./productBox.css";
import DivProduct from "./DivProduct";
import { Link } from "react-router-dom";

const ProductBox = ({ state, setState }) => {
  let seletref = useRef(null);
  let [refresh, setRefresh] = useState(0);
  let [page, setPage] = useState(1);
  // console.log(state);

  const change = (id) => {
    setPage(id);
  };

  let arr = [];
  for (let i = 1; i <= 10; i++) {
    arr.push(
      <button onClick={() => change(i)} key={i}>
        {i}
      </button>
    );
  }

  const Sorting = () => {
    var selected = seletref.current.value;

    if (selected === "Rating") {
      state.sort(function (a, b) {
        if (a.rating > b.rating) return -1;
        if (a.rating < b.rating) return 1;
        return 0;
      });
      setRefresh(2);
    }
  };

  return (
    <div className="a-productBox-container">
      <nav className="a-productBox-nav">
        <div>
          <h2>
            Best Restaurants Near Me in Delhi <span>({state.length})</span>
          </h2>
        </div>

        <div>
          <span>Sort by</span>
          <select onChange={Sorting} ref={seletref}>
            <option value="Rating">Rating</option>
            <option value="Popularity">Popularity</option>
            <option value="Low to High">Price: Low to High</option>
            <option value="High to Low">Price: High to Low</option>
          </select>
        </div>
      </nav>

      <div className="a-gridBox">
        {state.map((e, i) => (
          <Link
            to={`/products/${i}`}
            style={{ textDecoration: "none" }}
            key={i + 1}
          >
            <DivProduct e={e} />{" "}
          </Link>
        ))}
      </div>

      <div>
        {page}
        {arr}
      </div>
    </div>
  );
};

export default ProductBox;

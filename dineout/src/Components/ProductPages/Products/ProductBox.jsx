import { useRef, useState } from "react";
import "./productBox.css";
import DivProduct from "./DivProduct";
import { Link } from "react-router-dom";

const ProductBox = ({ state, setState,arr ,setLimit}) => {
  let seletref = useRef(null);
  let [refresh, setRefresh] = useState(0);
  
  // console.log(state);



 

  const Sorting = () => {
    var selected = seletref.current.value;

    if (selected === "Rating") {
      state.sort(function (a, b) {
        if (a.rating > b.rating) return -1;
        if (a.rating < b.rating) return 1;
        return 0;
      });
      setRefresh((pre)=>pre+1);
    }
    if (selected === "Popularity") {
      state.sort(function (a, b) {
        if (a.id > b.id) return -1;
        if (a.id < b.id) return 1;
        return 0;
      });
      setRefresh((pre)=>pre+1);
    }

    if (selected === "Low to High") {
      state.sort(function (a, b) {
        let price =Number(a.discription1.replace(",", ""));
    
        let price2 = Number(b.discription1.replace(",", ""));
        if (price > price2) return 1;
        if (price < price2) return -1;
        return 0;
      });
      setRefresh((pre)=>pre+1);
    }

    
    if (selected === "High to Low") {
      state.sort(function (a, b) {
        let price =Number(a.discription1.replace(",", ""));
    
        let price2 = Number(b.discription1.replace(",", ""));
        if (price > price2) return -1;
        if (price < price2) return 1;
        return 0;
      });
      setRefresh((pre)=>pre+1);
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
        {state.length==0 ? <div style={{width:"34%" ,position:"absolute",top:"30%", left:"45%"}}><img src="https://q5n8c8q9.rocketcdn.me/wp-content/uploads/2020/04/Lyft.gif" width={"100%"} height="400px" alt="imgdta"/></div>   : state.map((e, i) => (
          <Link
            to={`/products/${i}`}
            style={{ textDecoration: "none" }}
            key={i + 1}
          >
            <DivProduct e={e} />{" "}
          </Link>
        ))}
      </div>

      <div className="Pagination-a">
        {/* {page} */}
        {arr}

        <select onChange={(e)=>setLimit(e.target.value)} className="pagesLimit-a">
          <option value="12">12</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
        </select> <span >- Page Limit.. </span>
      </div>
    </div>
  );
};

export default ProductBox;

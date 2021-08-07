import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useHistory } from "react-router-dom";

const Images = () => {
  useEffect(() => {}, []);
  const history = useHistory();
  const totalPage = Math.ceil(100 / 5);

  const handlePageChange = (page) => {
    history.push(`/admin/complete-orders?page=${page.selected + 1}`);
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-between my-3">
        <div className="col-4">
          <input
            type="search"
            placeholder="Search here..."
            className="form-control"
          />
        </div>
        <div className="col-2">
          <select className="form-select" aria-label="Default select example">
            <option selected>Filter Here</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className="my-4 row"></div>
      <div className="d-flex justify-content-end">
        <ReactPaginate pageCount={totalPage} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default Images;

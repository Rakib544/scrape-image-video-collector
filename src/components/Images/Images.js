import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReactPaginate from "react-paginate";
import { useHistory } from "react-router-dom";

const Images = () => {
  const { register, handleSubmit } = useForm();
  const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalImageLength, setTotalImageLength] = useState(null);
  const [showSpinner, setShowSpinner] = useState(false);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8000/images", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ page: pageNumber }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTotalImageLength(data.totalLength);
        setImages(data.images);
      });
  }, [pageNumber, number]);

  const history = useHistory();
  const totalPage = Math.ceil(totalImageLength / 18);
  const handlePageChange = (page) => {
    setPageNumber(page.selected + 1);
    history.push(`/images?page=${page.selected + 1}`);
  };

  const onSubmit = (data, e) => {
    setShowSpinner(true);
    const url = data.url;
    fetch("http://localhost:8000/url", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ url }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setShowSpinner(false);
          setNumber(number + 1);
          console.log(data);
          e.target.reset();
        }
      });
  };

  return (
    <div className="container">
      {showSpinner ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        ""
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-5 mx-auto col-12 col-md-8 d-flex"
      >
        <input
          type="text"
          placeholder="Enter your valid url"
          className="form-control me-1"
          {...register("url", { required: true })}
        />
        <div>
          <button type="submit" className="btn btn-dark">
            Add
          </button>
        </div>
      </form>
      <div className="d-flex justify-content-between my-3">
        <div className="col-12 col-md-4 ms-auto d-flex">
          <input
            type="search"
            placeholder="Search here..."
            className="form-control me-1"
          />
          <button className="btn btn-dark">Search</button>
        </div>
      </div>
      <div className="my-4 row">
        {images.map((img) => (
          <div className="col-4 col-md-3 col-lg-2 h-100">
            <div className="m-2 shadow-sm p-2">
              <img
                src={img.url}
                alt={img.id}
                style={{ height: "60px", width: "60px" }}
                className="d-block mx-auto"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-end">
        <ReactPaginate pageCount={totalPage} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default Images;

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DataMovie from "../../components/ManageMovie/DataMovie";
import FormMovie from "../../components/ManageMovie/FormMovie";
import "../../assets/css/ManageMovieStyle.css";
import { connect } from "react-redux";
import { getAllMovie } from "../../stores/action/movieAll";
import Pagination from "react-paginate";

const ManageMovie = (props) => {
  const [sort, setSort] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [form, setForm] = useState({});
  const [paginate, setPaginate] = useState({
    page: 1,
    order: "movie_name",
    sort: "ASC",
    limit: 4,
    totalPage: 0
  });

  console.log(paginate);
  useEffect(() => {
    const { page, order, sort, limit } = paginate;
    props.getAllMovie(page, order, sort, limit).then((res) => {
      // console.log(res.value.data.pagination.totalPage, "dataaaa");
      setPaginate({ ...paginate, totalPage: res.value.data.pagination.totalPage });
    });
  }, []);

  // console.log(paginate);

  const handlePagination = (e) => {
    const { order, sort, limit } = paginate;
    const selectedPage = e.selected + 1;
    setPaginate({ ...paginate, page: selectedPage });
    props.getAllMovie(selectedPage, order, sort, limit);
  };

  const handleSort = (val) => {
    setPaginate({ ...paginate, sort: val });
    const newSort = val;
    const { page, order, limit } = paginate;

    props.getAllMovie(page, order, newSort, limit);
  };

  const handleIsUpdate = (stat, item) => {
    setIsUpdate(stat);
    setForm(item);
  };

  const updateTotalPage = (page) => {
    setPaginate({ ...paginate, totalPage: page });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        {/* <div className="row pt-3"> */}
        <FormMovie isUpdate={isUpdate} form={form} totalPage={updateTotalPage} />
        {/* </div> */}
        <DataMovie
          setIsUpdate={handleIsUpdate}
          handleSort={handleSort}
          totalPage={updateTotalPage}
        />
      </div>
      <div className="pagination-nav mt-2 mb-5 d-flex justify-content-center">
        {" "}
        <Pagination
          previousLabel={false}
          nextLabel={false}
          breakLabel={"..."}
          pageCount={paginate.totalPage}
          onPageChange={handlePagination}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          disabledClassName={"disabled"}
          activeClassName={"active"}
        />
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  dataMovie: state.getAllMovie
});

const mapDispatchToProps = {
  getAllMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageMovie);

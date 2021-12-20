import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DataMovie from "../../components/ManageMovie/DataMovie";
import FormMovie from "../../components/ManageMovie/FormMovie";
import "../../assets/css/ManageMovieStyle.css";
import { connect } from "react-redux";
import { getAllMovie } from "../../stores/action/movieAll";
import Pagination from "react-paginate";
import axios from "../../Utils/axios";

const ManageMovie = (props) => {
  const [resetSearch, setResetSearch] = useState(false);
  const [search, setSearch] = useState([]);
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
  const [key, setKey] = useState("");

  const getSearch = (data) => {
    setSearch(data);
  };

  console.log(paginate, "pareenty");
  useEffect(() => {
    const { page, order, sort, limit } = paginate;
    props.getAllMovie(page, order, sort, limit).then((res) => {
      // console.log(res.value.data.pagination.totalPage, "dataaaa");
      setPaginate({ ...paginate, totalPage: res.value.data.pagination.totalPage });
    });
  }, [resetSearch]);

  // console.log(paginate);

  const handlePagination = (e) => {
    const { order, sort, limit } = paginate;
    const selectedPage = e.selected + 1;
    setPaginate({ ...paginate, page: selectedPage });

    search.length < 1
      ? props.getAllMovie(selectedPage, order, sort, limit)
      : axios
          .get(
            `/movie/all?page=${selectedPage}&name=${key}&order=movie_name&sort=${sort}&limit=${limit}`
          )
          .then((res) => {
            console.log(res.data, "resssdfawe2312");
            setSearch(res.data.data);
          });
  };

  const handleSort = (val) => {
    setPaginate({ ...paginate, sort: val });
    const newSort = val;
    const { page, order, limit } = paginate;

    props.getAllMovie(page, order, newSort, limit);
  };

  const handleKeyword = (key) => {
    setKey(key);
  };

  const handleIsUpdate = (stat, item) => {
    setIsUpdate(stat);
    setForm(item);
  };

  const updateTotalPage = (page) => {
    setPaginate({ ...paginate, totalPage: page });
  };

  const handleResetSearch = (s) => {
    setResetSearch(s);
  };
  console.log(resetSearch);

  return (
    <>
      <Navbar />
      <div className="container">
        {/* <div className="row pt-3"> */}
        <FormMovie isUpdate={isUpdate} form={form} totalPage={updateTotalPage} />
        {/* </div> */}
        <DataMovie
          isResetSearch={handleResetSearch}
          keyword={handleKeyword}
          resultSearch={search}
          isSearch={getSearch}
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

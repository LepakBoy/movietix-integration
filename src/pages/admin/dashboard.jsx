import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../assets/css/DashboardStyle.css";
import axios from "../../Utils/axios";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const Dashboard = () => {
  const [cities, setCities] = useState(["jakarta", "bandung", "bogor", "depok"]);
  const [teater, setTeater] = useState(["ebu.id", "hiflix", "cinepolis"]);
  const [allMovies, setAllMovies] = useState([]);
  const [filter, setFilter] = useState({ id_movie: "", location: "", teater_name: "" });
  const [dataDashboard, setDataDashboard] = useState([]);
  const { id_movie, location, teater_name } = filter;

  let label = [];
  dataDashboard.length > 0 ? dataDashboard.map((item) => label.push(item.month)) : null;

  let amountDashboard = [];
  dataDashboard.length > 0 ? dataDashboard.map((item) => amountDashboard.push(item.total)) : null;

  const getAllMovie = () => {
    axios.get("/movie/all").then((res) => {
      setAllMovies(res.data.data);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const getDashboard = () => {
    axios
      .get(`/booking/?id_movie=${id_movie}&location=${location}&teater_name=${teater_name}`)
      .then((res) => {
        setDataDashboard(res.data.data);
      });
  };

  const resetFilter = () => {
    setFilter({ ...filter, id_movie: "", location: "", teater_name: "" });
    setDataDashboard([]);
  };

  useEffect(() => {
    getAllMovie();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row pt-5 mb-5">
          <div className="col-md-9 dashboard-chart">
            <div className="dahsboard-header header">Dashboard</div>
            <div className="wrapper content d-flex align-items-center justify-content-center mt-4">
              <Bar
                data={{
                  labels: label,
                  datasets: [
                    {
                      data: amountDashboard,
                      backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)"
                      ],
                      borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)"
                      ],
                      borderWidth: 2
                    }
                  ]
                }}
                height={400}
                width={790}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      type: "linear",
                      display: true,
                      title: {
                        display: true,
                        text: "Income",
                        color: "#999999",
                        font: {
                          family: "Mulish"
                        },
                        padding: {
                          bottom: 10
                        }
                      },
                      ticks: {
                        color: "#999999",
                        font: {
                          family: "Mulish"
                        }
                      },

                      beginAtZero: true
                    },
                    x: {
                      title: {
                        display: true,
                        text: "Month",
                        color: "#999999",
                        font: {
                          family: "Mulish"
                        },
                        padding: {
                          top: 10
                        }
                      },
                      ticks: {
                        color: "#999999",
                        font: {
                          family: "Mulish"
                        }
                      }
                    }
                  },
                  plugins: {
                    legend: {
                      display: false
                    }
                  }
                }}
              />
            </div>
          </div>
          <div className="col-md-3 dashboard-filter">
            <div className="filter-header header">Filtered</div>
            <div className="wrapper mt-4 content p-4">
              <div className="dropdown">
                <select
                  className="w-100 my-2 p-2 input-select"
                  name="id_movie"
                  value={filter.id_movie}
                  onChange={handleChange}
                >
                  <option>Select movie</option>
                  {allMovies.map((item) => (
                    <option key={item.id_movie} value={item.id_movie}>
                      {item.movie_name}
                    </option>
                  ))}
                </select>

                <select
                  className="w-100 my-2 p-2 input-select"
                  name="teater_name"
                  value={filter.teater_name}
                  onChange={handleChange}
                >
                  <option>Select teater</option>
                  {teater.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>

                <select
                  className="w-100 my-2 p-2 input-select"
                  name="location"
                  value={filter.location}
                  onChange={handleChange}
                >
                  <option>Select teater</option>
                  {cities.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <button onClick={getDashboard} className="btn w-100 btn-filter my-2">
                  Filter
                </button>
                <button onClick={resetFilter} className="btn w-100 btn-reset my-2">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;

import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import "../../css/aadafa5.css";
import "../../css/7e5ea22.css";
import "../../css/992784c.css";
import "../../css/a279537.css";
import Tuyendung from "../../img/tuyendung.14ba915.gif";
import AdsJob from "../../img/ads-job.ec591da.png";
import { Link } from "react-router-dom";
import Slide1 from "../../slide/3rutVavbRFiRz6MccG8Me4jWwR73MAxOzS7RSJ4v.png";
import Slide2 from "../../slide/RNcqF5cMg3MFn8IOBsNaUJD0HPfOSakidjbr4f7d.png";
import Slide3 from "../../slide/HMv0dkFWpcZMH8NakC1FQifEZLwvrgndOilxoU2e.png";
function Work() {
  return (
    <div>
      <div data-server-rendered="true" id="__nuxt">
        <Header />

        <div className="content">
          <section>
            <div className="section-heading">
              <div className="container">
                <div
                  data-fetch-key="JobSearch:1"
                  className="search-container simply"
                >
                  <h2 className="mb-12">Tìm kiếm cơ hội nhận thưởng</h2>
                  <div className="search-form">
                    <div className="input-keyword">
                      <i className="icon-search" />
                      <input
                        type="text"
                        placeholder="Nhập từ khóa tìm kiếm..."
                        className="keyword"
                      />
                    </div>
                    <div className="input-skill select-box">
                      <div
                        dir="auto"
                        className="v-select vs--single vs--searchable"
                      >
                        <div
                          id="vs1246__combobox"
                          role="combobox"
                          aria-expanded="false"
                          aria-owns="vs1246__listbox"
                          aria-label="Search for option"
                          className="vs__dropdown-toggle"
                        >
                          <div className="vs__selected-options">
                            <input
                              placeholder="Kỹ năng"
                              aria-autocomplete="list"
                              aria-labelledby="vs1246__combobox"
                              aria-controls="vs1246__listbox"
                              type="search"
                              autoComplete="nope"
                              className="vs__search"
                            />
                          </div>
                          <div className="vs__actions">
                            <button
                              type="button"
                              title="Clear Selected"
                              aria-label="Clear Selected"
                              className="vs__clear"
                              style={{ display: "none" }}
                            >
                              <span />
                            </button>
                            <span
                              role="presentation"
                              className="vs__open-indicator"
                            />
                            <div
                              className="vs__spinner"
                              style={{ display: "none" }}
                            >
                              Loading...
                            </div>
                          </div>
                        </div>
                        <ul
                          id="vs1246__listbox"
                          role="listbox"
                          style={{ display: "none", visibility: "hidden" }}
                        />
                      </div>
                      <i className="icon-suitcase" />
                    </div>
                    <div className="input-location select-box select-province">
                      <div
                        dir="auto"
                        className="v-select vs--single vs--searchable"
                      >
                        <div
                          id="vs1247__combobox"
                          role="combobox"
                          aria-expanded="false"
                          aria-owns="vs1247__listbox"
                          aria-label="Search for option"
                          className="vs__dropdown-toggle"
                        >
                          <div className="vs__selected-options">
                            <input
                              placeholder="Quốc gia"
                              aria-autocomplete="list"
                              aria-labelledby="vs1247__combobox"
                              aria-controls="vs1247__listbox"
                              type="search"
                              autoComplete="nope"
                              className="vs__search"
                            />
                          </div>
                          <div className="vs__actions">
                            <button
                              type="button"
                              title="Clear Selected"
                              aria-label="Clear Selected"
                              className="vs__clear"
                              style={{ display: "none" }}
                            >
                              <span />
                            </button>
                            <span
                              role="presentation"
                              className="vs__open-indicator"
                            />
                            <div
                              className="vs__spinner"
                              style={{ display: "none" }}
                            >
                              Loading...
                            </div>
                          </div>
                        </div>
                        <ul
                          id="vs1247__listbox"
                          role="listbox"
                          style={{ display: "none", visibility: "hidden" }}
                        />
                      </div>
                      <i className="icon-map" />
                    </div>
                    <div className="input-location select-box select-province">
                      <div
                        dir="auto"
                        className="v-select vs--single vs--searchable"
                      >
                        <div
                          id="vs1248__combobox"
                          role="combobox"
                          aria-expanded="false"
                          aria-owns="vs1248__listbox"
                          aria-label="Search for option"
                          className="vs__dropdown-toggle"
                        >
                          <div className="vs__selected-options">
                            <input
                              placeholder="Thành phố"
                              aria-autocomplete="list"
                              aria-labelledby="vs1248__combobox"
                              aria-controls="vs1248__listbox"
                              type="search"
                              autoComplete="nope"
                              className="vs__search"
                            />
                          </div>
                          <div className="vs__actions">
                            <button
                              type="button"
                              title="Clear Selected"
                              aria-label="Clear Selected"
                              className="vs__clear"
                              style={{ display: "none" }}
                            >
                              <span />
                            </button>
                            <span
                              role="presentation"
                              className="vs__open-indicator"
                            />
                            <div
                              className="vs__spinner"
                              style={{ display: "none" }}
                            >
                              Loading...
                            </div>
                          </div>
                        </div>
                        <ul
                          id="vs1248__listbox"
                          role="listbox"
                          style={{ display: "none", visibility: "hidden" }}
                        />
                      </div>
                      <i className="icon-map" />
                    </div>
                    <div className="input-button">
                      <button className="btn btn-warning gradient">
                        Tìm kiếm
                      </button>
                    </div>
                  </div>
                  <div className="search-tags mt-20">
                    <div className="text-suggestion">
                      Gợi ý việc làm theo chuyên môn:
                    </div>
                    <a href="viec-lam/laravel.html">Laravel</a>
                    <a href="viec-lam/java.html">Java</a>
                    <a href="viec-lam/nodejs.html">NodeJS</a>
                    <a href="viec-lam/reactjs.html">ReactJS</a>
                    <a href="viec-lam/vuejs.html">VueJS</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="page-content mt-30">
              <div data-fetch-key={1} className="page-content mt-30 mb-30">
                <div className="container">
                  <div className="generic-header" style={{ height: "70px" }}>
                    <h4 className="page-title">
                      <strong>140</strong> cơ hội nhận bonus hấp dẫn khi ứng
                      tuyển, giới thiệu ứng viên.
                    </h4>
                    <div className="text-showing mb-15 mt-5 fs-14 help-block">
                      Hiển thị 20/140 kết quả tìm kiếm.
                    </div>
                  </div>
                  <div id="list-job-container" classs="row lr-15">
                    <div className="col-right col-lg-3 pl-0 pr-15">
                      <div className="widget">
                        <Link to="/dangky">
                          <img
                            src={Tuyendung}
                            alt=""
                            className="rounded block"
                          />
                        </Link>
                      </div>
                      <div className="widget">
                        <Link to="/dangky/hrfreelance">
                          <img src={AdsJob} alt="" className="rounded block" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-left col-lg-9 pr-0 pl-0">
                      <section className="job-list" data-v-23280afe>
                        <div className="listing-container" data-v-23280afe>
                          <div className="listing" data-v-23280afe>
                            <a
                              href="viec-lam/11896/data-engineer-remote_la.html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11896/data-engineer-remote_la.html"
                                data-v-23280afe
                              >
                                <div className="listing-logo" data-v-23280afe>
                                  <div className="logo-wrapper" data-v-23280afe>
                                    <img
                                      src="../static.devworks.jp/images/company/derUBKHloLWv82YHPeZttO6gTPuSLuccpN33e3oW.png"
                                      alt="Công ty Cổ phần Phần mềm Devwork"
                                      data-v-23280afe
                                    />
                                  </div>
                                </div>
                              </a>
                              <div className="listing-title" data-v-23280afe>
                                <a
                                  href="viec-lam/11896/data-engineer-remote_la.html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>
                                    Data Engineer Remote_LA
                                  </h4>
                                </a>
                                <div className="skillPrenium" data-v-23280afe>
                                  <a
                                    href="viec-lam/11896/data-engineer-remote_la.html"
                                    data-v-23280afe
                                  ></a>
                                  <a
                                    href="viec-lam/python.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    Python{" "}
                                  </a>
                                  <a
                                    href="viec-lam/data-engineer.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    Data Engineer
                                  </a>
                                </div>
                                <ul className="listing-icons" data-v-23280afe>
                                  <li className="salaryPrenium" data-v-23280afe>
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span data-v-23280afe>30-50 triệu</span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Tất cả địa điểm
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="listing-action text-right"
                                data-v-23280afe
                              >
                                <p
                                  className="fs-14 text-muted mt-1 mb-3"
                                  data-v-23280afe
                                >
                                  Tiền thưởng
                                </p>
                                <div className="salary mb-18" data-v-23280afe>
                                  <p className="salary mb-15" data-v-23280afe>
                                    Đăng nhập để xem
                                  </p>
                                </div>
                                <div className="refer-now" data-v-23280afe>
                                  <a
                                    className="gradient pointer"
                                    data-v-23280afe
                                  >
                                    <i
                                      className="icon-send-3 prt-2 mr-2"
                                      data-v-23280afe
                                    />
                                    <span
                                      className="refer-now-txt"
                                      data-v-23280afe
                                    >
                                      Giới thiệu ngay
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="listing" data-v-23280afe>
                            <a
                              href="viec-lam/11895/tester-(onsite-keang-nam).html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11895/tester-(onsite-keang-nam).html"
                                data-v-23280afe
                              >
                                <div className="listing-logo" data-v-23280afe>
                                  <div className="logo-wrapper" data-v-23280afe>
                                    <img
                                      src="../static.devworks.jp/images/company/derUBKHloLWv82YHPeZttO6gTPuSLuccpN33e3oW.png"
                                      alt="Công ty Cổ phần Phần mềm Devwork"
                                      data-v-23280afe
                                    />
                                  </div>
                                </div>
                              </a>
                              <div className="listing-title" data-v-23280afe>
                                <a
                                  href="viec-lam/11895/tester-(onsite-keang-nam).html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>
                                    Tester (Onsite Keang Nam)
                                  </h4>
                                </a>
                                <div className="skillPrenium" data-v-23280afe>
                                  <a
                                    href="viec-lam/11895/tester-(onsite-keang-nam).html"
                                    data-v-23280afe
                                  ></a>
                                  <a
                                    href="viec-lam/tester.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    Tester
                                  </a>
                                </div>
                                <ul className="listing-icons" data-v-23280afe>
                                  <li className="salaryPrenium" data-v-23280afe>
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span data-v-23280afe>10-15 triệu</span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Hà Nội
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="listing-action text-right"
                                data-v-23280afe
                              >
                                <p
                                  className="fs-14 text-muted mt-1 mb-3"
                                  data-v-23280afe
                                >
                                  Tiền thưởng
                                </p>
                                <div className="salary mb-18" data-v-23280afe>
                                  <p className="salary mb-15" data-v-23280afe>
                                    Đăng nhập để xem
                                  </p>
                                </div>
                                <div className="refer-now" data-v-23280afe>
                                  <a
                                    className="gradient pointer"
                                    data-v-23280afe
                                  >
                                    <i
                                      className="icon-send-3 prt-2 mr-2"
                                      data-v-23280afe
                                    />
                                    <span
                                      className="refer-now-txt"
                                      data-v-23280afe
                                    >
                                      Giới thiệu ngay
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="listing" data-v-23280afe>
                            <a
                              href="viec-lam/11894/thuc-tap-sinh-sales-thi-truong-nhat-ban.html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11894/thuc-tap-sinh-sales-thi-truong-nhat-ban.html"
                                data-v-23280afe
                              >
                                <div className="listing-logo" data-v-23280afe>
                                  <div className="logo-wrapper" data-v-23280afe>
                                    <img
                                      src="../static.devworks.jp/images/company/OGgufNjMl5owdWNVKjRHqb4cbpr8JNsvIoHAb6EH.png"
                                      alt="Hatonet"
                                      data-v-23280afe
                                    />
                                  </div>
                                </div>
                              </a>
                              <div className="listing-title" data-v-23280afe>
                                <a
                                  href="viec-lam/11894/thuc-tap-sinh-sales-thi-truong-nhat-ban.html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>
                                    THỰC TẬP SINH SALES THỊ TRƯỜNG NHẬT BẢN
                                  </h4>
                                </a>
                                <div className="skillPrenium" data-v-23280afe>
                                  <a
                                    href="viec-lam/11894/thuc-tap-sinh-sales-thi-truong-nhat-ban.html"
                                    data-v-23280afe
                                  ></a>
                                  <a
                                    href="viec-lam/sale-man.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    Sale Excutive
                                  </a>
                                </div>
                                <ul className="listing-icons" data-v-23280afe>
                                  <li className="salaryPrenium" data-v-23280afe>
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span data-v-23280afe>Dưới 7 triệu</span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Hà Nội
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="listing-action text-right"
                                data-v-23280afe
                              >
                                <p
                                  className="fs-14 text-muted mt-1 mb-3"
                                  data-v-23280afe
                                >
                                  Tiền thưởng
                                </p>
                                <div className="salary mb-18" data-v-23280afe>
                                  <p className="salary mb-15" data-v-23280afe>
                                    Đăng nhập để xem
                                  </p>
                                </div>
                                <div className="refer-now" data-v-23280afe>
                                  <a
                                    className="gradient pointer"
                                    data-v-23280afe
                                  >
                                    <i
                                      className="icon-send-3 prt-2 mr-2"
                                      data-v-23280afe
                                    />
                                    <span
                                      className="refer-now-txt"
                                      data-v-23280afe
                                    >
                                      Giới thiệu ngay
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="listing" data-v-23280afe>
                            <a
                              href="viec-lam/11893/sales-thi-truong-nhat-ban.html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11893/sales-thi-truong-nhat-ban.html"
                                data-v-23280afe
                              >
                                <div className="listing-logo" data-v-23280afe>
                                  <div className="logo-wrapper" data-v-23280afe>
                                    <img
                                      src="../static.devworks.jp/images/company/OGgufNjMl5owdWNVKjRHqb4cbpr8JNsvIoHAb6EH.png"
                                      alt="Hatonet"
                                      data-v-23280afe
                                    />
                                  </div>
                                </div>
                              </a>
                              <div className="listing-title" data-v-23280afe>
                                <a
                                  href="viec-lam/11893/sales-thi-truong-nhat-ban.html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>
                                    SALES THỊ TRƯỜNG NHẬT BẢN
                                  </h4>
                                </a>
                                <div className="skillPrenium" data-v-23280afe>
                                  <a
                                    href="viec-lam/11893/sales-thi-truong-nhat-ban.html"
                                    data-v-23280afe
                                  ></a>
                                  <a
                                    href="viec-lam/sale-man.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    Sale Excutive
                                  </a>
                                </div>
                                <ul className="listing-icons" data-v-23280afe>
                                  <li className="salaryPrenium" data-v-23280afe>
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span data-v-23280afe>7-10 triệu</span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Hà Nội
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="listing-action text-right"
                                data-v-23280afe
                              >
                                <p
                                  className="fs-14 text-muted mt-1 mb-3"
                                  data-v-23280afe
                                >
                                  Tiền thưởng
                                </p>
                                <div className="salary mb-18" data-v-23280afe>
                                  <p className="salary mb-15" data-v-23280afe>
                                    Đăng nhập để xem
                                  </p>
                                </div>
                                <div className="refer-now" data-v-23280afe>
                                  <a
                                    className="gradient pointer"
                                    data-v-23280afe
                                  >
                                    <i
                                      className="icon-send-3 prt-2 mr-2"
                                      data-v-23280afe
                                    />
                                    <span
                                      className="refer-now-txt"
                                      data-v-23280afe
                                    >
                                      Giới thiệu ngay
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="listing" data-v-23280afe>
                            <a
                              href="viec-lam/11892/senior-android-developer-(onsite-dao-tan)-hcn.html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11892/senior-android-developer-(onsite-dao-tan)-hcn.html"
                                data-v-23280afe
                              >
                                <div className="listing-logo" data-v-23280afe>
                                  <div className="logo-wrapper" data-v-23280afe>
                                    <img
                                      src="../static.devworks.jp/images/company/derUBKHloLWv82YHPeZttO6gTPuSLuccpN33e3oW.png"
                                      alt="Công ty Cổ phần Phần mềm Devwork"
                                      data-v-23280afe
                                    />
                                  </div>
                                </div>
                              </a>
                              <div className="listing-title" data-v-23280afe>
                                <a
                                  href="viec-lam/11892/senior-android-developer-(onsite-dao-tan)-hcn.html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>
                                    Senior Android Developer (Onsite Đào Tấn) -
                                    HCN
                                  </h4>
                                </a>
                                <div className="skillPrenium" data-v-23280afe>
                                  <a
                                    href="viec-lam/11892/senior-android-developer-(onsite-dao-tan)-hcn.html"
                                    data-v-23280afe
                                  ></a>
                                  <a
                                    href="viec-lam/android.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    Android
                                  </a>
                                </div>
                                <ul className="listing-icons" data-v-23280afe>
                                  <li className="salaryPrenium" data-v-23280afe>
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span data-v-23280afe>30-40 triệu</span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Hà Nội
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="listing-action text-right"
                                data-v-23280afe
                              >
                                <p
                                  className="fs-14 text-muted mt-1 mb-3"
                                  data-v-23280afe
                                >
                                  Tiền thưởng
                                </p>
                                <div className="salary mb-18" data-v-23280afe>
                                  <p className="salary mb-15" data-v-23280afe>
                                    Đăng nhập để xem
                                  </p>
                                </div>
                                <div className="refer-now" data-v-23280afe>
                                  <a
                                    className="gradient pointer"
                                    data-v-23280afe
                                  >
                                    <i
                                      className="icon-send-3 prt-2 mr-2"
                                      data-v-23280afe
                                    />
                                    <span
                                      className="refer-now-txt"
                                      data-v-23280afe
                                    >
                                      Giới thiệu ngay
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="listing" data-v-23280afe>
                            <a
                              href="viec-lam/11891/middle-android-developer-(onsite-dao-tan)-hcn.html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11891/middle-android-developer-(onsite-dao-tan)-hcn.html"
                                data-v-23280afe
                              >
                                <div className="listing-logo" data-v-23280afe>
                                  <div className="logo-wrapper" data-v-23280afe>
                                    <img
                                      src="../static.devworks.jp/images/company/derUBKHloLWv82YHPeZttO6gTPuSLuccpN33e3oW.png"
                                      alt="Công ty Cổ phần Phần mềm Devwork"
                                      data-v-23280afe
                                    />
                                  </div>
                                </div>
                              </a>
                              <div className="listing-title" data-v-23280afe>
                                <a
                                  href="viec-lam/11891/middle-android-developer-(onsite-dao-tan)-hcn.html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>
                                    Middle Android Developer (Onsite Đào Tấn) -
                                    HCN
                                  </h4>
                                </a>
                                <div className="skillPrenium" data-v-23280afe>
                                  <a
                                    href="viec-lam/11891/middle-android-developer-(onsite-dao-tan)-hcn.html"
                                    data-v-23280afe
                                  ></a>
                                  <a
                                    href="viec-lam/android.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    Android
                                  </a>
                                </div>
                                <ul className="listing-icons" data-v-23280afe>
                                  <li className="salaryPrenium" data-v-23280afe>
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span data-v-23280afe>15-20 triệu</span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Hà Nội
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="listing-action text-right"
                                data-v-23280afe
                              >
                                <p
                                  className="fs-14 text-muted mt-1 mb-3"
                                  data-v-23280afe
                                >
                                  Tiền thưởng
                                </p>
                                <div className="salary mb-18" data-v-23280afe>
                                  <p className="salary mb-15" data-v-23280afe>
                                    Đăng nhập để xem
                                  </p>
                                </div>
                                <div className="refer-now" data-v-23280afe>
                                  <a
                                    className="gradient pointer"
                                    data-v-23280afe
                                  >
                                    <i
                                      className="icon-send-3 prt-2 mr-2"
                                      data-v-23280afe
                                    />
                                    <span
                                      className="refer-now-txt"
                                      data-v-23280afe
                                    >
                                      Giới thiệu ngay
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="listing" data-v-23280afe>
                            <a
                              href="viec-lam/11889/lap-trinh-vien-java-(middle-senior).html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application border-yellow"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11889/lap-trinh-vien-java-(middle-senior).html"
                                data-v-23280afe
                              >
                                <div className="listing-logo" data-v-23280afe>
                                  <div className="logo-wrapper" data-v-23280afe>
                                    <img
                                      src="../static.devworks.jp/images/company/derUBKHloLWv82YHPeZttO6gTPuSLuccpN33e3oW.png"
                                      alt="Công ty Cổ phần Phần mềm Devwork"
                                      data-v-23280afe
                                    />
                                  </div>
                                </div>
                              </a>
                              <div className="listing-title" data-v-23280afe>
                                <a
                                  href="viec-lam/11889/lap-trinh-vien-java-(middle-senior).html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>
                                    Lập trình viên Java (Middle - Senior)
                                  </h4>
                                </a>
                                <div className="skillVip" data-v-23280afe>
                                  <a
                                    href="viec-lam/11889/lap-trinh-vien-java-(middle-senior).html"
                                    data-v-23280afe
                                  ></a>
                                  <a
                                    href="viec-lam/java.html"
                                    className="job-vip"
                                    data-v-23280afe
                                  >
                                    Java
                                  </a>
                                </div>
                                <ul className="listing-icons" data-v-23280afe>
                                  <li className="salaryVip" data-v-23280afe>
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span className="text-red" data-v-23280afe>
                                      80-100 triệu
                                    </span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Tokyo
                                  </li>
                                </ul>
                                <div
                                  className="job-description mt-15"
                                  data-v-23280afe
                                >
                                  Hạng mục dự án Phát triển, hệ thống kinh
                                  doanh/hệ thống web Chi tiết dự án Nhiều dự án
                                  đang được thực hiện bởi các công ty liên quan
                                  đến chuyển động DX, Chúng tôi sẽ cung cấp hỗ
                                  trợ cho một trong các dự án sau. ・Phát triển,
                                  vận hành và bảo trì hệ thống xe buýt ・Phát
                                  triển, vận hành và bảo trì hệ thống chia sẻ xe
                                  ・Hỗ trợ phát triển bảng hiệu *Chúng tôi dự
                                  định tập trung vào một dự án và cung cấp hỗ
                                  trợ cho các dự án khác tùy theo tình hình.
                                  Chúng tôi đang tìm kiếm các nhà lãnh đạo và
                                  thành viên, Chúng tôi muốn người lãnh đạo đóng
                                  quân ở Tokyo và các thành viên đóng quân ở
                                  Tokyo hoặc Osaka. Lãnh đạo cũng yêu cầu sự
                                  đánh giá và hỗ trợ từ các thành viên. Tuổi: ~
                                  cuối 40 Ga gần nhất: Monzennakacho/Kiba ・Đây
                                  là một dự án lâu dài. ・Đây là một kế hoạch
                                  dài hạn. ・Đối với người nước ngoài, vui lòng
                                  tham dự hai cuộc phỏng vấn.
                                </div>
                              </div>
                              <div
                                className="listing-action text-right"
                                data-v-23280afe
                              >
                                <p
                                  className="fs-14 text-muted mt-1 mb-3"
                                  data-v-23280afe
                                >
                                  Tiền thưởng
                                </p>
                                <div className="salary mb-18" data-v-23280afe>
                                  <p className="salary mb-15" data-v-23280afe>
                                    Đăng nhập để xem
                                  </p>
                                </div>
                                <div className="refer-now" data-v-23280afe>
                                  <a
                                    className="gradient pointer"
                                    data-v-23280afe
                                  >
                                    <i
                                      className="icon-send-3 prt-2 mr-2"
                                      data-v-23280afe
                                    />
                                    <span
                                      className="refer-now-txt"
                                      data-v-23280afe
                                    >
                                      Giới thiệu ngay
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="listing" data-v-23280afe>
                            <a
                              href="viec-lam/11888/senior-php-(onsite-tan-binh)_la.html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11888/senior-php-(onsite-tan-binh)_la.html"
                                data-v-23280afe
                              >
                                <div className="listing-logo" data-v-23280afe>
                                  <div className="logo-wrapper" data-v-23280afe>
                                    <img
                                      src="../static.devworks.jp/images/company/derUBKHloLWv82YHPeZttO6gTPuSLuccpN33e3oW.png"
                                      alt="Công ty Cổ phần Phần mềm Devwork"
                                      data-v-23280afe
                                    />
                                  </div>
                                </div>
                              </a>
                              <div className="listing-title" data-v-23280afe>
                                <a
                                  href="viec-lam/11888/senior-php-(onsite-tan-binh)_la.html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>
                                    Senior PHP (onsite Tân Bình)_LA
                                  </h4>
                                </a>
                                <div className="skillPrenium" data-v-23280afe>
                                  <a
                                    href="viec-lam/11888/senior-php-(onsite-tan-binh)_la.html"
                                    data-v-23280afe
                                  ></a>
                                  <a
                                    href="viec-lam/php.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    PHP
                                  </a>
                                </div>
                                <ul className="listing-icons" data-v-23280afe>
                                  <li className="salaryPrenium" data-v-23280afe>
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span data-v-23280afe>20-25 triệu</span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Hồ Chí Minh
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="listing-action text-right"
                                data-v-23280afe
                              >
                                <p
                                  className="fs-14 text-muted mt-1 mb-3"
                                  data-v-23280afe
                                >
                                  Tiền thưởng
                                </p>
                                <div className="salary mb-18" data-v-23280afe>
                                  <p className="salary mb-15" data-v-23280afe>
                                    Đăng nhập để xem
                                  </p>
                                </div>
                                <div className="refer-now" data-v-23280afe>
                                  <a
                                    className="gradient pointer"
                                    data-v-23280afe
                                  >
                                    <i
                                      className="icon-send-3 prt-2 mr-2"
                                      data-v-23280afe
                                    />
                                    <span
                                      className="refer-now-txt"
                                      data-v-23280afe
                                    >
                                      Giới thiệu ngay
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="listing" data-v-23280afe>
                            <a
                              href="viec-lam/11887/php-developer-(onsite-trung-kinh)_la.html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11887/php-developer-(onsite-trung-kinh)_la.html"
                                data-v-23280afe
                              >
                                <div className="listing-logo" data-v-23280afe>
                                  <div className="logo-wrapper" data-v-23280afe>
                                    <img
                                      src="../static.devworks.jp/images/company/derUBKHloLWv82YHPeZttO6gTPuSLuccpN33e3oW.png"
                                      alt="Công ty Cổ phần Phần mềm Devwork"
                                      data-v-23280afe
                                    />
                                  </div>
                                </div>
                              </a>
                              <div className="listing-title" data-v-23280afe>
                                <a
                                  href="viec-lam/11887/php-developer-(onsite-trung-kinh)_la.html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>
                                    PHP Developer (onsite Trung Kính)_LA
                                  </h4>
                                </a>
                                <div className="skillPrenium" data-v-23280afe>
                                  <a
                                    href="viec-lam/11887/php-developer-(onsite-trung-kinh)_la.html"
                                    data-v-23280afe
                                  ></a>
                                  <a
                                    href="viec-lam/php.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    PHP
                                  </a>
                                </div>
                                <ul className="listing-icons" data-v-23280afe>
                                  <li className="salaryPrenium" data-v-23280afe>
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span data-v-23280afe>20-25 triệu</span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Hà Nội
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="listing-action text-right"
                                data-v-23280afe
                              >
                                <p
                                  className="fs-14 text-muted mt-1 mb-3"
                                  data-v-23280afe
                                >
                                  Tiền thưởng
                                </p>
                                <div className="salary mb-18" data-v-23280afe>
                                  <p className="salary mb-15" data-v-23280afe>
                                    Đăng nhập để xem
                                  </p>
                                </div>
                                <div className="refer-now" data-v-23280afe>
                                  <a
                                    className="gradient pointer"
                                    data-v-23280afe
                                  >
                                    <i
                                      className="icon-send-3 prt-2 mr-2"
                                      data-v-23280afe
                                    />
                                    <span
                                      className="refer-now-txt"
                                      data-v-23280afe
                                    >
                                      Giới thiệu ngay
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="listing" data-v-23280afe>
                            <a
                              href="viec-lam/11886/fullstack-backend-remote_la.html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11886/fullstack-backend-remote_la.html"
                                data-v-23280afe
                              >
                                <div className="listing-logo" data-v-23280afe>
                                  <div className="logo-wrapper" data-v-23280afe>
                                    <img
                                      src="../static.devworks.jp/images/company/derUBKHloLWv82YHPeZttO6gTPuSLuccpN33e3oW.png"
                                      alt="Công ty Cổ phần Phần mềm Devwork"
                                      data-v-23280afe
                                    />
                                  </div>
                                </div>
                              </a>
                              <div className="listing-title" data-v-23280afe>
                                <a
                                  href="viec-lam/11886/fullstack-backend-remote_la.html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>
                                    Fullstack Backend Remote_LA
                                  </h4>
                                </a>
                                <div className="skillPrenium" data-v-23280afe>
                                  <a
                                    href="viec-lam/11886/fullstack-backend-remote_la.html"
                                    data-v-23280afe
                                  ></a>
                                  <a
                                    href="viec-lam/golang.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    Golang{" "}
                                  </a>
                                  <a
                                    href="viec-lam/ruby-on-rails.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    Ruby on Rails
                                  </a>
                                </div>
                                <ul className="listing-icons" data-v-23280afe>
                                  <li className="salaryPrenium" data-v-23280afe>
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span data-v-23280afe>30-50 triệu</span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Tất cả địa điểm
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="listing-action text-right"
                                data-v-23280afe
                              >
                                <p
                                  className="fs-14 text-muted mt-1 mb-3"
                                  data-v-23280afe
                                >
                                  Tiền thưởng
                                </p>
                                <div className="salary mb-18" data-v-23280afe>
                                  <p className="salary mb-15" data-v-23280afe>
                                    Đăng nhập để xem
                                  </p>
                                </div>
                                <div className="refer-now" data-v-23280afe>
                                  <a
                                    className="gradient pointer"
                                    data-v-23280afe
                                  >
                                    <i
                                      className="icon-send-3 prt-2 mr-2"
                                      data-v-23280afe
                                    />
                                    <span
                                      className="refer-now-txt"
                                      data-v-23280afe
                                    >
                                      Giới thiệu ngay
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="listing" data-v-23280afe>
                            <a
                              href="viec-lam/11885/java-developer-(onsite-timecity).html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11885/java-developer-(onsite-timecity).html"
                                data-v-23280afe
                              >
                                <div className="listing-logo" data-v-23280afe>
                                  <div className="logo-wrapper" data-v-23280afe>
                                    <img
                                      src="../static.devworks.jp/images/company/derUBKHloLWv82YHPeZttO6gTPuSLuccpN33e3oW.png"
                                      alt="Công ty Cổ phần Phần mềm Devwork"
                                      data-v-23280afe
                                    />
                                  </div>
                                </div>
                              </a>
                              <div className="listing-title" data-v-23280afe>
                                <a
                                  href="viec-lam/11885/java-developer-(onsite-timecity).html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>
                                    Java Developer (Onsite TimeCity)
                                  </h4>
                                </a>
                                <div className="skillPrenium" data-v-23280afe>
                                  <a
                                    href="viec-lam/11885/java-developer-(onsite-timecity).html"
                                    data-v-23280afe
                                  ></a>
                                  <a
                                    href="viec-lam/java.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    Java
                                  </a>
                                </div>
                                <ul className="listing-icons" data-v-23280afe>
                                  <li className="salaryPrenium" data-v-23280afe>
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span data-v-23280afe>25-30 triệu</span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Hà Nội
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="listing-action text-right"
                                data-v-23280afe
                              >
                                <p
                                  className="fs-14 text-muted mt-1 mb-3"
                                  data-v-23280afe
                                >
                                  Tiền thưởng
                                </p>
                                <div className="salary mb-18" data-v-23280afe>
                                  <p className="salary mb-15" data-v-23280afe>
                                    Đăng nhập để xem
                                  </p>
                                </div>
                                <div className="refer-now" data-v-23280afe>
                                  <a
                                    className="gradient pointer"
                                    data-v-23280afe
                                  >
                                    <i
                                      className="icon-send-3 prt-2 mr-2"
                                      data-v-23280afe
                                    />
                                    <span
                                      className="refer-now-txt"
                                      data-v-23280afe
                                    >
                                      Giới thiệu ngay
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="listing" data-v-23280afe>
                            <a
                              href="viec-lam/11884/se-vue.html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application border-yellow"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11884/se-vue.html"
                                data-v-23280afe
                              >
                                <div className="listing-logo" data-v-23280afe>
                                  <div className="logo-wrapper" data-v-23280afe>
                                    <img
                                      src="../static.devworks.jp/images/company/derUBKHloLWv82YHPeZttO6gTPuSLuccpN33e3oW.png"
                                      alt="Công ty Cổ phần Phần mềm Devwork"
                                      data-v-23280afe
                                    />
                                  </div>
                                </div>
                              </a>
                              <div className="listing-title" data-v-23280afe>
                                <a
                                  href="viec-lam/11884/se-vue.html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>
                                    SE Vue.js、Java Spring Remote
                                  </h4>
                                </a>
                                <div className="skillVip" data-v-23280afe>
                                  <a
                                    href="viec-lam/11884/se-vue.html"
                                    data-v-23280afe
                                  ></a>
                                  <a
                                    href="viec-lam/java.html"
                                    className="job-vip"
                                    data-v-23280afe
                                  >
                                    Java{" "}
                                  </a>
                                  <a
                                    href="viec-lam/vuejs.html"
                                    className="job-vip"
                                    data-v-23280afe
                                  >
                                    VueJS
                                  </a>
                                </div>
                                <ul className="listing-icons" data-v-23280afe>
                                  <li className="salaryVip" data-v-23280afe>
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span className="text-red" data-v-23280afe>
                                      60-80 triệu
                                    </span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Tokyo
                                  </li>
                                </ul>
                                <div
                                  className="job-description mt-15"
                                  data-v-23280afe
                                >
                                  案件カテゴリー: 業務システム /フロントエンド
                                  ※案件内容： ※作業場所： 人材要件
                                  必須スキル：Vue.js、Java SpringFramework
                                  経験年数：5年以上 年齢制限：なし
                                  ※契約期間：2023年12月01日 〜 2024年03月31日
                                  ※継続の可能性あり ※契約形態：派遣
                                  ※外国籍：可（N1必須）
                                </div>
                              </div>
                              <div
                                className="listing-action text-right"
                                data-v-23280afe
                              >
                                <p
                                  className="fs-14 text-muted mt-1 mb-3"
                                  data-v-23280afe
                                >
                                  Tiền thưởng
                                </p>
                                <div className="salary mb-18" data-v-23280afe>
                                  <p className="salary mb-15" data-v-23280afe>
                                    Đăng nhập để xem
                                  </p>
                                </div>
                                <div className="refer-now" data-v-23280afe>
                                  <a
                                    className="gradient pointer"
                                    data-v-23280afe
                                  >
                                    <i
                                      className="icon-send-3 prt-2 mr-2"
                                      data-v-23280afe
                                    />
                                    <span
                                      className="refer-now-txt"
                                      data-v-23280afe
                                    >
                                      Giới thiệu ngay
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="listing" data-v-23280afe>
                            <a
                              href="viec-lam/11883/php-wordpress-developer-(remote)-hcn.html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11883/php-wordpress-developer-(remote)-hcn.html"
                                data-v-23280afe
                              >
                                <div className="listing-logo" data-v-23280afe>
                                  <div className="logo-wrapper" data-v-23280afe>
                                    <img
                                      src="../static.devworks.jp/https_/static.devwork.vn/images/company/IdumXaeXarG3olGCu3dAXtf8aCw52CevpptrQwvA.jpg"
                                      alt="Devwork"
                                      data-v-23280afe
                                    />
                                  </div>
                                </div>
                              </a>
                              <div className="listing-title" data-v-23280afe>
                                <a
                                  href="viec-lam/11883/php-wordpress-developer-(remote)-hcn.html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>
                                    PHP Wordpress Developer (Remote) - HCN
                                  </h4>
                                </a>
                                <div className="skillPrenium" data-v-23280afe>
                                  <a
                                    href="viec-lam/11883/php-wordpress-developer-(remote)-hcn.html"
                                    data-v-23280afe
                                  ></a>
                                  <a
                                    href="viec-lam/php.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    PHP{" "}
                                  </a>
                                  <a
                                    href="viec-lam/wordpress.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    Wordpress
                                  </a>
                                </div>
                                <ul className="listing-icons" data-v-23280afe>
                                  <li className="salaryPrenium" data-v-23280afe>
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span data-v-23280afe>25-35 triệu</span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Hà Nội
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="listing-action text-right"
                                data-v-23280afe
                              >
                                <p
                                  className="fs-14 text-muted mt-1 mb-3"
                                  data-v-23280afe
                                >
                                  Tiền thưởng
                                </p>
                                <div className="salary mb-18" data-v-23280afe>
                                  <p className="salary mb-15" data-v-23280afe>
                                    Đăng nhập để xem
                                  </p>
                                </div>
                                <div className="refer-now" data-v-23280afe>
                                  <a
                                    className="gradient pointer"
                                    data-v-23280afe
                                  >
                                    <i
                                      className="icon-send-3 prt-2 mr-2"
                                      data-v-23280afe
                                    />
                                    <span
                                      className="refer-now-txt"
                                      data-v-23280afe
                                    >
                                      Giới thiệu ngay
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="listing" data-v-23280afe>
                            <a
                              href="viec-lam/11880/sap-basis-consultant.html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11880/sap-basis-consultant.html"
                                data-v-23280afe
                              >
                                <div className="listing-logo" data-v-23280afe>
                                  <div className="logo-wrapper" data-v-23280afe>
                                    <img
                                      src="../static.devworks.jp/images/company/8uxfaivazYjl5oyk3XF6glHGhiunUZJTF3uEWSwn.png"
                                      alt="Công ty cổ phần Vnext Software"
                                      data-v-23280afe
                                    />
                                  </div>
                                </div>
                              </a>
                              <div className="listing-title" data-v-23280afe>
                                <a
                                  href="viec-lam/11880/sap-basis-consultant.html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>SAP BASIS CONSULTANT</h4>
                                </a>
                                <div className="skillPrenium" data-v-23280afe>
                                  <a
                                    href="viec-lam/11880/sap-basis-consultant.html"
                                    data-v-23280afe
                                  ></a>
                                  <a
                                    href="viec-lam/sap.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    SAP
                                  </a>
                                </div>
                                <ul className="listing-icons" data-v-23280afe>
                                  <li className="salaryPrenium" data-v-23280afe>
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span data-v-23280afe>30-40 triệu</span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Hà Nội
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="listing-action text-right"
                                data-v-23280afe
                              >
                                <p
                                  className="fs-14 text-muted mt-1 mb-3"
                                  data-v-23280afe
                                >
                                  Tiền thưởng
                                </p>
                                <div className="salary mb-18" data-v-23280afe>
                                  <p className="salary mb-15" data-v-23280afe>
                                    Đăng nhập để xem
                                  </p>
                                </div>
                                <div className="refer-now" data-v-23280afe>
                                  <a
                                    className="gradient pointer"
                                    data-v-23280afe
                                  >
                                    <i
                                      className="icon-send-3 prt-2 mr-2"
                                      data-v-23280afe
                                    />
                                    <span
                                      className="refer-now-txt"
                                      data-v-23280afe
                                    >
                                      Giới thiệu ngay
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="listing" data-v-23280afe>
                            <a
                              href="viec-lam/11861/shopify-remote-100percent.html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11861/shopify-remote-100percent.html"
                                data-v-23280afe
                              >
                                <div className="listing-logo" data-v-23280afe>
                                  <div className="logo-wrapper" data-v-23280afe>
                                    <img
                                      src="../static.devworks.jp/images/company/derUBKHloLWv82YHPeZttO6gTPuSLuccpN33e3oW.png"
                                      alt="Công ty Cổ phần Phần mềm Devwork"
                                      data-v-23280afe
                                    />
                                  </div>
                                </div>
                              </a>
                              <div className="listing-title" data-v-23280afe>
                                <a
                                  href="viec-lam/11861/shopify-remote-100percent.html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>Shopify [Remote 100%]</h4>
                                </a>
                                <div className="skillPrenium" data-v-23280afe>
                                  <a
                                    href="viec-lam/11861/shopify-remote-100percent.html"
                                    data-v-23280afe
                                  ></a>
                                  <a
                                    href="viec-lam/shopify.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    Shopify
                                  </a>
                                </div>
                                <ul className="listing-icons" data-v-23280afe>
                                  <li className="salaryPrenium" data-v-23280afe>
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span data-v-23280afe>30-50 triệu</span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Tất cả địa điểm
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="listing-action text-right"
                                data-v-23280afe
                              >
                                <p
                                  className="fs-14 text-muted mt-1 mb-3"
                                  data-v-23280afe
                                >
                                  Tiền thưởng
                                </p>
                                <div className="salary mb-18" data-v-23280afe>
                                  <p className="salary mb-15" data-v-23280afe>
                                    Đăng nhập để xem
                                  </p>
                                </div>
                                <div className="refer-now" data-v-23280afe>
                                  <a
                                    className="gradient pointer"
                                    data-v-23280afe
                                  >
                                    <i
                                      className="icon-send-3 prt-2 mr-2"
                                      data-v-23280afe
                                    />
                                    <span
                                      className="refer-now-txt"
                                      data-v-23280afe
                                    >
                                      Giới thiệu ngay
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="listing" data-v-23280afe>
                            <a
                              href="viec-lam/11857/brse-(onsite-xuan-thuy)_la.html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11857/brse-(onsite-xuan-thuy)_la.html"
                                data-v-23280afe
                              >
                                <div className="listing-logo" data-v-23280afe>
                                  <div className="logo-wrapper" data-v-23280afe>
                                    <img
                                      src="../static.devworks.jp/images/company/derUBKHloLWv82YHPeZttO6gTPuSLuccpN33e3oW.png"
                                      alt="Công ty Cổ phần Phần mềm Devwork"
                                      data-v-23280afe
                                    />
                                  </div>
                                </div>
                              </a>
                              <div className="listing-title" data-v-23280afe>
                                <a
                                  href="viec-lam/11857/brse-(onsite-xuan-thuy)_la.html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>
                                    Brse (Onsite Xuân Thủy)_LA
                                  </h4>
                                </a>
                                <div className="skillPrenium" data-v-23280afe>
                                  <a
                                    href="viec-lam/11857/brse-(onsite-xuan-thuy)_la.html"
                                    data-v-23280afe
                                  ></a>
                                  <a
                                    href="viec-lam/bridge-engineer.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    Bridge Engineer
                                  </a>
                                </div>
                                <ul className="listing-icons" data-v-23280afe>
                                  <li className="salaryPrenium" data-v-23280afe>
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span data-v-23280afe>25-30 triệu</span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Hà Nội
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="listing-action text-right"
                                data-v-23280afe
                              >
                                <p
                                  className="fs-14 text-muted mt-1 mb-3"
                                  data-v-23280afe
                                >
                                  Tiền thưởng
                                </p>
                                <div className="salary mb-18" data-v-23280afe>
                                  <p className="salary mb-15" data-v-23280afe>
                                    Đăng nhập để xem
                                  </p>
                                </div>
                                <div className="refer-now" data-v-23280afe>
                                  <a
                                    className="gradient pointer"
                                    data-v-23280afe
                                  >
                                    <i
                                      className="icon-send-3 prt-2 mr-2"
                                      data-v-23280afe
                                    />
                                    <span
                                      className="refer-now-txt"
                                      data-v-23280afe
                                    >
                                      Giới thiệu ngay
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="listing" data-v-23280afe>
                            <a
                              href="viec-lam/11855/ios-developer-(onsite-pham-van-dong).html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11855/ios-developer-(onsite-pham-van-dong).html"
                                data-v-23280afe
                              >
                                <div className="listing-logo" data-v-23280afe>
                                  <div className="logo-wrapper" data-v-23280afe>
                                    <img
                                      src="../static.devworks.jp/images/company/derUBKHloLWv82YHPeZttO6gTPuSLuccpN33e3oW.png"
                                      alt="Công ty Cổ phần Phần mềm Devwork"
                                      data-v-23280afe
                                    />
                                  </div>
                                </div>
                              </a>
                              <div className="listing-title" data-v-23280afe>
                                <a
                                  href="viec-lam/11855/ios-developer-(onsite-pham-van-dong).html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>
                                    IOS Developer (Onsite Pham Văn Đồng)
                                  </h4>
                                </a>
                                <div className="skillPrenium" data-v-23280afe>
                                  <a
                                    href="viec-lam/11855/ios-developer-(onsite-pham-van-dong).html"
                                    data-v-23280afe
                                  ></a>
                                  <a
                                    href="viec-lam/ios.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    iOS
                                  </a>
                                </div>
                                <ul className="listing-icons" data-v-23280afe>
                                  <li className="salaryPrenium" data-v-23280afe>
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span data-v-23280afe>15-25 triệu</span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Hà Nội
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="listing-action text-right"
                                data-v-23280afe
                              >
                                <p
                                  className="fs-14 text-muted mt-1 mb-3"
                                  data-v-23280afe
                                >
                                  Tiền thưởng
                                </p>
                                <div className="salary mb-18" data-v-23280afe>
                                  <p className="salary mb-15" data-v-23280afe>
                                    Đăng nhập để xem
                                  </p>
                                </div>
                                <div className="refer-now" data-v-23280afe>
                                  <a
                                    className="gradient pointer"
                                    data-v-23280afe
                                  >
                                    <i
                                      className="icon-send-3 prt-2 mr-2"
                                      data-v-23280afe
                                    />
                                    <span
                                      className="refer-now-txt"
                                      data-v-23280afe
                                    >
                                      Giới thiệu ngay
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="listing" data-v-23280afe>
                            <a
                              href="viec-lam/11854/senior-manager-servicenow-coe-(onsite-q1-hcm).html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11854/senior-manager-servicenow-coe-(onsite-q1-hcm).html"
                                data-v-23280afe
                              >
                                <div className="listing-logo" data-v-23280afe>
                                  <div className="logo-wrapper" data-v-23280afe>
                                    <img
                                      src="../static.devworks.jp/images/company/derUBKHloLWv82YHPeZttO6gTPuSLuccpN33e3oW.png"
                                      alt="Công ty Cổ phần Phần mềm Devwork"
                                      data-v-23280afe
                                    />
                                  </div>
                                </div>
                              </a>
                              <div className="listing-title" data-v-23280afe>
                                <a
                                  href="viec-lam/11854/senior-manager-servicenow-coe-(onsite-q1-hcm).html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>
                                    Senior Manager, ServiceNow COE (onsite Q1,
                                    HCM)
                                  </h4>
                                </a>
                                <div className="skillPrenium" data-v-23280afe>
                                  <a
                                    href="viec-lam/11854/senior-manager-servicenow-coe-(onsite-q1-hcm).html"
                                    data-v-23280afe
                                  ></a>
                                  <a
                                    href="viec-lam/windows-server.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    WindowsServer
                                  </a>
                                </div>
                                <ul className="listing-icons" data-v-23280afe>
                                  <li className="salaryPrenium" data-v-23280afe>
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span data-v-23280afe>30-40 triệu</span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Hồ Chí Minh
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="listing-action text-right"
                                data-v-23280afe
                              >
                                <p
                                  className="fs-14 text-muted mt-1 mb-3"
                                  data-v-23280afe
                                >
                                  Tiền thưởng
                                </p>
                                <div className="salary mb-18" data-v-23280afe>
                                  <p className="salary mb-15" data-v-23280afe>
                                    Đăng nhập để xem
                                  </p>
                                </div>
                                <div className="refer-now" data-v-23280afe>
                                  <a
                                    className="gradient pointer"
                                    data-v-23280afe
                                  >
                                    <i
                                      className="icon-send-3 prt-2 mr-2"
                                      data-v-23280afe
                                    />
                                    <span
                                      className="refer-now-txt"
                                      data-v-23280afe
                                    >
                                      Giới thiệu ngay
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="listing" data-v-23280afe>
                            <a
                              href="viec-lam/11851/hybridjp_-htmlcssjavascript.html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application border-yellow"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11851/hybridjp_-htmlcssjavascript.html"
                                data-v-23280afe
                              >
                                <div className="listing-logo" data-v-23280afe>
                                  <div className="logo-wrapper" data-v-23280afe>
                                    <img
                                      src="../static.devworks.jp/https_/static.devworks.jp/images/company/KEaRmF5JZqenzOUcR8LsBSW7IxtYLcwbqPqpF7JY.jpg"
                                      alt="Devwork Client"
                                      data-v-23280afe
                                    />
                                  </div>
                                </div>
                              </a>
                              <div className="listing-title" data-v-23280afe>
                                <a
                                  href="viec-lam/11851/hybridjp_-htmlcssjavascript.html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>
                                    Hybrid/JP_ HTML/CSS、JavaScript
                                  </h4>
                                </a>
                                <div className="skillVip" data-v-23280afe>
                                  <a
                                    href="viec-lam/11851/hybridjp_-htmlcssjavascript.html"
                                    data-v-23280afe
                                  ></a>
                                  <a
                                    href="viec-lam/css3.html"
                                    className="job-vip"
                                    data-v-23280afe
                                  >
                                    CSS3{" "}
                                  </a>
                                  <a
                                    href="viec-lam/html5.html"
                                    className="job-vip"
                                    data-v-23280afe
                                  >
                                    HTML5{" "}
                                  </a>
                                  <a
                                    href="viec-lam/javascript.html"
                                    className="job-vip"
                                    data-v-23280afe
                                  >
                                    Javascript
                                  </a>
                                </div>
                                <ul className="listing-icons" data-v-23280afe>
                                  <li className="salaryVip" data-v-23280afe>
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span className="text-red" data-v-23280afe>
                                      60-80 triệu
                                    </span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Tokyo
                                  </li>
                                </ul>
                                <div
                                  className="job-description mt-15"
                                  data-v-23280afe
                                >
                                  - Đề xuất và phát triển các công cụ nhằm cải
                                  thiện quy trình phát triển trong môi trường
                                  phát triển hệ thống của nhà sản xuất ô tô. -
                                  Hiện tại, đã có cơ sở dữ liệu (DB) để lưu trữ
                                  thông tin thiết kế trong môi trường phát
                                  triển. Công việc được giả định là tạo ra các
                                  giao diện (HTML) để xem và chỉnh sửa dữ liệu
                                  được trích xuất từ cơ sở dữ liệu này trong môi
                                  trường offline.
                                </div>
                              </div>
                              <div
                                className="listing-action text-right"
                                data-v-23280afe
                              >
                                <p
                                  className="fs-14 text-muted mt-1 mb-3"
                                  data-v-23280afe
                                >
                                  Tiền thưởng
                                </p>
                                <div className="salary mb-18" data-v-23280afe>
                                  <p className="salary mb-15" data-v-23280afe>
                                    Đăng nhập để xem
                                  </p>
                                </div>
                                <div className="refer-now" data-v-23280afe>
                                  <a
                                    className="gradient pointer"
                                    data-v-23280afe
                                  >
                                    <i
                                      className="icon-send-3 prt-2 mr-2"
                                      data-v-23280afe
                                    />
                                    <span
                                      className="refer-now-txt"
                                      data-v-23280afe
                                    >
                                      Giới thiệu ngay
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="listing" data-v-23280afe>
                            <a
                              href="viec-lam/11850/remotejp-php-javascript.html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application border-yellow"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11850/remotejp-php-javascript.html"
                                data-v-23280afe
                              >
                                <div className="listing-logo" data-v-23280afe>
                                  <div className="logo-wrapper" data-v-23280afe>
                                    <img
                                      src="../static.devworks.jp/https_/static.devworks.jp/images/company/KEaRmF5JZqenzOUcR8LsBSW7IxtYLcwbqPqpF7JY.jpg"
                                      alt="Devwork Client"
                                      data-v-23280afe
                                    />
                                  </div>
                                </div>
                              </a>
                              <div className="listing-title" data-v-23280afe>
                                <a
                                  href="viec-lam/11850/remotejp-php-javascript.html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>
                                    Remote/JP PHP, JavaScript
                                  </h4>
                                </a>
                                <div className="skillVip" data-v-23280afe>
                                  <a
                                    href="viec-lam/11850/remotejp-php-javascript.html"
                                    data-v-23280afe
                                  ></a>
                                  <a
                                    href="viec-lam/css3.html"
                                    className="job-vip"
                                    data-v-23280afe
                                  >
                                    CSS3{" "}
                                  </a>
                                  <a
                                    href="viec-lam/html5.html"
                                    className="job-vip"
                                    data-v-23280afe
                                  >
                                    HTML5{" "}
                                  </a>
                                  <a
                                    href="viec-lam/javascript.html"
                                    className="job-vip"
                                    data-v-23280afe
                                  >
                                    Javascript
                                  </a>
                                </div>
                                <ul className="listing-icons" data-v-23280afe>
                                  <li className="salaryVip" data-v-23280afe>
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span className="text-red" data-v-23280afe>
                                      50-70 triệu
                                    </span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Tokyo
                                  </li>
                                </ul>
                                <div
                                  className="job-description mt-15"
                                  data-v-23280afe
                                >
                                  Chịu trách nhiệm thực hiện công việc lập trình
                                  trong việc tùy chỉnh phần mềm gói của chúng
                                  tôi. ・ Thường xuyên thực hiện công việc dựa
                                  trên tài liệu đặc tả lập trình, nhưng cũng có
                                  trường hợp công việc được chỉ định bằng lời.
                                  ・ Phạm vi công việc bao gồm lập trình và kiểm
                                  tra độc lập. ・ Trong quá trình kiểm tra độc
                                  lập, bạn sẽ thực hiện công việc dựa trên dữ
                                  liệu kiểm tra đã được bàn bạc trước. ・ Thực
                                  hiện công việc lập trình dựa trên quy tắc mã
                                  lập trình của bên chuyên nghiệp theo yêu cầu.
                                </div>
                              </div>
                              <div
                                className="listing-action text-right"
                                data-v-23280afe
                              >
                                <p
                                  className="fs-14 text-muted mt-1 mb-3"
                                  data-v-23280afe
                                >
                                  Tiền thưởng
                                </p>
                                <div className="salary mb-18" data-v-23280afe>
                                  <p className="salary mb-15" data-v-23280afe>
                                    Đăng nhập để xem
                                  </p>
                                </div>
                                <div className="refer-now" data-v-23280afe>
                                  <a
                                    className="gradient pointer"
                                    data-v-23280afe
                                  >
                                    <i
                                      className="icon-send-3 prt-2 mr-2"
                                      data-v-23280afe
                                    />
                                    <span
                                      className="refer-now-txt"
                                      data-v-23280afe
                                    >
                                      Giới thiệu ngay
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          page-per-block={7}
                          className="pagination-container"
                          data-v-23280afe
                        >
                          <ul className="pagination-nav pagination-prev">
                            <li>
                              <a
                                href="viec-lam2679.html?page=1"
                                className="page-prev disabled"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="1em"
                                  viewBox="0 0 512 512"
                                >
                                  <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" />
                                </svg>
                              </a>
                            </li>
                            <li className="pagination-item">
                              <a
                                href="viec-lam02e4.html?page=0"
                                className="page-prev disabled"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="1em"
                                  viewBox="0 0 320 512"
                                >
                                  <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                                </svg>
                              </a>
                            </li>
                          </ul>
                          <nav className="pagination pagination-center">
                            <ul>
                              <li className="pagination-item">
                                <a
                                  href="viec-lam2679.html?page=1"
                                  disabled="disabled"
                                  className="page-item current-page disabled"
                                >
                                  1
                                </a>
                              </li>
                              <li className="pagination-item">
                                <a
                                  href="viec-lam4658.html?page=2"
                                  className="page-item"
                                >
                                  2
                                </a>
                              </li>
                              <li className="pagination-item">
                                <a
                                  href="viec-lam9ba9.html?page=3"
                                  className="page-item"
                                >
                                  3
                                </a>
                              </li>
                              <li className="pagination-item">
                                <a
                                  href="viec-lamfdb0.html?page=4"
                                  className="page-item"
                                >
                                  4
                                </a>
                              </li>
                              <li className="pagination-item">
                                <a
                                  href="viec-lamaf4d.html?page=5"
                                  className="page-item"
                                >
                                  5
                                </a>
                              </li>
                            </ul>
                          </nav>
                          <ul className="pagination-nav pagination-next">
                            <li className="pagination-item">
                              <a
                                href="viec-lam4658.html?page=2"
                                className="page-next"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="1em"
                                  viewBox="0 0 320 512"
                                >
                                  <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                </svg>
                              </a>
                            </li>
                            <li className="pagination-item">
                              <a
                                href="viec-lam235c.html?page=7"
                                className="page-next"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="1em"
                                  viewBox="0 0 512 512"
                                >
                                  <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                                </svg>
                              </a>
                            </li>
                          </ul>
                          <div className="clearfix" />
                        </div>
                      </section>
                    </div>
                    <div className="col-right-mobile col-lg-3 d-none">
                      <div className="widget">
                        <Link to="/dangky">
                          <img
                            src={Tuyendung}
                            alt=""
                            className="rounded block"
                          />
                        </Link>
                      </div>
                      <div className="widget">
                        <Link to="/dangky/hrfreelance">
                          <img src={AdsJob} alt="" className="rounded block" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-15 mt-30 pr-0 pl-0">
                    <div
                      className="agile agile--ssr agile--auto-play"
                      style={{ boxShadow: "0 0 40px rgba(82, 85, 90, 0.1)" }}
                    >
                      <div className="agile__list">
                        <div
                          className="agile__track"
                          style={{
                            transform: "translate(0px)",
                            transition: "transform ease 0ms",
                          }}
                        >
                          {/* <div className="agile__slides agile__slides--cloned">
                            <div>
                              <a
                                href="https://www.devwork.vn/nha-tuyen-dung/nhan-su-tiem-nang"
                                target="_blank"
                              >
                                <img
                                  src="../static.devworks.jp/images/slide/3rutVavbRFiRz6MccG8Me4jWwR73MAxOzS7RSJ4v.png"
                                  className="slide"
                                />
                              </a>
                            </div>
                            <div>
                              <a href="index.html" target="_blank">
                                <img
                                  src="../static.devworks.jp/images/slide/RNcqF5cMg3MFn8IOBsNaUJD0HPfOSakidjbr4f7d.png"
                                  className="slide"
                                />
                              </a>
                            </div>
                            <div>
                              <a href="index.html" target="_blank">
                                <img
                                  src="../static.devworks.jp/images/slide/HMv0dkFWpcZMH8NakC1FQifEZLwvrgndOilxoU2e.png"
                                  className="slide"
                                />
                              </a>
                            </div>
                          </div> */}
                          <div className="agile__slides agile__slides--regular">
                            <div>
                              <a
                                href="https://www.devwork.vn/nha-tuyen-dung/nhan-su-tiem-nang"
                                target="_blank"
                              >
                                <img src={Slide1} className="slide" />
                              </a>
                            </div>
                            <div>
                              <a href="index.html" target="_blank">
                                <img src={Slide2} className="slide" />
                              </a>
                            </div>
                            <div>
                              <a href="index.html" target="_blank">
                                <img src={Slide3} className="slide" />
                              </a>
                            </div>
                          </div>
                          {/* <div className="agile__slides agile__slides--cloned">
                            <div>
                              <a
                                href="https://www.devwork.vn/nha-tuyen-dung/nhan-su-tiem-nang"
                                target="_blank"
                              >
                                <img
                                  src="../static.devworks.jp/images/slide/3rutVavbRFiRz6MccG8Me4jWwR73MAxOzS7RSJ4v.png"
                                  className="slide"
                                />
                              </a>
                            </div>
                            <div>
                              <a href="index.html" target="_blank">
                                <img
                                  src="../static.devworks.jp/images/slide/RNcqF5cMg3MFn8IOBsNaUJD0HPfOSakidjbr4f7d.png"
                                  className="slide"
                                />
                              </a>
                            </div>
                            <div>
                              <a href="index.html" target="_blank">
                                <img
                                  src="../static.devworks.jp/images/slide/HMv0dkFWpcZMH8NakC1FQifEZLwvrgndOilxoU2e.png"
                                  className="slide"
                                />
                              </a>
                            </div>
                          </div> */}
                        </div>
                      </div>

                      <div className="agile__actions">
                        <button
                          aria-label="Previous"
                          type="button"
                          className="agile__nav-button agile__nav-button--prev"
                        >
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAAYUlEQVRIx+2TIQ6AQAwEu4Tf8CPgH9iTfJC3ICAMtii4hAZBR1U0s11RsyT5BKAAc6QcYAO6KPkO9JHy4T/y5sHO6ma9er1rMbkWY4bchVQ9WlsbIKkAZmaHpCWkRZJcOAFPpJH2vflrZAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wNy0wN1QwNTo0Njo0NiswMDowMNJ5V1oAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDctMDdUMDU6NDY6NDYrMDA6MDCjJO/mAAAAAElFTkSuQmCC" />
                        </button>
                        <ul className="agile__dots">
                          <li className="agile__dot">
                            <button type="button">1</button>
                          </li>
                          <li className="agile__dot">
                            <button type="button">2</button>
                          </li>
                          <li className="agile__dot">
                            <button type="button">3</button>
                          </li>
                          <li className="agile__dot">
                            <button type="button">4</button>
                          </li>
                          <li className="agile__dot">
                            <button type="button">5</button>
                          </li>
                        </ul>
                        <button
                          aria-label="Next"
                          type="button"
                          className="agile__nav-button agile__nav-button--next"
                        >
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAATklEQVRIx2NgGAWjgC7g////Df///++gleHa//////0fAhpoZUkIkiU088kItYSJDDsYkdjfqe36UCTX148aDjOcLhmtjmaGj4JRQBAAANp3k5UVfuMKAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA3LTA3VDA1OjQ2OjU3KzAwOjAwuKRccAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wNy0wN1QwNTo0Njo1NyswMDowMMn55MwAAAAASUVORK5CYII=" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div data-fetch-key="JobSearch:2" className="container">
                <div className="tag-slot">
                  <a href="viec-lam/java.html" style={{ margin: "7.5px" }}>
                    <div className="search-tags-footer">
                      <div className="mb-15">Java</div>
                      <div className="count-skills">14 Việc làm</div>
                    </div>
                  </a>
                  <a
                    href="viec-lam/bridge-engineer.html"
                    style={{ margin: "7.5px" }}
                  >
                    <div className="search-tags-footer">
                      <div className="mb-15">Bridge Engineer</div>
                      <div className="count-skills">4 Việc làm</div>
                    </div>
                  </a>
                  <a href="viec-lam/php.html" style={{ margin: "7.5px" }}>
                    <div className="search-tags-footer">
                      <div className="mb-15">PHP</div>
                      <div className="count-skills">17 Việc làm</div>
                    </div>
                  </a>
                  <a
                    href="viec-lam/product-manager.html"
                    style={{ margin: "7.5px" }}
                  >
                    <div className="search-tags-footer">
                      <div className="mb-15">Product Manager</div>
                      <div className="count-skills">4 Việc làm</div>
                    </div>
                  </a>
                  <a
                    href="viec-lam/product-owner.html"
                    style={{ margin: "7.5px" }}
                  >
                    <div className="search-tags-footer">
                      <div className="mb-15">Product Owner</div>
                      <div className="count-skills">4 Việc làm</div>
                    </div>
                  </a>
                  <a href="viec-lam/ios.html" style={{ margin: "7.5px" }}>
                    <div className="search-tags-footer">
                      <div className="mb-15">iOS</div>
                      <div className="count-skills">4 Việc làm</div>
                    </div>
                  </a>
                  <a href="viec-lam/android.html" style={{ margin: "7.5px" }}>
                    <div className="search-tags-footer">
                      <div className="mb-15">Android</div>
                      <div className="count-skills">7 Việc làm</div>
                    </div>
                  </a>
                  <a href="viec-lam/uiux.html" style={{ margin: "7.5px" }}>
                    <div className="search-tags-footer">
                      <div className="mb-15">UI/UX</div>
                      <div className="count-skills">3 Việc làm</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
        <div className="portal-outside">
          <div className="vue-portal-target" />
        </div>
      </div>
    </div>
  );
}

export default Work;

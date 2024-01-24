import React from "react";
import Footer from "../Footer";
import Header from "../Header";
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
function WorkVietNam() {
  return (
    <div>
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
                        id="vs1288__combobox"
                        role="combobox"
                        aria-expanded="false"
                        aria-owns="vs1288__listbox"
                        aria-label="Search for option"
                        className="vs__dropdown-toggle"
                      >
                        <div className="vs__selected-options">
                          <input
                            placeholder="Kỹ năng"
                            aria-autocomplete="list"
                            aria-labelledby="vs1288__combobox"
                            aria-controls="vs1288__listbox"
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
                        id="vs1288__listbox"
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
                        id="vs1289__combobox"
                        role="combobox"
                        aria-expanded="false"
                        aria-owns="vs1289__listbox"
                        aria-label="Search for option"
                        className="vs__dropdown-toggle"
                      >
                        <div className="vs__selected-options">
                          <span className="vs__selected">Việt Nam</span>
                          <input
                            aria-autocomplete="list"
                            aria-labelledby="vs1289__combobox"
                            aria-controls="vs1289__listbox"
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
                        id="vs1289__listbox"
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
                        id="vs1290__combobox"
                        role="combobox"
                        aria-expanded="false"
                        aria-owns="vs1290__listbox"
                        aria-label="Search for option"
                        className="vs__dropdown-toggle"
                      >
                        <div className="vs__selected-options">
                          <input
                            placeholder="Thành phố"
                            aria-autocomplete="list"
                            aria-labelledby="vs1290__combobox"
                            aria-controls="vs1290__listbox"
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
                        id="vs1290__listbox"
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
                    <strong>90</strong> cơ hội nhận bonus hấp dẫn khi ứng tuyển,
                    giới thiệu ứng viên.
                  </h4>
                  <div className="text-showing mb-15 mt-5 fs-14 help-block">
                    Hiển thị 20/90 kết quả tìm kiếm.
                  </div>
                </div>
                <div id="list-job-container" classs="row lr-15">
                  <div className="col-right col-lg-3 pl-0 pr-15">
                    <div className="widget">
                      <Link to="/dangky">
                        <img src={Tuyendung} alt="" className="rounded block" />
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
                                />
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
                                  <i className="icon-dollar" data-v-23280afe />
                                  <span data-v-23280afe>10-15 triệu</span>
                                </li>
                                <li className="location" data-v-23280afe>
                                  <i className="icon-map" data-v-23280afe /> Hà
                                  Nội
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
                                <a className="gradient pointer" data-v-23280afe>
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
                                />
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
                                  <i className="icon-dollar" data-v-23280afe />
                                  <span data-v-23280afe>Dưới 7 triệu</span>
                                </li>
                                <li className="location" data-v-23280afe>
                                  <i className="icon-map" data-v-23280afe /> Hà
                                  Nội
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
                                <a className="gradient pointer" data-v-23280afe>
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
                                />
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
                                  <i className="icon-dollar" data-v-23280afe />
                                  <span data-v-23280afe>7-10 triệu</span>
                                </li>
                                <li className="location" data-v-23280afe>
                                  <i className="icon-map" data-v-23280afe /> Hà
                                  Nội
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
                                <a className="gradient pointer" data-v-23280afe>
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
                                />
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
                                  <i className="icon-dollar" data-v-23280afe />
                                  <span data-v-23280afe>30-40 triệu</span>
                                </li>
                                <li className="location" data-v-23280afe>
                                  <i className="icon-map" data-v-23280afe /> Hà
                                  Nội
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
                                <a className="gradient pointer" data-v-23280afe>
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
                                />
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
                                  <i className="icon-dollar" data-v-23280afe />
                                  <span data-v-23280afe>15-20 triệu</span>
                                </li>
                                <li className="location" data-v-23280afe>
                                  <i className="icon-map" data-v-23280afe /> Hà
                                  Nội
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
                                <a className="gradient pointer" data-v-23280afe>
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
                                />
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
                                  <i className="icon-dollar" data-v-23280afe />
                                  <span data-v-23280afe>20-25 triệu</span>
                                </li>
                                <li className="location" data-v-23280afe>
                                  <i className="icon-map" data-v-23280afe /> Hồ
                                  Chí Minh
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
                                <a className="gradient pointer" data-v-23280afe>
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
                                />
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
                                  <i className="icon-dollar" data-v-23280afe />
                                  <span data-v-23280afe>20-25 triệu</span>
                                </li>
                                <li className="location" data-v-23280afe>
                                  <i className="icon-map" data-v-23280afe /> Hà
                                  Nội
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
                                <a className="gradient pointer" data-v-23280afe>
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
                                />
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
                                  <i className="icon-dollar" data-v-23280afe />
                                  <span data-v-23280afe>25-30 triệu</span>
                                </li>
                                <li className="location" data-v-23280afe>
                                  <i className="icon-map" data-v-23280afe /> Hà
                                  Nội
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
                                <a className="gradient pointer" data-v-23280afe>
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
                                />
                                <a
                                  href="viec-lam/php.html"
                                  className="job-pre"
                                  data-v-23280afe
                                >
                                  PHP
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
                                  <i className="icon-dollar" data-v-23280afe />
                                  <span data-v-23280afe>25-35 triệu</span>
                                </li>
                                <li className="location" data-v-23280afe>
                                  <i className="icon-map" data-v-23280afe /> Hà
                                  Nội
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
                                <a className="gradient pointer" data-v-23280afe>
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
                                />
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
                                  <i className="icon-dollar" data-v-23280afe />
                                  <span data-v-23280afe>30-40 triệu</span>
                                </li>
                                <li className="location" data-v-23280afe>
                                  <i className="icon-map" data-v-23280afe /> Hà
                                  Nội
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
                                <a className="gradient pointer" data-v-23280afe>
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
                                />
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
                                  <i className="icon-dollar" data-v-23280afe />
                                  <span data-v-23280afe>25-30 triệu</span>
                                </li>
                                <li className="location" data-v-23280afe>
                                  <i className="icon-map" data-v-23280afe /> Hà
                                  Nội
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
                                <a className="gradient pointer" data-v-23280afe>
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
                                />
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
                                  <i className="icon-dollar" data-v-23280afe />
                                  <span data-v-23280afe>15-25 triệu</span>
                                </li>
                                <li className="location" data-v-23280afe>
                                  <i className="icon-map" data-v-23280afe /> Hà
                                  Nội
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
                                <a className="gradient pointer" data-v-23280afe>
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
                                />
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
                                  <i className="icon-dollar" data-v-23280afe />
                                  <span data-v-23280afe>30-40 triệu</span>
                                </li>
                                <li className="location" data-v-23280afe>
                                  <i className="icon-map" data-v-23280afe /> Hồ
                                  Chí Minh
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
                                <a className="gradient pointer" data-v-23280afe>
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
                            href="viec-lam/11845/junior-php-(onsite-tan-binh)_la.html"
                            data-v-23280afe
                          />
                          <div
                            className="listing-body application"
                            data-v-23280afe
                          >
                            <a
                              href="viec-lam/11845/junior-php-(onsite-tan-binh)_la.html"
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
                                href="viec-lam/11845/junior-php-(onsite-tan-binh)_la.html"
                                data-v-23280afe
                              >
                                <h4 data-v-23280afe>
                                  Junior PHP (onsite Tân Bình)_LA
                                </h4>
                              </a>
                              <div className="skillPrenium" data-v-23280afe>
                                <a
                                  href="viec-lam/11845/junior-php-(onsite-tan-binh)_la.html"
                                  data-v-23280afe
                                />
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
                                  <i className="icon-dollar" data-v-23280afe />
                                  <span data-v-23280afe>10-15 triệu</span>
                                </li>
                                <li className="location" data-v-23280afe>
                                  <i className="icon-map" data-v-23280afe /> Hồ
                                  Chí Minh
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
                                <a className="gradient pointer" data-v-23280afe>
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
                            href="viec-lam/11837/tuyen-dung-tester-leader.html"
                            data-v-23280afe
                          />
                          <div
                            className="listing-body application"
                            data-v-23280afe
                          >
                            <a
                              href="viec-lam/11837/tuyen-dung-tester-leader.html"
                              data-v-23280afe
                            >
                              <div className="listing-logo" data-v-23280afe>
                                <div className="logo-wrapper" data-v-23280afe>
                                  <img
                                    src="../static.devworks.jp/images/company/LcRtsYSP8f5GMgym18hqWOqCYDmLnHOr34ikmb92.jpeg"
                                    alt="CÔNG TY CP CÔNG NGHỆ ECRM.VN"
                                    data-v-23280afe
                                  />
                                </div>
                              </div>
                            </a>
                            <div className="listing-title" data-v-23280afe>
                              <a
                                href="viec-lam/11837/tuyen-dung-tester-leader.html"
                                data-v-23280afe
                              >
                                <h4 data-v-23280afe>
                                  Tuyển Dụng Tester Leader
                                </h4>
                              </a>
                              <div className="skillPrenium" data-v-23280afe>
                                <a
                                  href="viec-lam/11837/tuyen-dung-tester-leader.html"
                                  data-v-23280afe
                                />
                                <a
                                  href="viec-lam/qa.html"
                                  className="job-pre"
                                  data-v-23280afe
                                >
                                  QA
                                </a>
                              </div>
                              <ul className="listing-icons" data-v-23280afe>
                                <li className="salaryPrenium" data-v-23280afe>
                                  <i className="icon-dollar" data-v-23280afe />
                                  <span data-v-23280afe>15-20 triệu</span>
                                </li>
                                <li className="location" data-v-23280afe>
                                  <i className="icon-map" data-v-23280afe />
                                  Nghệ An
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
                                <a className="gradient pointer" data-v-23280afe>
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
                            href="viec-lam/11836/tuyen-dung-team-lead.html"
                            data-v-23280afe
                          />
                          <div
                            className="listing-body application"
                            data-v-23280afe
                          >
                            <a
                              href="viec-lam/11836/tuyen-dung-team-lead.html"
                              data-v-23280afe
                            >
                              <div className="listing-logo" data-v-23280afe>
                                <div className="logo-wrapper" data-v-23280afe>
                                  <img
                                    src="../static.devworks.jp/images/company/LcRtsYSP8f5GMgym18hqWOqCYDmLnHOr34ikmb92.jpeg"
                                    alt="CÔNG TY CP CÔNG NGHỆ ECRM.VN"
                                    data-v-23280afe
                                  />
                                </div>
                              </div>
                            </a>
                            <div className="listing-title" data-v-23280afe>
                              <a
                                href="viec-lam/11836/tuyen-dung-team-lead.html"
                                data-v-23280afe
                              >
                                <h4 data-v-23280afe>Tuyển Dụng Team Lead</h4>
                              </a>
                              <div className="skillPrenium" data-v-23280afe>
                                <a
                                  href="viec-lam/11836/tuyen-dung-team-lead.html"
                                  data-v-23280afe
                                />
                                <a
                                  href="viec-lam/aspnet.html"
                                  className="job-pre"
                                  data-v-23280afe
                                >
                                  ASP.NET
                                </a>
                              </div>
                              <ul className="listing-icons" data-v-23280afe>
                                <li className="salaryPrenium" data-v-23280afe>
                                  <i className="icon-dollar" data-v-23280afe />
                                  <span data-v-23280afe>25-30 triệu</span>
                                </li>
                                <li className="location" data-v-23280afe>
                                  <i className="icon-map" data-v-23280afe />
                                  Nghệ An
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
                                <a className="gradient pointer" data-v-23280afe>
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
                            href="viec-lam/11834/ios-developer-(onsite-hoan-kiem).html"
                            data-v-23280afe
                          />
                          <div
                            className="listing-body application"
                            data-v-23280afe
                          >
                            <a
                              href="viec-lam/11834/ios-developer-(onsite-hoan-kiem).html"
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
                                href="viec-lam/11834/ios-developer-(onsite-hoan-kiem).html"
                                data-v-23280afe
                              >
                                <h4 data-v-23280afe>
                                  IOS Developer (Onsite Hoàn Kiếm)
                                </h4>
                              </a>
                              <div className="skillPrenium" data-v-23280afe>
                                <a
                                  href="viec-lam/11834/ios-developer-(onsite-hoan-kiem).html"
                                  data-v-23280afe
                                />
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
                                  <i className="icon-dollar" data-v-23280afe />
                                  <span data-v-23280afe>15-20 triệu</span>
                                </li>
                                <li className="location" data-v-23280afe>
                                  <i className="icon-map" data-v-23280afe /> Hà
                                  Nội
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
                                <a className="gradient pointer" data-v-23280afe>
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
                            href="viec-lam/11815/investment-manager.html"
                            data-v-23280afe
                          />
                          <div
                            className="listing-body application border-yellow"
                            data-v-23280afe
                          >
                            <a
                              href="viec-lam/11815/investment-manager.html"
                              data-v-23280afe
                            >
                              <div className="listing-logo" data-v-23280afe>
                                <div className="logo-wrapper" data-v-23280afe>
                                  <img
                                    src="_nuxt/img/devwork-jobs-empty2.cefc1f1.png"
                                    alt="STACK TECH COMPANY LIMITED"
                                    data-v-23280afe
                                  />
                                </div>
                              </div>
                              <div className="listing-title" data-v-23280afe>
                                <h4 data-v-23280afe>Investment manager</h4>
                                <div className="skillVip" data-v-23280afe />
                                <ul className="listing-icons" data-v-23280afe>
                                  <li className="salaryVip" data-v-23280afe>
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span className="text-red" data-v-23280afe>
                                      30-40 triệu
                                    </span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Hồ Chí Minh
                                  </li>
                                </ul>
                                <div
                                  className="job-description mt-15"
                                  data-v-23280afe
                                >
                                  1. Chịu trách nhiệm về công tác đầu tư các dự
                                  án đầu tiên của công ty; 2. Chịu trách nhiệm
                                  thu thập và sàng lọc thông tin, đàm phán kinh
                                  doanh, thiết kế cơ cấu giao dịch và ký kết
                                  thỏa thuận đầu tư đối với các dự án giai đoạn
                                  đầu; 3. Chịu trách nhiệm xem xét phê duyệt dự
                                  án, lập báo cáo nghiên cứu khả thi, đánh giá
                                  rủi ro, thực hiện đầu tư và quản lý sau đầu tư
                                  đối với các dự án đầu tư ban đầu; 4. Chịu
                                  trách nhiệm hoạch định phương pháp rút lui,
                                  tìm kiếm cơ hội và nguồn lực rút lui, chuẩn bị
                                  các đề xuất rút lui và tổ chức các hoạt động
                                  rút lui cụ thể.
                                </div>
                              </div>
                            </a>
                            <div
                              className="listing-action text-right"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11815/investment-manager.html"
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
                              </a>
                              <div className="refer-now" data-v-23280afe>
                                <a
                                  href="viec-lam/11815/investment-manager.html"
                                  data-v-23280afe
                                />
                                <a className="gradient pointer" data-v-23280afe>
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
                            href="viec-lam/11803/sale-manager.html"
                            data-v-23280afe
                          />
                          <div
                            className="listing-body application border-yellow"
                            data-v-23280afe
                          >
                            <a
                              href="viec-lam/11803/sale-manager.html"
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
                                href="viec-lam/11803/sale-manager.html"
                                data-v-23280afe
                              >
                                <h4 data-v-23280afe>Sale Manager</h4>
                              </a>
                              <div className="skillVip" data-v-23280afe>
                                <a
                                  href="viec-lam/11803/sale-manager.html"
                                  data-v-23280afe
                                />
                                <a
                                  href="viec-lam/sale-man.html"
                                  className="job-vip"
                                  data-v-23280afe
                                >
                                  Sale Man
                                </a>
                              </div>
                              <ul className="listing-icons" data-v-23280afe>
                                <li className="salaryVip" data-v-23280afe>
                                  <i className="icon-dollar" data-v-23280afe />
                                  <span className="text-red" data-v-23280afe>
                                    30-40 triệu
                                  </span>
                                </li>
                                <li className="location" data-v-23280afe>
                                  <i className="icon-map" data-v-23280afe /> Hồ
                                  Chí Minh
                                </li>
                              </ul>
                              <div
                                className="job-description mt-15"
                                data-v-23280afe
                              >
                                Account manage and seek opportunities in the
                                Vietnam market for all existing UNIT customers /
                                partners in the BSFI and Enterprise Sector to
                                further onsell UNIT business solutions and
                                services. Develop and implement account
                                management plan for strategic assigned customers
                                as directed by the line manager Build up and
                                effectively manage continuous pipeline to ensure
                                stable business generation. Liase with the
                                Technical/BU team and partners and related
                                departments to prepare proposals for customers.
                                Follow up to ensure the deals are properly
                                managed, closed, contracts/POs are properly
                                signed off to avoid unnecessary risk. Coordinate
                                and cooperate with related departments to ensure
                                projects are running smoothly. Follow up with
                                customer until final completion and act as main
                                contract point for problem solving with the
                                customers/partners where applicable. Ensure all
                                transactions strictly complied with
                                group/company policies &amp; procedures and
                                local legislation. Achieve yearly KPI as agreed
                                with the line manager
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
                                <a className="gradient pointer" data-v-23280afe>
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
                            href="viec-lam/11799/sales-staff.html"
                            data-v-23280afe
                          />
                          <div
                            className="listing-body application border-yellow"
                            data-v-23280afe
                          >
                            <a
                              href="viec-lam/11799/sales-staff.html"
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
                                href="viec-lam/11799/sales-staff.html"
                                data-v-23280afe
                              >
                                <h4 data-v-23280afe>SALES STAFF</h4>
                              </a>
                              <div className="skillVip" data-v-23280afe>
                                <a
                                  href="viec-lam/11799/sales-staff.html"
                                  data-v-23280afe
                                />
                                <a
                                  href="viec-lam/sale-man.html"
                                  className="job-vip"
                                  data-v-23280afe
                                >
                                  Sale Man
                                </a>
                              </div>
                              <ul className="listing-icons" data-v-23280afe>
                                <li className="salaryVip" data-v-23280afe>
                                  <i className="icon-dollar" data-v-23280afe />
                                  <span className="text-red" data-v-23280afe>
                                    20-30 triệu
                                  </span>
                                </li>
                                <li className="location" data-v-23280afe>
                                  <i className="icon-map" data-v-23280afe /> Hồ
                                  Chí Minh
                                </li>
                              </ul>
                              <div
                                className="job-description mt-15"
                                data-v-23280afe
                              >
                                Account manage and seek opportunities in the
                                Vietnam market for all existing UNIT customers /
                                partners in the BSFI and Enterprise Sector to
                                further onsell UNIT business solutions and
                                services. Develop and implement account
                                management plan for strategic assigned customers
                                as directed by the line manager Build up and
                                effectively manage continuous pipeline to ensure
                                stable business generation. Liase with the
                                Technical/BU team and partners and related
                                departments to prepare proposals for customers.
                                Follow up to ensure the deals are properly
                                managed, closed, contracts/POs are properly
                                signed off to avoid unnecessary risk. Coordinate
                                and cooperate with related departments to ensure
                                projects are running smoothly. Follow up with
                                customer until final completion and act as main
                                contract point for problem solving with the
                                customers/partners where applicable. Ensure all
                                transactions strictly complied with
                                group/company policies &amp; procedures and
                                local legislation. Achieve yearly KPI as agreed
                                with the line manager
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
                                <a className="gradient pointer" data-v-23280afe>
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
                              href="viec-lamf18e.html?country=vietnam&page=1"
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
                              href="viec-lamd860.html?country=vietnam&page=0"
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
                                href="viec-lamf18e.html?country=vietnam&page=1"
                                disabled="disabled"
                                className="page-item current-page disabled"
                              >
                                1
                              </a>
                            </li>
                            <li className="pagination-item">
                              <a
                                href="viec-lam76f5.html?country=vietnam&page=2"
                                className="page-item"
                              >
                                2
                              </a>
                            </li>
                            <li className="pagination-item">
                              <a
                                href="viec-lamc091.html?country=vietnam&page=3"
                                className="page-item"
                              >
                                3
                              </a>
                            </li>
                            <li className="pagination-item">
                              <a
                                href="viec-lama351.html?country=vietnam&page=4"
                                className="page-item"
                              >
                                4
                              </a>
                            </li>
                            <li className="pagination-item">
                              <a
                                href="viec-lam1d53.html?country=vietnam&page=5"
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
                              href="viec-lam76f5.html?country=vietnam&page=2"
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
                              href="viec-lam1d53.html?country=vietnam&page=5"
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
                        <img src={Tuyendung} alt="" className="rounded block" />
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
                            <a href="#" target="_blank">
                              <img src={Slide1} className="slide" />
                            </a>
                          </div>
                          <div>
                            <a href="#" target="_blank">
                              <img src={Slide2} className="slide" />
                            </a>
                          </div>
                          <div>
                            <a href="#" target="_blank">
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

                    {/* <div className="agile__actions">
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
                    </div> */}
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
  );
}

export default WorkVietNam;

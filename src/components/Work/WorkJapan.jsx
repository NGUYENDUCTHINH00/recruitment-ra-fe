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

function WorkJapan() {
  return (
    <div>
      <Header></Header>
      <div>
        <div className="drawer" data-v-5f7cfca9>
          <div className="drawer__bg" data-v-5f7cfca9 />
          <div
            className="drawer__content"
            style={{ maxWidth: "100%" }}
            data-v-5f7cfca9
          >
            <span className="icon-close" data-v-5f7cfca9 />
          </div>
        </div>
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
                          id="vs1294__combobox"
                          role="combobox"
                          aria-expanded="false"
                          aria-owns="vs1294__listbox"
                          aria-label="Search for option"
                          className="vs__dropdown-toggle"
                        >
                          <div className="vs__selected-options">
                            <input
                              placeholder="Kỹ năng"
                              aria-autocomplete="list"
                              aria-labelledby="vs1294__combobox"
                              aria-controls="vs1294__listbox"
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
                          id="vs1294__listbox"
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
                          id="vs1295__combobox"
                          role="combobox"
                          aria-expanded="false"
                          aria-owns="vs1295__listbox"
                          aria-label="Search for option"
                          className="vs__dropdown-toggle"
                        >
                          <div className="vs__selected-options">
                            <span className="vs__selected">Nhật Bản</span>
                            <input
                              aria-autocomplete="list"
                              aria-labelledby="vs1295__combobox"
                              aria-controls="vs1295__listbox"
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
                          id="vs1295__listbox"
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
                          id="vs1296__combobox"
                          role="combobox"
                          aria-expanded="false"
                          aria-owns="vs1296__listbox"
                          aria-label="Search for option"
                          className="vs__dropdown-toggle"
                        >
                          <div className="vs__selected-options">
                            <input
                              placeholder="Thành phố"
                              aria-autocomplete="list"
                              aria-labelledby="vs1296__combobox"
                              aria-controls="vs1296__listbox"
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
                          id="vs1296__listbox"
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
                      <strong>43</strong> cơ hội nhận bonus hấp dẫn khi ứng
                      tuyển, giới thiệu ứng viên.
                    </h4>
                    <div className="text-showing mb-15 mt-5 fs-14 help-block">
                      Hiển thị 20/43 kết quả tìm kiếm.
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
                                  />
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
                                  />
                                  <a
                                    href="viec-lam/java.html"
                                    className="job-vip"
                                    data-v-23280afe
                                  >
                                    Java
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
                                  />
                                  <a
                                    href="viec-lam/css3.html"
                                    className="job-vip"
                                    data-v-23280afe
                                  >
                                    CSS3
                                  </a>
                                  <a
                                    href="viec-lam/html5.html"
                                    className="job-vip"
                                    data-v-23280afe
                                  >
                                    HTML5
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
                                  />
                                  <a
                                    href="viec-lam/css3.html"
                                    className="job-vip"
                                    data-v-23280afe
                                  >
                                    CSS3
                                  </a>
                                  <a
                                    href="viec-lam/html5.html"
                                    className="job-vip"
                                    data-v-23280afe
                                  >
                                    HTML5
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
                          <div className="listing" data-v-23280afe>
                            <a
                              href="viec-lam/11849/dev-test-nha12212.html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11849/dev-test-nha12212.html"
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
                                  href="viec-lam/11849/dev-test-nha12212.html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>dev test nha12212</h4>
                                </a>
                                <div className="skillPrenium" data-v-23280afe>
                                  <a
                                    href="viec-lam/11849/dev-test-nha12212.html"
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
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span data-v-23280afe>Dưới 7 triệu</span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Kyoto
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
                              href="viec-lam/11820/tester.html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11820/tester.html"
                                data-v-23280afe
                              >
                                <div className="listing-logo" data-v-23280afe>
                                  <div className="logo-wrapper" data-v-23280afe>
                                    <img
                                      src="../static.devworks.jp/https_/static.devworks.jp/images/company/G5X6zpMdNexYo7MzZqksbU0kBHkOQKdImbfzSuIB.png"
                                      alt="Hava a talk"
                                      data-v-23280afe
                                    />
                                  </div>
                                </div>
                              </a>
                              <div className="listing-title" data-v-23280afe>
                                <a
                                  href="viec-lam/11820/tester.html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>Tester</h4>
                                </a>
                                <div className="skillPrenium" data-v-23280afe>
                                  <a
                                    href="viec-lam/11820/tester.html"
                                    data-v-23280afe
                                  />
                                  <a
                                    href="viec-lam/csharp.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    C#
                                  </a>
                                  <a
                                    href="viec-lam/java.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    Java
                                  </a>
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
                                    <span data-v-23280afe>25-35 triệu</span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Tokyo
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
                              href="viec-lam/11817/plpm.html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11817/plpm.html"
                                data-v-23280afe
                              >
                                <div className="listing-logo" data-v-23280afe>
                                  <div className="logo-wrapper" data-v-23280afe>
                                    <img
                                      src="../static.devworks.jp/https_/static.devworks.jp/images/company/G5X6zpMdNexYo7MzZqksbU0kBHkOQKdImbfzSuIB.png"
                                      alt="Hava a talk"
                                      data-v-23280afe
                                    />
                                  </div>
                                </div>
                              </a>
                              <div className="listing-title" data-v-23280afe>
                                <a
                                  href="viec-lam/11817/plpm.html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>PL/PM</h4>
                                </a>
                                <div className="skillPrenium" data-v-23280afe>
                                  <a
                                    href="viec-lam/11817/plpm.html"
                                    data-v-23280afe
                                  />
                                  <a
                                    href="viec-lam/csharp.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    C#
                                  </a>
                                  <a
                                    href="viec-lam/net.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    .NET
                                  </a>
                                  <a
                                    href="viec-lam/java.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    Java
                                  </a>
                                  <span data-v-23280afe>...</span>
                                </div>
                                <ul className="listing-icons" data-v-23280afe>
                                  <li className="salaryPrenium" data-v-23280afe>
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span data-v-23280afe>35-40 triệu</span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Tokyo
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
                              href="viec-lam/11816/tester-hybrid.html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11816/tester-hybrid.html"
                                data-v-23280afe
                              >
                                <div className="listing-logo" data-v-23280afe>
                                  <div className="logo-wrapper" data-v-23280afe>
                                    <img
                                      src="../static.devworks.jp/https_/static.devworks.jp/images/company/G5X6zpMdNexYo7MzZqksbU0kBHkOQKdImbfzSuIB.png"
                                      alt="Hava a talk"
                                      data-v-23280afe
                                    />
                                  </div>
                                </div>
                              </a>
                              <div className="listing-title" data-v-23280afe>
                                <a
                                  href="viec-lam/11816/tester-hybrid.html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>Tester- Hybrid</h4>
                                </a>
                                <div className="skillPrenium" data-v-23280afe>
                                  <a
                                    href="viec-lam/11816/tester-hybrid.html"
                                    data-v-23280afe
                                  />
                                  <a
                                    href="viec-lam/csharp.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    C#
                                  </a>
                                  <a
                                    href="viec-lam/net.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    .NET
                                  </a>
                                  <a
                                    href="viec-lam/java.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    Java
                                  </a>
                                  <span data-v-23280afe>...</span>
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
                                    Tokyo
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
                              href="viec-lam/11802/qa-lam-viec-tai-tokyo.html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application border-yellow"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11802/qa-lam-viec-tai-tokyo.html"
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
                                  href="viec-lam/11802/qa-lam-viec-tai-tokyo.html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>QA làm việc tại Tokyo</h4>
                                </a>
                                <div className="skillVip" data-v-23280afe>
                                  <a
                                    href="viec-lam/11802/qa-lam-viec-tai-tokyo.html"
                                    data-v-23280afe
                                  />
                                  <a
                                    href="viec-lam/android.html"
                                    className="job-vip"
                                    data-v-23280afe
                                  >
                                    Android
                                  </a>
                                  <a
                                    href="viec-lam/qa.html"
                                    className="job-vip"
                                    data-v-23280afe
                                  >
                                    QA
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
                                  Kiểm tra và quản lý chất lượng tính năng trước
                                  khi phát hành: -Hợp tác với nhóm sản phẩm, nhà
                                  thiết kế, kỹ sư và nhóm hỗ trợ khách hàng để
                                  thiết lập và thực hiện kiểm tra và quản lý
                                  chất lượng. -Cải thiện năng suất và hiệu suất
                                  của nhóm trong việc tạo quy trình mới. -Xác
                                  nhận các bản cập nhật và tính năng mới. -Lập
                                  kế hoạch cấu hình cho các tính năng mới và
                                  khác. -Tự động hóa quy trình kiểm tra trong
                                  quá trình thử nghiệm. -Làm việc trong môi
                                  trường Agile với các nhóm khác để thực hiện kế
                                  hoạch dự án. -Khám phá nội dung của trang web
                                  và ứng dụng, và phân tích lỗi. -Các nhiệm vụ
                                  liên quan khác theo nhu cầu.
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
                              href="viec-lam/11801/product-managerproduct-owner.html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application border-yellow"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11801/product-managerproduct-owner.html"
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
                                  href="viec-lam/11801/product-managerproduct-owner.html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>
                                    Product Manager,Product Owner
                                  </h4>
                                </a>
                                <div className="skillVip" data-v-23280afe>
                                  <a
                                    href="viec-lam/11801/product-managerproduct-owner.html"
                                    data-v-23280afe
                                  />
                                  <a
                                    href="viec-lam/product-owner.html"
                                    className="job-vip"
                                    data-v-23280afe
                                  >
                                    Product Owner
                                  </a>
                                  <a
                                    href="viec-lam/product-manager.html"
                                    className="job-vip"
                                    data-v-23280afe
                                  >
                                    Product Manager
                                  </a>
                                </div>
                                <ul className="listing-icons" data-v-23280afe>
                                  <li className="salaryVip" data-v-23280afe>
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span className="text-red" data-v-23280afe>
                                      100-120 triệu
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
                                  -Tăng cường phương pháp làm việc nhóm cả trong
                                  dự án của người dùng và các sáng kiến nội bộ
                                  của tổ chức. -Hỗ trợ và lắng nghe ý kiến từ
                                  tất cả các cấp độ nhân viên trong tổ chức.
                                  -Tạo ra tinh thần làm việc động đáo và tinh
                                  thần hợp tác trong nhóm. -Liên tục xác định
                                  cách nâng cao sự hài lòng của khách hàng và
                                  củng cố mối quan hệ. -Xác định và truyền đạt
                                  tầm nhìn tổng thể, mục tiêu và mục đích. Tạo
                                  và làm sạch Product Backlog, xã hội hóa và ưu
                                  tiên sản phẩm. -Tạo, sở hữu và cải thiện các
                                  User Story và sản phẩm chi tiết dựa trên phản
                                  hồi từ nhóm, giải thích và tạo tiêu chí chấp
                                  nhận cùng với nhóm, và sau khi User Story hoàn
                                  thành, chấp nhận chúng. -Duy trì mối quan hệ
                                  giữa các bộ phận chức năng. -Đóng góp vào sự
                                  chín muồi, hiệu suất và sự phát triển của nhóm
                                  Agile. -Hợp tác hàng ngày với nhóm Scrum để
                                  làm cho các User Story và lỗi trở nên tinh tế,
                                  cải thiện và triển khai. -Tạo ra các trường
                                  hợp kiểm tra UAT, tổ chức và thúc đẩy kiểm tra
                                  UAT, theo dõi kết quả kiểm tra và giải quyết
                                  vấn đề cùng với Scrum Master và nhóm Agile.-
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
                              href="viec-lam/11798/se-(java-php-c-.html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11798/se-(java-php-c-.html"
                                data-v-23280afe
                              >
                                <div className="listing-logo" data-v-23280afe>
                                  <div className="logo-wrapper" data-v-23280afe>
                                    <img
                                      src="../static.devworks.jp/https_/static.devworks.jp/images/company/G5X6zpMdNexYo7MzZqksbU0kBHkOQKdImbfzSuIB.png"
                                      alt="Hava a talk"
                                      data-v-23280afe
                                    />
                                  </div>
                                </div>
                              </a>
                              <div className="listing-title" data-v-23280afe>
                                <a
                                  href="viec-lam/11798/se-(java-php-c-.html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>
                                    SE (Java PHP C# .NET)- Hybrid
                                  </h4>
                                </a>
                                <div className="skillPrenium" data-v-23280afe>
                                  <a
                                    href="viec-lam/11798/se-(java-php-c-.html"
                                    data-v-23280afe
                                  />
                                  <a
                                    href="viec-lam/csharp.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    C#
                                  </a>
                                  <a
                                    href="viec-lam/net.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    .NET
                                  </a>
                                  <a
                                    href="viec-lam/java.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    Java
                                  </a>
                                  <span data-v-23280afe>...</span>
                                </div>
                                <ul className="listing-icons" data-v-23280afe>
                                  <li className="salaryPrenium" data-v-23280afe>
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span data-v-23280afe>40-50 triệu</span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Tokyo
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
                              href="viec-lam/11797/se-(java-php-c-.html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11797/se-(java-php-c-.html"
                                data-v-23280afe
                              >
                                <div className="listing-logo" data-v-23280afe>
                                  <div className="logo-wrapper" data-v-23280afe>
                                    <img
                                      src="../static.devworks.jp/https_/static.devworks.jp/images/company/G5X6zpMdNexYo7MzZqksbU0kBHkOQKdImbfzSuIB.png"
                                      alt="Hava a talk"
                                      data-v-23280afe
                                    />
                                  </div>
                                </div>
                              </a>
                              <div className="listing-title" data-v-23280afe>
                                <a
                                  href="viec-lam/11797/se-(java-php-c-.html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>SE (Java PHP C# .NET)</h4>
                                </a>
                                <div className="skillPrenium" data-v-23280afe>
                                  <a
                                    href="viec-lam/11797/se-(java-php-c-.html"
                                    data-v-23280afe
                                  />
                                  <a
                                    href="viec-lam/csharp.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    C#
                                  </a>
                                  <a
                                    href="viec-lam/net.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    .NET
                                  </a>
                                  <a
                                    href="viec-lam/java.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    Java
                                  </a>
                                  <span data-v-23280afe>...</span>
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
                                    Tokyo
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
                              href="viec-lam/11731/brse-(tokyo).html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11731/brse-(tokyo).html"
                                data-v-23280afe
                              >
                                <div className="listing-logo" data-v-23280afe>
                                  <div className="logo-wrapper" data-v-23280afe>
                                    <img
                                      src="../static.devworks.jp/images/company/xBNKUHgHPTrOBpZD8CqWhNAN8CiLMzASnTHpzIW3.png"
                                      alt="NAL Việt Nam"
                                      data-v-23280afe
                                    />
                                  </div>
                                </div>
                              </a>
                              <div className="listing-title" data-v-23280afe>
                                <a
                                  href="viec-lam/11731/brse-(tokyo).html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>BrSE (Tokyo)</h4>
                                </a>
                                <div className="skillPrenium" data-v-23280afe>
                                  <a
                                    href="viec-lam/11731/brse-(tokyo).html"
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
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span data-v-23280afe>40-60 triệu</span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Tokyo
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
                              href="viec-lam/11585/sales-it-(internfresher).html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11585/sales-it-(internfresher).html"
                                data-v-23280afe
                              >
                                <div className="listing-logo" data-v-23280afe>
                                  <div className="logo-wrapper" data-v-23280afe>
                                    <img
                                      src="../static.devworks.jp/images/company/PHPAvIUqwAdEHTd7kJJTECEbe0Ff5dPakQ7r1z1v.png"
                                      alt="CÔNG TY CỔ PHẦN GIÁ TRỊ CỘNG ĐỒNG SSKPI"
                                      data-v-23280afe
                                    />
                                  </div>
                                </div>
                              </a>
                              <div className="listing-title" data-v-23280afe>
                                <a
                                  href="viec-lam/11585/sales-it-(internfresher).html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>
                                    SALES IT (Intern/Fresher)
                                  </h4>
                                </a>
                                <div className="skillPrenium" data-v-23280afe>
                                  <a
                                    href="viec-lam/11585/sales-it-(internfresher).html"
                                    data-v-23280afe
                                  />
                                  <a
                                    href="viec-lam/sale-man.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    Sale Man
                                  </a>
                                </div>
                                <ul className="listing-icons" data-v-23280afe>
                                  <li className="salaryPrenium" data-v-23280afe>
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span data-v-23280afe>20-30 triệu</span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Tokyo
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
                              href="viec-lam/11553/project-manager-(600-1000-man-nam).html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application border-yellow"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11553/project-manager-(600-1000-man-nam).html"
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
                                  href="viec-lam/11553/project-manager-(600-1000-man-nam).html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>
                                    Project Manager (600 - 1000 Man/ Năm)
                                  </h4>
                                </a>
                                <div className="skillVip" data-v-23280afe>
                                  <a
                                    href="viec-lam/11553/project-manager-(600-1000-man-nam).html"
                                    data-v-23280afe
                                  />
                                  <a
                                    href="viec-lam/project-manager.html"
                                    className="job-vip"
                                    data-v-23280afe
                                  >
                                    Project Manager
                                  </a>
                                </div>
                                <ul className="listing-icons" data-v-23280afe>
                                  <li className="salaryVip" data-v-23280afe>
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span className="text-red" data-v-23280afe>
                                      100-120 triệu
                                    </span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Kyoto
                                  </li>
                                </ul>
                                <div
                                  className="job-description mt-15"
                                  data-v-23280afe
                                >
                                  • Managing multiple workstreams in program
                                  management • Setting up the Agile model of
                                  program management. • Ensuring that committed
                                  deliverables and services are rendered on
                                  schedule with defined quality levels •
                                  Resolving issues and ad hoc requests •
                                  Producing and distributing status reports,
                                  metric reports • Capacity Planning, Project
                                  planning and work allocation • Managing
                                  resources against projected demand • Driving
                                  agreed practices of pharma processes and
                                  efficiency • Communication with business and
                                  IT stakeholders • Ability to work across
                                  geographies in onsite offshore mode • Planning
                                  to Resolve challenging and critical issues •
                                  Technical discussion with agencies, customer
                                  and offshore. • Handling Client interfacing
                                  and coordinating the support status within the
                                  team. • Status reporting to local and global
                                  stake holders for client • Customer
                                  communication • Ability to coordinate with
                                  business users, gather and validate
                                  requirements • Communication to /coordination
                                  with legacy system owners and vendors •
                                  Business user communication • SPOC for the
                                  engagement
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
                              href="viec-lam/11552/senior-front-end-engineer-(600-1000-man-nam).html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application border-yellow"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11552/senior-front-end-engineer-(600-1000-man-nam).html"
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
                                  href="viec-lam/11552/senior-front-end-engineer-(600-1000-man-nam).html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>
                                    Senior Front-end Engineer (600 - 1000 Man/
                                    Năm)
                                  </h4>
                                </a>
                                <div className="skillVip" data-v-23280afe>
                                  <a
                                    href="viec-lam/11552/senior-front-end-engineer-(600-1000-man-nam).html"
                                    data-v-23280afe
                                  />
                                  <a
                                    href="viec-lam/html5.html"
                                    className="job-vip"
                                    data-v-23280afe
                                  >
                                    HTML5
                                  </a>
                                  <a
                                    href="viec-lam/css3.html"
                                    className="job-vip"
                                    data-v-23280afe
                                  >
                                    CSS3
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
                                      100-120 triệu
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
                                  • As a Senior Front-End Developer, you will be
                                  responsible for developing and implementing
                                  user interface components using the React
                                  framework and TypeScript. You will collaborate
                                  closely with the design and back-end teams to
                                  ensure seamless integration of the front-end
                                  elements. • Develop responsive user interface
                                  components using React and TypeScript. •
                                  Collaborate with the design team to translate
                                  wireframes and mockups into highquality code.
                                  • Optimize application performance for maximum
                                  speed and scalability. • Conduct thorough
                                  testing and debugging of front-end components.
                                  • Ensure cross-browser and cross-device
                                  compatibility. • Collaborate with the back-end
                                  team to integrate front-end components with
                                  server-side logic. • Stay updated on emerging
                                  front-end technologies and best practices. •
                                  Mentor and guide junior developers when
                                  necessary
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
                              href="viec-lam/11551/pmo-(600-1000-man-nam).html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application border-yellow"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11551/pmo-(600-1000-man-nam).html"
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
                                  href="viec-lam/11551/pmo-(600-1000-man-nam).html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>
                                    PMO (600 - 1000 Man/ Năm)
                                  </h4>
                                </a>
                                <div className="skillVip" data-v-23280afe>
                                  <a
                                    href="viec-lam/11551/pmo-(600-1000-man-nam).html"
                                    data-v-23280afe
                                  />
                                  <a
                                    href="viec-lam/project-manager.html"
                                    className="job-vip"
                                    data-v-23280afe
                                  >
                                    Project Manager
                                  </a>
                                </div>
                                <ul className="listing-icons" data-v-23280afe>
                                  <li className="salaryVip" data-v-23280afe>
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span className="text-red" data-v-23280afe>
                                      100-120 triệu
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
                                  • The associate will be assigned as a member
                                  of the PMO team for system development project
                                  and will be responsible for tracking and
                                  maintaining project activities, stakeholder
                                  communication, document creation an d
                                  maintenance, and other project governance
                                  related tasks • Liaise with internal customers
                                  and stakeholders to capture requirements •
                                  Keep track of project scope, schedule, budget,
                                  communications, risks and issues • Own project
                                  artifacts (WBS, BRD, Status Reports, etc.) •
                                  Arrange project meeting and prepare minutes •
                                  Prepare communication email with project
                                  resources and stakeholders
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
                              href="viec-lam/11550/test-manager-(600-1000-man-nam).html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application border-yellow"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11550/test-manager-(600-1000-man-nam).html"
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
                                  href="viec-lam/11550/test-manager-(600-1000-man-nam).html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>
                                    Test Manager (600 - 1000 Man/ Năm)
                                  </h4>
                                </a>
                                <div className="skillVip" data-v-23280afe>
                                  <a
                                    href="viec-lam/11550/test-manager-(600-1000-man-nam).html"
                                    data-v-23280afe
                                  />
                                  <a
                                    href="viec-lam/tester.html"
                                    className="job-vip"
                                    data-v-23280afe
                                  >
                                    Tester
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
                                    Kyoto
                                  </li>
                                </ul>
                                <div
                                  className="job-description mt-15"
                                  data-v-23280afe
                                >
                                  • As a Test Manager, you will be responsible
                                  for leading the testing efforts andensuring
                                  the delivery of high-quality software
                                  products. You will collaborate with
                                  cross-functional teams, manage test
                                  activities, and drive the implementation of
                                  best practices and automation frameworks.
                                  Strong communication skills and a deep
                                  understanding of software testing
                                  methodologies are essential for this role •
                                  Develop and execute test plans, test cases,
                                  and test scripts to ensure comprehensive test
                                  coverage. • Identify, report, and track
                                  defects, working closely with development
                                  teams to resolve issues. • Mentor and provide
                                  guidance to junior testers, fostering their
                                  growth and ensuring adherence to testing
                                  processes. • Stay up-to-date with new testing
                                  tools and technologies, evaluating their
                                  suitability and implementing them as needed. •
                                  Participate in code reviews and contribute to
                                  the continuous improvement of the testing
                                  process. • Provide regular status updates to
                                  project managers and stakeholders, ensuring
                                  transparency and effective communication. •
                                  Drive the implementation of automation testing
                                  where possible, improving testing efficiency
                                  and accuracy. • Demonstrate strong critical
                                  thinking and problem-solving skills to
                                  identify and resolve complex issues. •
                                  Maintain an expert level awareness of relevant
                                  software design techniques, automation tools,
                                  and development processes, providing
                                  leadership in their use. • Identify areas of
                                  test efficiency and propose automation
                                  solutions to improve overall testing
                                  effectiveness. • Display excellent written and
                                  verbal communication skills to effectively
                                  convey testing results and recommendations to
                                  stakeholders
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
                              href="viec-lam/11549/qa-leader-(600-1000-man-nam).html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application border-yellow"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11549/qa-leader-(600-1000-man-nam).html"
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
                                  href="viec-lam/11549/qa-leader-(600-1000-man-nam).html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>
                                    QA leader (600 - 1000 Man/ Năm)
                                  </h4>
                                </a>
                                <div className="skillVip" data-v-23280afe>
                                  <a
                                    href="viec-lam/11549/qa-leader-(600-1000-man-nam).html"
                                    data-v-23280afe
                                  />
                                  <a
                                    href="viec-lam/qa.html"
                                    className="job-vip"
                                    data-v-23280afe
                                  >
                                    QA
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
                                  Participate in the design, development and
                                  testing phases of system development in the
                                  digitization of existing systems and the
                                  introduction of new services. • Improve
                                  functionality, design and develop new
                                  functionality in collaboration with the POD
                                  team (scrum master, designer, architect, etc.)
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
                              href="viec-lam/11531/software-development-service-sales-staff.html"
                              data-v-23280afe
                            />
                            <div
                              className="listing-body application"
                              data-v-23280afe
                            >
                              <a
                                href="viec-lam/11531/software-development-service-sales-staff.html"
                                data-v-23280afe
                              >
                                <div className="listing-logo" data-v-23280afe>
                                  <div className="logo-wrapper" data-v-23280afe>
                                    <img
                                      src="../static.devworks.jp/images/company/PHPAvIUqwAdEHTd7kJJTECEbe0Ff5dPakQ7r1z1v.png"
                                      alt="CÔNG TY CỔ PHẦN GIÁ TRỊ CỘNG ĐỒNG SSKPI"
                                      data-v-23280afe
                                    />
                                  </div>
                                </div>
                              </a>
                              <div className="listing-title" data-v-23280afe>
                                <a
                                  href="viec-lam/11531/software-development-service-sales-staff.html"
                                  data-v-23280afe
                                >
                                  <h4 data-v-23280afe>
                                    SOFTWARE DEVELOPMENT SERVICE SALES STAFF
                                  </h4>
                                </a>
                                <div className="skillPrenium" data-v-23280afe>
                                  <a
                                    href="viec-lam/11531/software-development-service-sales-staff.html"
                                    data-v-23280afe
                                  />
                                  <a
                                    href="viec-lam/sale-man.html"
                                    className="job-pre"
                                    data-v-23280afe
                                  >
                                    Sale Man
                                  </a>
                                </div>
                                <ul className="listing-icons" data-v-23280afe>
                                  <li className="salaryPrenium" data-v-23280afe>
                                    <i
                                      className="icon-dollar"
                                      data-v-23280afe
                                    />
                                    <span data-v-23280afe>40-60 triệu</span>
                                  </li>
                                  <li className="location" data-v-23280afe>
                                    <i className="icon-map" data-v-23280afe />
                                    Tokyo
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
                        </div>
                        <div
                          page-per-block={7}
                          className="pagination-container"
                          data-v-23280afe
                        >
                          <ul className="pagination-nav pagination-prev">
                            <li>
                              <a
                                href="viec-lam8d96.html?country=japan&page=1"
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
                                href="viec-lam0ef2.html?country=japan&page=0"
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
                                  href="viec-lam8d96.html?country=japan&page=1"
                                  disabled="disabled"
                                  className="page-item current-page disabled"
                                >
                                  1
                                </a>
                              </li>
                              <li className="pagination-item">
                                <a
                                  href="viec-lam062e.html?country=japan&page=2"
                                  className="page-item"
                                >
                                  2
                                </a>
                              </li>
                              <li className="pagination-item">
                                <a
                                  href="viec-lam6646.html?country=japan&page=3"
                                  className="page-item"
                                >
                                  3
                                </a>
                              </li>
                            </ul>
                          </nav>
                          <ul className="pagination-nav pagination-next">
                            <li className="pagination-item">
                              <a
                                href="viec-lam062e.html?country=japan&page=2"
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
                                href="viec-lam6646.html?country=japan&page=3"
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
    </div>
  );
}

export default WorkJapan;

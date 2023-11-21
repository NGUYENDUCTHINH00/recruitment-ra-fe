import React from "react";
import "../../css/aadafa5.css";
import "../../css/7e5ea22.css";
import "../../css/69ef69e.css";
import Logo from "../../img/logo.d998f00.png";
import Logodark from "../../img/logo-dark.2cac76e.png";
import LogoFooter from "../../img/logo.1.7b29205.png";
import Slider1 from "../../img/login_slider1.9b4be89.png";
import Slider2 from "../../img/login_slider2.607b0a1.png";
import Slider3 from "../../img/login_slider3.be76297.png";
import Slider4 from "../../img/login_slider4.fbeeba5.png";
import Footer from "../Footer";
function Login() {
  return (
    <div>
      <meta httpEquiv='content-type' content='text/html;charset=utf-8' />
      <title>Đăng nhập - DevWork.vn</title>
      <meta data-n-head='ssr' charSet='utf-8' />
      <meta
        data-n-head='ssr'
        name='viewport'
        content='width=device-width, initial-scale=1.0'
      />
      <meta
        data-n-head='ssr'
        data-hid='description'
        name='description'
        content='Hàng ngàn việc làm, nhà tuyển dụng, ứng viên tại Devwork giúp cho quy trình tuyển dụng của bạn trở nên nhanh chóng, hiệu quả nhất.'
      />
      <meta
        data-n-head='ssr'
        data-hid='og:image'
        name='og:image'
        content='share.png'
      />
      <meta
        data-n-head='ssr'
        data-hid='robots'
        name='robots'
        content='noindex,follow'
      />
      <meta
        data-n-head='ssr'
        data-hid='author'
        name='author'
        content='Devwork Viet Nam'
      />
      <link
        data-n-head='ssr'
        rel='icon'
        type='image/x-icon'
        href='favicon.png'
      />
      <link rel='preload' href='_nuxt/19bae34.js' as='script' />
      <link rel='preload' href='_nuxt/d02c62c.js' as='script' />
      <link rel='preload' href='_nuxt/css/aadafa5.css' as='style' />
      <link rel='preload' href='_nuxt/9629f36.js' as='script' />
      <link rel='preload' href='_nuxt/css/7e5ea22.css' as='style' />
      <link rel='preload' href='_nuxt/5e6ff7e.js' as='script' />
      <link rel='preload' href='_nuxt/css/69ef69e.css' as='style' />
      <link rel='preload' href='_nuxt/8fb474a.js' as='script' />
      <link rel='stylesheet' href='_nuxt/css/aadafa5.css' />
      <link rel='stylesheet' href='_nuxt/css/7e5ea22.css' />
      <link rel='stylesheet' href='_nuxt/css/69ef69e.css' />
      <div data-server-rendered='true' id='__nuxt'>
        <div id='__layout'>
          <div className='wrapper'>
            <header data-fetch-key={0} className='sticky-header'>
              <div className='drawer nav-drawer' data-v-5f7cfca9>
                <div className='drawer__bg' data-v-5f7cfca9 />
                <div
                  className='drawer__content'
                  style={{ maxWidth: "65%" }}
                  data-v-5f7cfca9
                >
                  <span className='icon-close' data-v-5f7cfca9 />
                  <div className='mobile-drawer-menu' data-v-5f7cfca9>
                    <div className='header' data-v-5f7cfca9>
                      <img src={Logo} width={100} data-v-5f7cfca9 />
                    </div>

                    <ul className='mobile-menu' data-v-5f7cfca9>
                      <li data-v-5f7cfca9>
                        <a href='viec-lam.html'>Việc làm</a>
                      </li>
                      <li data-v-5f7cfca9>
                        <div data-v-5f7cfca9>Blog</div>
                      </li>
                      <li data-v-5f7cfca9>
                        <div data-v-5f7cfca9>Công cụ</div>
                      </li>
                    </ul>
                    <ul className='mobile-auth' data-v-5f7cfca9>
                      <li data-v-5f7cfca9>
                        <a
                          href='dangnhap'
                          aria-current='page'
                          className='btn-login router-link-exact-active router-link-active'
                        >
                          Đăng nhập
                        </a>
                      </li>
                      <li data-v-5f7cfca9>
                        <a
                          href='dang-ky.html'
                          className='btn-register btn-warning gradient'
                        >
                          Đăng ký tài khoản
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='drawer' data-v-5f7cfca9>
                <div className='drawer__bg' data-v-5f7cfca9 />
                <div
                  className='drawer__content'
                  style={{ maxWidth: "100%" }}
                  data-v-5f7cfca9
                >
                  <span className='icon-close' data-v-5f7cfca9 />
                  <div
                    data-fetch-key='JobSearch:0'
                    className='search-container'
                  >
                    <h2 className='mb-12'>Tìm kiếm cơ hội nhận thưởng</h2>
                    <div className='search-form'>
                      <div className='input-keyword'>
                        <i className='icon-search' />
                        <input
                          type='text'
                          placeholder='Nhập từ khóa tìm kiếm...'
                          className='keyword'
                        />
                      </div>
                      <div className='input-skill select-box'>
                        <div
                          dir='auto'
                          className='v-select vs--single vs--searchable'
                        >
                          <div
                            id='vs1249__combobox'
                            role='combobox'
                            aria-expanded='false'
                            aria-owns='vs1249__listbox'
                            aria-label='Search for option'
                            className='vs__dropdown-toggle'
                          >
                            <div className='vs__selected-options'>
                              <input
                                placeholder='Kỹ năng'
                                aria-autocomplete='list'
                                aria-labelledby='vs1249__combobox'
                                aria-controls='vs1249__listbox'
                                type='search'
                                autoComplete='nope'
                                defaultValue
                                className='vs__search'
                              />
                            </div>
                            <div className='vs__actions'>
                              <button
                                type='button'
                                title='Clear Selected'
                                aria-label='Clear Selected'
                                className='vs__clear'
                                style={{ display: "none" }}
                              >
                                <span />
                              </button>
                              <span
                                role='presentation'
                                className='vs__open-indicator'
                              />
                              <div
                                className='vs__spinner'
                                style={{ display: "none" }}
                              >
                                Loading...
                              </div>
                            </div>
                          </div>
                          <ul
                            id='vs1249__listbox'
                            role='listbox'
                            style={{ display: "none", visibility: "hidden" }}
                          />
                        </div>
                        <i className='icon-suitcase' />
                      </div>
                      <div className='input-location select-box select-province'>
                        <div
                          dir='auto'
                          className='v-select vs--single vs--searchable'
                        >
                          <div
                            id='vs1250__combobox'
                            role='combobox'
                            aria-expanded='false'
                            aria-owns='vs1250__listbox'
                            aria-label='Search for option'
                            className='vs__dropdown-toggle'
                          >
                            <div className='vs__selected-options'>
                              <input
                                placeholder='Quốc gia'
                                aria-autocomplete='list'
                                aria-labelledby='vs1250__combobox'
                                aria-controls='vs1250__listbox'
                                type='search'
                                autoComplete='nope'
                                defaultValue
                                className='vs__search'
                              />
                            </div>
                            <div className='vs__actions'>
                              <button
                                type='button'
                                title='Clear Selected'
                                aria-label='Clear Selected'
                                className='vs__clear'
                                style={{ display: "none" }}
                              >
                                <span />
                              </button>
                              <span
                                role='presentation'
                                className='vs__open-indicator'
                              />
                              <div
                                className='vs__spinner'
                                style={{ display: "none" }}
                              >
                                Loading...
                              </div>
                            </div>
                          </div>
                          <ul
                            id='vs1250__listbox'
                            role='listbox'
                            style={{ display: "none", visibility: "hidden" }}
                          />
                        </div>
                        <i className='icon-map' />
                      </div>
                      <div className='input-location select-box select-province'>
                        <div
                          dir='auto'
                          className='v-select vs--single vs--searchable'
                        >
                          <div
                            id='vs1251__combobox'
                            role='combobox'
                            aria-expanded='false'
                            aria-owns='vs1251__listbox'
                            aria-label='Search for option'
                            className='vs__dropdown-toggle'
                          >
                            <div className='vs__selected-options'>
                              <input
                                placeholder='Thành phố'
                                aria-autocomplete='list'
                                aria-labelledby='vs1251__combobox'
                                aria-controls='vs1251__listbox'
                                type='search'
                                autoComplete='nope'
                                defaultValue
                                className='vs__search'
                              />
                            </div>
                            <div className='vs__actions'>
                              <button
                                type='button'
                                title='Clear Selected'
                                aria-label='Clear Selected'
                                className='vs__clear'
                                style={{ display: "none" }}
                              >
                                <span />
                              </button>
                              <span
                                role='presentation'
                                className='vs__open-indicator'
                              />
                              <div
                                className='vs__spinner'
                                style={{ display: "none" }}
                              >
                                Loading...
                              </div>
                            </div>
                          </div>
                          <ul
                            id='vs1251__listbox'
                            role='listbox'
                            style={{ display: "none", visibility: "hidden" }}
                          />
                        </div>
                        <i className='icon-map' />
                      </div>
                      <div className='input-button'>
                        <button className='btn btn-warning gradient'>
                          Tìm kiếm
                        </button>
                      </div>
                    </div>
                    <div className='search-tags mt-20'>
                      <div className='text-suggestion'>
                        Gợi ý việc làm theo chuyên môn:
                      </div>
                      <a href='viec-lam/laravel.html'>Laravel</a>
                      <a href='viec-lam/java.html'>Java</a>
                      <a href='viec-lam/nodejs.html'>NodeJS</a>
                      <a href='viec-lam/reactjs.html'>ReactJS</a>
                      <a href='viec-lam/vuejs.html'>VueJS</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='container'>
                <div id='brand' className='logo'>
                  <h1>
                    <a href='index.html' className='router-link-active'>
                      <img src={Logodark} alt='DevWork' className='dark' />
                    </a>
                  </h1>
                </div>
                <nav id='navigation' className='menu d-xs-none'>
                  <ul className='search'>
                    <li>
                      <div className='form-group form-icon-left'>
                        <i className='icon-search form-icon' />
                        <input
                          type='email'
                          name='text'
                          placeholder='Tìm kiếm việc làm nhận thưởng...'
                          className='form-control'
                        />
                        <button className='btn'>
                          <i className='icon-arrow-right' />
                        </button>
                      </div>
                    </li>
                  </ul>
                  <ul className='float-right'>
                    <li>
                      <a href='#'>Việc làm</a>
                      <ul>
                        <li>
                          <a href='viec-lam4d88.html?country=vietnam'>
                            IT Việt Nam
                          </a>
                        </li>
                        <li>
                          <a href='viec-lam1a64.html?country=japan'>
                            IT Nhật Bản
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='#'>Blog</a>
                      <ul>
                        <li>
                          <a href='blog/category/6/tin-cong-nghe.html'>
                            Tin công nghệ
                          </a>
                        </li>
                        <li>
                          <a href='blog/category/4/company-tour.html'>
                            Company Tour
                          </a>
                        </li>
                        <li>
                          <a href='blog/category/3/khoi-nghiep-ky-su.html'>
                            Khởi Nghiệp Ký Sự
                          </a>
                        </li>
                        <li>
                          <a href='blog/category/2/tam-su-hr.html'>Tâm sự HR</a>
                        </li>
                        <li>
                          <a href='blog/category/1/cam-nang-tuyen-dung.html'>
                            Cẩm nang tuyển dụng
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='#'>Công cụ</a>
                      <ul>
                        <li>
                          <a href='tai-lieu-mien-phi.html'>Tải tài liệu</a>
                        </li>
                        <li>
                          <a href='#'>Chuyển lương Net - Gross</a>
                        </li>
                        <li>
                          <a href='#'>Tính bảo hiểm thất nghiệp</a>
                        </li>
                        <li>
                          <a href='#'>Tính Nenkin</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        href='dangnhap'
                        aria-current='page'
                        className='router-link-exact-active router-link-active'
                      >
                        Đăng nhập
                      </a>
                    </li>
                    <li>
                      <a
                        href='dang-ky.html'
                        className='btn-register btn-warning gradient'
                      >
                        Đăng ký tài khoản
                      </a>
                    </li>
                  </ul>
                </nav>
                <nav className='d-md-none mobile-nav'>
                  <span className='search'>
                    <i className='icon-search' />
                  </span>
                  <span className='menu-bar'>
                    <i className='icon-bar' />
                  </span>
                </nav>
              </div>
            </header>
            <div className='content'>
              <div data-v-3c13443f>
                <div className='page-auth bg-auth' data-v-3c13443f>
                  <div className='container' data-v-3c13443f>
                    <div className='slider_login' data-v-3c13443f>
                      <div className='sliders' data-v-3c13443f>
                        <div className='agile agile--ssr agile--auto-play'>
                          <div className='agile__list'>
                            <div
                              className='agile__track'
                              style={{
                                transform: "translate(0px)",
                                transition: "transform ease 0ms",
                              }}
                            >
                              {/* <div className="agile__slides agile__slides--cloned">
                                <div className="slider">
                                  <img
                                    src={Slider1}
                                    alt=""
                                  />
                                  <div className="content">
                                    <h1>
                                      Bảo mật thông tin ứng viên và Headhunter.
                                    </h1>
                                    <br />
                                    <p>
                                      Chúng tôi đặt sự bảo mật thông tin ứng
                                      viên và Headhunter lên hàng đầu, đảm bảo
                                      an toàn tuyệt đối và tuân thủ các quy định
                                      bảo mật. Thông tin cá nhân được bảo vệ một
                                      cách toàn diện và chỉ sử dụng cho mục đích
                                      tuyển dụng.
                                    </p>
                                  </div>
                                </div>
                                <div className="slider">
                                  <img
                                    src={Slider2}
                                    alt=""
                                  />
                                  <div className="content">
                                    <h1>Trả thưởng rõ ràng và minh bạch.</h1>
                                    <br />
                                    <p>
                                      Chúng tôi cam kết trả thưởng một cách rõ
                                      ràng và minh bạch, đảm bảo sự công bằng và
                                      trung thực trong quy trình trả thưởng của
                                      chúng tôi.
                                    </p>
                                  </div>
                                </div>
                                <div className="slider">
                                  <img
                                    src={Slider3}
                                    alt=""
                                  />
                                  <div className="content">
                                    <h1>Miễn phí tin đăng tuyển dụng.</h1>
                                    <br />
                                    <p>
                                      Chúng tôi cung cấp dịch vụ đăng tin tuyển
                                      dụng miễn phí, giúp các doanh nghiệp tiết
                                      kiệm chi phí quảng bá và thu hút ứng viên
                                      chất lượng một cách hiệu quả.
                                    </p>
                                  </div>
                                </div>
                                <div className="slider">
                                  <img
                                    src={Slider4}
                                    alt=""
                                  />
                                  <div className="content">
                                    <h1>Sẵn nguồn ứng viên chất lượng</h1>
                                    <br />
                                    <p>
                                      Chúng tôi sở hữu nguồn ứng viên chất lượng
                                      sẵn sàng đáp ứng nhu cầu tuyển dụng của
                                      bạn, giúp bạn tiết kiệm thời gian và tăng
                                      khả năng tìm thấy ứng viên phù hợp.
                                    </p>
                                  </div>
                                </div>
                              </div> */}
                              <div className='agile__slides agile__slides--regular'>
                                <div className='slider'>
                                  <img src={Slider1} alt='' />
                                  <div className='content'>
                                    <h1>
                                      Bảo mật thông tin ứng viên và Headhunter.
                                    </h1>
                                    <br />
                                    <p>
                                      Chúng tôi đặt sự bảo mật thông tin ứng
                                      viên và Headhunter lên hàng đầu, đảm bảo
                                      an toàn tuyệt đối và tuân thủ các quy định
                                      bảo mật. Thông tin cá nhân được bảo vệ một
                                      cách toàn diện và chỉ sử dụng cho mục đích
                                      tuyển dụng.
                                    </p>
                                  </div>
                                </div>
                                {/* <div className="slider">
                                  <img
                                    src={Slider2}
                                    alt=""
                                  />
                                  <div className="content">
                                    <h1>Trả thưởng rõ ràng và minh bạch.</h1>
                                    <br />
                                    <p>
                                      Chúng tôi cam kết trả thưởng một cách rõ
                                      ràng và minh bạch, đảm bảo sự công bằng và
                                      trung thực trong quy trình trả thưởng của
                                      chúng tôi.
                                    </p>
                                  </div>
                                </div>
                                <div className="slider">
                                  <img
                                    src={Slider3}
                                    alt=""
                                  />
                                  <div className="content">
                                    <h1>Miễn phí tin đăng tuyển dụng.</h1>
                                    <br />
                                    <p>
                                      Chúng tôi cung cấp dịch vụ đăng tin tuyển
                                      dụng miễn phí, giúp các doanh nghiệp tiết
                                      kiệm chi phí quảng bá và thu hút ứng viên
                                      chất lượng một cách hiệu quả.
                                    </p>
                                  </div>
                                </div>
                                <div className="slider">
                                  <img
                                    src={Slider4}
                                    alt=""
                                  />
                                  <div className="content">
                                    <h1>Sẵn nguồn ứng viên chất lượng</h1>
                                    <br />
                                    <p>
                                      Chúng tôi sở hữu nguồn ứng viên chất lượng
                                      sẵn sàng đáp ứng nhu cầu tuyển dụng của
                                      bạn, giúp bạn tiết kiệm thời gian và tăng
                                      khả năng tìm thấy ứng viên phù hợp.
                                    </p>
                                  </div>
                                </div> */}
                              </div>
                              {/* <div className="agile__slides agile__slides--cloned">
                                <div className="slider">
                                  <img
                                    src="_nuxt/img/login_slider1.9b4be89.png"
                                    alt=""
                                  />
                                  <div className="content">
                                    <h1>
                                      Bảo mật thông tin ứng viên và Headhunter.
                                    </h1>
                                    <br />
                                    <p>
                                      Chúng tôi đặt sự bảo mật thông tin ứng
                                      viên và Headhunter lên hàng đầu, đảm bảo
                                      an toàn tuyệt đối và tuân thủ các quy định
                                      bảo mật. Thông tin cá nhân được bảo vệ một
                                      cách toàn diện và chỉ sử dụng cho mục đích
                                      tuyển dụng.
                                    </p>
                                  </div>
                                </div>
                                <div className="slider">
                                  <img
                                    src="_nuxt/img/login_slider2.607b0a1.png"
                                    alt=""
                                  />
                                  <div className="content">
                                    <h1>Trả thưởng rõ ràng và minh bạch.</h1>
                                    <br />
                                    <p>
                                      Chúng tôi cam kết trả thưởng một cách rõ
                                      ràng và minh bạch, đảm bảo sự công bằng và
                                      trung thực trong quy trình trả thưởng của
                                      chúng tôi.
                                    </p>
                                  </div>
                                </div>
                                <div className="slider">
                                  <img
                                    src="_nuxt/img/login_slider3.be76297.png"
                                    alt=""
                                  />
                                  <div className="content">
                                    <h1>Miễn phí tin đăng tuyển dụng.</h1>
                                    <br />
                                    <p>
                                      Chúng tôi cung cấp dịch vụ đăng tin tuyển
                                      dụng miễn phí, giúp các doanh nghiệp tiết
                                      kiệm chi phí quảng bá và thu hút ứng viên
                                      chất lượng một cách hiệu quả.
                                    </p>
                                  </div>
                                </div>
                                <div className="slider">
                                  <img
                                    src="_nuxt/img/login_slider4.fbeeba5.png"
                                    alt=""
                                  />
                                  <div className="content">
                                    <h1>Sẵn nguồn ứng viên chất lượng</h1>
                                    <br />
                                    <p>
                                      Chúng tôi sở hữu nguồn ứng viên chất lượng
                                      sẵn sàng đáp ứng nhu cầu tuyển dụng của
                                      bạn, giúp bạn tiết kiệm thời gian và tăng
                                      khả năng tìm thấy ứng viên phù hợp.
                                    </p>
                                  </div>
                                </div>
                              </div> */}
                            </div>
                          </div>

                          <div className='agile__actions'>
                            <button
                              aria-label='Previous'
                              type='button'
                              className='agile__nav-button agile__nav-button--prev'
                            >
                              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAAYUlEQVRIx+2TIQ6AQAwEu4Tf8CPgH9iTfJC3ICAMtii4hAZBR1U0s11RsyT5BKAAc6QcYAO6KPkO9JHy4T/y5sHO6ma9er1rMbkWY4bchVQ9WlsbIKkAZmaHpCWkRZJcOAFPpJH2vflrZAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wNy0wN1QwNTo0Njo0NiswMDowMNJ5V1oAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDctMDdUMDU6NDY6NDYrMDA6MDCjJO/mAAAAAElFTkSuQmCC' />
                            </button>
                            <ul className='agile__dots'>
                              <li className='agile__dot'>
                                <button type='button'>1</button>
                              </li>
                              <li className='agile__dot'>
                                <button type='button'>2</button>
                              </li>
                              <li className='agile__dot'>
                                <button type='button'>3</button>
                              </li>
                              <li className='agile__dot'>
                                <button type='button'>4</button>
                              </li>
                              <li className='agile__dot'>
                                <button type='button'>5</button>
                              </li>
                              <li className='agile__dot'>
                                <button type='button'>6</button>
                              </li>
                              <li className='agile__dot'>
                                <button type='button'>7</button>
                              </li>
                              <li className='agile__dot'>
                                <button type='button'>8</button>
                              </li>
                              <li className='agile__dot'>
                                <button type='button'>9</button>
                              </li>
                            </ul>
                            <button
                              aria-label='Next'
                              type='button'
                              className='agile__nav-button agile__nav-button--next'
                            >
                              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAATklEQVRIx2NgGAWjgC7g////Df///++gleHa//////0fAhpoZUkIkiU088kItYSJDDsYkdjfqe36UCTX148aDjOcLhmtjmaGj4JRQBAAANp3k5UVfuMKAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA3LTA3VDA1OjQ2OjU3KzAwOjAwuKRccAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wNy0wN1QwNTo0Njo1NyswMDowMMn55MwAAAAASUVORK5CYII=' />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-fetch-key='LoginBox:0'
                      className='right-box'
                      data-v-3c13443f
                    >
                      <h1 className='page-title'>Chào mừng bạn trở lại</h1>
                      <p className='help-block'>
                        Nền tảng tuyển dụng IT từ HR Freelancer
                      </p>
                      <span>
                        <form method='post'>
                          <div className='row'>
                            <div className='col-lg-12' />
                            <div className='col-lg-12'>
                              <div className='input-box'>
                                <div className='form-group'>
                                  <span>
                                    <i className='icon-email form-icon' />
                                    <input
                                      type='email'
                                      name='text'
                                      placeholder='Địa chỉ email'
                                      className='form-control'
                                    />
                                    <span className='validate-errors' />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className='col-lg-12'>
                              <div className='input-box'>
                                <div className='form-group'>
                                  <span>
                                    <i className='icon-lock form-icon' />
                                    <div
                                      className='field has-addons'
                                      data-v-c9790d1c
                                    >
                                      <div
                                        className='form-group is-expanded w-100'
                                        data-v-c9790d1c
                                      >
                                        <i
                                          className='icon-lock form-icon'
                                          data-v-c9790d1c
                                        />
                                        <input
                                          type='password'
                                          placeholder='Mật khẩu'
                                          className='input'
                                          data-v-c9790d1c
                                        />
                                      </div>
                                      <div
                                        className='control button-eye'
                                        data-v-c9790d1c
                                      >
                                        <a
                                          className='button un-b-b'
                                          data-v-c9790d1c
                                        >
                                          <span
                                            className='icon is-small is-right'
                                            data-v-c9790d1c
                                          >
                                            <i
                                              className='fas icon-eye'
                                              data-v-c9790d1c
                                            />
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                    <span className='validate-errors' />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className='col-lg-12'>
                              <button className='btn btn-black gradient btn-action block mb-20'>
                                Đăng nhập
                              </button>
                              <div className='row'>
                                <div className='col-xs-6 help-block'>
                                  <a href='dat-lai-mat-khau.html'>
                                    Quên mật khẩu?
                                  </a>
                                </div>
                                <div className='col-lg-6 help-block'>
                                  <div className='text-right'>
                                    <a href='dang-ky.html'>Đăng ký tài khoản</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </span>
                      <div className='social-head text-center text-muted fs-13'>
                        <span>Hoặc đăng nhập qua</span>
                      </div>
                      <div className='login-socials'>
                        <button
                          type='submit'
                          className='btn btn-small btn-facebook'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            aria-label='Facebook'
                            role='img'
                            viewBox='0 0 512 512'
                          >
                            <rect
                              width={512}
                              height={512}
                              rx='15%'
                              fill='#1877f2'
                            />
                            <path
                              d='M355.6 330l11.4-74h-71v-48c0-20.2 9.9-40 41.7-40H370v-63s-29.3-5-57.3-5c-58.5 0-96.7 35.4-96.7 99.6V256h-65v74h65v182h80V330h59.6z'
                              fill='#fff'
                            />
                          </svg>
                          Đăng nhập qua Facebook
                        </button>
                        <button
                          type='submit'
                          className='btn btn-small btn-google-plus'
                        >
                          <svg
                            version='1.1'
                            viewBox='0 0 16 16'
                            className='is-absolute svg-icon svg-fill'
                          >
                            <g fill='none'>
                              <path
                                pid={0}
                                fill='#557EBF'
                                d='M15.85 8.2c0-.55-.05-1.1-.15-1.65H8.15v3.1h4.3c-.2 1-.75 1.85-1.6 2.4v2h2.6c1.5-1.4 2.4-3.45 2.4-5.85z'
                              />
                              <path
                                pid={1}
                                fill='#36A852'
                                d='M8.15 16c2.15 0 3.95-.7 5.3-1.95l-2.6-2c-.7.5-1.65.75-2.7.75-2.1 0-3.85-1.4-4.5-3.3H1v2.05C2.35 14.2 5.05 16 8.15 16z'
                              />
                              <path
                                pid={2}
                                fill='#F9BC15'
                                d='M3.7 9.5c-.15-.5-.25-1-.25-1.5s.1-1.05.25-1.5V4.4H1C.45 5.5.15 6.7.15 8c0 1.3.3 2.5.85 3.6l2.7-2.1z'
                              />
                              <path
                                pid={3}
                                fill='#EA4535'
                                d='M8.15 3.2c1.15 0 2.25.4 3.05 1.2l2.3-2.3C12.15.8 10.3 0 8.15 0 5.05 0 2.35 1.8 1 4.4l2.7 2.1c.6-1.9 2.4-3.3 4.45-3.3z'
                              />
                            </g>
                          </svg>
                          Đăng nhập qua Google
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
            <div className='portal-outside'>
              <div className='vue-portal-target' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

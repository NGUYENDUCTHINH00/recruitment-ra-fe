import React from "react";
import "../../css/aadafa5.css";
import "../../css/7e5ea22.css";
import "../../css/69ef69e.css";
import Header from "../Header";
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
      <div data-server-rendered="true" id="__nuxt">
        <div id="__layout">
          <div className="wrapper">
            <Header />
            <div className="content">
              <div data-v-3c13443f>
                <div className="page-auth bg-auth" data-v-3c13443f>
                  <div className="container" data-v-3c13443f>
                    <div className="slider_login" data-v-3c13443f>
                      <div className="sliders" data-v-3c13443f>
                        <div className="agile agile--ssr agile--auto-play">
                          <div className="agile__list">
                            <div
                              className="agile__track"
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
                              <div className="agile__slides agile__slides--regular">
                                <div className="slider">
                                  <img src={Slider1} alt="" />
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
                              <li className="agile__dot">
                                <button type="button">6</button>
                              </li>
                              <li className="agile__dot">
                                <button type="button">7</button>
                              </li>
                              <li className="agile__dot">
                                <button type="button">8</button>
                              </li>
                              <li className="agile__dot">
                                <button type="button">9</button>
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
                    <div
                      data-fetch-key="LoginBox:0"
                      className="right-box"
                      data-v-3c13443f
                    >
                      <h1 className="page-title">Chào mừng bạn trở lại</h1>
                      <p className="help-block">
                        Nền tảng tuyển dụng IT từ HR Freelancer
                      </p>
                      <span>
                        <form method="post">
                          <div className="row">
                            <div className="col-lg-12" />
                            <div className="col-lg-12">
                              <div className="input-box">
                                <div className="form-group">
                                  <span>
                                    <i className="icon-email form-icon" />
                                    <input
                                      type="email"
                                      name="text"
                                      placeholder="Địa chỉ email"
                                      className="form-control"
                                    />
                                    <span className="validate-errors" />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="input-box">
                                <div className="form-group">
                                  <span>
                                    <i className="icon-lock form-icon" />
                                    <div
                                      className="field has-addons"
                                      data-v-c9790d1c
                                    >
                                      <div
                                        className="form-group is-expanded w-100"
                                        data-v-c9790d1c
                                      >
                                        <i
                                          className="icon-lock form-icon"
                                          data-v-c9790d1c
                                        />
                                        <input
                                          type="password"
                                          placeholder="Mật khẩu"
                                          className="input"
                                          data-v-c9790d1c
                                        />
                                      </div>
                                      <div
                                        className="control button-eye"
                                        data-v-c9790d1c
                                      >
                                        <a
                                          className="button un-b-b"
                                          data-v-c9790d1c
                                        >
                                          <span
                                            className="icon is-small is-right"
                                            data-v-c9790d1c
                                          >
                                            <i
                                              className="fas icon-eye"
                                              data-v-c9790d1c
                                            />
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                    <span className="validate-errors" />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <button className="btn btn-black gradient btn-action block mb-20">
                                Đăng nhập
                              </button>
                              <div className="row">
                                <div className="col-xs-6 help-block">
                                  <a href="dat-lai-mat-khau.html">
                                    Quên mật khẩu?
                                  </a>
                                </div>
                                <div className="col-lg-6 help-block">
                                  <div className="text-right">
                                    <a href="dang-ky.html">Đăng ký tài khoản</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </span>
                      <div className="social-head text-center text-muted fs-13">
                        <span>Hoặc đăng nhập qua</span>
                      </div>
                      <div className="login-socials">
                        <button
                          type="submit"
                          className="btn btn-small btn-facebook"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-label="Facebook"
                            role="img"
                            viewBox="0 0 512 512"
                          >
                            <rect
                              width={512}
                              height={512}
                              rx="15%"
                              fill="#1877f2"
                            />
                            <path
                              d="M355.6 330l11.4-74h-71v-48c0-20.2 9.9-40 41.7-40H370v-63s-29.3-5-57.3-5c-58.5 0-96.7 35.4-96.7 99.6V256h-65v74h65v182h80V330h59.6z"
                              fill="#fff"
                            />
                          </svg>
                          Đăng nhập qua Facebooks
                        </button>
                        <button
                          type="submit"
                          className="btn btn-small btn-google-plus"
                        >
                          <svg
                            version="1.1"
                            viewBox="0 0 16 16"
                            className="is-absolute svg-icon svg-fill"
                          >
                            <g fill="none">
                              <path
                                pid={0}
                                fill="#557EBF"
                                d="M15.85 8.2c0-.55-.05-1.1-.15-1.65H8.15v3.1h4.3c-.2 1-.75 1.85-1.6 2.4v2h2.6c1.5-1.4 2.4-3.45 2.4-5.85z"
                              />
                              <path
                                pid={1}
                                fill="#36A852"
                                d="M8.15 16c2.15 0 3.95-.7 5.3-1.95l-2.6-2c-.7.5-1.65.75-2.7.75-2.1 0-3.85-1.4-4.5-3.3H1v2.05C2.35 14.2 5.05 16 8.15 16z"
                              />
                              <path
                                pid={2}
                                fill="#F9BC15"
                                d="M3.7 9.5c-.15-.5-.25-1-.25-1.5s.1-1.05.25-1.5V4.4H1C.45 5.5.15 6.7.15 8c0 1.3.3 2.5.85 3.6l2.7-2.1z"
                              />
                              <path
                                pid={3}
                                fill="#EA4535"
                                d="M8.15 3.2c1.15 0 2.25.4 3.05 1.2l2.3-2.3C12.15.8 10.3 0 8.15 0 5.05 0 2.35 1.8 1 4.4l2.7 2.1c.6-1.9 2.4-3.3 4.45-3.3z"
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
            <div className="portal-outside">
              <div className="vue-portal-target" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React from "react";
import "../../css/aadafa5.css";
import "../../css/7e5ea22.css";
import "../../css/8c21841.css";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="main">
      <div>
        <div data-server-rendered="true" id="__nuxt">
          <div id="__layout">
            <div className="wrapper">
              <Header />

              <div className="content">
                <div className="bg-auth page-auth single" data-v-59b4a76c>
                  <div className="container" data-v-59b4a76c>
                    <div className="row row-large" data-v-59b4a76c>
                      <div className="col-md-4" data-v-59b4a76c>
                        <div className="choose-box" data-v-59b4a76c>
                          <small className="help-block" data-v-59b4a76c>
                            Bạn là
                          </small>
                          <h1 className="page-title mt-10" data-v-59b4a76c>
                            HR Freelance
                          </h1>
                          <p data-v-59b4a76c>
                            Với tài khoản HR Freelance bạn hoàn toàn có thể kiếm
                            tiền bằng cách giới thiệu ứng viên đến những công
                            việc phù hợp.
                          </p>
                          <br data-v-59b4a76c />

                          <Link
                            to="/dangky/hrfreelance"
                            type="submit"
                            className="btn btn-action btn-warning gradient block mb-20"
                          >
                            Đăng ký ngay
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-4" data-v-59b4a76c>
                        <div className="choose-box" data-v-59b4a76c>
                          <small className="help-block" data-v-59b4a76c>
                            Bạn là
                          </small>
                          <h1 className="page-title mt-10" data-v-59b4a76c>
                            Nhà tuyển dụng
                          </h1>
                          <p data-v-59b4a76c>
                            Bắt đầu đăng tin tuyển dụng nhận cơ hội giới thiệu
                            ứng viên phù hợp từ chuyên viên tuyển dụng freelance
                            của chúng tôi.
                          </p>
                          <br data-v-59b4a76c />
                          <Link
                            to="/dangky/nhatuyendung"
                            type="submit"
                            className="btn btn-action btn-warning gradient block mb-20"
                          >
                            Đăng ký ngay
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-4" data-v-59b4a76c>
                        <div className="choose-box" data-v-59b4a76c>
                          <small className="help-block" data-v-59b4a76c>
                            Bạn là
                          </small>
                          <h1 className="page-title mt-10" data-v-59b4a76c>
                            Ứng viên
                          </h1>
                          <p data-v-59b4a76c>
                            Với tài khoản Ứng viên bạn hoàn toàn có thể tự ứng
                            tuyển để nhận được số tiền thưởng hấp dẫn.
                          </p>
                          <br data-v-59b4a76c />
                          <Link
                            to="/dangky/ungvien"
                            type="submit"
                            className="btn btn-action btn-warning gradient block mb-20"
                          >
                            Đăng ký ngay
                          </Link>
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
    </div>
  );
}

export default Register;

import { Link } from "react-router-dom";
import Logodev from "../img/logo-dark.2cac76e.png";
import LogoDevLight from "../img/logo.d998f00.png";

import React, { useState } from "react";

function Header() {
  const [classNameSearch, setClassNameSearch] = useState("drawer");
  const [classNameMenu, setClassNameMenu] = useState("drawer nav-drawer");

  const handleClassNameSearchOpen = () =>
    setClassNameSearch("drawer drawer--show");
  const handleClassNameSearchClose = () => setClassNameSearch("drawer");

  const handleClassNameMenuOpen = () =>
    setClassNameMenu("drawer nav-drawer drawer--show");
  const handleClassNameMenuClose = () => setClassNameMenu("drawer nav-drawer");

  return (
    <header data-fetch-key={0} className='sticky-header'>
      <div className={classNameMenu} data-v-5f7cfca9=''>
        <div className='drawer__bg' data-v-5f7cfca9='' />
        <div
          className='drawer__content'
          style={{ maxWidth: "65%" }}
          data-v-5f7cfca9=''
        >
          <span
            className='icon-close'
            data-v-5f7cfca9=''
            onClick={handleClassNameMenuClose}
          />
          <div className='mobile-drawer-menu' data-v-5f7cfca9=''>
            <div className='header' data-v-5f7cfca9=''>
              <img
                src={LogoDevLight}
                alt='logo-dev'
                width={100}
                data-v-5f7cfca9
              />
            </div>
            <ul className='mobile-menu' data-v-5f7cfca9=''>
              <li data-v-5f7cfca9=''>
                <a href='viec-lam.html'>Việc làm</a>
              </li>
              <li data-v-5f7cfca9=''>
                <div data-v-5f7cfca9=''>Blog</div>
              </li>
              <li data-v-5f7cfca9=''>
                <div data-v-5f7cfca9=''>Công cụ</div>
              </li>
            </ul>
            <ul className='mobile-auth' data-v-5f7cfca9=''>
              <li data-v-5f7cfca9=''>
                <Link to='/dangnhap' className='btn-login'>
                  Đăng nhập
                </Link>
              </li>
              <li data-v-5f7cfca9=''>
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
      <div className={classNameSearch} data-v-5f7cfca9=''>
        <div className='drawer__bg' data-v-5f7cfca9='' />
        <div
          className='drawer__content'
          style={{ maxWidth: "100%" }}
          data-v-5f7cfca9=''
        >
          <span
            className='icon-close'
            data-v-5f7cfca9=''
            onClick={handleClassNameSearchClose}
          />
          <div data-fetch-key='JobSearch:0' className='search-container'>
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
                <div dir='auto' className='v-select vs--single vs--searchable'>
                  <div
                    id='vs1240__combobox'
                    aria-expanded='false'
                    aria-owns='vs1240__listbox'
                    aria-label='Search for option'
                    className='vs__dropdown-toggle'
                  >
                    <div className='vs__selected-options'>
                      <input
                        placeholder='Kỹ năng'
                        aria-autocomplete='list'
                        aria-labelledby='vs1240__combobox'
                        aria-controls='vs1240__listbox'
                        type='search'
                        autoComplete='nope'
                        defaultValue=''
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
                      <div className='vs__spinner' style={{ display: "none" }}>
                        Loading...
                      </div>
                    </div>
                  </div>
                  <ul
                    id='vs1240__listbox'
                    role='listbox'
                    style={{ display: "none", visibility: "hidden" }}
                  />
                </div>
                <i className='icon-suitcase' />
              </div>
              <div className='input-location select-box select-province'>
                <div dir='auto' className='v-select vs--single vs--searchable'>
                  <div
                    id='vs1241__combobox'
                    aria-expanded='false'
                    aria-owns='vs1241__listbox'
                    aria-label='Search for option'
                    className='vs__dropdown-toggle'
                  >
                    <div className='vs__selected-options'>
                      <input
                        placeholder='Quốc gia'
                        aria-autocomplete='list'
                        aria-labelledby='vs1241__combobox'
                        aria-controls='vs1241__listbox'
                        type='search'
                        autoComplete='nope'
                        defaultValue=''
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
                      <div className='vs__spinner' style={{ display: "none" }}>
                        Loading...
                      </div>
                    </div>
                  </div>
                  <ul
                    id='vs1241__listbox'
                    role='listbox'
                    style={{ display: "none", visibility: "hidden" }}
                  />
                </div>
                <i className='icon-map' />
              </div>
              <div className='input-location select-box select-province'>
                <div dir='auto' className='v-select vs--single vs--searchable'>
                  <div
                    id='vs1242__combobox'
                    role='combobox'
                    aria-expanded='false'
                    aria-label='Search for option'
                    className='vs__dropdown-toggle'
                  >
                    <div className='vs__selected-options'>
                      <input
                        placeholder='Thành phố'
                        aria-autocomplete='list'
                        aria-labelledby='vs1242__combobox'
                        aria-controls='vs1242__listbox'
                        type='search'
                        autoComplete='nope'
                        defaultValue=''
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
                      <div className='vs__spinner' style={{ display: "none" }}>
                        Loading...
                      </div>
                    </div>
                  </div>
                  <ul
                    id='vs1242__listbox'
                    role='listbox'
                    style={{ display: "none", visibility: "hidden" }}
                  />
                </div>
                <i className='icon-map' />
              </div>
              <div className='input-button'>
                <button className='btn btn-warning gradient'>Tìm kiếm</button>
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
            <Link
              to='/'
              aria-current='page'
              className='router-link-exact-active router-link-active'
            >
              <img src={Logodev} alt='DevWork' className='dark' />
            </Link>
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
                  defaultValue=''
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
                  <a href='viec-lam4d88.html?country=vietnam'>IT Việt Nam</a>
                </li>
                <li>
                  <a href='viec-lam1a64.html?country=japan'>IT Nhật Bản</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='#'>Blog</a>
              <ul>
                <li>
                  <a href='blog/category/6/tin-cong-nghe.html'>Tin công nghệ</a>
                </li>
                <li>
                  <a href='blog/category/4/company-tour.html'>Company Tour</a>
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
              <Link to='/dangnhap'>Đăng nhập</Link>
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
          <span onClick={handleClassNameSearchOpen} className='search'>
            <i className='icon-search' />
          </span>
          <span className='menu-bar' onClick={handleClassNameMenuOpen}>
            <i className='icon-bar' />
          </span>
        </nav>
      </div>
    </header>
  );
}

export default Header;

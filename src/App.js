import logo from './img/logo-white.png'
import fulllogo from './img/logo-green-2x.png'
import nat1 from './img/nat-1-large.jpg'
import nat2 from './img/nat-2-large.jpg'
import nat3 from './img/nat-3-large.jpg'
import nat8 from './img/nat-8.jpg'
import nat9 from './img/nat-9.jpg'

import mp4 from './img/video.mp4'
import webm from './img/video.webm'

import FloatLayout from './components/floatLayout'

function App() {
  return (
    <>
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">y</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="" className="navigation__link">
                <span>01</span> About Natours
              </a>
            </li>
            <li className="navigation__item">
              <a href="" className="navigation__link">
                <span>02</span> Your benefits
              </a>
            </li>
            <li className="navigation__item">
              <a href="" className="navigation__link">
                <span>03</span> Popular tours
              </a>
            </li>
            <li className="navigation__item">
              <a href="" className="navigation__link">
                <span>04</span> Stories
              </a>
            </li>
            <li className="navigation__item">
              <a href="" className="navigation__link">
                <span>05</span> Book Now
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <header className="header">
        <div className="header__logo-box">
          <img src={logo} alt="logo" className="header__logo" />
        </div>

        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">OUTDOORS</span>
            <span className="heading-primary--sub">
              is where life happens
            </span>
          </h1>
          <a href="#" className="btn btn--white btn--animated">
            Discover our tours
          </a>
        </div>
      </header>
      {/* <FloatLayout /> */}

      <main>
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              Exiting tours for adventurous people
            </h2>
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-small ">
                Youre going to fall in love with nature
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae facilis, aut odit inventore tempore modi libero
                dolores Repudiandae facilis, aut odit inventore empore modi
                libero
              </p>
              <h3 className="heading-tertiary u-margin-bottom-small ">
                Live adventures like you have never lived before
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae facilis, aut odit inventore Lorem ipsum dolor
                sit amet consectetur
              </p>
              <a href="#" className="btn-text">
                Learn more &rarr;
              </a>
            </div>
            <div className="col-1-of-2">
              <div className="composition">
                <img
                  src={nat1}
                  alt=""
                  className="composition__photo composition__photo--p1"
                />
                <img
                  src={nat2}
                  alt=""
                  className="composition__photo composition__photo--p2"
                />
                <img
                  src={nat3}
                  alt=""
                  className="composition__photo composition__photo--p3"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-features">
          <div className="row">
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-world"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Explore the world
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ad commodi minus hic.
                </p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-compass"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Meet nature
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ad commodi minus hic.
                </p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-map"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Find your way
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ad commodi minus hic.
                </p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-heart"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Live a healthier life
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ad commodi minus hic.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-tours">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Most popular tours</h2>
          </div>

          <div className="row">
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--1"> </div>

                  <h4 className="card__heading">
                    <span className="card__heading--span card__heading--span--1">
                      the sea explorer
                    </span>
                  </h4>

                  <div className="card__details">
                    <ul>
                      <li>3 day tours</li>
                      <li>up to 30 people</li>
                      <li>2 tour guide</li>
                      <li>sleep in cozy hotel</li>
                      <li>difficulty easy</li>
                    </ul>
                  </div>
                </div>

                <div className="card__side card__side--back card__side--back-1">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <div className="card__price-only">Only</div>
                      <div className="card__price-value">$297</div>
                    </div>
                    <a href="#popup" className="btn btn--white">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--2"> </div>

                  <h4 className="card__heading">
                    <span className="card__heading--span card__heading--span--2">
                      the forest hiker
                    </span>
                  </h4>

                  <div className="card__details">
                    <ul>
                      <li>7 day tours</li>
                      <li>up to 40 people</li>
                      <li>6 tour guide</li>
                      <li>sleep in provide tents</li>
                      <li>difficulty medium</li>
                    </ul>
                  </div>
                </div>

                <div className="card__side card__side--back card__side--back-2">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <div className="card__price-only">Only</div>
                      <div className="card__price-value">$297</div>
                    </div>
                    <a href="#popup" className="btn btn--white">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--3"> </div>

                  <h4 className="card__heading">
                    <span className="card__heading--span card__heading--span--3">
                      the snow adventurer
                    </span>
                  </h4>

                  <div className="card__details">
                    <ul>
                      <li>5 day tours</li>
                      <li>up to 15 people</li>
                      <li>3 tour guide</li>
                      <li>sleep in provided tents</li>
                      <li>difficulty hard</li>
                    </ul>
                  </div>
                </div>

                <div className="card__side card__side--back card__side--back-3">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <div className="card__price-only">Only</div>
                      <div className="card__price-value">$297</div>
                    </div>
                    <a href="#popup" className="btn btn--white">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="u-center-text u-margin-bottom-big">
            <a href="#" className="btn btn--green u-margin-top-huge">
              Discover all tours
            </a>
          </div>
        </section>

        <section className="section-stories">
          <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
              <source src={mp4} />
              <source src={webm} />
              Your browser is not supported!
            </video>
          </div>
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              We make people geniunely happy
            </h2>
          </div>

          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img
                  src={nat8}
                  className="story__img"
                  alt="person on a tour"
                />
                <figcaption className="story__caption">
                  mary smith
                </figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-marging-bottom-small">
                  i had the best week ever with my family
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum, repellat repellendus corrupti molestiae deserunt
                  veniam soluta perspiciatis hic accusamus pariatur ab
                  consequatur animi reiciendis quos maxime veritatis vero,
                  similique labore? animi reiciendis quos maxime veritatis
                  vero, similique labore?
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img
                  src={nat9}
                  className="story__img"
                  alt="person on a tour"
                />
                <figcaption className="story__caption">
                  jack wilson
                </figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-marging-bottom-small">
                  Wow! my life is completely different now
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum, repellat repellendus corrupti molestiae deserunt
                  veniam soluta perspiciatis hic accusamus pariatur ab
                  consequatur animi reiciendis quos maxime veritatis vero,
                  similique labore? animi reiciendis quos maxime veritatis
                  vero, similique labore?
                </p>
              </div>
            </div>
          </div>

          <div className="u-center-text u-margin-huge">
            <a href="#" className=" btn-text u-margin-top-huge">
              Read all stories &rarr;
            </a>
          </div>
        </section>

        <section className="section-book">
          <div className="row">
            <div className="book">
              <div className="book__form">
                <form className="form" action="#">
                  <div className="u-margin-bottom-medium">
                    <h2 className="heading-secondary">
                      Start booking now
                    </h2>
                  </div>
                  {/* for the input elements */}
                  <div className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      placeholder="Full Name"
                      required
                      id="name"
                    />
                    <label htmlFor="name" className="form__label">
                      Full name
                    </label>
                  </div>
                  <div className="form__group">
                    <input
                      type="email"
                      className="form__input"
                      placeholder="Email adress"
                      required
                      id="email"
                    />
                    <label htmlFor="name" className="form__label">
                      Email adress
                    </label>
                  </div>
                  {/* for the redio bottons */}
                  <div className="form__group  u-margin-bottom-medium">
                    <div className="form__radio-group ">
                      <input
                        type="radio"
                        className="form__radio-input"
                        id="small"
                        name="size"
                      />
                      <label htmlFor="small" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Small tour group
                      </label>
                    </div>

                    <div className="form__radio-group">
                      <input
                        type="radio"
                        className="form__radio-input"
                        id="large"
                        name="size"
                      />
                      <label htmlFor="large" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Large tour group
                      </label>
                    </div>
                  </div>

                  <div className="form__group">
                    <button className="btn btn--green">
                      Next step &rarr;
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__logo-box">
          <img
            src={fulllogo}
            alt="fuller version of the logo"
            className="footer__logo"
          />
        </div>

        <div className="row ">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Company
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Contact us
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Careers
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Privacy policy
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-1-of-2">
            <p className="footer__copyright">
              Built by{' '}
              <a href="" className="footer__link">
                Seth
              </a>{' '}
              from learning from jonas's online course{' '}
              <a href="" className="footer__link">
                Advanced css
              </a>
              . Copyright &copy; by Jonas Schredtmann. You are 100 5
              allowed to use this webpage for both personal and connercial
              use , but Not to claim it as your own desing. A credit to the
              original author, Jonas would be highlt appreciated.
            </p>
          </div>
        </div>
      </footer>

      <div className="popup" id="popup">
        <div className="popup__content">
          <div className="popup__left">
            <img src={nat8} alt="tour photo" className="popup__img" />
            <img src={nat9} alt="tour photo" className="popup__img" />
          </div>
          <div className="popup__right">
            <a href="#section-tours" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary u-margin-bottom-small">
              Start booking now
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Important &ndash; Please read the terms before booking
            </h3>
            <p className="popup__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Fugit ad pariatur facilis ullam facere adipisci quisquam
              eaque consequatur quia, ratione voluptatem tempora cupiditate
              nulla esse eveniet molestias ea accusantium eos.
            </p>
            <a href="#" className="btn btn--green">
              book now
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

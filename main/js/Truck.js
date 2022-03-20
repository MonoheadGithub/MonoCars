function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const { TransitionGroup, CSSTransition } = ReactTransitionGroup;

/* Slides data
-------------------------------------------------------------- */


const
floorImg = 'https://i.imgur.com/gj4AbSS.png',
defualtcarImg = 'https://i.imgur.com/wAgJX0S.png',
tr1 = 'https://i.imgur.com/4WuJ3vS.png';
tr2 = 'https://i.imgur.com/o0Ocedg.png';
tr3 = 'https://i.imgur.com/t6Mdbfu.png';
tr4 = 'https://i.imgur.com/8EaV47K.png';
tr5 = 'https://i.imgur.com/P8bAWTt.png';
const slides = [


{
    id: 1,
    name: "★ 2012 Ford Raptor",
    desc:
    "★ Premium Only ★ Acceleration:Okay / Brakes:Okay / Handling:Good",
    color: "#FFC300",
    imgFloorUrl: floorImg,
    imgUrl: tr1,
    topSpeed: 70,
    slots: 10,
    seats:5,
    Price: 79999,
    bckgHeight: 340,
    carShadowHeight: 200,
    shadowOpacity: 0.5 },

    {
      id: 2,
      name: "2014 Mercedes Sprinter Box Truck",
      desc: "Acceleration:Bad / Brakes:Okay / Handling:Good",
      color: "#FFFFFF",
      imgFloorUrl: floorImg,
      imgUrl: tr2,
      topSpeed: 65,
      slots: 20,
      seats:3,
      Price: 199999,
      bckgHeight: 300,
      carShadowHeight: 300,
      shadowOpacity: 0.2 },

      {
        id: 3,
        name: "2008 Ford F350 Superduty",
        desc: "Acceleration:Bad / Brakes:Okay / Handling:Okay",
        color: "#FFFFFF",
        imgFloorUrl: floorImg,
        imgUrl: tr4,
        topSpeed: 65,
        slots: 10,
        seats:4,
        Price: 135999,
        bckgHeight: 300,
        carShadowHeight: 300,
        shadowOpacity: 0.2 },


                  {
                      id: 4,
                      name: "★ 1969 Chevrolet C10",
                      desc:
                      "★ Premium Only ★ Acceleration:Okay / Brakes:Okay / Handling:Good",
                      color: "#FFC300",
                      imgFloorUrl: floorImg,
                      imgUrl: tr5,
                      topSpeed: 64,
                      slots: 4,
                      seats:3,
                      Price: 145599,
                      bckgHeight: 340,
                      carShadowHeight: 200,
                      shadowOpacity: 0.5 },

      {
        id: 5,
        name: "2009 Toyota Tundra Crewmax",
        desc: "Acceleration:Okay / Brakes:Good / Handling:Okay",
        color: "#FFFFFF",
        imgFloorUrl: floorImg,
        imgUrl: tr3,
        topSpeed: 60,
        slots: 4,
        seats:3,
        Price: 39050,
        bckgHeight: 300,
        carShadowHeight: 300,
        shadowOpacity: 0.2 },



];



/* Set CSS Variables
  */
class SetCSSVariables extends React.Component {






  componentWillReceiveProps(props) {
    Object.keys(props.cssVariables).forEach(function (key) {
      document.documentElement.style.setProperty(key, props.cssVariables[key]);
    });
  }

  render() {
    return this.props.children;
  }}



/* Slide aside
    -------------------------------------------------------------- */_defineProperty(SetCSSVariables, "PropTypes", { cssVariables: PropTypes.object.isRequired, className: PropTypes.string });

function SlideAside(props) {
  const activeCar = props.activeCar;
  return /*#__PURE__*/(
    React.createElement("div", { className: "monocar-slide-aside" }, /*#__PURE__*/
    React.createElement("h5", null, "*Ranked By Speed*"), /*#__PURE__*/
    React.createElement("h1", { className: "monocar-slide-aside__wholename" }, /*#__PURE__*/
    React.createElement("span", null, "Truck:"), /*#__PURE__*/
    React.createElement(TransitionGroup, { component: "span", className: "monocar-slide-aside__name" }, /*#__PURE__*/
    React.createElement(CSSTransition, {
      key: activeCar.name,
      timeout: { enter: 800, exit: 1000 },
      className: "monocar-slide-aside__name-part",
      classNames: "monocar-slide-aside__name-part-",
      mountOnEnter: true,
      unmountOnExit: true }, /*#__PURE__*/

    React.createElement("span", null, activeCar.name)))), /*#__PURE__*/



    React.createElement(TransitionGroup, { className: "monocar-slide-aside__desc" }, /*#__PURE__*/
    React.createElement(CSSTransition, {
      key: activeCar.desc,
      timeout: { enter: 900, exit: 1200 },
      className: "monocar-slide-aside__desc-text",
      classNames: "monocar-slide-aside__desc-text-",
      mountOnEnter: true,
      unmountOnExit: true }, /*#__PURE__*/

    React.createElement("p", null, activeCar.desc))), /*#__PURE__*/



    React.createElement("div", { className: "monocar-slide-aside__button" }, /*#__PURE__*/
    React.createElement('a', {href: '../'},
    React.createElement("button", { className: "button" }, "← Back to Homepage"), /*#__PURE__*/

    React.createElement(TransitionGroup, null, /*#__PURE__*/
    React.createElement(CSSTransition, {
      key: activeCar.color,
      timeout: { enter: 800, exit: 1000 },
      mountOnEnter: true,
      unmountOnExit: true,
      classNames: "button__border-" }, /*#__PURE__*/

    React.createElement(SetCSSVariables, { cssVariables: { '--btn-color': activeCar.color } }, /*#__PURE__*/
    React.createElement("span", { className: "button__border" }))))))));






}

SlideAside.PropTypes = {
  activeCar: PropTypes.object.isRequired };


/* Slide animate values
    -------------------------------------------------------------- */

function animate(render, duration, easing, next = () => null) {
  const start = Date.now();

  (function loop() {
    const current = Date.now(),
    delta = current - start,
    step = delta / duration;

    if (step > 1) {
      render(1);
      next();
    } else {
      requestAnimationFrame(loop);
      render(easing(step * 2));
    }
  })();
}

const myEasing = BezierEasing(.4, -0.7, .1, 1.5);

class AnimValue extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "node",






    null);_defineProperty(this, "timeout",
    null);_defineProperty(this, "setValue",



















    (value, step) => {
      if (!this.node) {
        return;
      }

      if (step === 1) {
        this.node.style.opacity = 1;
      } else {
        this.node.style.opacity = 0.7;
      }

      this.node.innerHTML = value.toLocaleString();
    });}animate(previousValue, newValue, applyFn) {window.clearTimeout(this.timeout);const diff = newValue - previousValue;const renderFunction = (step) => {this.timeout = setTimeout(() => {applyFn(this.props.transformFn(previousValue + diff * step, step), step);}, this.props.delay);};animate(renderFunction, this.props.duration, myEasing);}

  componentDidMount() {
    this.animate(0, this.props.value, this.setValue);
  }

  componentWillReceiveProps(props) {
    let previousValue = this.props.value;

    if (previousValue !== props.value) {
      this.animate(previousValue, props.value, this.setValue);
    }
  }

  componentWillUnmount() {
    window.clearTimeout(this.timeout);
    this.timeout = null;
  }

  render() {
    return /*#__PURE__*/React.createElement("span", { className: this.props.className, children: "0", ref: node => this.node = node });
  }}_defineProperty(AnimValue, "defaultProps", { delay: 0, duration: 800, transformFn: value => Math.floor(value) });


class AnimateValue extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement(AnimValue, {
        className: this.props.className,
        delay: this.props.delay,
        value: this.props.value,
        transformFn: (value, step) =>
        step === 1 ? value % 1 != 0 ? value.toFixed(1) : value : Math.abs(Math.floor(value)) }));



  }}


let DELAY_TOP_SPEED = 0,
DELAY_slots = 0,
DELAY_Price = 0;


class SlideParams extends React.Component {





  componentWillReceiveProps(props) {
    if (!props.animationForward) {
      DELAY_TOP_SPEED = 0;
      DELAY_Price = 0;
    } else {
      DELAY_TOP_SPEED = 0;
      DELAY_Price = 0;
    }
  }

  render() {
    const { activeCar } = this.props;

    return /*#__PURE__*/(
      React.createElement("div", { className: "monocar-slide-params" }, /*#__PURE__*/
      React.createElement("ul", { className: "monocar-slide-params__list" }, /*#__PURE__*/
      React.createElement("li", { className: "monocar-slide-params__item" }, /*#__PURE__*/
      React.createElement("div", { className: "monocar-slide-params__wrapper" }, /*#__PURE__*/
      React.createElement(AnimateValue, {
        className: "monocar-slide-params__value",
        value: activeCar.topSpeed,
        delay: DELAY_TOP_SPEED }), /*#__PURE__*/
      React.createElement("span", { className: "monocar-slide-params__sufix" }, "mph")), /*#__PURE__*/


      React.createElement("p", { className: "monocar-slide-params__name" }, "Top speed")), /*#__PURE__*/


      React.createElement("li", { className: "monocar-slide-params__item" }, /*#__PURE__*/
      React.createElement("div", { className: "monocar-slide-params__wrapper" }, /*#__PURE__*/
      React.createElement(AnimateValue, {
        className: "monocar-slide-params__value",
        value: activeCar.seats,
        delay: DELAY_slots }), /*#__PURE__*/
      React.createElement("span", { className: "monocar-slide-params__sufix" }, "Seats")), /*#__PURE__*/

      React.createElement("p", { className: "monocar-slide-params__name" }, "Seats")), /*#__PURE__*/


      React.createElement("li", { className: "monocar-slide-params__item" }, /*#__PURE__*/
      React.createElement("div", { className: "monocar-slide-params__wrapper" }, /*#__PURE__*/
      React.createElement(AnimateValue, {
        className: "monocar-slide-params__value",
        value: activeCar.slots,
        delay: DELAY_slots }), /*#__PURE__*/
      React.createElement("span", { className: "monocar-slide-params__sufix" }, "slots")), /*#__PURE__*/

      React.createElement("p", { className: "monocar-slide-params__name" }, "Trunk size")), /*#__PURE__*/







      React.createElement("li", { className: "monocar-slide-params__item" }, /*#__PURE__*/
      React.createElement("div", { className: "monocar-slide-params__wrapper" }, /*#__PURE__*/
      React.createElement(AnimateValue, {
        className: "monocar-slide-params__value",
        value: activeCar.Price,
        delay: DELAY_Price }), /*#__PURE__*/
      React.createElement("span", { className: "monocar-slide-params__sufix" }, "$$")), /*#__PURE__*/

      React.createElement("p", { className: "monocar-slide-params__name" }, "Price")))));




  }}_defineProperty(SlideParams, "PropTypes", { activeCar: PropTypes.object.isRequired, animationForward: PropTypes.bool.isRequired });


class Slide extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "handleEnter",







    e => {
      this.props.setAnimationState(this.props.ANIMATION_PHASES.STOP);
    });}

  render() {
    const { activeSlide, animationForward } = this.props;

    return /*#__PURE__*/(
      React.createElement("div", { className: `monocar-slide ${animationForward ? 'animation-forward' : 'animation-back'}` }, /*#__PURE__*/
      React.createElement(SlideAside, { activeCar: activeSlide }), /*#__PURE__*/

      React.createElement(TransitionGroup, null, /*#__PURE__*/
      React.createElement(CSSTransition, {
        key: activeSlide.name,
        timeout: { enter: 800, exit: 1000 },
        classNames: "monocar-slide__bckg-",
        mountOnEnter: true,
        unmountOnExit: true }, /*#__PURE__*/

      React.createElement(SetCSSVariables, {
        cssVariables: {
          '--car-color': activeSlide.color,
          '--bckg-height': activeSlide.bckgHeight + 'px',
          '--shadow-opacity': activeSlide.shadowOpacity,
          '--car-shadow-height': activeSlide.carShadowHeight + 'px' } }, /*#__PURE__*/


      React.createElement("div", { className: "monocar-slide__bckg" }, /*#__PURE__*/
      React.createElement("div", { className: "monocar-slide__bckg-fill" }))))), /*#__PURE__*/





      React.createElement(TransitionGroup, null, /*#__PURE__*/
      React.createElement(CSSTransition, {
        key: activeSlide.name,
        timeout: { enter: 700, exit: 1200 },
        classNames: "monocar-slide__img-",
        mountOnEnter: true,
        unmountOnExit: true,
        onEntered: this.handleEnter }, /*#__PURE__*/

      React.createElement("div", { className: "monocar-slide__img" }, /*#__PURE__*/
      React.createElement("img", { className: "monocar-slide__img-floor", src: activeSlide.imgFloorUrl, alt: "" }), /*#__PURE__*/
      React.createElement("img", { className: "monocar-slide__img-car", src: activeSlide.imgUrl, alt: "" })))), /*#__PURE__*/




      React.createElement(SlideParams, { activeCar: activeSlide, animationForward: animationForward })));


  }}_defineProperty(Slide, "PropTypes", { activeSlide: PropTypes.object.isRequired, animationForward: PropTypes.bool.isRequired, setAnimationState: PropTypes.func.isRequired, ANIMATION_PHASES: PropTypes.object.isRequired });


class SliderNavigation extends React.Component {





  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "monocar-slider-navigation" }, /*#__PURE__*/
      React.createElement("ul", { className: "monocar-slider-navigation__list" },
      this.props.carsNames.map((car) => /*#__PURE__*/

      React.createElement("li", { key: car.id, className: "monocar-slider-navigation__item" }, /*#__PURE__*/
      React.createElement("a", {
        href: "#",
        onClick: event => {
          event.preventDefault();
          this.props.setActiveSlide(this.props.carsNames.indexOf(car));
        },
        className: `monocar-slider-navigation__link ${
        this.props.carsNames[this.props.activeSlide] === car ?
        'monocar-slider-navigation__link--active ' :
        ''
        }`,
        style: {
          color: this.props.carsNames[this.props.activeSlide] === car ? car.color : '' } },


      car.name))))));






  }}_defineProperty(SliderNavigation, "PropTypes", { setActiveSlide: PropTypes.func.isRequired, carsNames: PropTypes.array.isRequired });



const logomonocar = 'https://i.imgur.com/QB6noJo.png',
mouseImg = './img/mouse.svg',
backarrow = './img/arrow.png';


/* Slider
    -------------------------------------------------------------- */

const ANIMATION_PHASES = {
  PENDING: 'PENDING',
    STOP: 'STOP' };


  class Slider extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
      {
        activeSlide: 0,
        animationForward: true,
        slidesCount: slides.length,
        animationState: null });_defineProperty(this, "slider",


      {
        header: '',
        content: '' });_defineProperty(this, "setAnimationState",





    animationState => this.setState({ animationState }));_defineProperty(this, "setActiveSlide",

    slideId => {
      this.setState({
        activeSlide: slideId,
        animationForward: this.state.activeSlide < slideId ? true : false });


      this.setAnimationState(ANIMATION_PHASES.PENDING);
    });_defineProperty(this, "timeout",

    null);_defineProperty(this, "handleScroll",

    e => {
      let sliderHeight = this.slider.content.clientHeight,
      headerHeight = this.slider.header.clientHeight;

      if (window.innerHeight < sliderHeight + headerHeight) {
        return;
      }

      e.preventDefault();

      window.clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {
        if (e.deltaY < 0 && this.state.activeSlide !== 0) {
          this.setActiveSlide(this.state.activeSlide - 1);
        }
        if (e.deltaY > 0 && this.state.activeSlide !== this.state.slidesCount - 1) {
          this.setActiveSlide(this.state.activeSlide + 1);
        }
      }, 50);
    });}componentDidMount() {this.setState({ activeSlide: 0  });this.setAnimationState(ANIMATION_PHASES.PENDING);this.slider.header = document.querySelector('.monocar-header');this.slider.content = document.querySelector('.monocar-slider');document.body.addEventListener('wheel', this.handleScroll);}

  componentWillUnmount() {
    document.body.removeEventListener('wheel', this.handleScroll);
    window.clearTimeout(this.timeout);
    this.timeout = null;
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "monocar-slider" }, /*#__PURE__*/
      React.createElement(SliderNavigation, {
        activeSlide: this.state.activeSlide,
        setActiveSlide: this.setActiveSlide,
        carsNames: slides.map(slide => ({
          id: slide.id,
          name: slide.name,
          color: slide.color })) }), /*#__PURE__*/



      React.createElement(Slide, {
        animationForward: this.state.animationForward,
        activeSlide: slides[this.state.activeSlide],
        animationState: this.state.animationState,
        setAnimationState: this.setAnimationState,
        ANIMATION_PHASES: ANIMATION_PHASES }), /*#__PURE__*/


));



  }}



/* Header
    -------------------------------------------------------------- */
function Header() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "monocar-header" }, /*#__PURE__*/
    React.createElement("div", { className: "monocar-header__logo" }, /*#__PURE__*/
    React.createElement('a', {href: '../'},
    React.createElement("img", { src: logomonocar, alt: "" }))), /*#__PURE__*/

    React.createElement("div", { className: "monocar-header__nav" }, /*#__PURE__*/
    React.createElement("img", { src: backarrow, alt: "" }))));

}



/* App
    -------------------------------------------------------------- */
class App extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(Slider, null)));


  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));

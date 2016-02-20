'use strict';

var PacedMinutes = React.createClass({
  displayName: 'PacedMinutes',
  getInitialState: function() {
    return {value: this.props.data};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
    this.props.onChangeValue(event.target.value);
  },
  shouldComponentUpdate: function () {
    return true;
  },
  render: function() {
    return (
      <span>
      <input 
        type="text" 
        value={this.state.value} 
        onChange={this.handleChange}
        className="pace-minutes minutes mdl-textfield__input" 
      />
      <br /><span>{this.state.data}</span>
      </span>
    );
  }
});
var PaceSeconds = React.createClass({
  displayName: 'PaceSeconds',
  getInitialState: function() {
    return {value: this.props.data};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
    this.props.onChangeValue(event.target.value);
  },
  shouldComponentUpdate: function () {
    return true;
  },
  render: function() {
    return (
      <span>
      <input 
        type="text" 
        value={this.state.value} 
        onChange={this.handleChange} 
        className="pace-seconds seconds mdl-textfield__input" 
      />
      <br /><span>{this.state.data}</span>
      </span>
    );
  }
});
var SpeeddMinutes = React.createClass({
  displayName: 'SpeeddMinutes',
  getInitialState: function() {
    return {value: this.props.data};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
    this.props.onChangeValue(event.target.value);
  },
  shouldComponentUpdate: function () {
    return true;
  },
  render: function() {
    return (
      <span>
      <input 
        type="text" 
        value={this.state.value} 
        onChange={this.handleChange} 
        className="speed-minutes minutes mdl-textfield__input" 
      />
      <br /><span>{this.state.data}</span>
      </span>
    );
  }
});
var SpeedSeconds = React.createClass({
  displayName: 'SpeedSeconds',
  getInitialState: function() {
    return {value: this.props.data};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
    this.props.onChangeValue(event.target.value);
  },
  shouldComponentUpdate: function () {
    return true;
  },
  render: function() {
    return (
      <span>
      <input 
        type="text" 
        value={this.state.value} 
        onChange={this.handleChange} 
        className="speed-seconds seconds mdl-textfield__input" 
      />
      <br /><span>{this.state.data}</span>
      </span>
    );
  }
});

var PaceForm = React.createClass({
  displayName: 'PaceForm',
  separator: ':',
  getInitialState: function() {
    return {data: this.props.data};
  },
  href: function() {
    return this.state.data.minutes + this.separator + this.state.data.seconds;
  },
  link: function() {
    return window.location.protocol + '//' + window.location.host + '/#' + this.href();
  },
  isValidMinutes: function(value) {
    return (! isNaN(value) 
      && -1 === value.indexOf('.') 
      && 2 >= value.length
    );
  },
  isValidSeconds: function(value) {
    return (! isNaN(value) 
      && -1 === value.indexOf('.') 
      && 3 >= value.length
    );
  },
  handleChangeMinutes: function(event) {
    var value = event.target.value;

    if (! this.isValidMinutes(value)) {
      return;
    }

    var data = this.state.data;
    data.minutes = value;

    this.props.onChangeValue(data);
    this.setState({data: data});
  },
  handleChangeSeconds: function(event) {
    var value = event.target.value;

    if (! this.isValidSeconds(value)) {
      return;
    }

    var data = this.state.data;
    data.seconds = value;

    this.props.onChangeValue(data);
    this.setState({data: data});
  },
  render: function() {
    return (
      <div className="mdl-card mdl-shadow--2dp card-pace">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">Allure</h2>
        </div>
        <div className="mdl-card__supporting-text">
          <div className="mdl-textfield mdl-js-textfield">
            <input 
              type="text" 
              value={this.state.data.minutes} 
              onChange={this.handleChangeMinutes}
              className="pace-minutes minutes mdl-textfield__input" 
              tabIndex="1"
            />
            <span className="separator mdl-textfield__text">{this.separator}</span>
            <input 
              type="text" 
              value={this.state.data.seconds} 
              onChange={this.handleChangeSeconds}
              className="pace-seconds seconds mdl-textfield__input" 
              tabIndex="2"
            />
            <span className="unit mdl-textfield__text">min/km</span>
          </div>
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a href={"#" + this.href()}
            className=""
          >
            {this.link()}
          </a>
        </div>
      </div>
    );
  }
});

var SpeedForm = React.createClass({
  displayName: 'SpeedForm',
  getInitialState: function() {
    return {data: this.props.data};
  },
  href: function() {
    return this.state.data.value;
  },
  link: function() {
    return window.location.protocol + '//' + window.location.host + '/#' + this.href();
  },
  isValid: function(value) {
    return (! isNaN(value) 
      && 5 >= value.length
      && 100 >= value
    );
  },
  handleChange: function(event) {
    var value = event.target.value;

    value = value.replace(',', '.');

    if (! this.isValid(value)) {
      return;
    }

    var data = this.state.data;
    data.value = value;

    this.props.onChangeValue(data);
    this.setState({data: data});
  },
  render: function() {
    return (
      <div className="mdl-card mdl-shadow--2dp card-speed">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">Vitesse</h2>
        </div>
        <div className="mdl-card__supporting-text">
          <div className="mdl-textfield mdl-js-textfield">
            <input 
              type="text" 
              value={this.state.data.value} 
              onChange={this.handleChange}
              className="speed mdl-textfield__input" 
              tabIndex="3"
            />
            <span className="unit mdl-textfield__text">km/h</span>
          </div>
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a href={"#" + this.href()}
            className=""
          >
            {this.link()}
          </a>
        </div>
      </div>
    );
  }
});

var PaceSpeedForm = React.createClass({
  displayName: 'PaceSpeedForm',
  getInitialState: function() {
    return {
      data: this.getDataFromHash()
    };
  },
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        data: this.getDataFromHash()
      })
    });
  },
  getDataFromHash: function() {
    var data = ((this.state && this.state.data) ? this.state.data : {
      pace: {minutes: null, seconds: null},
      speed: {value: null}
    });

    var hash = window.location.hash.substr(1);

    if (-1 !== hash.indexOf(':')) {
      var pace = hash.split(':');
      data.pace.minutes = this.limit(this.isNaN(pace[0]), 2);
      data.pace.seconds = this.limit(this.isNaN(pace[1]), 3);

      window.location.hash = '#' + data.pace.minutes + ':' + data.pace.seconds;

      data.speed.value = this.paceToSpeed(data.pace);
    } else {
      var speed = this.isNaN(hash);

      if (5 < speed.length) {
        speed = speed.slice(0, 5)
      }
      if (100 < speed) {
        speed /= 10;
      }
      data.speed.value = this.round(speed);

      window.location.hash = '#' + data.speed.value;

      var pace = this.speedToPace(data.speed.value);
      data.pace.minutes = pace.minutes;
      data.pace.seconds = pace.seconds;
    }

    return data;
  },
  round: function(value) {
    return Math.round(value * 100) / 100;
  },
  limit: function(value, nb) {
    return value.slice(0, nb);
  },
  isNaN: function(value) {
    return ((isNaN(value)) ? 0 : value);
  },
  paceToSpeed: function(pace) {
    var minutes = pace.minutes;
    var seconds = pace.seconds;

    if ('' === minutes) {
      minutes = 0;
    }
    if ('' === seconds) {
      seconds = 0;
    }

    var hour = ((minutes * 1) + (seconds / 60)) / 60;

    if (0 !== hour) {
      var speed = 1 / hour;
      speed = (Math.round(speed * 100) / 100)

      return '' + speed;
    }

    return '0';
  },
  speedToPace: function(speed) {
    if ('' === speed) {
      speed = 0;
    }

    if (0 !== speed) {
      var paceFloat = 60 / (speed);

      var paceMinutes = Math.trunc(paceFloat);
      var paceSeconds = Math.round(60 * (paceFloat - Math.trunc(paceFloat)), 0);

      return {
        minutes: '' + paceMinutes,
        seconds: '' + paceSeconds,
      }
    }

    return {
      minutes: '0',
      seconds: '0',
    }
  },
  onChangePace: function(value) {
    var data = this.state.data;
    data.pace = value;

    data.speed.value = this.paceToSpeed(data.pace);

    this.setState({data: data});
  },
  onChangeSpeed: function(value) {
    var data = this.state.data;
    data.speed = value;

    var pace = this.speedToPace(data.speed.value);
    data.pace.minutes = pace.minutes;
    data.pace.seconds = pace.seconds;

    this.setState({data: data});
  },
  render: function() {
    return (
      <form action="#">
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--3-col-desktop mdl-cell--3-col-tablet mdl-cell--2-col-phone mdl-cell--3-offset-desktop mdl-cell--1-offset-tablet">
            <PaceForm data={this.state.data.pace} onChangeValue={this.onChangePace} />
          </div>
          <div className="mdl-cell mdl-cell--3-col-desktop mdl-cell--3-col-tablet mdl-cell--2-col-phone">
            <SpeedForm data={this.state.data.speed} onChangeValue={this.onChangeSpeed} />
          </div>
        </div>
      </form>
    );
  }
});

ReactDOM.render(
  <PaceSpeedForm />,
  document.getElementById('container')
);

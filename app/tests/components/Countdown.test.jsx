var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('Should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    it('should set state to stopped and countdown to zero', () => {
      var countDown = TestUtils.renderIntoDocument(<Countdown />);
      expect(countDown.state.countdownStatus).toBe('stopped');
      expect(countDown.state.count).toBe(0);
    });
    it('should set state to started and countdown when handleSetCountdown', (done) => {
      var countDown = TestUtils.renderIntoDocument(<Countdown />);
      var expireTime = 5;
      countDown.handleSetCountdown(expireTime);
      expect(countDown.state.countdownStatus).toBe('started');
      expect(countDown.state.count).toBe(expireTime);

      setTimeout(() => {
        expect(countDown.state.count).toBe(4);
        done();
      }, 1001);
    });
    it('should set state to stopped when it expires', (done) => {
      var countDown = TestUtils.renderIntoDocument(<Countdown />);
      var expireTime = 1;
      countDown.handleSetCountdown(expireTime);
      setTimeout(() => {
        expect(countDown.state.count).toBe(0);
        expect(countDown.state.countdownStatus).toBe('stopped');
        done();
      }, 3001);
    });
    it('should pause countdown on paused status', (done) => {
      var countDown = TestUtils.renderIntoDocument(<Countdown />);
      countDown.handleSetCountdown(3);
      countDown.handleStatusChange('paused');

      setTimeout(() => {
        expect(countDown.state.count).toBe(3);
        expect(countDown.state.countdownStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should stop countdown on stopped status', () => {
      var countDown = TestUtils.renderIntoDocument(<Countdown />);
      countDown.handleSetCountdown(3);
      countDown.handleStatusChange('stopped');

      expect(countDown.state.count).toBe(0);
      expect(countDown.state.countdownStatus).toBe('stopped');
    });

    it('should have Countdown App title', () => {
      var countDown = TestUtils.renderIntoDocument(<Countdown />);
      var $el = $(ReactDOM.findDOMNode(countDown));
      var $h1 = $el.find('h1');

      expect($h1.length).toBe(1);
      expect($h1[0].innerText).toBe('Countdown App');
    });
  });
});
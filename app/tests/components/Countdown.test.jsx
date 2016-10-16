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
  });
});
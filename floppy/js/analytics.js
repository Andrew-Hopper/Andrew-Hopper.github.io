/**
 * Created by ed on 21/06/2018.
 */

// it's okay, it's a public data
const TRACKING_ID = 'UA-109224221-2';

const init = function() {
  // https://developers.google.com/analytics/devguides/collection/analyticsjs
  (function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script',
    'https://www.google-analytics.com/analytics.js', 'ga');

  window.ga('create', TRACKING_ID, 'auto');
};

const send = function(method, options = {}) {
  window.ga || init();
  return window.ga('send', method, options);
};

const sendEvent = function(category, action, label) {
  return send('event', {
    eventCategory: category,
    eventAction: action,
    eventLabel: label,
  });
};

const trackPageView = function() {
  return send('pageview');
};

const trackGame = function(action, label) {
  return sendEvent('game', action, label);
};

const trackGameStart = function() {
  trackGameJump.count = 0;
  return trackGame('start', ++trackGameStart.count);
};
trackGameStart.count = 0;

const trackGameJump = function() {
  return trackGame('jump', ++trackGameJump.count);
};
trackGameJump.count = 0;

const trackGameScore = function(score) {
  return trackGame('score', score);
};

const trackGameHighScore = function(score) {
  return trackGame('high-score', score);
};

const trackGameDead = function(score) {
  return trackGame('dead', score);
};

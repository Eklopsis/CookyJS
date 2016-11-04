/*
 * CookyJS jQuery plugin unminified - version 0.0.1
 * https://github.com/Eklopsis/CookyJS
 *
 * @author Eklopsis <iamguillaumepe@gmail.com>
 *
 */

$(function($) {
  $.extend({
    cookie: function() { return this }
  });

  $.extend('cookie', {
    push: function() { return this }
  });

  // Create cookie
  $.cookie.create = function(key, value, params) {
    params = $.extend({}, params);

    var c_date = new Date;
        c_expiration = (params.days) ? (params.days * 24 * 60 * 60 * 1000) : (1 * 24 * 60 * 60 * 1000),
        c_settings = [];

    c_date.setTime(c_date.getTime() + c_expiration);

    c_settings = [
      (params.domain) ? '; Domain=' + params.domain : '',
      (params.path) ? '; Path=' + params.path : '',
      (params.expires) ? '; Expires=' + date.toUTCString() : '',
    ].join('');

    document.cookie = key + '=' + value + c_settings;
  }

  // Read cookie
  $.cookie.read = function(key) {
    var r_cookies = document.cookie.split('; ');

    for (var i = 0; i < r_cookies.length; i++) {
      var r_c_cookies = r_cookies[i].split('=');

      if (r_c_cookies[0] == key) {
        return r_c_cookies[1];
      }
    }

    return '';
  }

  // Replace cookie
  $.cookie.edit = function(key, value) {
    $.cookie.create(key, value);
  }

  // Remove cookie
  $.cookie.remove = function(key) {
    document.cookie = key + '=;expires=Thu, 01-Jan-70 00:00:01 GMT';
  }

  // Create array or edit cookie
  $.cookie.push = function(key, value, params) {
    params = $.extend({}, params);

    var p_cookie = $.cookie.read(key),
        p_settings = [];

    p_settings = [
      (params.domain) ? '; Domain=' + params.domain : '',
      (params.path) ? '; Path=' + params.path : '',
      (params.expires) ? '; Expires=' + date.toUTCString() : '',
    ].join('');

    if (p_cookie.length < 1) {
      $.cookie.create(key, value, p_settings);
    } else {
      var p_cookies = document.cookie.split('; '),
          p_exists = false,
          p_value = null;

      for (var i = 0; i < p_cookies.length; i++) {
        var p_c_cookies = p_cookies[i].split('=');

        if (p_c_cookies[0] == key) {
          p_exists = true;
          p_value = p_c_cookies[1];
        }
      }

      if (p_exists) {
        $.cookie.create(key, p_value + ',' + value, p_settings);
      } else {
        $.cookie.create(key, value, p_settings);
      }
    }
  }

  // Cookie array edit value
  $.cookie.push.edit = function(key, search, newvalue) {
    var pe_cookies = document.cookie.split('; '),
        pe_c_f_cookie = null;

    for (var i = 0; i < pe_cookies.length; i++) {
      var pe_c_cookie = pe_cookies[i].split('=');

      if (pe_c_cookie[0] == key) {
        pe_c_f_cookie = pe_c_cookie[1].split(',');
      }
    }

    for (var a = 0; a < pe_c_f_cookie.length; a++) {
      if (pe_c_f_cookie[a] == search) {
        pe_c_f_cookie[a] = newvalue;
      }
    }

    newvalue = pe_c_f_cookie.join(',').replace(/,,/g, '');

    $.cookie.edit(key, newvalue);
  }

  // Cookie array remove value
  $.cookie.push.remove = function(key, search) {
    $.cookie.push.edit(key, search, '');
  }
});

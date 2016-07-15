function pretendRequest(email, pass, cb) {
  setTimeout(() => {
    if (email === 'ben@gmail.com' && pass === 'password') {
      cb({
        authenticated: true,
        user: {
          name: 'Ben',
        },
        token: Math.random().toString(36).substring(7),
      });
    } else {
      cb({ authenticated: false });
    }
  }, 0);
}

const onChange = () => {
};

const login = (email, pass, cb) => {
  if (localStorage.getItem('token')) {
    if (cb) cb(true);
    onChange(true);
    return;
  }
  pretendRequest(email, pass, (res) => {
    if (res.authenticated) {
      localStorage.setItem('token', res.token);
      localStorage.setItem('user', JSON.stringify(res.user));
      if (cb) cb(true, res.user);
      onChange(true);
    } else {
      if (cb) cb(false);
      onChange(false);
    }
  });
};

const getToken = () => localStorage.getItem('token');

const logout = (cb) => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  if (cb) cb();
  onChange(false);
};

const loggedIn = () => !!localStorage.getItem('token');

const getUser = () => {
  if (!localStorage.getItem('token')) {
    return {
      name: 'Guest',
    };
  }

  return JSON.parse(localStorage.getItem('user'));
};

export default {
  login,
  getToken,
  logout,
  loggedIn,
  onChange,
  getUser,
};

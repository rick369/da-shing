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
  if (localStorage.token) {
    if (cb) cb(true);
    onChange(true);
    return;
  }
  pretendRequest(email, pass, (res) => {
    if (res.authenticated) {
      localStorage.token = res.token;
      if (cb) cb(true, res.user);
      onChange(true);
    } else {
      if (cb) cb(false);
      onChange(false);
    }
  });
};

const getToken = () => localStorage.token;

const logout = (cb) => {
  delete localStorage.token;
  if (cb) cb();
  onChange(false);
};

const loggedIn = () => !!localStorage.token;

export default {
  login,
  getToken,
  logout,
  loggedIn,
  onChange,
};

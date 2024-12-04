exports.home = (req, res) => {
  res.render('index');
};

exports.about = (req, res) => {
  res.render('index', { content: 'partials/about' }); // Đây là cách gọi partials
};

exports.contact = (req, res) => {
  res.render('index', { content: 'partials/contact' }); // Tương tự cho contact
};

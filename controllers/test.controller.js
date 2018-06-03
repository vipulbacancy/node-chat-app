exports.test = function (req, res) {
  res.render('index', {
    title: 'Test',
  });
}
exports.demo = function (req, res) {
  res.render('index', {
    title: 'Demo',
  });
}

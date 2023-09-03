const Content = require('../models/contentModel');

exports.getContent = (req, res) => {
  Content.find()
    .then(content => res.json(content))
    .catch(err => res.status(404).json('Error ' + err));
};

exports.updateContent = (req, res) => {
  Content.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json('Content updated!'))
    .catch(err => res.status(400).json('Error: ' + err));
};
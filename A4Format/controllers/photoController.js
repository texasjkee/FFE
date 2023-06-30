const photoModel = require('../models/Photo');

const addPhoto = async (req, res, next) => {
  const {format, quantity, created, originalName} = JSON.parse(req.body.info);
  const imageName = req.file.path;

  const data = {
    originalName,
    imageName,
    quantity,
    format,
    created
  };

  try {
    await photoModel.create(data);
    res.status(201).json({message: 'File added'});
  } catch (error) {
    res.status(500).json(next); 
  };
};

const getAll = async (req, res, next) => {
  try {
    const photos =  await photoModel.find({});
    res.status(200).json(photos);
  } catch (error) {
    res.status(500).json(next); 
  };
};

module.exports = {addPhoto, getAll};
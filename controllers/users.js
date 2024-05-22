const express = require("express");
const { User } = require("../models");

const index = async (req, res) => {
  try {
    res.json(await User.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
};

const create = async (req, res) => {
  try {
    res.json(await User.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
};

const show = async (req, res) => {
  try {
    res.json(await User.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
};

const destroy = async (req, res) => {
  try {
    res.json(await User.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
};

const update = async (req, res) => {
  try {
    res.json(
      await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  index,
  create,
  show,
  delete: destroy,
  update,
};

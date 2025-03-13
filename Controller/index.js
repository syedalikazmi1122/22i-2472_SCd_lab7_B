import Event from "../models/Event.js";

export const createEvent = async (req, res) => {
  try {
    const event = new Event({ ...req.body, userId: req.user._id });
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find({ userId: req.user._id }).sort({ date: 1 });
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
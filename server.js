const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;
const jsonParser = bodyParser.json();

app.use(cors());

const meetingRoomAgendaDetails = {};

app.use('/setRoomAgenda', jsonParser, (req, res) => {
  console.log('/setRoomAgenda_running...');
  console.log('req.body', JSON.stringify(req.body));

  const roomName = Object.keys(req.body)[0];
  meetingRoomAgendaDetails[roomName] = req.body[roomName];
  res.status(200).send(JSON.stringify(meetingRoomAgendaDetails));
});

app.use('/getRoomAgenda', jsonParser, (req, res) => {
  console.log('/getRoomAgenda_running...');
  console.log('req.body', JSON.stringify(req.body));

  res.status(200).send(meetingRoomAgendaDetails);
});

app.use('/startMeetingTimer', jsonParser, (req, res) => {
  console.log('/startMeetingTimer_running...');
  console.log('req.body', JSON.stringify(req.body));

  const roomName = req.body["room_name"]
  meetingRoomAgendaDetails[roomName].meeting_started = true;
  res.status(200);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
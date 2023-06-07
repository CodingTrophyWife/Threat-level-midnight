const { connect, connection } = require('mongoose');

connect('mongodb://localhost/ThreatlevelmidnightDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
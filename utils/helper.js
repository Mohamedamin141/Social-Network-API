
const { format } = require('date-fns');
module.exports = {
  formatTimestamp: (timestamp) => {
    return format(timestamp, "do 'of' MMM, yyyy 'at' hh:mm a");
  },
};
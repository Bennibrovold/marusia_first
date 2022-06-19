const { pick } = require("ramda");

module.exports = ({ request, session, version }) => {
  return {
    session: pick(["session_id", "message_id", "user_id"], session),
    version,
    response: {
      text: "Привет вездекодерам!",
      tts: "Привет вездекодерам!",
      end_session: false,
    },
  };
};

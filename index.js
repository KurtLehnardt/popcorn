import modalTemplate from './templates/modals';

const audio = './audio';

const pop = (user, msg) => {
  return `${user} says ${msg}`;
}
const corn = voiceMsg => {
  voiceMsg.record();
}


pop("Kurt",  "hi")
pop("test", "test")

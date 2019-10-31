import modalTemplate from './templates/modals';
import audioTemplate from './templates/audio';

const audio = './audio';

const pop = (user, msg) => {
  return `${user} says ${msg}`;
}
const corn = voiceMsg => {
  voiceMsg.record();
}


pop("Kurt",  "hi")
pop("test", "test")

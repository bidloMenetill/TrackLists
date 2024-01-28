import moment from "moment";

export default function (seconds) {
  return moment.utc(seconds * 1000).format("mm:ss");
}

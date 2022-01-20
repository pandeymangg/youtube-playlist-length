export const calculateDuration = ({
  duration,
  speed,
}: {
  duration: number;
  speed: number;
}) => {
  const totalSeconds = duration / speed;

  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.floor(totalSeconds % 60);

  const hours = Math.floor(minutes / 60);
  minutes = Math.floor(minutes % 60);

  return [hours, minutes, seconds];
};

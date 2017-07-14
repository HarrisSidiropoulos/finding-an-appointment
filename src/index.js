/* eslint-disable no-unused-vars, no-multi-spaces, no-param-reassign, no-console, one-var, one-var-declaration-per-line */
function getStartTime(schedules, duration, startTime = '09:00', endTime = '19:00') {
  const toMinutes = s => (
    s.split(':').reduce((h, m) =>
      (parseInt(h, 10) * 60) + parseInt(m, 10)
    )
  );
  return schedules.reduce((p, n) => {
    return p.concat(n);
  }, [['00:00', startTime], [endTime, '24:00']]).sort().reduce((p, n) => {
    if (!p.start && toMinutes(p.last) + duration <= toMinutes(n[0])) {
      p.start = p.last;
    }
    p.last = p.last < n[1] ? n[1] : p.last;
    return p;
  }, { last: '00:00', start: null }).start;
}

export default getStartTime;

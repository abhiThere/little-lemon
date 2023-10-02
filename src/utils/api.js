const seededRandom = seed => {
  const m = 2 ** 35 - 32;
  const a = 185852;
  let s = seed % m;

  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = date => {
  const result = [];
  const random = seededRandom(date.getDate());

  for (let i = 17; i <= 22; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
  }

  return result;
};

export const submitAPI = formData =>
  formData && formData.date.length > 0 && formData.guests.length > 0;

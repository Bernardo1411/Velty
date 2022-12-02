export const formatPhone = (phone) => {
  const cleaned = (`${phone}`).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{1,2}|)$/);
  const match2 = cleaned.match(/^(\d{2}|)?(\d{1,5})$/);
  const match3 = cleaned.match(/^(\d{2})(\d{5})(\d{1,4})$/);

  if (match) {
    const number = (match[1] ? `${match[1]}` : '');

    return number;
  }

  if (match2) {
    const number = [`(${match2[1]}) `, match2[2]].join('');

    return number;
  }

  if (match3) {
    const number = ['(', match3[1], ') ', match3[2], '-', match3[3]].join('');

    return number;
  }

  return phone;
};

export const formatDate = (date) => {
  const cleaned = (`${date}`).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{1,2}|)$/);
  const match2 = cleaned.match(/^(\d{2}|)?(\d{1,2})$/);
  const match3 = cleaned.match(/^(\d{2})(\d{2})(\d{1,4})$/);

  if (match) {
    const number = (match[1] ? `${match[1]}` : '');

    return number;
  }

  if (match2) {
    const number = [`${match2[1]}/`, match2[2]].join('');

    return number;
  }

  if (match3) {
    const number = [match3[1], '/', match3[2], '/', match3[3]].join('');

    return number;
  }

  return date;
};

import { format } from 'date-fns';

// export const formatDate = (dateString) => {
//   return format(new Date(dateString), 'dd MMMM yyyy');
// };

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).replaceAll(' р.', '');
};

export const formatDateUa = (dateString) => {
  return new Date(dateString).toLocaleDateString('uk-UA', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).replaceAll(' р.', '');
};
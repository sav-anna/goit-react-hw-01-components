import PropTypes from 'prop-types';
const createColor = () => {
  const color =
    'rgba(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    0.5 +
    ')';

  return color;
};

export const StatisticItem = ({ label, percentage }) => {
  return (
    <li style={{ backgroundColor: createColor() }} class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </li>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
};

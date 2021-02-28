import PropTypes from 'prop-types';
import { label, input } from './Filter.module.scss';

const Filter = ({ value, onChange }) => {
  return (
    <label className={label}>
      Find contacts by name
      <input className={input} value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

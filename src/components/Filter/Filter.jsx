import { useDispatch, useSelector } from 'react-redux';
import { changeFilterAction } from '../../redux/filter/slice.filter';
import { getFilter } from 'redux/selectors';

import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(changeFilterAction(e.target.value));
  };

  return (
    <div className={css.box}>
      <input
        className={css.full}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
        placeholder="Find contacts by name"
      />
    </div>
  );
};

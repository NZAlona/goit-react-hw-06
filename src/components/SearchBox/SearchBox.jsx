import { useId } from 'react';
import css from './SearchBox.module.css';
// import { selectNameFilter } from '../../redux/filtersSlice';
// import { useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { useDispatch } from 'react-redux';

export default function SearchBox() {
  // const value = useSelector(selectNameFilter);

  // console.log(value);
  const dispatch = useDispatch();
  const inputField = useId();
  return (
    <>
      <label htmlFor={inputField} className={css.labelText}>
        Find contacts by name
      </label>

      <input
        type="text"
        id={inputField}
        // value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
        className={css.inputField}
      />
    </>
  );
}

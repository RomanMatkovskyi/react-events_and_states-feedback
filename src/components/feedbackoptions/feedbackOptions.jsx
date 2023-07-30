import s from './feedbackOptions.module.css';
export const FeedbackOptions = ({ options }) => {
  return (
    <ul className={s.btn_list}>
      <li>
        <button className={s.btn} onClick={() => options('good')}>
          Good
        </button>
      </li>
      <li>
        <button className={s.btn} onClick={() => options('neutral')}>
          Neutral
        </button>
      </li>
      <li>
        <button className={s.btn} onClick={() => options('bad')}>
          Bad
        </button>
      </li>
    </ul>
  );
};

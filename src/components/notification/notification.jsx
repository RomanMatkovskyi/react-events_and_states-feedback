import s from './notification.module.css';

export const Notification = ({ message }) => {
  return (
    <>
      <p className={s.notification}>{message}</p>
    </>
  );
};

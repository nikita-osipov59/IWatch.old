import { BorderPanel } from "../ui";
import { mockUserReferrals } from "./mocks/movie-comments";
import style from "./style.module.scss";

console.log(mockUserReferrals);

export const MovieComments = () => {
  return (
    <BorderPanel title="Comments">
      <ul className={style.list}>
        {mockUserReferrals.map((item) => (
          <li key={item.id} className={style.item}>
            <img
              className={style.avatar}
              src={item.avatar}
              alt={item.username}
            />
            <div className={style.user}>
              <div className={style.test}>
                <p className={style.username}>@{item.username}</p>
                <span>•</span>
                <p>{new Date(item.date).getHours()}ч назад</p>
              </div>
              <p className={style.description}>{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </BorderPanel>
  );
};

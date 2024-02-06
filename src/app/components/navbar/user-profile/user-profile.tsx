import { type User } from "next-auth";
import Image from "next/image";

import styles from "./user-profile.module.scss";

type PropsType = {
  user: User;
};

export const UserProfile = ({ user }: PropsType) => {
  return (
    <div className={styles.profileWrapper}>
      <Image
        src={`${user?.image}`}
        alt={`${user?.name} profile picture`}
        width={40}
        height={40}
        className={styles.profilePicture}
      />
      <div>{`${user?.name}`}</div>
    </div>
  );
};

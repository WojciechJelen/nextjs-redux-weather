import React from "react";
import styles from "./Placeholder.module.scss";
import clsx from "clsx";

type PropsType = {
  width: string;
  height: string;
  className?: string;
};

export const Placeholder = ({ width, height, className }: PropsType) => {
  const inlineStyle = {
    width,
    height,
  };

  const classNames = clsx(styles.placeholder, className);

  return <div className={classNames} style={inlineStyle}></div>;
};

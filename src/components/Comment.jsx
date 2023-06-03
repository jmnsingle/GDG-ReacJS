/* eslint-disable react/prop-types */
import { useState } from "react";

import { Avatar } from "./Avatar";

import styles from './Comment.module.css';

export function Comment({ content }) {
  const [likeCount, setLikeCount] = useState(0);


  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/jmnsingle.png"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Juliano Nogueira</strong>
              <time>Cerca de 1h atrás</time>
            </div>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            Curtidas <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
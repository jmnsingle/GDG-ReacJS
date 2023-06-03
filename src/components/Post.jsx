/* eslint-disable react/prop-types */
import { useState } from 'react';

import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post(props) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ]);
  const [newCommentText, setNewCommentText] = useState('');

  function handleCrateNewComment(event) {
    event.preventDefault()

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(event) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={props.author.avatarUrl} alt="" />
          <div className={styles.authorInfo}>
            <strong className={styles.author}>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>

        <time dateTime={props.publishedAt.toISOString()}>
          {props.author.publishedAt}
        </time>
      </header>

      <div className={styles.content}>
        {props.content.map(line => {
          return <p key={line.content}>{line.content}</p>;
        })}
      </div>

      <form onSubmit={handleCrateNewComment} className={styles.form}>
        <strong>Deixe seu comentário</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
            />
          )
        })}
      </div>
    </article>
  )
}
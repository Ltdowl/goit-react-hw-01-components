import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={styles['item']}>
      <span className={isOnline ? styles['online'] : styles['offline']} />
      <img className={styles['avatar']} src={avatar} alt={name} width="48" />
      <p className={styles['name']}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

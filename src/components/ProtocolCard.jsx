import React from 'react';
import styles from './ProtocolCard.module.css';

export default function ProtocolCard({ title, icon, children }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.icon}>{icon}</span>
        <h3>{title}</h3>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

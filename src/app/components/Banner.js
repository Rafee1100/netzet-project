'use client';
import React from 'react';
import styles from './Banner.module.css';

export default function Banner() {
  return (
    <div className={`text-center py-2 text-white fw-semibold ${styles.banner}`}>
      🚀 <span className="text-info">FRESH BEGINNINGS SALE:</span> Extra 25% OFF, Limited Spots - start your journey today!
    </div>
  );
}

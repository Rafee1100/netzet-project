'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-black py-3">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center text-white fs-3 fw-bold" href="/">
          <Image
            src="/logo.png"
            alt="Fametonic Logo"
            width={173}
            height={74}
            className="me-2"
          />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link text-white" href="#">About us</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" href="#">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

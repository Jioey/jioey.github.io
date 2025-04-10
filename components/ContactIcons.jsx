'use client'

import { useState } from 'react';
import Image from 'next/image';

// icon imports
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { AiFillWechat } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";

export default function ContactIcons() {
  const [showPopup, setShowPopup] = useState(false);
  const iconSize = 30;

  return (
    <div style={{
      // flex: '1 1',
      display: 'flex',
      gap: '1rem',
    }}>
      {/* Email Icon */}
      <a href="mailto:yifanzhu233@gmail.com" aria-label="My email">
        <MdEmail size={iconSize} style={{ cursor: 'pointer' }} />
      </a>

      {/* LinkedIn Icon */}
      <a
        href="https://www.linkedin.com/in/joey-yifan-zhu/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my LinkedIn profile"
      >
        <FaLinkedin size={iconSize} />
      </a>

      {/* GitHub Icon */}
      <a
        href="https://github.com/Jioey"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub size={iconSize} />
      </a>

      {/* Wechat Icon */}
      <AiFillWechat size={iconSize} onClick={() => setShowPopup(prev => !prev)} style={{ cursor: 'pointer' }} />
      {showPopup && (
        <div
          onClick={() => setShowPopup(false)} // Click outside to close
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.3)', // Optional dim background
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'fixed',
              top: '20%',
              left: '50%',
              transform: 'translateX(-50%)',
              height: '65vh',
              width: '45vh',
              backgroundColor: '#fff',
              padding: '10px',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
              zIndex: 100,
            }}
          >
            {/* <p style={{position: 'absolute', top: '2px', right: '2px', color: 'black'}}>X</p> */}
            <Image
              src="/wechat_qr.jpg"
              alt="WeChat QR Code"
              layout="fill"
            />
          </div>
        </div>
      )}
    </div>
  );
}

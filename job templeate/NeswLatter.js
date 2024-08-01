// components/SubscribeForm.js
"use client"
import React from 'react';

export default function SubscribeForm() {
    return (
        <div className="subscribe-container m-4  p-2">
            <div className="left">
                <h2>Subscribe to Our Newsletter</h2>
                <p>Stay up-to-date with our latest news and updates.</p>
            </div>
            <div className="right  p-5  ">
                <form>
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
            <style jsx>{`
        .subscribe-container {
          background-color: blue;
          padding: 10px;
          border-radius: 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 95%;
          box-sizing: border-box;
        }
        .left {
          flex: 1;
          text-align: left;
        }
        .right {
          flex: 1;
          text-align: right;
        }
        h2 {
          margin-bottom: 10px;
        }
        form {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        input[type="email"] {
          width: 100%; /* Ensure input field takes up full width */
          max-width: 400px; /* Limit maximum width for better readability */
          padding: 12px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 8px;
          box-sizing: border-box;
          font-size: 16px;
          outline: none;
        }
        input[type="email"]:focus {
          border-color: #333;
        }
        button {
          padding: 12px 20px;
          background-color: #333;
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          font-size: 16px;
        }
        button:hover {
          background-color: #555;
        }
        @media (max-width: 768px) {
          /* Responsive styles */
          .subscribe-container {
            flex-direction: column;
          }
@media (max-width: 500px) {
          /* Responsive styles */
          .subscribe-container {
            width: 70%;
            margin-left: auto,
             text-align: center;
          }

371


          .left,
          .right {
            width: 100%;
            text-align: center;
          }
          .right form {
            align-items: center;
          }
          input[type="email"] {
            max-width: 100%; /* Ensure input field takes up full width on smaller screens */
          }
        }
      `}</style>
        </div>
    );
};



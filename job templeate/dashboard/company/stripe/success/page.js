"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


    const PaymentSuccess = ({ searchParams }) => {








    const containerStyle = {
        marginTop: '50px',
    };

    const animatedBoxStyle = {
        padding: '30px',
        borderRadius: '10px',
        backgroundColor: '#f8f9fa',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        animation: 'fadeInUp 1s ease-in-out',
    };

    const checkmarkStyle = {
        fontSize: '4rem',
        color: 'green',
        marginTop: '20px',
        animation: 'bounce 1s ease-in-out infinite',
    };

    return (
        <div className="container" style={containerStyle}>
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 text-center">
                    <div style={animatedBoxStyle}>
                        <h1 className="display-4">Payment Successful!</h1>
                        <p className="lead">Thank you for your payment. Your transaction was successful.</p>
                        <div style={checkmarkStyle}>
                            ✔
                        </div>
                    </div>
                </div>
            </div>
            <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-20px);
          }
          60% {
            transform: translateY(-10px);
          }
        }
      `}</style>
        </div>
    );
};

export default PaymentSuccess;

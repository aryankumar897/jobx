"use client"
import React from 'react';
import Image from 'next/image';

export default function FeatureComponent() {
    return (
        <div style={styles.featureContainer}>
            <div style={styles.textContainer}>
                <h2 style={styles.title}>Explore Career Opportunities</h2>
                <p style={styles.subtitle}>Find Jobs That Match Your Skills and Passion - Start Your Career Search Now!</p>
                <div style={styles.buttonsContainer}>
                    <button style={{ ...styles.button, ...styles.searchButton }}>Search</button>
                    <button style={{ ...styles.button, ...styles.learnMoreButton }}>Learn More</button>
                </div>
            </div>
            <div style={styles.imageContainer}>
                <Image
                    src="/image/job.png" // Replace with your image path
                    alt="Feature"
                    width={800}
                    height={500} // Adjust as needed
                    className="image"
                    style={styles.image}
                />
            </div>
        </div>
    );
}

const styles = {
    featureContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2rem',
        margin: '2rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    textContainer: {
        flex: 1,
        marginRight: '2rem',
    },
    title: {
        textAlign: 'center',
        color: '#333',
        fontSize: '2rem',
        fontWeight: 'bold',
        letterSpacing: '1px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        padding: '1rem',
    },
    subtitle: {
        textAlign: 'center',
        color: '#555',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        letterSpacing: '1px',
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
        padding: '1rem',
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1rem',
    },
    button: {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#007bff',
        fontSize: '1rem',
        fontWeight: 'bold',
        letterSpacing: '1px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        padding: '1rem 2rem',
        margin: '0 0.5rem',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    searchButton: {
        backgroundColor: '#28a745',
    },
    learnMoreButton: {
        backgroundColor: '#17a2b8',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
    },
    imageContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    image: {
        borderRadius: '8px',
        transition: 'transform 0.5s ease',
    },
};

// Add animation to the image on hover
document.addEventListener('DOMContentLoaded', () => {
    const imageElement = document.querySelector('.image');
    if (imageElement) {
        imageElement.addEventListener('mouseover', () => {
            imageElement.style.transform = 'scale(1.1)';
        });
        imageElement.addEventListener('mouseout', () => {
            imageElement.style.transform = 'scale(1)';
        });
    }
});

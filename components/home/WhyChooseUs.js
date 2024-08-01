"use client"
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default function WhyChooseUs() {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Why Choose Us</h2>
            <p style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            </p>
            <div style={styles.whyChooseUs}>
                <div style={styles.item}>
                    <FaCheckCircle style={styles.icon} />
                    <h3 style={styles.itemTitle}>Expert Team</h3>
                    <p style={styles.itemDescription}>
                        Our team consists of experienced professionals dedicated to delivering exceptional results.
                    </p>
                </div>
                <div style={styles.item}>
                    <FaCheckCircle style={styles.icon} />
                    <h3 style={styles.itemTitle}>Quality Service</h3>
                    <p style={styles.itemDescription}>
                        We prioritize providing top-notch service to ensure customer satisfaction.
                    </p>
                </div>
                <div style={styles.item}>
                    <FaCheckCircle style={styles.icon} />
                    <h3 style={styles.itemTitle}>Innovative Solutions</h3>
                    <p style={styles.itemDescription}>
                        We provide creative and innovative solutions to meet your unique needs.
                    </p>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: '2rem',
        margin: '2rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: '1rem',
    },
    description: {
        fontSize: '1rem',
        color: '#666',
        textAlign: 'center',
        marginBottom: '2rem',
    },
    whyChooseUs: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    item: {
        textAlign: 'center',
        maxWidth: '200px',
    },
    icon: {
        fontSize: '2rem',
        color: '#007bff',
        marginBottom: '0.5rem',
    },
    itemTitle: {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '0.5rem',
    },
    itemDescription: {
        fontSize: '1rem',
        color: '#666',
    },
};

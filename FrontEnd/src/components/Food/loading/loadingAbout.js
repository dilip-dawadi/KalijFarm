
import React from 'react';
import LoadingPlaceHolder from './loading';

export default function LoadingAbout() {
    return (
        <div style={{
            height: '100vh',
            margin: 'auto',
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            }}>
                <LoadingPlaceHolder extraStyles={{
                    height: '70vh', objectFit: 'cover', width: '90%',
                    margin: '40px auto', borderRadius: '10px'
                }} />
                <LoadingPlaceHolder extraStyles={{
                    height: '70vh', objectFit: 'cover', width: '90%',
                    margin: '40px auto', borderRadius: '10px'
                }} />
            </div>
        </div>
    );
}
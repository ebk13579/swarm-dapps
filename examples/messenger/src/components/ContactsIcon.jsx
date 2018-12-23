import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function ContactsIcon({ active, requests }) {
    const color = active ? '#F9A026' : '#282c34';
    return (
        <svg viewBox='-10 0 80 50' style={{ width: 72, height: 'auto' }}>
            {
                requests ?
                    <Fragment>
                        <circle cx='55' cy='15' r='15' fill={color} />
                        <text x='55' y='15' textAnchor='middle' dy='.3em' style={{ fontWeight: 'bold' }}>{requests}</text>
                    </Fragment>
                    : null
            }
            <g>
                <path fill={color} d='M 24.875 3.3125 C 20.183594 3.417969 17.214844 5.316406 15.9375 8.25 C 14.722656 11.042969 14.976563 14.5625 15.84375 18.21875 C 15.378906 18.765625 14.996094 19.535156 15.09375 20.6875 L 15.09375 20.75 C 15.261719 21.96875 15.628906 22.828125 16.09375 23.4375 C 16.316406 23.726563 16.632813 23.742188 16.90625 23.90625 C 17.148438 25.269531 17.691406 26.570313 18.3125 27.59375 C 18.34375 27.742188 18.40625 27.878906 18.5 28 C 18.5 28 18.601563 28.128906 18.625 28.15625 C 18.9375 28.625 19.09375 29.277344 19.09375 30 C 19.09375 30.769531 19.082031 31.484375 19 32.28125 C 18.699219 33.039063 17.949219 33.644531 16.75 34.25 C 15.496094 34.882813 13.855469 35.464844 12.1875 36.1875 C 10.519531 36.910156 8.828125 37.777344 7.46875 39.15625 C 6.109375 40.535156 5.136719 42.445313 5 44.9375 L 4.9375 46 L 45.0625 46 L 45 44.9375 C 44.863281 42.445313 43.914063 40.539063 42.5625 39.15625 C 41.210938 37.773438 39.511719 36.910156 37.84375 36.1875 C 36.175781 35.464844 34.523438 34.886719 33.25 34.25 C 32.015625 33.632813 31.242188 33.003906 30.90625 32.21875 C 30.828125 31.273438 30.8125 30.527344 30.8125 29.6875 C 30.8125 29.152344 30.996094 28.667969 31.3125 28.1875 C 31.320313 28.175781 31.335938 28.167969 31.34375 28.15625 C 31.347656 28.148438 31.40625 28.09375 31.40625 28.09375 C 31.53125 27.964844 31.617188 27.800781 31.65625 27.625 C 32.261719 26.585938 32.765625 25.265625 33 23.9375 C 33.3125 23.773438 33.664063 23.753906 33.90625 23.4375 C 34.386719 22.808594 34.667969 21.914063 34.78125 20.6875 C 34.871094 19.628906 34.566406 18.859375 34.09375 18.28125 C 34.613281 16.679688 35.230469 14.117188 35.03125 11.5 C 34.921875 10.0625 34.542969 8.628906 33.6875 7.4375 C 32.914063 6.359375 31.664063 5.621094 30.09375 5.28125 C 29.035156 3.867188 27.113281 3.3125 24.90625 3.3125 Z M 24.90625 5.3125 C 24.917969 5.3125 24.925781 5.3125 24.9375 5.3125 C 26.933594 5.320313 28.210938 5.882813 28.625 6.59375 L 28.875 7.03125 L 29.375 7.09375 C 30.75 7.285156 31.503906 7.816406 32.0625 8.59375 C 32.621094 9.371094 32.941406 10.457031 33.03125 11.65625 C 33.214844 14.058594 32.519531 16.875 32.0625 18.15625 L 31.75 19 L 32.53125 19.40625 C 32.523438 19.433594 32.851563 19.765625 32.8125 20.5 C 32.8125 20.515625 32.8125 20.515625 32.8125 20.53125 C 32.71875 21.472656 32.476563 22.003906 32.3125 22.21875 C 32.144531 22.4375 32.058594 22.40625 32.09375 22.40625 L 31.21875 22.40625 L 31.09375 23.28125 C 30.921875 24.578125 30.261719 26.210938 29.6875 27.03125 L 29.65625 27.03125 C 29.597656 27.117188 29.554688 27.21875 29.5 27.3125 C 29.238281 27.617188 28.84375 28.019531 28.28125 28.5 C 27.347656 29.296875 26.109375 30 25 30 C 23.898438 30 22.648438 29.261719 21.6875 28.4375 C 20.855469 27.722656 20.359375 27.109375 20.21875 26.9375 C 20.214844 26.929688 20.222656 26.914063 20.21875 26.90625 C 19.628906 26.054688 18.953125 24.5625 18.78125 23.28125 L 18.6875 22.40625 L 17.875 22.40625 C 17.839844 22.390625 17.746094 22.339844 17.65625 22.21875 C 17.480469 21.988281 17.230469 21.449219 17.09375 20.53125 C 17.09375 20.511719 17.09375 20.519531 17.09375 20.5 C 17.089844 20.484375 17.097656 20.484375 17.09375 20.46875 C 17.078125 19.710938 17.546875 19.289063 17.46875 19.34375 L 18.03125 18.9375 L 17.875 18.25 C 16.953125 14.605469 16.808594 11.304688 17.78125 9.0625 C 18.753906 6.828125 20.722656 5.414063 24.90625 5.3125 Z M 21.09375 30.53125 C 22.148438 31.308594 23.46875 32 25 32 C 26.5 32 27.785156 31.34375 28.8125 30.59375 C 28.816406 31.203125 28.835938 31.828125 28.90625 32.59375 L 28.90625 32.71875 L 28.96875 32.84375 C 29.144531 33.304688 29.394531 33.695313 29.6875 34.0625 C 29.675781 34.101563 29.664063 34.144531 29.65625 34.1875 C 29.65625 34.1875 29.417969 34.84375 28.71875 35.5625 C 28.019531 36.28125 26.933594 37 25 37 C 23.074219 37 21.949219 36.25 21.21875 35.5 C 20.488281 34.75 20.25 34.0625 20.25 34.0625 C 20.539063 33.6875 20.777344 33.285156 20.9375 32.8125 L 21 32.625 C 21.085938 31.867188 21.09375 31.183594 21.09375 30.53125 Z M 31.25 35.4375 C 31.601563 35.664063 31.964844 35.875 32.34375 36.0625 C 33.804688 36.789063 35.460938 37.351563 37.03125 38.03125 C 38.601563 38.710938 40.066406 39.480469 41.125 40.5625 C 41.96875 41.425781 42.476563 42.574219 42.75 44 L 7.25 44 C 7.523438 42.574219 8.027344 41.425781 8.875 40.5625 C 9.9375 39.480469 11.429688 38.710938 13 38.03125 C 14.570313 37.351563 16.210938 36.792969 17.65625 36.0625 C 18.015625 35.878906 18.382813 35.6875 18.71875 35.46875 C 18.941406 35.871094 19.285156 36.394531 19.78125 36.90625 C 20.800781 37.957031 22.527344 39 25 39 C 27.464844 39 29.15625 37.96875 30.15625 36.9375 C 30.703125 36.375 31.035156 35.851563 31.25 35.4375 Z ' />
            </g>
        </svg>
    );
}

ContactsIcon.propTypes = {
    active: PropTypes.bool.isRequired
};

ContactsIcon.defaultProps = {
    active: false
};

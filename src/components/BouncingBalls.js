import React, { useRef, useEffect } from 'react';

const COLORS = ['red', 'magenta', 'blue', 'yellow', 'orange', 'purple'];

function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

function createBall(width, height) {
    const radius = randomBetween(20, 80);
    return {
        x: randomBetween(radius, width - radius),
        y: randomBetween(radius, height - radius),
        dx: randomBetween(-0.2, 0.2) || 2,
        dy: randomBetween(-0.2, 0.2) || 2,
        radius,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
    };
}

const BouncingBalls = ({ count = 5 }) => {
    const canvasRef = useRef(null);
    const ballsRef = useRef([]);
    const animationRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        // Initialize balls
        ballsRef.current = Array.from({ length: count }, () => createBall(width, height));

        function animate() {
            ctx.clearRect(0, 0, width, height);
            ballsRef.current.forEach(ball => {
                // Move ball
                ball.x += ball.dx;
                ball.y += ball.dy;

                // Bounce off walls
                if (ball.x + ball.radius > width || ball.x - ball.radius < 0) {
                    ball.dx *= -1;
                }
                if (ball.y + ball.radius > height || ball.y - ball.radius < 0) {
                    ball.dy *= -1;
                }

                // Draw ball
                ctx.beginPath();
                ctx.arc(ball.x, ball.y, ball.radius, 0.1, Math.PI * 2 - 0.1);
                ctx.fillStyle = ball.color;
                ctx.fill();
                ctx.closePath();
            });
            animationRef.current = requestAnimationFrame(animate);
        }

        animate();

        // Cleanup on unmount
        return () => cancelAnimationFrame(animationRef.current);
    }, [count]);

    return (
        <div style={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            zIndex: '0',
            pointerEvents: 'none',
        }}>
             <canvas
            ref={canvasRef}
            style={{
                width: '70%',
                height: '90%',
                }}
            />
        </div>
       
    );
};

export default BouncingBalls;
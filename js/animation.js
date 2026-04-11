const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

let width, height;
function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Particle {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type; // 'O', 'O2', 'H', 'H2'
        const baseV = 1.2;
        this.vx = (Math.random() - 0.5) * baseV;
        this.vy = (Math.random() - 0.5) * baseV;
    }

    get radius() {
        return this.type.startsWith('O') ? 18 : 12;
    }

    get text() {
        if (this.type === 'O2') return 'O₂';
        if (this.type === 'H2') return 'H₂';
        return this.type;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        // Keep inside bounds
        if (this.x < this.radius) { this.x = this.radius; this.vx *= -1; }
        if (this.x > width - this.radius) { this.x = width - this.radius; this.vx *= -1; }
        if (this.y < this.radius) { this.y = this.radius; this.vy *= -1; }
        if (this.y > height - this.radius) { this.y = height - this.radius; this.vy *= -1; }
    }

    draw(ctx) {
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.type.startsWith('O') ? '#ef4444' : '#93c5fd';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.type.startsWith('O') ? '#ef4444' : '#93c5fd';
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = this.type.startsWith('O') ? '600 16px Poppins, sans-serif' : '600 12px Poppins, sans-serif';
        ctx.fillText(this.text, this.x, this.y);
    }
}

class WaterMolecule {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        const baseV = 0.8;
        this.vx = (Math.random() - 0.5) * baseV;
        this.vy = (Math.random() - 0.5) * baseV;
        this.angle = Math.random() * Math.PI * 2;
        this.radius = 34; // Approx collision bounding sphere
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.angle += 0.02;

        if (this.x < this.radius) { this.x = this.radius; this.vx *= -1; }
        if (this.x > width - this.radius) { this.x = width - this.radius; this.vx *= -1; }
        if (this.y < this.radius) { this.y = this.radius; this.vy *= -1; }
        if (this.y > height - this.radius) { this.y = height - this.radius; this.vy *= -1; }
    }

    draw(ctx) {
        // Draw Oxygen (center), labels become O and H instead of O2/H2
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#ef4444';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 18, 0, Math.PI * 2);
        ctx.fillStyle = '#ef4444';
        ctx.fill();
        ctx.shadowBlur = 0;
        
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = '600 16px Poppins, sans-serif';
        ctx.fillText('O', this.x, this.y);

        // Draw Hydrogens WITHOUT lines
        for (let i = 0; i < 2; i++) {
            const hAngle = this.angle + (i === 0 ? 0.7 : -0.7);
            const hx = this.x + Math.cos(hAngle) * 32;
            const hy = this.y + Math.sin(hAngle) * 32;

            ctx.shadowBlur = 10;
            ctx.shadowColor = '#93c5fd';
            ctx.beginPath();
            ctx.arc(hx, hy, 12, 0, Math.PI * 2);
            ctx.fillStyle = '#93c5fd';
            ctx.fill();
            ctx.shadowBlur = 0;

            ctx.fillStyle = '#ffffff';
            ctx.font = '600 12px Poppins, sans-serif';
            ctx.fillText('H', hx, hy);
        }
    }
}

class EnergyBurst {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 2;
        this.opacity = 1;
    }
    update() {
        this.radius += 1.5;
        this.opacity -= 0.015;
    }
    draw(ctx) {
        if (this.opacity <= 0) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(250, 204, 21, ${this.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}

let entities = [];
const bursts = [];

// Seed particles
for (let i = 0; i < 15; i++) entities.push(new Particle(Math.random() * width, Math.random() * height, 'H2'));
for (let i = 0; i < 8; i++) entities.push(new Particle(Math.random() * width, Math.random() * height, 'O2'));

// Add some lone atoms to test the wandering feature
for (let i = 0; i < 4; i++) entities.push(new Particle(Math.random() * width, Math.random() * height, 'H'));
for (let i = 0; i < 4; i++) entities.push(new Particle(Math.random() * width, Math.random() * height, 'O'));

function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = bursts.length - 1; i >= 0; i--) {
        bursts[i].update();
        bursts[i].draw(ctx);
        if (bursts[i].opacity <= 0) bursts.splice(i, 1);
    }

    const toRemove = new Set();
    const toAdd = [];
    let energyPulses = 0;

    // Physics & Reactions
    for (let i = 0; i < entities.length; i++) {
        for (let j = i + 1; j < entities.length; j++) {
            const a = entities[i];
            const b = entities[j];

            if (toRemove.has(a) || toRemove.has(b)) continue;

            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dist = Math.max(Math.hypot(dx, dy), 0.01);
            const minDist = a.radius + b.radius + 2;

            if (dist < minDist) {
                let reacted = false;
                const mx = (a.x + b.x) / 2;
                const my = (a.y + b.y) / 2;

                if (a instanceof Particle && b instanceof Particle) {
                    const types = [a.type, b.type].sort().join('-');

                    if (types === 'O-O') {
                        toAdd.push(new Particle(mx, my, 'O2'));
                        reacted = true;
                    } else if (types === 'H-H') {
                        toAdd.push(new Particle(mx, my, 'H2'));
                        reacted = true;
                    } else if (types === 'H2-O') {
                        toAdd.push(new WaterMolecule(mx, my));
                        bursts.push(new EnergyBurst(mx, my));
                        reacted = true;
                        energyPulses++;
                    } else if (types === 'H2-O2') {
                        toAdd.push(new WaterMolecule(mx, my));
                        bursts.push(new EnergyBurst(mx, my));
                        // Leaves a lone O to wander
                        toAdd.push(new Particle(mx, my, 'O'));
                        reacted = true;
                        energyPulses++;
                    }
                }

                if (reacted) {
                    toRemove.add(a);
                    toRemove.add(b);
                } else {
                    // Soft Elastic Bounce
                    const overlap = minDist - dist;
                    const nx = dx / dist;
                    const ny = dy / dist;
                    
                    a.x += nx * overlap * 0.5;
                    a.y += ny * overlap * 0.5;
                    b.x -= nx * overlap * 0.5;
                    b.y -= ny * overlap * 0.5;

                    const p = (a.vx - b.vx) * nx + (a.vy - b.vy) * ny;
                    if (p < 0) {
                        a.vx -= p * nx;
                        a.vy -= p * ny;
                        b.vx += p * nx;
                        b.vy += p * ny;
                    }
                }
            }
        }
    }

    // Use accumulated energy to break existing water molecules
    while (energyPulses > 0) {
        const waters = entities.filter(e => e instanceof WaterMolecule && !toRemove.has(e));
        if (waters.length > 0) {
            const index = Math.floor(Math.random() * waters.length);
            const target = waters[index];
            toRemove.add(target);
            
            // Scatter the atoms forcefully
            const o = new Particle(target.x, target.y, 'O');
            o.vx = (Math.random() - 0.5) * 4;
            o.vy = (Math.random() - 0.5) * 4;
            
            const h1 = new Particle(target.x + 30, target.y + 20, 'H');
            h1.vx = (Math.random() - 0.5) * 4;
            h1.vy = (Math.random() - 0.5) * 4;
            
            const h2 = new Particle(target.x - 30, target.y - 20, 'H');
            h2.vx = (Math.random() - 0.5) * 4;
            h2.vy = (Math.random() - 0.5) * 4;
            
            toAdd.push(o, h1, h2);
        }
        energyPulses--;
    }

    entities = entities.filter(e => !toRemove.has(e)).concat(toAdd);

    entities.forEach(e => e.update());
    entities.forEach(e => e.draw(ctx));

    requestAnimationFrame(animate);
}

animate();

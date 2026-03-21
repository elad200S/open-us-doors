
# Realistic Waving Flag with Canvas Animation

## Current Problem
The flag uses simple CSS transforms (`skewY`, `rotateY`) on the entire SVG — this creates a rigid tilting effect, not a realistic fabric wave.

## Solution: HTML Canvas with Sine-Wave Distortion

Replace the SVG+CSS approach with an **HTML Canvas** component that:

1. **Renders the flag to an offscreen canvas** — stripes, canton, stars (same drawing logic)
2. **Applies per-column sine-wave displacement** — each vertical slice of the flag gets a different `y` offset based on a sine function that varies with time and x-position, creating a traveling wave effect
3. **Adds perspective foreshortening** — columns further into the wave compress slightly in width, simulating 3D fabric depth
4. **Runs via `requestAnimationFrame`** — smooth 60fps continuous animation

### Technical approach (single file: `USAFlag.tsx`):
- Draw the static flag once onto an offscreen canvas (stripes + canton + stars)
- In the animation loop, for each vertical column (1px wide), calculate `dy = amplitude * sin(x * frequency - time * speed)` and draw that column slice shifted vertically
- Add slight horizontal scaling per column based on the wave's derivative to simulate depth
- Parameters: amplitude ~12px, frequency ~0.02, speed ~2.5
- The flag attaches to the right edge (RTL — flagpole on right), so amplitude increases from right to left (more wave at the free end)

### Files to modify:
1. **`src/components/USAFlag.tsx`** — full rewrite to canvas-based approach
2. **`tailwind.config.ts`** — remove unused `flag-wave` and `flag-ripple` keyframes (optional cleanup)

This approach produces a convincingly realistic waving flag effect purely in the browser with no libraries.

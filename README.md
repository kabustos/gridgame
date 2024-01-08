## Description
This project is a small react project that displays a sprite on a 3x3 grid.  The sprite can move up, down, left or right. When it reaches the edge of the grid, it will stay if it cannot move in the chosen direction.  

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
Clone the project then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Game Screen
<img width="465" alt="Screenshot 2024-01-07 at 9 18 42 PM" src="https://github.com/kabustos/gridgame/assets/43449340/9718f267-afc7-40a2-a79e-b383c971947a">

## Learnings
- Couple rendering logic so the sprite and grid can be positioned relative to each other.
- Be cautious of falling into render loops.
- Event handlers require function to be PASSED to them, not called.

## Improvements
- Have the sprite wrap around the grid once it reaches any edge.
- Fix styling on the game screen so the buttons stay below the game grid.
- Center the sprite to the grid tile. 


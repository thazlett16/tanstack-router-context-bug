Welcome to your new TanStack app!

# Getting Started

To run this application:

```bash
pnpm install
pnpm start  
```

# Steps to Reproduce

1. Open up devtools
2. Navigate between `/` and `/about`. 
   1. Notice how when navigating between links normally `testString` is defined.
   2. This works as intended and is typed correctly in both `beforeLoad` and `loader` context on child routes.
3. Now edit the url and go directly to `localhost:3000/about` from the url bar or do it from a bookmark at `http://localhost:3000/about`
   1. You'll now see that `testString` is defined in all `beforeLoad` functions.
   2. But it is not defined in any `loader` functions. This is in both __root and about.
   3. This is typed as it should be there but in this instance I do not have the context from the root `beforeLoad` method

I suspect this is because of my `validateSearch` and the defaults but it only happens on initial mount as describe above and not while navigating. I originally ran into this because I thought it was due to a function I had but realized it is for any primitive as well. Any help is appreciated.
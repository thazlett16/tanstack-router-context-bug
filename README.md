Welcome to your new TanStack app!

# Getting Started

To run this application:

```bash
pnpm install
pnpm start  
```

# Steps to Reproduce

1. Open up devtools
2. Notice how when navigating between links normally `testString` & `testFunction` are defined. This works as intended and is typed correctly
3. Now edit the url and go directly to `localhost:3000/about` from the url bar and you'll see that both properties are now not defined in any loader function. This is in both __root and about. This is typed as it should be there always but in this instance I do not have the context from the root
4. We have users that would bookmark `http://localhost:3000/about` but this is causing an error on mount of application currently.
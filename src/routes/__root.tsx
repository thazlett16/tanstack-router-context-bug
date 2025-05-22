import {createRootRoute, Link, Outlet} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
    beforeLoad: () => {
        const testString = "testString";
        const testFunction = () => {
            console.info("Test Function")
        }

        console.info("__root - beforeLoad - testString", testString);
        // console.info("__root - beforeLoad - testFunction", testFunction);

        return {
            testString,
            testFunction,
        }
    },
    loader: ({context: {testString, testFunction}}) => {
        console.info("__root - loader - testString", testString);
        // console.info("__root - loader - testFunction", testFunction);
    },
    component: () => (
        <>
            <Link to="/">Home</Link>
            <hr/>
            <Link to="/about">About</Link>
            <hr/>
            <Outlet/>
            <TanStackRouterDevtools/>
        </>
    ),
})

import {createRootRoute, Link, Outlet} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
    beforeLoad: () => {
        const testString = "testString";
        const testFunction = () => {
            console.info("Test Function")
        }

        console.info("testString - beforeLoad", testString);
        console.info("testFunction - beforeLoad", testFunction);

        return {
            testString,
            testFunction,
        }
    },
    loader: ({context: {testString, testFunction}}) => {
        console.info("testString - loader", testString);
        console.info("testFunction - loader", testFunction);
    },
    component: () => (
        <>
            <Link to="/">Home</Link>
            <hr />
            <Link to="/about">About</Link>
            <hr />
            <Outlet/>
            <TanStackRouterDevtools/>
        </>
    ),
})

import {createFileRoute} from '@tanstack/react-router'
import * as v from 'valibot';

const LIMIT_DEFAULT = 50;
const OFFSET_DEFAULT = 0;

export const Route = createFileRoute('/about')({
    validateSearch: v.object({
        limit: v.optional(v.fallback(v.number(), LIMIT_DEFAULT), LIMIT_DEFAULT),
        offset: v.optional(v.fallback(v.number(), OFFSET_DEFAULT), OFFSET_DEFAULT),
    }),
    beforeLoad: ({context: {testString, testFunction}}) => {
        console.info("testString - beforeLoad - aboutRoute -", testString);
        // console.info("testFunction - beforeLoad - aboutRoute -", testFunction);
    },
    loaderDeps: ({search: {limit, offset}}) => ({limit, offset}),
    loader: ({deps: {limit, offset}, context: {testString, testFunction}}) => {
        // console.info("deps: limit - ", limit);
        // console.info("deps: offset - ", offset);

        console.info("testString - loader - aboutRoute -", testString);
        // console.info("testFunction - loader - aboutRoute -", testFunction);
    },
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/about"!</div>
}

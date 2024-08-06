/// <reference types="cypress" />

// Documentation: https://on.cypress.io/configuration

import { Component, defineComponent, h } from "vue";
// This import is allowed here in order to mock the package correctly
// eslint-disable-next-line no-restricted-imports
import type { RouteRecordRaw, RouterHistory } from "vue-router";
import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";
import { mount } from "cypress/vue";
import EmptyRouterView from "./EmptyRouterView.vue";

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface MountingOptions$1 {
            routes?: Array<RouteRecordRaw>;
        }

        interface Chainable {
            mount: typeof mount;
            mountWithHistory: (
                routes: Array<RouteRecordRaw>,
                component?: Component,
                options?: any,
            ) => Chainable<{
                history: RouterHistory;
                mount: () => ReturnType<typeof mount>;
            }>;
        }
    }
}



const Dummy = defineComponent(() => () => h("div", "dummy page 1"));

export const initCypress = ({
    routes = [{ path: "/", name: "fallback", component: Dummy }],
}: {
    routes?: RouteRecordRaw[];
}) => {


    const createExtensions = (r: RouteRecordRaw[] = routes, useWebHistory?: boolean) => {
        const history = useWebHistory ? createWebHistory() : createMemoryHistory();

        const router = createRouter({
            history,
            routes: r,
        });


        const extensions = {
            plugins: [ router],
        };

        return { history, extensions };
    };

    Cypress.Commands.add("mount", (component: any, { routes, useWebHistory, locale, ...options }: any = {}): any =>
        mount(component, {
            extensions: createExtensions(routes, useWebHistory).extensions,
            ...options,
        }),
    );

    Cypress.Commands.add(
        "mountWithHistory",
        (r: RouteRecordRaw[], component: Component = EmptyRouterView, options?: Parameters<typeof mount>[1]): any => {
            const { extensions, history } = createExtensions(r);
            return { history, mount: () => mount(component as any, { extensions, ...options }) };
        },
    );
};



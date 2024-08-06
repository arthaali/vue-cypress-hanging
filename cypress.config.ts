import { defineConfig } from "cypress";
import { createRequire } from "module";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const __dirname = fileURLToPath(new URL(".", import.meta.url));

const CYPRESS_COVERAGE = process.env["CYPRESS_COVERAGE"];

const componentConfig = defineConfig({
    component: {
        setupNodeEvents(on, config) {
            if (CYPRESS_COVERAGE) {
                // eslint-disable-next-line @typescript-eslint/no-var-requires
                require("@cypress/code-coverage/task")(on, config);
            }
            on("task", {
                log(message: string) {
                    // eslint-disable-next-line no-console
                    console.log(`   ${message}`);
                    return null;
                },
            });
            return config;
        },
        env: {
            CYPRESS_COVERAGE,
        },
        viewportWidth: 1920,
        viewportHeight: 1080,
        includeShadowDom: true, // for WebComponent-Testing very useful
        devServer: { bundler: "vite", framework: "vue" },
        // node_modules are ignored by default: https://docs.cypress.io/guides/references/configuration#excludeSpecPattern
        specPattern: "**/*.cy.ts",
        video: false,
        retries: CYPRESS_COVERAGE ? 2 : 0,
        reporter: "junit",
        indexHtmlFile: __dirname + "/cypress/support/component-index.html",
    },
});

export default componentConfig;

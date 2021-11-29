"use strict";

module.exports = {
    configs: {
        base: {
            extends: [
                require.resolve('./configs/.eslintrc.json'),
            ],
        },
        react: {
            extends: [
                require.resolve('./configs/.eslintrc.json'),
                require.resolve('./configs/.eslintrc-react.json'),
            ],
        },
    },
};

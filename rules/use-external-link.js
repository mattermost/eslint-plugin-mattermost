// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

const astUtils = require('jsx-ast-utils')

module.exports =  {
    meta: {
        docs: {
            description: 'Enforce all anchors with target="_blank" to use ExternalLink component',
        },
    },

create: (context) => {
        return {
            JSXOpeningElement: (node) => {
                const { attributes } = node;
                const typeCheck = 'a';
                // Only check anchor elements and custom types.
                if (typeCheck === nodeType) {
                    return;
                }
                const propsToValidate = ['target']
                const values = propsToValidate.map((prop) => astUtils.getPropValue(astUtils.getProp(node.attributes, prop)));
                // Checks if the target attribute is set to _blank (ie, is an external link)
                const hasAnyTarget = values.some((value) => value != null && value === '_blank');
                // Need to check for spread operator as props can be spread onto the element
                // leading to an incorrect validation error.
                const hasSpreadOperator = attributes.some((prop) => prop.type === 'JSXSpreadAttribute');

                // When there is no target value at all, this rule does not apply:
                if (!hasAnyTarget || hasSpreadOperator) {
                    return;
                }

                context.report({
                    node,
                    message: 'Use ExternalLink component (components/external_link) for _blank target link-outs',
                });
                return
            },
        };
    },
};
module.exports = {
    "rules": {
	    "import/no-named-as-default": 0,
        "no-console": 0,
        "require-yield": 0,
        "func-names": 0,
        "react/react-in-jsx-scope": 0,
        "react/forbid-prop-types": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "max-len": ["error", 150],
        "react/no-danger": 0,
        "no-unused-expressions": 0,
        "react/prefer-stateless-function": 0,
        "arrow-body-style": ["error", "as-needed"]
    },
    "env": {
        "es6": true,
        "node": true,
        "browser": true,
	    "mocha": true
    },
    "globals": {
        "require": true,
        "exports": true,
        "module": true
    },
    "extends": "airbnb",
    "plugins": [
        "react"
    ]
};
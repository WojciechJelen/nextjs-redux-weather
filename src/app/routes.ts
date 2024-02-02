/**
 * A list of public routes that can be accessed without authentication.
 * @type {string[]}
 */
export const publicRoutes = [`/`];

/**
 * A list of routes that are used for authentication.
 * They will redirect already authenticated users to the default redirect URL.
 * @type {string[]}
 */
export const authRoutes = [`/auth/login`];

/**
 * The prefix for all API routes used for authentication by auth.js library.
 * @type {string}
 */
export const AUTH_API_PREFIX = "/api/auth";

/**
 * The default redirect URL after a successful login.
 * @type {string}
 */
export const DEFAULT_REDIRECT_URL = "/dashboard";
export const DEFAULT_REDIRECT_URL_AFTER_LOGOUT = "/";

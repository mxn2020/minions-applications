/**
 * Minions Applications SDK
 *
 * Application records, submission bundles, platform receipts, and status tracking
 *
 * @module @minions-applications/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Applications.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';

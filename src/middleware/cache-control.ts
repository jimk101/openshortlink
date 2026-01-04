/**
 * Copyright (c) 2025 OpenShort.link Contributors
 * 
 * Licensed under the Common Public Attribution License Version 1.0 (CPAL-1.0)
 * See LICENSE file or https://opensource.org/license/cpal-1-0
 */

import { createMiddleware } from 'hono/factory';

/**
 * Cache-Control middleware for API routes
 * Ensures that API responses are not cached by clients or proxies
 */
export const cacheControl = createMiddleware(async (c, next) => {
    await next();

    // Only set Cache-Control headers if not already set
    if (!c.res.headers.get('Cache-Control')) {
        c.header('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        c.header('Pragma', 'no-cache');
        c.header('Expires', '0');
    }
});

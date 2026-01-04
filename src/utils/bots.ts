/**
 * Copyright (c) 2025 OpenShort.link Contributors
 * 
 * Licensed under the Common Public Attribution License Version 1.0 (CPAL-1.0)
 * See LICENSE file or https://opensource.org/license/cpal-1-0
 */

/**
 * Bot detection utility
 * Used to filter out automated traffic from analytics
 */

// Common bot user agents
// This list covers major search engines, social media crawlers, and uptime monitors
const BOT_REGEX = /bot|crawler|spider|crawling|googlebot|bingbot|duckduckbot|yahoo|yandex|baidu|facebookexternalhit|twitterbot|slackbot|whatsapp|telegram|discordbot|applebot|pinterest|linkedinbot|skypeuripreview|uptime|monitor|semrush|ahrefs|mj12bot|dotbot|petalbot|bytespider/i;

/**
 * Check if a user agent belongs to a known bot/crawler
 */
export function isBot(userAgent?: string): boolean {
    if (!userAgent) {
        return false;
    }
    return BOT_REGEX.test(userAgent);
}

import fs from 'node:fs';
import path from 'node:path';

const ALLOWED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif']);

export function getEventImages(folderName: string): string[] {
  try {
    const dirPath = path.join(process.cwd(), 'public', 'images', 'events', folderName);
    if (!fs.existsSync(dirPath)) return [];

    const files = fs.readdirSync(dirPath);
    return files
      .filter((file) => ALLOWED_EXTENSIONS.has(path.extname(file).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((file) => `/images/events/${folderName}/${file}`);
  } catch {
    return [];
  }
}

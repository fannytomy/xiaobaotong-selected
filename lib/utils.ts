import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getUrl(slug: string) {
  return "https://xiaobot.net/p/" + slug + "?refer=16d439a0-a4cc-49ea-823c-96b7e262e22a"
}
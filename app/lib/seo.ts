export const DEFAULT_SITE_URL = "https://festival-les-petits-chemins.fr";

function normalizeSiteUrl(): string {
  const candidate = process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL;

  try {
    const url = new URL(candidate);
    return url.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const siteUrl = normalizeSiteUrl();
export const defaultOgImage = "/hero_img.png";

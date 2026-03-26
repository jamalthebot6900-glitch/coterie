// Curated Unsplash images for Coterie — all free to use
// Using direct Unsplash photo URLs with size params for performance

export const images = {
  // Hero & ambient
  hero: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=80&auto=format",
  heroMobile: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80&auto=format",

  // Tours
  dolomites: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&auto=format",
  riviera: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&q=80&auto=format",
  swiss: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=1200&q=80&auto=format",

  // Gallery
  gallery: [
    { src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80&auto=format", label: "Open Road" },
    { src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80&auto=format", label: "Ferrari" },
    { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80&auto=format", label: "Alpine Pass" },
    { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&auto=format", label: "Mountain Vista" },
    { src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80&auto=format", label: "Classic Lines" },
    { src: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80&auto=format", label: "Coastal Drive" },
    { src: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80&auto=format", label: "Porsche 911" },
    { src: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=800&q=80&auto=format", label: "Swiss Alps" },
    { src: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=800&q=80&auto=format", label: "Sunset Run" },
    { src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80&auto=format", label: "On Track" },
    { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80&auto=format", label: "Night Mountains" },
    { src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80&auto=format", label: "BMW M4" },
  ],

  // Ambient / About
  about: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80&auto=format",
  lifestyle: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=1200&q=80&auto=format",
} as const;

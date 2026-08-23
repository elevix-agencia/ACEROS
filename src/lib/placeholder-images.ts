import data from './placeholder-images.json' with { type: 'json' };

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  width?: number;
  height?: number;
};

// The JSON file has a root key "placeholderImages", so we need to access it.
export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;

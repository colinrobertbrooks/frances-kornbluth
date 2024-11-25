export type SpreadsheetItem = { [key: string]: string };

export enum Decade {
  // label = value
  '1950s' = '1950s',
  '1960s' = '1960s',
  '1970s' = '1970s',
  '1980s' = '1980s',
  '1990s' = '1990s',
  '2000s' = '2000s',
  '2010s' = '2010s',
  Unknown = 'Unknown',
}

export enum MediumGroup {
  Acrylic = 'Acrylic',
  Charcoal = 'Charcoal',
  Collage = 'Collage',
  Gouache = 'Gouache',
  Ink = 'Ink',
  'Mixed Media' = 'MixedMedia',
  Monotype = 'Monotype',
  Oil = 'Oil',
  Pastel = 'Pastel',
  Watercolor = 'Watercolor',
  Unknown = 'Unknown',
}

export enum SizeGroup {
  'Very Small' = 'VerySmall',
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  'Very Large' = 'VeryLarge',
  Unknown = 'Unknown',
}

export enum Status {
  Available = 'Available',
  Private = 'Private',
  Public = 'Public',
  Unknown = 'Unknown',
}

export enum Tag {
  Abstract = 'Abstract',
  'Black and White' = 'BlackAndWhite',
  Color = 'Color',
  'Dominican Republic' = 'DominicanRepublic',
  Figure = 'Figure',
  Landscape = 'Landscape',
  Letter = 'Letter',
  Monhegan = 'Monhegan',
  Path = 'Path',
  Representational = 'Representational',
  Seascape = 'Seascape',
  'Still Life' = 'StillLife',
  Tondo = 'Tondo',
  Trees = 'Trees',
}

export type CollectionItem = {
  id: number;
  title: string;
  minImgSrc: string;
  year: number | null;
  decade: Decade;
  medium: string;
  mediumGroup: MediumGroup;
  dimensions: string | null;
  sizeGroup: SizeGroup;
  status: Status;
  holder: string | null;
  tags: Tag[];
  isNew: boolean;
};

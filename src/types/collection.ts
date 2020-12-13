export enum MediumGroup {
  // name = value
  Acrylic = 'Acrylic',
  Charcoal = 'Charcoal',
  Collage = 'Collage',
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

export interface ICollectionRecord {
  id: number;
  title: string;
  minImgSrc: string;
  year: number | null;
  medium: string;
  mediumGroup: MediumGroup;
  dimensions: string | null;
  sizeGroup: SizeGroup;
  status: Status;
  holder: string | null;
}

type $T<T = string> = {
  $t: T;
};

export interface ISerializedCollectionRecord {
  gsx$showonwebsite: $T;
  gsx$id: $T;
  gsx$title: $T;
  gsx$minimgsrc: $T;
  gsx$year: $T;
  gsx$medium: $T;
  gsx$dimensions: $T;
  gsx$status: $T<Status>;
  gsx$holder: $T;
}

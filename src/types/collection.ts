type $T<T = string> = {
  $t: T;
};

export enum Status {
  Available = 'Available',
  Private = 'Private',
  Public = 'Public',
  Unknown = 'Unknown',
}

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

export interface ICollectionRecord {
  id: number;
  title: string;
  minImgSrc: string;
  year: number;
  medium: string;
  dimensions: string;
  status: Status;
  holder: string;
}

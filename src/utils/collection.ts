import {
  ISerializedCollectionRecord,
  MediumGroup,
  SizeGroup,
  Tag,
} from '../types';

export const deriveMediumGroup = (medium: string): MediumGroup => {
  const lowercaseMedium = medium.toLowerCase();
  if (lowercaseMedium.includes('acrylic')) return MediumGroup.Acrylic;
  if (lowercaseMedium.includes('charcoal')) return MediumGroup.Charcoal;
  if (lowercaseMedium.includes('collage')) return MediumGroup.Collage;
  if (lowercaseMedium.includes('ink')) return MediumGroup.Ink;
  if (lowercaseMedium.includes('mixed media'))
    return MediumGroup['Mixed Media'];
  if (lowercaseMedium.includes('monotype')) return MediumGroup.Monotype;
  if (lowercaseMedium.includes('oil')) return MediumGroup.Oil;
  if (lowercaseMedium.includes('pastel')) return MediumGroup.Pastel;
  if (lowercaseMedium.includes('watercolor')) return MediumGroup.Watercolor;
  return MediumGroup.Unknown;
};

const getArea = (dimensions: string): number => {
  if (!dimensions.includes('"')) return 0;
  const $dimensions = dimensions.replace('"', '').toLowerCase();

  if ($dimensions.includes('x')) {
    const [h, w] = $dimensions.split('x');
    const area = Number(h) * Number(w);
    if (Number.isNaN(area)) return 0;
    return area;
  }

  if ($dimensions.includes('diameter')) {
    const [h] = $dimensions.split('diameter');
    const area = Number(h) * Number(h);
    if (Number.isNaN(area)) return 0;
    return area;
  }

  return 0;
};

export const deriveSizeGroup = (dimensions: string): SizeGroup => {
  const area = getArea(dimensions);

  if (area === 0) return SizeGroup.Unknown;
  if (area < 75) return SizeGroup['Very Small'];
  if (area < 200) return SizeGroup.Small;
  if (area < 500) return SizeGroup.Medium;
  if (area < 1000) return SizeGroup.Large;
  return SizeGroup['Very Large'];
};

export const generateTags = ({
  gsx$tagabstract,
  gsx$tagblackandwhite,
  gsx$tagcolor,
  gsx$tagdominicanrepublic,
  gsx$tagfigure,
  gsx$taglandscape,
  gsx$tagletter,
  gsx$tagmonhegan,
  gsx$tagpath,
  gsx$tagrepresentational,
  gsx$tagseascape,
  gsx$tagstilllife,
  gsx$tagtondo,
}: Partial<ISerializedCollectionRecord>): Tag[] => {
  const tags = [];

  if (gsx$tagabstract?.$t) tags.push(Tag.Abstract);
  if (gsx$tagblackandwhite?.$t) tags.push(Tag['Black and White']);
  if (gsx$tagcolor?.$t) tags.push(Tag.Color);
  if (gsx$tagdominicanrepublic?.$t) tags.push(Tag['Dominican Republic']);
  if (gsx$tagfigure?.$t) tags.push(Tag.Figure);
  if (gsx$taglandscape?.$t) tags.push(Tag.Landscape);
  if (gsx$tagletter?.$t) tags.push(Tag.Letter);
  if (gsx$tagmonhegan?.$t) tags.push(Tag.Monhegan);
  if (gsx$tagpath?.$t) tags.push(Tag.Path);
  if (gsx$tagrepresentational?.$t) tags.push(Tag.Representational);
  if (gsx$tagseascape?.$t) tags.push(Tag.Seascape);
  if (gsx$tagstilllife?.$t) tags.push(Tag['Still Life']);
  if (gsx$tagtondo?.$t) tags.push(Tag.Tondo);

  return tags;
};

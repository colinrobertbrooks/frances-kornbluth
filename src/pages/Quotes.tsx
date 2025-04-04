import {
  changingLightMonheganIcePondImg,
  altosTwilightImg,
} from 'assets/artwork';
import { Link, Url } from 'router';
import { styled, Page, Divider, H1, H2, Paragraph, Artwork } from './shared';

export const Quotes = () => (
  <Page
    title="Quotes"
    description="Quotes by Frances Kornbluth (1920 - 2014), an Abstract Expressionist painter who spent 57 summers painting on Monhegan Island off the coast of Maine."
  >
    <H1>Quotes</H1>
    <H2 className="text-center">Monhegan Island</H2>
    <Artwork
      className="my-4"
      src={changingLightMonheganIcePondImg}
      title="Changing Light, Monhegan Ice Pond"
      medium="Acrylic on linen"
      dimensions='59 x 43"'
    />
    <Quote>
      &quot;I&apos;ve been coming here for 32 years. It was seductive at first,
      because everywhere you look is a scene. But as a landscape painter, you
      have to go past all that. It&apos;s like a marriage; it&apos;s later that
      you find the real meaning of things... I&apos;ve always loved the ocean,
      for as long as I can remember. My house overlooks the water. The power of
      the sea, the tides, the light becomes so much a part of your daily
      existence that when you look out, it&apos;s not a scene anymore; it&apos;s
      part of your life... Each year now, when summer comes, it seems like it
      gets more difficult to move everything here. But that&apos;s also a very
      positive thing for working, because it&apos;s not easy to escape; you
      become your own prisoner. I come here to work, and it&apos;s never failed
      me.&quot;
    </Quote>
    <Source>
      - <em>Islands Magazine</em> (1989)
    </Source>
    <Quote>
      &quot;I first came to Monhegan in 1957 and was struck by the openness of
      space, light and the purity of its natural forms. My growth is vitally
      connected to the island. Being here every summer continues to enhance my
      power to see, to feel and to make art.&quot;
    </Quote>
    <Source>
      - <em>Monhegan: The Artists&apos; Island</em> (1995)
    </Source>
    <Quote>
      &quot;I forget which poet said that 'no man is an island,' but actually:
      you are an island. You're a separate person, and I think going to an
      island reinforces it.&quot;
    </Quote>
    <Source>
      - <em>Lynne Drexler: A Life in Color</em> (2008)
    </Source>
    <Divider />
    <H2 className="text-center">Dominican Republic</H2>
    <Artwork
      className="my-4"
      src={altosTwilightImg}
      title="Altos Twilight"
      medium="Collage on handmade paper"
      dimensions='24" diameter'
    />
    <Quote>
      &quot;Working at Altos de Chavon has reawakened feelings of being part of
      the natural world, my perceptions of the elements, visual and otherwise,
      and a heightened sense of growth and change in the environment.&quot;
    </Quote>
    <Source>
      - <em>Artists In Residence, Altos de Chavon</em> (1985)
    </Source>
    <Quote>
      &quot;In the Dominican Republic I got a sense of how intense and powerful
      an environment can be. It was a world of feelings and I had a passion for
      the place. I felt a need to work and I felt effective by defining my
      experience.&quot;
    </Quote>
    <Source>
      - <em>The Observer Patriot</em> (1990)
    </Source>
    <Divider />
    <Paragraph className="mt-4 text-center">
      Watch more on the <Link to={Url.VideosPage}>videos page</Link>.
    </Paragraph>
  </Page>
);

const Quote = styled(Paragraph).attrs({ className: 'pl-2' })``;

const Source = styled(Paragraph).attrs({ className: 'pl-4 mb-4' })`
  font-weight: 700;
`;

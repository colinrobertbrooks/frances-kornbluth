import React from 'react';
import styled from 'styled-components';
import { Page } from '../layout';
import { Row, Col, Heading, Paragraph } from '../styled';

export const Statements: React.FC = () => (
  <Page title="Statements">
    <Row>
      <Col md={12}>
        <H1>Statements</H1>
        <H2>1968</H2>
        <Paragraph>
          &quot;My exploration of the &apos;ocean&apos; theme through various
          two dimensional media is a personal record of sensing, feeling and
          giving shape to experience. My work deals with the natural environment
          and is classified as landscape. It has moved beyond the traditional
          &apos;scene&apos; because the image is not preconceived. It emerges
          during the act of painting or drawing and through the entire creative
          process. Concern for rhythms, atmosphere and light as separate
          entities, and expressing them through compatible media, are important
          aspects of this process. I have spent a lifetime of summers at the
          ocean&apos;s edge, the past twelve living and working on a small
          island off the coast of Maine. Visual facts are often a point of
          departure in favor of expressive quality and concept.&quot;
        </Paragraph>
        <H2>1976</H2>
        <Paragraph>
          &quot;The natural environment has always been my subject matter. Early
          on, I realized that scene dominated the tradition of landscape art.
          The idea of expanded perception, beyond the visual, has always been
          germane to my work. This has been as much of a motivation for me as my
          need for self-expression. Working on Monhegan Island off the coast of
          Maine for the past twenty summers was how I found my own vision and
          developed a personal language to express it. Each piece I do is
          vitally connected to &apos;place&apos; in its celebration of
          atmosphere, the sun, land and ocean forms, island paths, the annual
          bird migration, to name a few. Ideas that germinate in the summer
          usually grow throughout the year and are developed as individual
          pieces or series in my Connecticut studio.
        </Paragraph>
        <Paragraph>
          Integrating the lyric impulse with the sensual pleasure of working in
          the studio, in graphic workshops, or on actual sites, has become an
          ongoing process. The association of place and time permits deep
          feelings of universal truths to emerge. Awareness of the infinite at
          unexpected times has heightened my perception of reality in everyday
          life. It has given me freedom to move from preconception of images and
          forms to exploration and discovery.&quot;
        </Paragraph>
        <H2>1985</H2>
        <Paragraph>
          &quot;I feel that making art is giving form to facts and feelings.
          Material and the images they take on become a vehicle for these
          concerns. My visual language has developed from my own perceptions and
          from those of other artists, past and present. I strive for paintings
          that are original and clear in their expression of ongoing realities.
          The natural environment has strongly influenced me: earth, sky, sea,
          wind, changing light and tides; their poetry and drama. Beyond
          landscape as scenic material. I paint to record my sense of nature and
          being alive.&quot;
        </Paragraph>
        <H2>1996</H2>
        <Paragraph>
          &quot;My art reflects a philosophy of openness and trust in my life.
          My growth as an artist has come about from being open to experience
          and the world around me, as well as from sharing the rich heritage of
          artists of the past.
        </Paragraph>
        <Paragraph>
          Creating forms with a minimum of preconception has been a driving
          force throughout my adult life. Using criteria based on values learned
          through formal education and, increasingly, on intuition, I have
          learned to trust my judgment and honor the hidden meanings of what
          often appears to be accidental.
        </Paragraph>
        <Paragraph>
          Time has been an important factor in the working process―knowing when
          to set a piece aside as the flow of energy and ideas diminishes and
          having the patience to wait for solutions to technical problems that I
          myself have created. I have gained the perspective to recognize what
          appears to be unfamiliar and new on the canvas and relate that to
          artistic expression of other times and places, incorporating it into a
          language of my own.
        </Paragraph>
        <Paragraph>
          Though I am constantly fed by other disciplines such as music, film
          and literature, the natural environment has been my primary source.
          The rich stimulation provided by northeastern Connecticut and by
          Monhegan Island, Maine, where I have summered for the past four
          decades, has allowed me to go beyond visual &apos;scenery&apos; to
          create a broader synthesis using all my senses. Through discovering
          metaphors in the landscape, connecting many different aspects of
          experience, and bringing these perceptions to the studio, I have been
          able to make order of the chaos that impacts and pervades life at this
          time.&quot;
        </Paragraph>
        <H2>2007</H2>
        <Paragraph>
          &quot;The natural environment has been my ongoing sense of imagery and
          inspiration. Over the years, working in different mediums and at
          various sites in my studio on Monhegan Island, Maine, and rural
          northeastern Connecticut, I developed a visual vocabulary of form,
          shape and color that expresses my personal vision along with the
          intensity of my feelings about the landscape and art. It is important
          that my paintings resonate in terms of my individuality, the tradition
          of art and artists from which I follow and the time in which each work
          is created.&quot;
        </Paragraph>
        <H2>2013</H2>
        <Paragraph>
          &quot;In my art I define and redefine landscape, arriving at
          abstractions of the natural and man-made environment. My vocabulary of
          shapes and forms has developed over the years. In recent years, due to
          a gradual loss of vision, it has become necessary to limit my palette
          to black and white. Being both observer and participant in rural
          northeast Connecticut and on a remote island off the coast of Maine, I
          am constantly challenged to make order out of the impact and
          complexity of what I know and what I constantly discover. I have been
          recording and communicating a continuum concerned with the natural
          order of things, in a realm where details have a life of their own and
          often dictate new patterns that expand meaning and the boundaries of
          personal experience.&quot;
        </Paragraph>
      </Col>
    </Row>
  </Page>
);

const H1 = styled(Heading).attrs({ className: 'mb-3' })``;

const H2 = styled(Heading).attrs({
  as: 'H2',
  color: 'gray',
  className: 'text-center',
})``;

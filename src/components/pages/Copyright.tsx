import { Link, Url } from '../../router';
import { Page, H1, Paragraph } from './shared';

export const Copyright = () => (
  <Page title="Copyright">
    <H1>Copyright</H1>
    <Paragraph>
      All photos on this website are copyrighted material and all rights are
      reserved. The content of this site is for personal and/or educational use
      only. Neither text nor images may be reproduced in any form without
      permission. You may download content solely for personal, non-commercial
      purposes. You may not modify or further reproduce the content for any
      purpose whatsoever. You must request and obtain express permission for all
      other uses of content.
    </Paragraph>
    <Paragraph>
      See more information on the <Link to={Url.ContactPage}>contact page</Link>
      .
    </Paragraph>
  </Page>
);

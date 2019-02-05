import React from 'react';
import Quotes from './Quotes';
import '../../assets/styles/components/Discover.css';

const Discover = ({ quotes }) => (
  <section className="discover">
    <p className="discover-headline">Discuss, share, &amp; discover quotes from great literature.</p>
    <Quotes quotes={quotes} />
  </section>
);

export default Discover;

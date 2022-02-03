import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Accordion } from '../accordion';

const items = [
  {
    title: 'Lorem ipsum dolor sit amet',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias architecto quae tenetur voluptatum ipsa, esse doloremque numquam accusantium pariatur facere sunt earum aut iure deserunt id illum ipsam repudiandae non? ',
  },
  {
    title: 'Far far away',
    content:
      ' Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do',
  },
  {
    title: 'The Sorrows of Young Werther',
    content: (
      <>
        <h3 className="size-lg">Book 2</h3>
        <p>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine. I am so happy, my dear friend, so
          absorbed in the exquisite sense of mere tranquil existence, that I
          neglect my talents.{' '}
        </p>
      </>
    ),
  },
];

describe('Accordion', () => {
  it('should be rendered without crashing', () => {
    const { container } = render(<Accordion items={items} />);

    expect(container.querySelector('.accordion')).toBeInTheDocument();
  });

  it('should render given accordion items', () => {
    const { container } = render(<Accordion items={items} />);

    expect(container.querySelectorAll('.accordion-item')).toHaveLength(
      items.length
    );
  });

  it('should open clicked accordion item', async () => {
    const { container } = render(<Accordion items={items} />);
    const firstItemToggle = container.querySelector('.accordion-toggle');
    if (!firstItemToggle)
      throw new Error("Can't find any accordion item's toggle button");

    fireEvent.click(firstItemToggle);

    await waitFor(() => {
      expect(
        container.querySelector('.accordion-item.active')
      ).toBeInTheDocument();
    });
  });
});

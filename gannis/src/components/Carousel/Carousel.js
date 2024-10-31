function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const cards = [
        { title: 'Card 1', text: 'This is card 1', imageUrl: 'https://picsum.photos/id/237/300/200' },
        { title: 'Card 2', text: 'This is card 2', imageUrl: 'https://picsum.photos/id/238/300/200' },
        { title: 'Card 3', text: 'This is card 3', imageUrl: 'https://picsum.photos/id/239/300/200' },
    ];

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    return (
        <div className="carousel">
            <button onClick={prevSlide} disabled={activeIndex === 0}>
                Previous
            </button>
            <Card {...cards[activeIndex]} />
            <button onClick={nextSlide} disabled={activeIndex === cards.length - 1}>
                Next
            </button>
        </div>
    );
}

export default Carousel;
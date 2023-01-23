import Slider from 'react-slick'

import './TodayDeals.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Carousel() {

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
  const TodayDeals = [
    {
      imageSrc: 'https://futurism.com/_next/image?url=https%3A%2F%2Fwp-assets.futurism.com%2F2022%2F09%2Fbest-desktop-computers.jpg&w=1080&q=75',
      description: 'Computers and accessories',
    },
    {
      imageSrc:
        'https://resize.indiatvnews.com/en/resize/newbucket/730_-/2020/03/vastu-tips-electronic-1583902426-1583904794.jpg',
      description: 'Electronics',
    },
    {
      imageSrc:
        'https://fashionisers.com/wp-content/uploads/2020/01/tips-for-creating-your-signature-looks-main-image.jpg',
      description: 'Fashion',
    },
    {
      imageSrc:
        'https://nighthelper.com/wp-content/uploads/2019/04/Beauty-Products-e1556458460366.jpg',   
      description: 'Beauty',
    },
    {
      imageSrc:
        'https://thumbs.dreamstime.com/b/colorful-baby-toys-white-top-view-87584493.jpg',   
      description: 'Toys & Games',
    },
    {
      imageSrc:
        'https://media.istockphoto.com/id/1136317340/photo/close-up-of-sport-balls-and-equipment.jpg?s=612x612&w=0&k=20&c=JwsgygpYwBWEEUYyWfEYHsYf8bZgZdbFL_wXNpAcXhs=',   
      description: 'Sports & Outdoors',
    },
  ]

  return (
    <div className='giftbackground'>
      <Slider {...sliderSettings}>
        {TodayDeals.map((card, index) => (
          <div key={index}>
            <div className='giftcard'>
              <img alt={card.title} src={card.imageSrc} className="productimg" />
              <p className='title'>{card.description}</p>
              <button className="button">See Deals</button>
            </div>
          </div>
        ))}    
      </Slider>   
    </div>
  )
}
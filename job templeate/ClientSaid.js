"use client"
import Image from 'next/image';
import Slider from 'react-slick';
const profiles = [
    {
        id: 1,
        name: 'John Doe',
        occupation: 'Software Engineer',
        description: 'Passionate about building great software.',
        rating: 4,
        photo: '/images/de.png', // Replace with the path to your profile photo
    },
    {
        id: 1,
        name: 'John Doe',
        occupation: 'Software Engineer',
        description: 'Passionate about building great software.',
        rating: 4,
        photo: '/images/de.png', // Replace with the path to your profile photo
    },
    {
        id: 1,
        name: 'John Doe',
        occupation: 'Software Engineer',
        description: 'Passionate about building great software.',
        rating: 4,
        photo: '/images/de.png', // Replace with the path to your profile photo
    },
    {
        id: 1,
        name: 'John Doe',
        occupation: 'Software Engineer',
        description: 'Passionate about building great software.',
        rating: 4,
        photo: '/images/de.png', // Replace with the path to your profile photo
    },
    {
        id: 1,
        name: 'John Doe',
        occupation: 'Software Engineer',
        description: 'Passionate about building great software.',
        rating: 4,
        photo: '/images/de.png', // Replace with the path to your profile photo
    },
    {
        id: 1,
        name: 'John Doe',
        occupation: 'Software Engineer',
        description: 'Passionate about building great software.',
        rating: 4,
        photo: '/images/de.png', // Replace with the path to your profile photo
    },
    {
        id: 1,
        name: 'John Doe',
        occupation: 'Software Engineer',
        description: 'Passionate about building great software.',
        rating: 4,
        photo: '/images/de.png', // Replace with the path to your profile photo
    },
    {
        id: 1,
        name: 'John Doe',
        occupation: 'Software Engineer',
        description: 'Passionate about building great software.',
        rating: 4,
        photo: '/images/de.png', // Replace with the path to your profile photo
    },
    {
        id: 1,
        name: 'John Doe',
        occupation: 'Software Engineer',
        description: 'Passionate about building great software.',
        rating: 4,
        photo: '/images/de.png', // Replace with the path to your profile photo
    },
    {
        id: 1,
        name: 'John Doe',
        occupation: 'Software Engineer',
        description: 'Passionate about building great software.',
        rating: 4,
        photo: '/images/de.png', // Replace with the path to your profile photo
    },
    {
        id: 1,
        name: 'John Doe',
        occupation: 'Software Engineer',
        description: 'Passionate about building great software.',
        rating: 4,
        photo: '/images/de.png', // Replace with the path to your profile photo
    },
    {
        id: 1,
        name: 'John Doe',
        occupation: 'Software Engineer',
        description: 'Passionate about building great software.',
        rating: 4,
        photo: '/images/de.png', // Replace with the path to your profile photo
    },
    {
        id: 1,
        name: 'John Doe',
        occupation: 'Software Engineer',
        description: 'Passionate about building great software.',
        rating: 4,
        photo: '/images/de.png', // Replace with the path to your profile photo
    },


    // Add more profile objects as needed
];




export default function ClientSaid() {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        focusOnSelect: true,





        initialSlide: 0,
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

    return (
        <div className="sliderContainer m-5  slider-container ">
            <h3 className="text-center">our happy client</h3>
            <Slider {...settings}>
                {profiles.map(profile => (
                    <div className=" p-4">
                        <div key={profile.id} className="profileCard ">
                            <Image
                                className='profilePhoto'
                                layout="fixed"
                                src={profile.photo} alt={profile.name} width={100} height={100} />
                            <h2 className="profileName">{profile.name}</h2>
                            <p className="profileOccupation">{profile.occupation}</p>
                            <p className="profileDescription">{profile.description}</p>
                            <div className="rating">
                                {[...Array(profile.rating)].map((_, index) => (
                                    <span key={index} className="star">★</span>
                                ))}
                            </div>

                        </div>
                    </div>
                ))}
            </Slider>

        </div>

    )


}
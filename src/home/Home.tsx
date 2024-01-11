import './Home.css';
import { Carrossel } from '../components/carrosel/Carrossel';

export function Home() {
    const tracks = [
        {
            link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1754617560%3Fsecret_token%3Ds-j0ZyiyWqA0A&color=%231692bc&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        },
        {
            link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1754617413%3Fsecret_token%3Ds-JQtMYbDq6Cx&color=%231692bc&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        }
    ]

    const sets = [
        {
            link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1698170268&color=%231692bc&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        },
        {
            link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1695639132&color=%231692bc&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        },
        {
            link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1624264323&color=%231692bc&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        }
    ]

    const artist = [
        {
            name: 'Spinnenn',
            genre: 'Detroit Techno',
            profilePic: 'https://i1.sndcdn.com/avatars-SbO34mERUbdXPgJp-IDGy7Q-t500x500.jpg',
            soundcloudLink: 'https://soundcloud.com/djspinneb',
            instagramLink: 'https://www.instagram.com/__spinneb__/'
        }
    ];

    return (
        <main>
            <section className='section-one'>
                <section className='info-section'>
                    {artist.map(artist => (
                        <figure className='info-card'>
                            <div className='card'>
                                <img src={artist.profilePic} alt={artist.name} className='profilepic' />
                                <h2 className='info-tittle-3'>{artist.name}</h2>
                                <h3><strong>{artist.genre}</strong></h3>
                                <div className='info-buttons'>
                                    <button className='butGetCv'><a href={artist.soundcloudLink} target='_blank'>SoundCloud</a></button>
                                    <button className='butGetCv'><a href={artist.instagramLink} target='_blank'>Instagram</a></button>
                                </div>
                            </div>
                        </figure>
                    ))}
                </section>
            </section>
            <section className='setsection'>
                <div className='section-two'>
                    <h3 className='tittle-other-sections-1'>Áudios:</h3>
                </div>

                <h4 className='audios-tittle'>Sets:</h4>
                {sets.map(set => (
                    <figure className='audio-set'>
                        <iframe src={set.link}></iframe>
                    </figure>
                ))}

                <h4 className='audios-tittle'>Demos:</h4>
                {tracks.map(track => (
                    <figure className='audio-set'>
                        <iframe src={track.link}></iframe>
                    </figure>
                ))}

                <br />
            </section>
            <section className='carousel-color'>
                <div className='section-two'>
                    <h3 className='tittle-other-sections-1'>Eventos:</h3>
                </div>
                <br />
                <br />
                <br />
                <aside className='section-carosel'>
                    <div className='carrossel-container'>
                        <Carrossel />
                    </div>
                </aside>
            </section>
        </main>
    );
}

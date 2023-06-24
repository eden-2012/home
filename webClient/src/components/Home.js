import '../img/home-image-2.jpg'

function Home(props) {
    return (
        <div id="home" className='presentation fade-text'>
            <div className='presentation-text'>{props.content.presentationText}</div>
        </div>
    );
}

export default Home;
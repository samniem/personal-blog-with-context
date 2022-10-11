import alberta from './../images/alberta.jpg'
import austria from './../images/austria.jpg'
import canada from './../images/miami.jpg'

const HeaderFinnish = "Tervetuloa Henkilökohtaiseen Blogiini"
const HeaderEnglish = "Welcome To My Personal Blog"
const ParagraphFinnish = `Tulet lukuisia kiinnostavia palasia täällä, jotka kuvaavat kuinka elän elämääni.
Olipa kerran aika jolloin olin ujo ja varautunut henkilö. Halusin muuttaa persoonallisuuttani, joten päätin alkaa
kirjoittamaan blogia. Tämä mahtava blogi on seurausta kyseisestä päätöksestä. Nauttikaa.`
const ParagraphEnglish = `You will read about various interesting bits and pieces here describing how I live my life.
Once upon a time I was a very shy and reserved person. As I wanted to change 
that personality of mine I decided to start writing a blog.
This awesome blog is the result of that decision. Please enjoy.`

interface ImageObject {
    [key: string]: string
}

const imageTextDict: ImageObject = {
    alberta: "Memories of Alberta",
    austria: "Memories of Austria",
    miami: "Beach adventures in Miami"
}

interface ImgProps {
    name: string
    img: string
}

const ImageComponent = ({name, img}: ImgProps) => {
    //const imageSource = "./../images/"+name+".jpg"
    return <div>
        <img src={img}  alt="name" />
        <p>{imageTextDict[name]}</p>
    </div>
}

export const Home = () => {
    const language = "English"
    return <div>
        <h2>{HeaderEnglish}</h2>
        <p>{ParagraphEnglish}</p>
        <div>
            <ImageComponent name="austria" img={alberta}/>
            <ImageComponent name="alberta" img={austria}/>
            <ImageComponent name="miami" img={canada}/>
        </div>
    </div>
}
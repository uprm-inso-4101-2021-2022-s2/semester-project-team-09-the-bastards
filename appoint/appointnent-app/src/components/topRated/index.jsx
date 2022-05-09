import './index.css';
import {InfoCards} from '../infoCards';

// Shows medics with the best scores
// 
export const TopRated = () => {

    const importImg = (r) =>  {
        return r.keys().map(r);
      }
    const img = importImg(require.context('./testPhotos', false, /\.(png|jpe?g|svg)$/))

    const topRatedTest = [
        {
            name : "Sarah Figueroa",
            specialty : "Generalist",
            city : "Mayaguez",
            review : "I have visited Sarah many times and all of those time I felt she took care of me and told me what I needed to know. Really recommend her.",
            photo : "test1"
        },
        {
            name : "Miguel Lopez",
            specialty : "Physician",
            city : "Ponce",
            review : "Great at what he does, always shows that he cares about his patients.",
            photo : "test2"
        },
        {
            name : "Jean Negron",
            specialty : "Generalist",
            city : "San Juan",
            review : "It doesn't matter if you are a new patient of his or a frequent one he treats all patients with care.",
            photo : "test3"
        },
        {
            name : "Anthony Melendez",
            specialty : "Dentist",
            city : "Cabo Rojo",
            review : "The best dentist Cabo Rojo has hands down.",
            photo : "test4"
        },
        {
            name : "Axel Garcia",
            specialty : "Dentist",
            city : "Mayaguez",
            review : "One of the best dentists in the whole island.",
            photo : "test5"
        }
    ]

    return (
    <div className='wrapper'>
        <h3 className="top-rated-title">Find the top rated medics</h3>
        <div className='main-wrapper'>
            <div className="top-rated-main-container">
                {/*Dummy info cards*/}
                {
                    img.map ( (e) => {
                        topRatedTest.map( (j) => {
                            if (e.includes(j.photo)) {
                                j.profile = e
                            }
                        })
                    })
                }
                {
                    topRatedTest.map( (doctor) => (
                        InfoCards(doctor)
                    ))
                }
            </div>
        </div>
        <h3 className="top-rated-title">Find the best doctors:</h3>
        <p className="top-rated-paragraph">The best reviewed doctors by patients. Find out what they are saying about them and be sure to get your appointment!</p>
    </div>
    )
}
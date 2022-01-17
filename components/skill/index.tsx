import Marquee from "react-fast-marquee";

export default function Skill()
{
    const skills = [
        {"image": "/Skills/bootstrap.svg"},
        {"image": "/Skills/html.svg"},
        {"image": "/Skills/laravel.svg"},
        {"image": "/Skills/react.svg"},
        {"image": "/Skills/redux.svg"},
        {"image": "/Skills/mikrotik.svg"},
        {"image": "/Skills/nextjs.svg"},
        {"image": "/Skills/tailwind.svg"}
      ]
    return(
        <>
            <div className="container mx-auto">
                <div className="flex justify-center flex-col items-center h-screen px-3">
                    <p className="py-2">Hi, my name is Aditya Fitriansyah.</p>
                    <br />
                    <p className="text-justify">I am a fresh graduate from SMKN 2 Pandeglang who is looking for a job. I know how to build a website using a framework like React NextJS, using an API to communicate with the back end. Also I&apos;ve used Laravel but I didn&apos;t continue because Laravel projects are difficult to upload to the internet, difficult because of paid hosting. After graduating from high school, I got 2 certificates, a certificate of competency expertise and a certificate of English language TOEIC.</p>
                    <p className="my-8">Below are some of my abilities, although Im not too expert but I understand how to use this:</p>
                    <div className="py-3">    
                    <Marquee direction="right" speed={100}>
                        {skills.map((show, index)=>{
                        return(
                            <div key={index} className="px-3">
                            <img src={show.image} alt="skill" className="h-7 md:h-10"/>
                            </div>
                        )
                        })}
                    </Marquee>
                    </div>
                    <p className="mt-8">Email: aditdualapan@gmail.com</p>
                    <p>WhatsApp: +62895803231623</p>
                </div>

            </div>
        </>
    )
}
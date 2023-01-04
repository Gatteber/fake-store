import { IconContext } from "react-icons";
import { AiFillTwitterCircle, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
type Props = {}

export default function About({}: Props) {
  return (
    <div className="text-stone-700 dark:text-stone-50">
      <div className="container flex justify-center flex-col items-center gap-3">
        <div className="text-4xl text-center">Our Story</div>
        <div className="bg-red-900 w-20 h-20 rounded-full"></div>
        <div className="text-sm"><em>At F.A.K.E., you'll love what you find.</em></div>
      </div>
      <div className="pl-5">
        <div className="text-2xl mb-2">What is F.A.K.E?</div>
        <p className="text-lg mb-5">F.A.K.E was created in 2021 by the real estate mogul Bruce Wayne, a prominent figure in Gotham. He wanted to create a fashion marketplace where anyone, even criminals who may still be recovering from lorem ipsum disease. Over time, F.A.K.E. has become one of the most well-known fast fashion brands in Gotham. Afforadable prices and perfect style will always be our goals. Bruce Wayne, our Chief of Staff, has always stood up for those morals.</p>
        <div className="text-2xl mb-2">What's new at F.A.K.E?</div>
        <p className="text-lg mb-5">See our new collections at Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sunt culpa hic. Id quo facere, est voluptatum in sed rem recusandae suscipit quis alias perspiciatis impedit, beatae necessitatibus, perferendis sunt. </p>
        <div className="text-2xl mb-2">What materials do you use?</div>
        <p className="text-lg mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum vitae voluptate accusantium quos consectetur dolorem ducimus alias deserunt error incidunt inventore ea expedita, id delectus eligendi iste beatae! Neque, non! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laboriosam error porro tenetur iste neque explicabo, impedit quia provident, officiis quis enim aut libero eius a odit doloremque sunt quod!</p>
      </div>
      <div>
        <div className="pl-5 text-3xl">Get in touch.</div>
        <IconContext.Provider 
          value={{ size: "3em" }} 
          >
            <div className="flex pl-10">
                <a href="https://twitter.com/"
                >
                  <AiFillTwitterCircle />
                </a>
                <a href="https://facebook.com/"
                >
                  <AiFillFacebook />
                </a>
                <a href="https://instagram.com/"
                >
                  <AiFillInstagram />
                </a>
            </div>
        </IconContext.Provider>
      </div>
    </div>
  )
}
import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="bg-[var(--color-forest)] text-[var(--color-cream)] mt-16">

      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between  items-start sm:items-center gap-6">

        <div>
          <p className="text-lg font-bold ">
            Leaf &amp; Co.
          </p>

          <p className="text-sm text-[var(--color-sage)] mt-1">
            Plants for small spaces, delivered.
          </p>
        </div>

        <div className="text-sm text-[var(--color-sage)]">
          <p>Hyderabad, India</p>
          <p>ershayanarshi@gmail.com</p>
        </div>

      </div>

      <div className="text-center text-xs text-[var(--color-sage)] pb-6">
        © Shayan Arshi Leaf &amp; Co. — Not a real store.
      </div>


      <div className="flex items-center gap-4 justify-end -translate-y-5 mr-6">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"
               aria-label="Facebook"
               className="text-xl hover:text-white hover:-translate-y-1 transition-all duration-300">
              <FaFacebookF />
            </a>

            <a href="https://x.com/" target="_blank" rel="noreferrer"
              aria-label="X"
              className="text-xl hover:text-white hover:-translate-y-1 transition-all duration-300">
             <FaXTwitter />
           </a>
      </div>

      

      

    </footer>
  )
}

export default Footer
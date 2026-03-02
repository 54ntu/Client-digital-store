const Footer = () => {
  return (
    <div>
      <footer className="container mx-auto  px-3  mb-8 text-gray-800">
        <div className="flex mx-3 ">
          {/* first div  */}
          <div className="flex-1 px-1">
            <h2 className="text-lg font-semibold">About Us</h2>
            <p className="mt-2">
              Ridiculus mus mauris vitae ultricies leo integer malesuada nunc.
            </p>
          </div>
          {/* 2nd div  */}
          <div className="flex-1 px-3">
            <h2 className="text-lg font-semibold">Important Links</h2>
            <ul className="mt-4 leading-loose">
              <li>
                <a href="https://codebushi.com">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="https://codebushi.com">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* third div  */}
          <div className="flex-1 px-3">
            <h2 className="text-lg font-semibold">Social Media</h2>
            <ul className="mt-4 leading-loose">
              <li>
                <a href="https://dev.to/changoman">Dev.to</a>
              </li>
              <li>
                <a href="https://twitter.com/HuntaroSan">Twitter</a>
              </li>
              <li>
                <a href="https://github.com/codebushi/gatsby-starter-lander">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import webLogo from "../../assets/web-logo.png"
const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
        <aside>
    <img src={webLogo} alt="" />
          <p className="text-lg">
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-xl font-bold">Services</h6>
          <a className="link link-hover text-lg">Branding</a>
          <a className="link link-hover text-lg">Design</a>
          <a className="link link-hover text-lg">Marketing</a>
          <a className="link link-hover text-lg">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl font-bold">Company</h6>
          <a className="link link-hover text-lg">About us</a>
          <a className="link link-hover text-lg">Contact</a>
          <a className="link link-hover text-lg">Jobs</a>
          <a className="link link-hover text-lg">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl font-bold">Legal</h6>
          <a className="link link-hover text-lg">Terms of use</a>
          <a className="link link-hover text-lg">Privacy policy</a>
          <a className="link link-hover text-lg">Cookie policy</a>
        </nav>
      </footer>
    );
};

export default Footer;
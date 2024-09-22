import css from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div
        className={css.footerWrapper}
      >{`© 2024 < coded /> by Ajay Yadav • All Rights Reserved`}</div>
    </div>
  );
};

export default Footer;

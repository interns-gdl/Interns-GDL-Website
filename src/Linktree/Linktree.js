import logo from "../img/logo.png";
import patreon from "../icons/patreon.svg";
import youtube from "../icons/youtube.svg";
import instagram from "../icons/instagram.svg";
import twitter from "../icons/twitter.svg";
import discord from "../icons/discord.svg";
import linkedin from "../icons/linkedin.svg";
import github from "../icons/github.svg";
import envelope from "../icons/envelope.svg";

const socials = [
  {
    name: "Patreon",
    link: "https://www.patreon.com/internsgdl",
    logo: patreon,
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCOa_nhjqFzd-aJjNgULtbcg",
    logo: youtube,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/interns.gdl/",
    logo: instagram,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/internsgdl",
    logo: twitter,
  },
  {
    name: "Discord",
    link: "https://internsgdl.org/discord",
    logo: discord,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/company/interns-gdl/",
    logo: linkedin,
  },
  {
    name: "Github",
    link: "https://github.com/interns-gdl",
    logo: github,
  },
  {
    name: "Email",
    link: "mailto:contacto.internsgdl@gmail.com",
    logo: envelope,
  },
];

function Linktree() {
  return (
    <div className="row justify-content-center p-4">
      <div className="d-flex flex-column justify-content-center col-sm-12 col-md-10 col-lg-7 col-xl-4">
        <div className="container-fluid d-flex justify-content-center">
          <img
            className="rounded-circle m-4"
            src={logo}
            alt="Logo Interns GDL"
            width={100}
            height={100}
          />
        </div>
        <div className="container-fluid d-flex justify-content-center">
          <h3 className="text-brand">Interns GDL</h3>
        </div>
        {socials.map((social, index) => (
          <a
            href={social.link}
            target="_blank"
            rel="noreferrer"
            key={index}
            className="btn btn-indigo rounded-0 m-1"
          >
            <img
              className="me-2"
              src={social.logo}
              alt={`${social.name}'s icon`}
              width={20}
              height={20}
            />
            {social.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Linktree;

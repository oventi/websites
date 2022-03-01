import danta from 'danta'
import {devicon_link} from 'danta-techie-one-page'

export async function get_data(stage) {
  return {
    lang: 'en',
    meta_title: 'Andrés Proaño Valencia - Social Impact Tech, Migrant Help',
    avatar_url:
      'https://gravatar.com/avatar/03d39b671d0f4fd5b3dcb28bf4676760?s=400',
    title: '🧑🏽‍💻 Kia ora, I\'m Andrés Proaño Valencia (he/him)',
    subtitle: 'Applying my skills to make a positive impact in the world',
    sections: [
      {
        id: 'about',
        title: 'About me',
        content: `
          <ul>
            <li>Tauiwi Latino techie living in Te Whanganui-a-Tara, Aotearoa (Wellington, New Zealand).</li>
            <li>
              Tech Lead at <a href="https://actionstation.org.nz/" target="external">ActionStation</a>,
              Coordinator at <a href="https://christchurchcall.network/" target="external">CCAN</a>,
              Trustee at <a href="https://migrantsaotearoa.org.nz/" target="external">Migrants Aotearoa</a>.
            </li>
            <li>Looking to collaborate on <strong>social impact projects</strong> and <strong>migrant support & rights</strong>.</li>
            <li>I play guitar and percussion, speak Spanish, and like to snorkel, scuba dive and paddleboard.</li>
          </ul>
        `
      },
      {
        id: 'connect',
        title: 'Connect with me',
        content: [
          devicon_link(
            'devicon-twitter-original',
            'https://twitter.com/oventi_',
            'twitter'
          ),
          devicon_link(
            'devicon-github-original',
            'https://github.com/oventi',
            'github'
          ),
          devicon_link(
            'devicon-linkedin-plain',
            'https://linkedin.com/in/oventi',
            'linkedin'
          )
        ].join('\n')
      },
      {
        id: 'skills',
        title: 'My tech skills',
        content: [
          devicon_link(
            'devicon-amazonwebservices-plain-wordmark',
            'https://aws.amazon.com',
            'aws'
          ),
          devicon_link(
            'devicon-atom-original-wordmark',
            'https://atom.io',
            'atom'
          ),
          devicon_link('devicon-babel-plain', 'https://babeljs.io', 'babel'),
          devicon_link(
            'devicon-bash-plain',
            'https://www.gnu.org/software/bash',
            'bash'
          ),
          devicon_link(
            'devicon-bootstrap-plain-wordmark',
            'https://getbootstrap.com',
            'bootstrap'
          ),
          devicon_link(
            'devicon-css3-plain-wordmark',
            'https://developer.mozilla.org/en-US/docs/Web/CSS',
            'css'
          ),
          devicon_link(
            'devicon-docker-plain-wordmark',
            'https://www.docker.com',
            'docker'
          ),
          devicon_link(
            'devicon-express-original-wordmark',
            'http://expressjs.com',
            'express'
          ),
          devicon_link(
            'devicon-firefox-plain-wordmark',
            'https://www.mozilla.org/en-GB/firefox',
            'firefox'
          ),
          devicon_link(
            'devicon-git-plain-wordmark',
            'https://git-scm.com',
            'git'
          ),
          devicon_link(
            'devicon-heroku-plain-wordmark',
            'https://www.heroku.com',
            'heroku'
          ),
          devicon_link(
            'devicon-html5-plain-wordmark',
            'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
            'html5'
          ),
          devicon_link(
            'devicon-javascript-plain',
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            'javascript'
          ),
          devicon_link(
            'devicon-linux-plain',
            'https://www.linux.org',
            'gnu/linux'
          ),
          devicon_link(
            'devicon-mongodb-plain-wordmark',
            'https://www.mongodb.com',
            'mongodb'
          ),
          devicon_link(
            'devicon-mysql-plain-wordmark',
            'https://www.mysql.com',
            'mysql'
          ),
          devicon_link(
            'devicon-nginx-original',
            'https://www.nginx.com',
            'nginx'
          ),
          devicon_link(
            'devicon-nodejs-plain-wordmark',
            'https://nodejs.org',
            'nodejs'
          ),
          devicon_link(
            'devicon-postgresql-plain-wordmark',
            'https://www.postgresql.org',
            'postgresql'
          ),
          devicon_link(
            'devicon-redis-plain-wordmark',
            'https://redis.io',
            'redis'
          ),
          devicon_link(
            'devicon-sass-original',
            'https://sass-lang.com',
            'sass'
          ),
          devicon_link(
            'devicon-sketch-line-wordmark',
            'https://www.sketch.com',
            'sketch'
          ),
          devicon_link(
            'devicon-ubuntu-plain-wordmark',
            'https://ubuntu.com',
            'ubuntu'
          ),
          devicon_link(
            'devicon-webpack-plain-wordmark',
            'https://webpack.js.org',
            'webpack'
          ),
          devicon_link(
            'devicon-yarn-plain-wordmark',
            'https://yarnpkg.com',
            'yarn'
          )
        ].join('\n')
      }
    ],
    footer: '© 2008-2021 Andrés Proaño Valencia. All rights reserved. 🦜'
  }
}
